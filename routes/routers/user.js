const express = require('express');
const router = express.Router();
import User from '../../controllers/User';

router.get('/:id', (req, res, next) => {
  new User(req, res).findUser()
});

module.exports = router;