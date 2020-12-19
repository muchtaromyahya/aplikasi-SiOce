import BaseService from './baseService';
import API from '../config/rest';

const CommentsService = () => {
  return BaseService.get(API.COMMENT, {});
};

export default { CommentsService };
