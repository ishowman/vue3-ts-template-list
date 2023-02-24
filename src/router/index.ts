import { createRouter, createWebHistory } from 'vue-router';
import { StorageKeys } from '@/constants';

import { routes } from './routerMap';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
