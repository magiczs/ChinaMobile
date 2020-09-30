import Home from '../pages/Home'
const routes = [
  { path: '/home', component: Home },
  {
    path: '/',
    redirect: '/home',
  },
]
export default routes
