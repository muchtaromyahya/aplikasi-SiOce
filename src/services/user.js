import BaseService from './baseService';
import API from '../config/rest';

const getUser = (id) => {
  return BaseService.get(API.GETUSER(id));
};
const updateUser = (id, name, email, birthdate, sex, phone, statusType) => {
  console.log(name, email, birthdate, sex, phone, statusType);
  return BaseService.put(API.GETUSER(id), {
    name,
    email,
    birthdate,
    sex,
    phone,
    statusType,
  });
};

export default { getUser, updateUser };
