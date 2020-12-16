// import { Home } from '../pages';

import { ListClass, CreateClass, ClassRoom } from '../pages';

const routes = [
  // {
  //   path: '/',
  //   component: Home,
  //   isPublic: true,
  // },
  {
    path: '/listclass',
    component: ListClass,
    isPublic: true,
  },
  {
    path: '/classroom',
    component: ClassRoom,
    isPublic: true,
  },
  {
    path: '/createclass',
    component: CreateClass,
    isPublic: true,
  },
];

export default routes;
