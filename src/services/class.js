import BaseService from './baseService';
import API from '../config/rest';

const classes = () => {
  return BaseService.get(API.LOGIN, {});
};

export default { classes };
