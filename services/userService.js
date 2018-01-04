import data from '../seed/data.json';
import _ from 'lodash';

export const findUserById = (id) => {
  const user = data.user;
  return _.filter(user, {'id': id});
}
