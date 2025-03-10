import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

import TableView from '@/views/TableView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: AboutView
 
    },
    {
      path: '/table',
      name: 'table',
      component: TableView
 
    },
  ],
})

export default router
