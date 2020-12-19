import BaseService from './baseService';
import API from '../config/rest';

const getUser = (id) => {
  return BaseService.get(API.GETUSER(id));
};
const updateUser = (id) => {
  return BaseService.PUT(API.GETUSER(id));
};

export default { getUser, updateUser };
