import BaseService from './baseService';
import API from '../config/rest';

const post = () => {
  return BaseService.get(API.LOGIN, {});
};

export default { post };
