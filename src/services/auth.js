import BaseService from './baseService';
import API from '../config/rest';

const login = (email, password) => {
  return BaseService.post(API.LOGIN, { email, password });
};
const register = (name, email, birthdate, sex, phone, status, password) => {
  return BaseService.post(API.REGISTER, {
    name,
    email,
    birthdate,
    sex,
    phone,
    status,
    password,
  });
};

export default { login, register };
