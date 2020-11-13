import Vue from 'vue';
import VueRouter from 'vue-router';

import { isLogged } from '../utils/auth';

Vue.use(VueRouter);

function authCheck(to, from, next) {
  if (!isLogged()) {
    next({
      path: '/notauthorized',
    });
  } else {
    next();
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    beforeEnter: authCheck,
    component: () => import('../views/Dashboard.vue'),
  },
  {
    path: '/callback',
    name: 'Callback',
    component: () => import('../views/Callback.vue'),
  },
  {
    path: '/notauthorized',
    name: 'NotAuthorized',
    component: () => import('../views/NotAuthorized.vue'),
  },
  {
    path: '*',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
