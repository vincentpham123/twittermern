var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(' test test Respond with a user resource');
});

module.exports = router;
