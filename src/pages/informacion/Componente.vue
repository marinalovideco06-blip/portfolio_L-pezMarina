<script setup lang="ts">
//import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
//import { apps } from '@/data/apps' // un array con tus apps { id, name, icon, description }
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const autoplay = Autoplay({
  delay: 1500,
  stopOnInteraction: false,
})

const habilidades = [
  "organización.",
  "lluvia de ideas.",
  "storytelling.",
  "desarrollo del proyecto.",
  "referentes.",
  "gestión.",
  "preferencias.",
  "estilo propio.",
]
</script>

<template>

  <div class="flex flex-col items-center gap-20 ">

<img 
  src="/imagenes/trabajos/degradado_blanco_horizontal.PNG" 
  alt=""
  class="absolute top-0 left-0 z-10 w-full">

  <h1 class="relative z-20 text-6xl sm:text-7xl lg:text-9xl text-center">
    mi estilo.
  </h1>

  <RouterLink to="/info">
  <button class="relative z-20 text-white bg-black hover:bg-[rgb(24,61,246)] px-2 py-2 rounded-full">EXIT</button>
  </RouterLink>


  <div class="flex flex-col relative z-20 justify-center gap-16 lg:gap-20 w-full max-w-5xl px-6">

    <div>
     <h2 class="text-lg rounded-full border-2 border-black px-6 py-2">
    Primero...para introducirte en mi proceso creativo, te pido que pongas esta playlist, la cual ulizo para inspirarme durante cualquier proyecto.
     </h2>

    </div>
    <div class="flex flex-col lg:flex-row items-center gap-6">
      <img 
      src="/imagenes/informacion/aura-32.png" 
      alt=""
      class="w-20 lg:w-40 h-auto">
      <iframe 
   class="relative z-20"
   data-testid="embed-iframe" 
   style="border-radius:12px" 
   src="https://open.spotify.com/embed/playlist/37i9dQZF1DX5Hl0iWtr5b3?utm_source=generator&theme=0" 
   width="100%" 
   height="352" 
   frameBorder="0"  
   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
  </iframe>
       <img 
      src="/imagenes/informacion/aura-32.png" 
      alt=""
      class="w-20 lg:w-40 h-auto">
    </div>
   
     <Carousel
                class="relative w-full"
                :opts="{
                align: 'start',
                loop: true
                }"
                :plugins="[autoplay]"
                >
                  <CarouselContent>
                      <CarouselItem
                         v-for="habilidad in habilidades"
                         :key="habilidad"
                         class="basis-auto"
                         >
                            <div class="p-1">
                               <Card class="rounded-full font-[Urbanist] border-black px-6 lg:px-10 py-3 lg:py-4 text-black bg-transparent border-3 hover:bg-[rgb(24,61,246)] hover:text-white hover:border-white hover:lg:px-20 transition-all">
                                 <CardContent class="flex items-center justify-center">
                                    <span class="text-lg lg:text-2xl font-semibold"">
                                       {{ habilidad }}
                                    </span>
                                 </CardContent>
                               </Card>
                            </div>
                      </CarouselItem>
                  </CarouselContent>
               </Carousel>

  </div>

  <h1 class="text-3xl lg:text-6xl text-center">
    mi estilo de trabajo.
  </h1>

    <h2 class="text-lg rounded-full border-2 border-black px-6 py-2">
    Mi estilo de trabajo se divide en varias etapas. Estas son las que guían mi proceso creativo y me ayudan a desarrollar mis proyectos.
     </h2>

     <div class="flex flex-col gap-10 px-6 lg:px-20 items-center">

      <div class="flex flex-col items-center gap-10">
      <h1 class="lg:text-4xl text-2xl">
       organización.
      </h1>
      <p class="font-bold px-6 lg:px-20">
      En primer lugar, me aseguro de tener todos los datos posibles del proyecto: fechas, formatos de entrega, requisitos técnicos… Reúno toda la información sobre los proyectos en una de mis páginas de Notion, donde además llevo siempre un sumario del proceso de trabajo.

      También me aseguro de tener carpetas de archivo preparadas para organizar todos los archivos del proyecto de forma ordenada, para poder recurrir a ellos en cualquier momento.
      </p>
     </div>

     <div class="flex flex-col items-center gap-10">
      <h1 class="lg:text-4xl text-2xl">
       lluvia de ideas.
      </h1>
      <p class="font-bold px-6 lg:px-20">
        Cuando se me presenta la idea de un proyecto, lo primero que hago es intentar atribuirle un storytelling, de forma que pueda alinear el proyecto con una estética, una visión y una dirección estética claras. A raíz de este storytelling es cuando empiezo a buscar inspiración y referentes.

Mi búsqueda de referentes se divide entre Pinterest, Instagram y Behance. Si bien tengo ya referentes establecidos y carpetas completas de cada ámbito preparadas de las cuales sacar inspiración y referencias, siempre me aseguro de buscar información extra para poder estar lo más situada posible a la hora de realizar el proyecto, y también para poder añadir detalles extra y específicos.

