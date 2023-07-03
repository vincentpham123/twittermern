const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const {secretOrKey} = require('./keys');
// need to import the relevant files
//passport will be used to handled the authentication 
//passport-local handled just username and password combination
//username could be the username or email from the model 



//brcrpy allows us to unhash the password to check

// need the model for the schema

passport.use(new LocalStrategy({
    session: false,
    usernameField: 'email',
    passwordField: 'password',
  }, async function (email, password, done) {
    const user = await User.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.hashedPassword, (err, isMatch) => {
        if (err || !isMatch) done(null, false);
        else done(null, user);
      });
    } else
      done(null, false);
  }));

  exports.loginUser = async function(user) {
    const userInfo = {
      _id: user._id,
      username: user.username,
      email: user.email
    };
    const token = await jwt.sign(
      userInfo, // payload
      secretOrKey, // sign with secret key
      { expiresIn: 3600 } // tell the key to expire in one hour
    );
    return {
      user: userInfo,
      token
    };
  };
  