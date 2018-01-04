import data from '../seed/data.json';
import _ from 'lodash';


export const findAllUser = () => {
  return data.user;
}

export const findUserById = (id) => {
  const user = data.user;
  return _.filter(user, {'id': id});
}

export const removeUserById = (id) => {
  const user = data.user;
  return _.reject(user, {'id': id});
}
