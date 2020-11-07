import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/works/',
    name: 'Works',
    component: () => import('../views/Works.vue'),
  },
  {
    path: '/works/:title',
    name: 'Work',
    component: () => import('../views/Work.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/thoughts',
    name: 'thoughts',
    component: () => import('../views/Thoughts.vue'),
  },
  {
    path: '/thoughts/:title',
    name: 'thought',
    component: () => import('../views/Thought.vue'),
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue'),
  },
  {
    name: '404',
    path: '/404',
    component: () => import('../views/Notfound.vue'),
  },
  {
    path: '*',
    redirect: '404',
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
