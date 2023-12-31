import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserList from '../components/UserList.vue'
import UserDetails from '../components/UserDetails.vue'
import AddUser from '../components/AddUser.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/users',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/users/:userId',
    name: 'UserDetails',
    component: UserDetails
  },
  {
    path: '/users/add',
    name: 'AddUser',
    component: AddUser
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
