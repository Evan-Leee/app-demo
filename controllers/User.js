import Base from './Base';
import { findUserById } from '../services/userService';

export default class User extends Base{
  constructor(req, res) {
    super(req, res);
  }

  findUser() {
    const id = this.req.params.id;
    this.res.send(findUserById(id));
  }

}
