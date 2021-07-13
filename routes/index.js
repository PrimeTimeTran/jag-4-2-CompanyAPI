var express = require('express');
var router = express.Router();

// Sequester route/handler/logic

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
