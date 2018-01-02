const express = require('express');
const router = express.Router();
import Page from '../../controllers/Page';

router.get('/', (req, res, next) => {
  res.render('user', new Page('User'));
});

module.exports = router;
