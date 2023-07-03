//need to import mongoose 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// need to set up the schema
const userSchema = new Schema({
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    hashedPassword: {
      type: String,
      required: true
    }
  }, {
    timestamps: true
  });

  // timestamps tells mongoose to add and maintain the createdat and updatedat field on the user model

  module.exports = mongoose.model('User',userSchema);