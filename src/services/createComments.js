import BaseService from './baseService';
import API from '../config/rest';

const CreateComments = (postingId, userId, comments) => {
  return BaseService.post(API.COMMENT, { postingId, userId, comments });
};

export default { CreateComments };
