const express = require('express');
const router = express.Router();
import Page from '../../controllers/Page';

router.get('/', function(req, res, next) {
  res.render('index', new Page('Home'));
});

module.exports = router;
