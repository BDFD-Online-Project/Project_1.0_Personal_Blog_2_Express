//Add user Route Address from app.js/server.js
//router address /api/user
var express = require('express');
var router = express.Router();

//router address /api/user/login
//descriptions: list out all user name list
//comments:
router.post('/login', function(req, res, next) {
  const { username, city } = req.body;
  console.log('req.body', req.body);

  res.json({
    errno: 0,
    data: { username, city }
  });
});

module.exports = router;
