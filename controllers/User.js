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
    console.log('============')
    const id = this.req.body.id;
    console.log(id)
    this.res.send(removeUserById(id));
  }

}
