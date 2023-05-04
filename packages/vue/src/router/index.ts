import { createRouter, createWebHistory } from 'vue-router';

export const constantRoutes = [
  {
    name: 'root',
    path: '/',
    children: [
      {
        path: 'index',
        name: 'workplace',
        component: () => import('@/pages/index.vue'),
        meta: {
          locale: '工作台',
          requiresAuth: true,
          icon: 'icon-dashboard',
          roles: ['*'],
          order: 0,
        },
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: () => import('@/pages/notfound.vue'),
      },
    ],
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
