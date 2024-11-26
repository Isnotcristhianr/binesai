import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuspiciantesView from '../views/Auspiciantes.vue'
import ContactoView from '../views/ContactoView.vue'
import ProgramacionView from '../views/ProgramacionView.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    /* Programacion */
    {
      path: '/programacion',
      name: 'programacion',
      component: ProgramacionView
    },
    /* Contacto */
    {
      path: '/contacto',
      name: 'contacto',
      component: ContactoView
    },
    /* Auspiciantes */
    {
      path: '/auspiciantes',
      name: 'auspiciantes',
      component: AuspiciantesView
    },

  ]
})

export default router
