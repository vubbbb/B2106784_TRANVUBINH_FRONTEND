import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPage.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/MainLayout.vue'),
      children: [
        {
          path: 'inventory',
          name: 'inventory',
          component: () => import('../views/Inventory.vue'),
          children: [
            {
              path: 'books',
              component: () => import('../components/BooksList.vue'),
            },
            {
              path: 'addbook',
              component: () => import('../components/AddBookForm.vue')
            },
            {
              path: 'updatebook/:id',
              component: () => import('../components/UpdateBookForm.vue')
            }
          ]
        },
        {
          path: 'orders',
          name: 'orders',
          component: () => import('../views/Orders.vue')
        },
        {
          path: 'customers',
          name: 'customers',
          component: () => import('../views/Customers.vue')
        }
      ]
    }

  ]
})

export default router