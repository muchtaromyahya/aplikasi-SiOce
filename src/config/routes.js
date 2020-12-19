import {
  Home,
  Classes,
  Comments,
  Posts,
  Tasks,
  LoginPage,
  RegisterModal,
  AccountPage,
} from '../pages';

const routes = [
  {
    path: '/register',
    component: RegisterModal,
    isPublic: true,
  },
  {
    path: '/login',
    component: LoginPage,
    isPublic: true,
  },
  {
    path: '/account',
    component: AccountPage,
    isPublic: false,
  },
  {
    path: '/tasks',
    component: Tasks,
    isPublic: false,
  },
  {
    path: '/post',
    component: Posts,
    isPublic: false,
  },
  {
    path: '/comments',
    component: Comments,
    isPublic: false,
  },
  {
    path: '/classes',
    component: Classes,
    isPublic: false,
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
