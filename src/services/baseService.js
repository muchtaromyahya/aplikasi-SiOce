import axios from 'axios';
// import { getCookie } from '../utils/cookie';

// function getTokenAuth() {
//   if (getCookie('token') && getCookie('userData')) {
//     return JSON.parse(getCookie('token')).value;
//   }
//   return '';
// }

const createAxiosInterceptor = (url) => {
  const axiosCreate = axios.create({
    baseURL: url,
    headers: {
      Accept: 'application/json',
      'Accept-Language': 'es',
      'Content-Type': 'application/json',
      Authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFuc29uIHNpdHVtb3JhbmciLCJpZCI6IjVmZGFkZDBhYmRjMDcwM2ExNGYzMTM4OSIsImlhdCI6MTYwODMwOTc3OSwiZXhwIjoxNjA4MzI3Nzc5fQ.eOxH98FcXzYNmNb2zqPfLnm9THzCZFJUgUL-S1Wu-1Q',
    },
  });
  axiosCreate.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      if (error.response.status === 401) {
        window.location.replace('/');
      }
      return Promise.reject(error);
    }
  );

  return axiosCreate;
};

const BaseService = createAxiosInterceptor(process.env.REACT_APP_API);

export default BaseService;
