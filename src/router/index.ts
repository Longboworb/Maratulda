import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '../views/Home.vue';
import Smials from '../views/Smials.vue';
import Mentor from '../views/Mentor.vue';
import Events from '../views/Events.vue';
import Comisiones from '../views/Comisiones.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/smials',
    name: 'Smials',
    component: Smials,
  },
  {
    path: '/Mentor',
    name: 'Mentor',
    component: Mentor,
  },
  {
    path: '/Events',
    name: 'Events',
    component: Events,
  },{
    path: '/Comisiones',
    name: 'Comisiones',
    component: Comisiones,
  },

  
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
