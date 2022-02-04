import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Admin from '../components/Admin.vue'
import Timeup from '../views/Endtime.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register/:id',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path:'/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {path:'/profile', name:'Profile', component:Profile},
  { path:'/timeup', name:"Timeup", component:Timeup },

  // admin page 
  {path:'/admin', name:'Admin', component:Admin}
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
