import BaseService from './baseService';
import API from '../config/rest';

const GetUserComments = (id) => {
  return BaseService.get(API.GETUSER, { id });
};

export default { GetUserComments };
