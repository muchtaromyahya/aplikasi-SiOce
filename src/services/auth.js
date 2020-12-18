import BaseService from './baseService';
import API from '../config/rest';

const login = (username, password) => {
  return BaseService.post(API.LOGIN, { username, password });
};

export default { login };
