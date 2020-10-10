import Home from '../pages/Home'
import Login from '../pages/Login'
const routes = [
  { path: '/home', component: Home },
  {
    path: '/',
    redirect: '/home',
    meta: {
      isHide: true,
    },
  },
  {
    path: '/login',
    component: Login,
  },
]
export default routes
