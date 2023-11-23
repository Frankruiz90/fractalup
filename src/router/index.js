import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add-image',
    name: 'add-image',
    component: () => import( '../views/AddImage.vue')
  },
  {
    path: '/change-info',
    name: 'change-info',
    component: () => import( '../views/ChangeInfo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
