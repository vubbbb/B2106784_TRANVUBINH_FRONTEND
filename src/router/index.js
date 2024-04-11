import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: () => import('../views/Inventory.vue'),
      children: [
        {
          path: 'books',
          component: () => import('../components/BooksInventoryList.vue')
        },
        {
          path: 'addbook',
          component: () => import('../components/AddBookForm.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('../views/Orders.vue')
    },
    {
      path: '/customers',
      name: 'customers',
      component: () => import('../views/Customers.vue')
    }
  ]
})

export default router