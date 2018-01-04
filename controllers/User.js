import Base from './Base';
import { findUserById, removeUserById, findAllUser } from '../services/userService';

export default class User extends Base{
  constructor(req, res) {
    super(req, res);
  }

  findAll() {
    this.res.send(findAllUser())
  }

  findUser() {
    const id = this.req.params.id;
    this.res.send(findUserById(id));
  }

  removeUser() {
    const id = this.req.params.id;
    this.res.send(removeUserById(id));
  }

}
