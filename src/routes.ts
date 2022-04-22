import Chart from './pages/chart';
import Login from './pages/login';
import Register from './pages/register';
export const routers = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/chart',
    component: Chart,
  },
];
