import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ShortsView from '@/views/ShortsView.vue'
import SubscriptionsView from '@/views/SubscriptionsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/trends',
      name: 'trends',
      component: ShortsView
    },
    {
      path: '/subs',
      name: 'subs',
      component: SubscriptionsView
    }
  ]
})

export default router
