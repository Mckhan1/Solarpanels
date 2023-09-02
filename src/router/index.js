import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import AllproductView from '../views/AllproductView.vue'
import PaymentView from '../views/PaymentView.vue'
import EducationView from '../views/EducationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/allproduct',
      name: 'allproducts',
      component: AllproductView
    },
    {
      path: '/product/:id',
      name: 'product',
      component: PaymentView
    },
    {
      path: '/education',
      name: 'education',
      component: EducationView
    },

    
  ]
})

export default router
