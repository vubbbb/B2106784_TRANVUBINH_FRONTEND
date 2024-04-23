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
      meta: { requiresAuth: true },
      children: [
        {
          path: 'inventory',
          name: 'inventory',
          component: () => import('../views/Inventory.vue'),
          children: [
            {
              path: 'books',
              name: 'books',
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
          component: () => import('../views/Order.vue')
        },
        {
          path: 'requests',
          name: 'requests',
          component: () => import('../views/Request.vue')
        },
        {
          path: 'customers',
          name: 'customers',
          component: () => import('../views/Customers.vue')
        },
        {
          path: 'publishers',
          name: 'publishers',
          component: () => import('../views/Publishers.vue'),
        },
        {
          path: 'publishers/addform',
          component: () => import('../components/AddPublisherForm.vue')
        },
        {
          path: 'publishers/update/:id',
          component: () => import('../components/UpdatePublisherForm.vue')
        }
      ]
    }

  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('token')) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      next(); 
    }
  } else {
    next(); 
  }
});

export default router