//Add blog Route Address from app.js/server.js
//router address /api/blog
var express = require('express');
var router = express.Router();

//router address /api/blog/list
//descriptions: list out all blog name list
//comments:
router.get('/list', function(req, res, next) {
  res.json({
    errno: 0,
    data: [1, 2, 3]
  });
});

//router address /api/blog/detail
//descriptions: lshow blog detail page
//comments:
router.get('/detail', function(req, res, next) {
  res.json({
    errno: 0,
    data: 'ok'
  });
});

module.exports = router;
