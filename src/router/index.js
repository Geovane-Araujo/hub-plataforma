import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import beforeEach from './beforeEach'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'hubLogin',
    component: () => import('../security/HubLogin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(beforeEach)

export default router
