import Login from '../pages/Login'
import Home from '@/pages/Home'
export default [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    component: Login,
  },
]
