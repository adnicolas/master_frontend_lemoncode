import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../components/Home.vue'

const Detail = () => import('../components/Detail.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
    name: 'Home',
  },
  {
    path: '/detail/:id',
    component: () => import('../components/Detail.vue'),
    name: 'Detail',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router