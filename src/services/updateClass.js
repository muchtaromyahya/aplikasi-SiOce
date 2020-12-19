import BaseService from './baseService';
import API from '../config/rest';

const updateClass = (classname, description) => {
  return BaseService.put(API.UPDATECLASSBYID, { classname, description });
};

export default { updateClass };
