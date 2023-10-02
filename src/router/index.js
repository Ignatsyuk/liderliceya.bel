import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/PageHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/program',
      name: 'program',
      component: () => import('@/pages/PageProgram.vue')
    },

    {
      path: '/win',
      name: 'win',
      component: () => import('@/pages/PageWin.vue')
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  },
})

export default router
