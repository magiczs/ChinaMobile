import Home from '../pages/Home'
import Search from '../pages/Search'
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
  {
    path: '/search/:keyword?',
    name: 'search',
    component: Search,
  },
]
export default routes
