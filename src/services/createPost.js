import BaseService from './baseService';
import API from '../config/rest';

const createpost = (classId, title, description) => {
  return BaseService.post(API.POST, { classId, title, description });
};

export default { createpost };
