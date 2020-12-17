import { Home, Classes, Comments, Posts, Tasks } from '../pages';

const routes = [
  {
    path: '/tasks',
    component: Tasks,
    isPublic: true,
  },
  {
    path: '/post',
    component: Posts,
    isPublic: true,
  },
  {
    path: '/comments',
    component: Comments,
    isPublic: true,
  },
  {
    path: '/classes',
    component: Classes,
    isPublic: true,
  },
  {
    path: '/home',
    component: Home,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
