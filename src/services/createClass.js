import BaseService from './baseService';
import API from '../config/rest';

const createclass = (classname, description, maxstudent) => {
  return BaseService.post(API.CLASS, { classname, description, maxstudent });
};

export default { createclass };
