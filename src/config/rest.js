export default {
  LOGIN: '/login',
  REGISTER: '/user/register',
  CLASS: '/class',
  COMMENT: '/comment',
  ASSIGNMENT: '/assignments',
  UPLOAD: 'uploads',
    GETUSER: (id) => {
    return `/edit/${id}`;
  },
};
