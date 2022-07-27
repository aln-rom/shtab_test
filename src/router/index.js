import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import("@/views/Login"),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import("@/views/Home"),
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('user-token')) {
        next('/')
      } else {
        next(true)
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
