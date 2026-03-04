import Contactos from "@/pages/contactos/Contactos.vue";
import Home from "@/pages/home/Home.vue";
import Aplicaciones from "@/pages/informacion/Aplicaciones.vue";
import Coleccion from "@/pages/informacion/Coleccion.vue";
import Componente from "@/pages/informacion/Componente.vue";
import Detalles from "@/pages/informacion/Detalles.vue";
import Info from "@/pages/informacion/Info.vue";
import Trabajos from "@/pages/trabajos/Trabajos.vue";
import SectionView from "@/views/SectionView.vue";
import WorkDetail from "@/views/WorkDetail.vue";
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
      path: '/trabajos',
      name: 'trabajos',
      component: Trabajos
    },
     
    {
    path : "/info",
    children: [
        {
         path: '',
         name: 'informacion',
         component: Info,
        
        },
        {
          path: 'aplicaciones',
          component: Aplicaciones,
          children: [
           {
            path:'',
            name: 'informacion-aplicaciones',
            component: Componente
           }

          ]
        },
        {
            path: 'gallery',
            component: Aplicaciones,
            children: [
                {
                  path:'',
                  name: 'informacion-gallery',
                  component: Coleccion  
                },
                {
                path: ':id',
                name: 'informacion-details',
                component: Detalles,
                },
              ],
        },
    ]
},

    {
      path: '/contactos',
      name: 'contactos',
      component: Contactos
    },
    {
      path: '/:slug',
      name: 'section',
      component: SectionView
    },
    {
      path: '/trabajo/:id',
      name: 'work',
      component: WorkDetail
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ],

  // <-- Aquí agregamos scrollBehavior
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // volver atrás respeta la posición
    }
    return { top: 0 }; // siempre arriba al entrar a una nueva ruta
  }
});
