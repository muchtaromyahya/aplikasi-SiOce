import BaseService from './baseService';
import API from '../config/rest';
// const testing = (limit, offset, searchKey) => {
//   return BaseService.get(API.PRODUCT(limit, offset, searchKey));
// };

const CreateAssignment = (
  name,
  description,
  expired,
  fileAssignments,
  classId
) => {
  return BaseService.post(API.ASSIGNMENT, {
    name,
    description,
    expired,
    fileAssignments,
    classId,
  });
};

const GetAssignment = () => {
  return BaseService.get(API.ASSIGNMENT);
};

const PutAssignment = (
  name,
  description,
  expired,
  fileAssignments,
  classId
) => {
  return BaseService.put(API.ASSIGNMENT, {
    name,
    description,
    expired,
    fileAssignments,
    classId,
  });
};

const DeleteAssignment = (id) => {
  return BaseService.delete(`${API.ASSIGNMENT}/${id}`);
};

export default {
  CreateAssignment,
  GetAssignment,
  PutAssignment,
  DeleteAssignment,
};
