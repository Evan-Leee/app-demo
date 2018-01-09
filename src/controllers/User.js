import { findUserById, removeUserById, findAllUser } from '../services/userService';

export const findAll = (req, res, next) => {
  res.send(findAllUser());
};

export const findUser = (req, res, next) => {
  const id = this.req.params.id;
  res.send(findUserById(id));
};

export const removeUser = (req, res, next) => {
  const id = this.req.body.id;
  res.send(removeUserById(id));
};
