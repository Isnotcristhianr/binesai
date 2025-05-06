import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import HomeView from '../views/HomeView.vue'
import AuspiciantesView from '../views/Auspiciantes.vue'
import ContactoView from '../views/ContactoView.vue'
import ProgramacionView from '../views/ProgramacionView.vue'
//fuera de pago
import PagarView from '../views/Pagar.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  /*   {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        ogTitle: "Bienvenido a la Bienal Nacional de Escultura San Antonio de Ibarra",
        title: "Bienvenido a la Bienal Nacional de Escultura San Antonio de Ibarra",
      },
    }, */
    //fuera de pago
    {
      path: '/',
      name: 'home',
      component: PagarView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        ogTitle: "Acerca de la Bienal Nacional de Escultura San Antonio de Ibarra",
        title: "Acerca de la Bienal Nacional de Escultura San Antonio de Ibarra",
      },
    },
    /* Programacion */
    {
      path: '/programacion',
      name: 'programacion',
      component: ProgramacionView,
      meta: {
        ogTitle: "Programación de la Bienal Nacional de Escultura San Antonio de Ibarra",
        title: "Programación de la Bienal Nacional de Escultura San Antonio de Ibarra",
      },
    },
    /* Contacto */
    {
      path: '/contacto',
      name: 'contacto',
      component: ContactoView,
      meta: {
        ogTitle: "Contacto con la Bienal Nacional de Escultura San Antonio de Ibarra",
        title: "Contacto con la Bienal Nacional de Escultura San Antonio de Ibarra",
      },
    },
    /* Auspiciantes */
    {
      path: '/auspiciantes',
      name: 'auspiciantes',
      component: AuspiciantesView,
      meta: {
        ogTitle: "Auspiciantes de la Bienal Nacional de Escultura San Antonio de Ibarra",
        title: "Auspiciantes de la Bienal Nacional de Escultura San Antonio de Ibarra",
      },
    },
    /* Form */
    {
      path: '/inscripcion',
      name: 'inscripcion',
      component: defineAsyncComponent(() => import('../views/FormView.vue')),
      meta: {
        ogTitle: "Inscripción a la Bienal Nacional de Escultura San Antonio de Ibarra",
        title: "Inscripción a la Bienal Nacional de Escultura San Antonio de Ibarra",
      },
    },

  ]
})

export default router
