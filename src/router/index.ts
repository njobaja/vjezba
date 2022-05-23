import Vendors from '@/views/Vendors.vue'
import VendorsReports from '@/views/VendorsReports.vue'
import AssetsReports from '@/views/AssetsReports.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/placeholder1',
      name: 'placeholder1',
      component: () => import('../views/PlaceHolder1.vue')
    },
    {
      path: '/Vendors',
      name: 'Vendors',
      component: Vendors

    },
    {
      path: '/VendorsReports',
      name: 'VendorsReports',
      component: VendorsReports

    },
    {
      path: '/AssetsReports',
      name: 'AssetsReportsVue',
      component: AssetsReports

    }
  ]
})

export default router

