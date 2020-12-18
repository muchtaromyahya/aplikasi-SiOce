import BaseService from './baseService';
import API from '../config/rest';

const createclass = () => {
  return BaseService.post(API.LOGIN, {});
};

export default { createclass };
