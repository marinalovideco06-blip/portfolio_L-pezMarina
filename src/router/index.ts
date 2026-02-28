import Contactos from "@/pages/contactos/Contactos.vue";
import Home from "@/pages/home/Home.vue";
import Info from "@/pages/informacion/Info.vue";
import Trabajos from "@/pages/trabajos/Trabajos.vue";
import { createRouter, createWebHashHistory } from "vue-router";



export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/info',
      name: 'informacion',
      component: Info
    },

    {
      path: '/trabajos',
      name: 'trabajos',
      component: Trabajos
    },

     {
      path: '/contactos',
      name: 'contactos',
      component: Contactos
    },

    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})