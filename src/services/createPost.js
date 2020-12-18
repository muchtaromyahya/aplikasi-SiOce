import BaseService from './baseService';
import API from '../config/rest';

const createpost = () => {
  return BaseService.post(API.LOGIN, {});
};

export default { createpost };
