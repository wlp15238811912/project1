import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Text from '../views/text.vue'
import Text1 from '../views/text1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/text',
    name: 'text',
    component: Text
  },
  {
    path: '/text1',
    name: 'tex1',
    component: Text1
  },
]

const router = new VueRouter({
  routes
})

export default router
