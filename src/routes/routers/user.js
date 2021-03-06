import User from '../../controllers/User';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  new User(req, res).findAll();
});

router.get('/:id', (req, res, next) => {
  new User(req, res).findUser();
});

router.post('/', (req, res, next) => {
  new User(req, res).removeUser();
});

export default router;
