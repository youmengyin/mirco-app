import { createRouter, createWebHistory } from 'vue-router'
import VueApp from '../views/vueApp.vue'
import ReactApp from '../views/reactApp.vue'
import { config } from '@/appConfig'
const routes = [
  {
    path: '/',
    name: 'home',
    redirect: config['vueApp'].baseroute
  },
  {
    // vue-router@4.x path的写法为：'/my-page/:page*'
    path: '/vue/:page*',
    name: 'vueApp',
    component: VueApp
  },
  {
    path: '/react/:page*',
    name: 'reactApp',
    component: ReactApp
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
