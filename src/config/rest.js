export default {
  LOGIN: '/login',
  REGISTER: '/user/register',
  POST: '/post',
  CLASS: '/class',
  COMMENT: '/comment',
  ASSIGNMENT: '/assignments',
  UPLOAD: 'uploads',
  UPDATECLASSBYID: (id) => {
    return `/class/${id}`;
  },
};
