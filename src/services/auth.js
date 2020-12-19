import BaseService from './baseService';
import API from '../config/rest';

const login = (email, password) => {
  alert(JSON.stringify);
  return BaseService.post(API.LOGIN, { email, password });
};
const register = (name, email, birthdate, sex, phone, statusType, password) => {
  return BaseService.post(API.REGISTER, {
    name,
    email,
    birthdate,
    sex,
    phone,
    statusType,
    password,
  });
};

export default { login, register };