Mis moodboards de referentes visuales se dividen en: estilo gráfico, tipografía, textura, paleta de colores y vibes o ambientación general.
      </p>
     </div>

     <div class="flex flex-col items-center gap-10">
      <h1 class="lg:text-4xl text-2xl">
       desarrollo del proyecto.
      </h1>
      <p class="font-bold px-6 lg:px-20">
          Suelo asegurarme de llevar una revisión constante con mis clientes en caso de que se trate de una comisión, para asegurarme de que el proyecto siga un camino correcto. Normalmente divido el desarrollo en tres fases: bocetado, revisión y versión definitiva.

Desde la fase de organización también distribuyo el tiempo que precisará cada etapa dependiendo del proyecto. De esta forma, los proyectos siempre tienen un margen en caso de que haya imprevistos, sin causar problemas para entregar el proyecto en forma y tiempo.
      </p>
     </div>

     </div>

      <div class="flex flex-col relative z-20 justify-center gap-20 w-full max-w-300">

    <div>
     <h2 class="text-lg rounded-full border-2 border-black px-6 py-2">
   Sigamos con una de las playlist que utilizo como motivación...
     </h2>

    </div>
    <div class="flex flex-col lg:flex-row items-center gap-6">
      <img 
      src="/imagenes/informacion/aura-32.png" 
      alt=""
      class="w-20 lg:w-40 h-auto">
     <iframe 
     data-testid="embed-iframe" 
     style="border-radius:12px" 
     src="https://open.spotify.com/embed/album/4a6NzYL1YHRUgx9e3YZI6I?utm_source=generator" 
     width="100%" height="352" 
     frameBorder="0" 
     allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
     loading="lazy"></iframe>
       <img 
      src="/imagenes/informacion/aura-32.png" 
      alt=""
      class="w-20 lg:w-40 h-auto">
    </div>
   
     <Carousel
                class="relative w-full"
                :opts="{
                align: 'start',
                loop: true
                }"
                :plugins="[autoplay]"
                >
                  <CarouselContent>
                      <CarouselItem
                         v-for="habilidad in habilidades"
                         :key="habilidad"
                         class="basis-auto"
                         >
                            <div class="p-1">
                               <Card class="rounded-full font-[Urbanist] border-black px-6 lg:px-10 py-3 lg:py-4 text-black bg-transparent border-3 hover:bg-[rgb(24,61,246)] hover:text-white hover:border-white hover:lg:px-20 transition-all">
                                 <CardContent class="flex items-center justify-center">
                                    <span class="text-lg lg:text-2xl font-semibold">
                                       {{ habilidad }}
                                    </span>
                                 </CardContent>
                               </Card>
                            </div>
                      </CarouselItem>
                  </CarouselContent>
               </Carousel>

  </div>

     <h1 class="text-3xl lg:text-6xl text-center">
    preferencias y estilo.
  </h1>

       <p class="font-bold px-6 lg:px-20">
      En mi caso, para el diseño sigo un estilo minimalista, con negros, blancos y un azul muy concreto de mi marca. Suelo combinarlo con imágenes o ilustraciones con colores vibrantes que le den más juego visual a los diseños, aunque prefiero maquetaciones limpias y espaciadas.

En el caso de la ilustración tengo varias vertientes dependiendo de las necesidades de cada proyecto. En general, utilizo un estilo más detallado, proporcionado y con volúmenes más trabajados cuando se trata de proyectos de ilustración más maduros o cuya estética requiere un tipo de ilustración más detallada.

En proyectos más esquemáticos o con un tono menos maduro, que buscan apelar de forma más inmediata, utilizo un estilo algo más caricaturesco, con personajes menos detallados y colores más brillantes. En estos casos suelo utilizar un estilo que roza lo vectorial.

Para proyectos con un tono más suave, o incluso dirigidos a niños, utilizo un estilo más infantil, achuchable y accesible para atraer a un público más joven.   
      </p>
  
 <h1 class="text-3xl lg:text-6xl text-center">
    preferencias profesionales.
  </h1>

       <p class="font-bold px-6 lg:px-20">
      En cuanto a preferencias, como ilustradora me gusta trabajar en proyectos editoriales de libros, realizando portadas o ilustraciones interiores, preferiblemente de fantasía.

Como diseñadora estoy especializada en branding y en campañas publicitarias que involucren el storytelling. También disfruto diseñando para proyectos más creativos, como restaurantes o proyectos de maquetación editorial.

En diseño web disfruto creando páginas muy personalizadas que juegan con elementos más orgánicos en movimiento.
      </p>
     
  
  </div>
  
</template>

<style scoped>

 @font-face {
  font-family: 'Outfit';
  src: url('/fonts/Outfit.ttf');
  }

  h1 {
    font-family: 'Outfit';
    font-weight: 500;
  }

   @font-face {
  font-family: 'Urbanist';
  src: url('/fonts/Urbanist.ttf');
  }

  h2 {
    font-family: 'Urbanist';
  }

  p {
    font-family: Urbanist;
    font-weight: 600;
  }


</style>