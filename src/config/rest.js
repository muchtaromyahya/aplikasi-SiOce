export default {
  LOGIN: '/user/login',
  CLASS: '/class',
  POST: '/post',
  UPDATECLASSBYID: (id) => {
    return `/class/${id}`;
  },
};
