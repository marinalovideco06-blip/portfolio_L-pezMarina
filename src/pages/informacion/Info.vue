<script setup lang="ts">

import {
  NavigationMenu,
  //NavigationMenuContent,
  //NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  //NavigationMenuTrigger,
  //NavigationMenuViewport,
} from '@/components/ui/navigation-menu'

const scrollToSection = (id: string) => {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const autoplay = Autoplay({
  delay: 1500,
  stopOnInteraction: false,
})

const habilidades = [
  "ux/ui.",
  "branding.",
  "storytelling.",
  "marketing digital.",
  "organización.",
  "gestión de proyectos.",
  "diseño interactivo.",
  "narrativa.",
  "ilustración.",
  "concept art."
]

</script>


<template>
    <div>

       <section id="portada" class="bg-black w-full min-h-[60vh] lg:min-h-[95vh] flex flex-col ">
        
        <div class="flex flex-row justify-between font-[Urbanist]">
             <h2 class="text-white border-4 rounded-full flex flex-row items-center m-10 mt-13 px-12 py-2 font-bold">
          Información personal.
        </h2>
             <div class="flex flex-row">
                <NavigationMenu class="text-white border-2 rounded-full flex flex-row items-center m-10 mt-13 px-12 py-2 hover:bg-[rgb(24,61,246)]">
  <NavigationMenuList >

    <NavigationMenuItem>
      <NavigationMenuLink @click="scrollToSection('personal')">
        personal.
      </NavigationMenuLink>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuLink @click="scrollToSection('titulación')">
        titulación.
      </NavigationMenuLink>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuLink @click="scrollToSection('aplicaciones')">
        herramientas y estilos.
      </NavigationMenuLink>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuLink @click="scrollToSection('habilidades')">
        habilidades.
      </NavigationMenuLink>
    </NavigationMenuItem>

  </NavigationMenuList>
</NavigationMenu>

<Button class="text-white border-4 rounded-full m-10 mt-13 px-2 py-2 font-[Urbanist] font-bold hover:bg-[rgb(24,61,246)]">
  <RouterLink to="/">EXIT</RouterLink>
</Button>
             </div>
          
        </div>
       

        <h1 class="bg-black text-white text-6xl border-4 rounded-full px-12 py-4 m-30 mt-110">
           blue.marina
         </h1>

       </section>

       <section id="personal" class="bg-white w-full min-h-[60vh] lg:min-h-[120vh] flex flex-row">
        
         <div class="flex flex-col p-10 justify-center gap-15">
          <img 
           src="/imagenes/informacion/imagen_1.jpg" 
           alt=""
           class="w-2/2 h-auto">

           <img 
           src="/imagenes/informacion/imagen_2.jpg" 
           alt=""
           class="w-2/2 h-auto">
         </div>
        

        <div class="flex flex-col justify-start">
            <div class="border-black border-4 rounded-full flex flex-row items-center m-10 mt-13">
            <img 
               src="/imagenes/informacion/aura-32.png" 
               alt="">
            <h1 class="text-4xl">
               información personal. 
            </h1>
            </div>

            <div class="flex flex-col items-end">
               <p class="m-40 mt-20">
              Mi nombre es Marina López Villegas, y soy una diseñadora, ilustradora y escritura. Especializada en desarrollo de proyectos multidisciplinares de organización, marketing, narrativa y storytelling y desarrollo de tecnologías interactivas 
            </p>

            <img 
               src="/imagenes/informacion/minimarina_1.png" 
               alt=""
               class="w-50 p-3"
               >
            </div>
            
        </div>   
       
       </section>

       <section id="titulación" class="bg-black w-full min-h-[60vh] lg:min-h-[95vh] flex items-center">
        
        <div>
          <img src="/imagenes/informacion/imagen_2.jpg" alt="">
        </div>

          <div class="flex flex-col">
             <div class="border-white border-4 rounded-full flex flex-row items-center m-10 mt-13">
            <img 
               src="/imagenes/informacion/aura-33.png" 
               alt="">
            <h1 class="text-4xl text-white px-5">
               titulación. 
            </h1>
            </div>

            <p class="text-white px-50">
              Me encuentro titulada en Diseño y tecnologías creativas en la Universidad Politécnica de Valencia. También tengo un nivel C1 en inglés certificado por la Escuela oficial de Idiomas.
            </p>
          </div>
           
       </section>

       <section id="aplicaciones" class="bg-white w-full min-h-[60vh] lg:min-h-[90vh] flex flex-col justify-center">
           <div class="p-10 flex flex-col items-center gap-10">
             <div class="border-black border-4 rounded-full flex flex-row items-center justify-center m-10 mt-13 px-50">
            <img 
               src="/imagenes/informacion/aura-34.png" 
               alt="">
            <h1 class="text-4xl">
               herramientas y estilos. 
            </h1>
            </div>
                   <RouterLink to="info/gallery">
                   <button class="bg-black hover:bg-[rgb(24,61,246)]  text-white px-10 hover:px-40 py-2 text-2xl border-2 rounded-full transition-all font-[Urbanist]">herramientas.</button>
                </RouterLink>

                <RouterLink to="info/aplicaciones">
                   <button class="bg-black hover:bg-[rgb(24,61,246)]  text-white px-10 hover:px-40 py-2 text-2xl border-2 rounded-full transition-all font-[Urbanist]">estilos.</button>
                </RouterLink>
              
            <img 
            src="/imagenes/informacion/minimarinas.png" 
            alt=""
            class="w-300 h-full">

            </div>

            
       </section>

       <section id="habilidades" class="bg-black w-full min-h-[60vh] lg:min-h-[140vh] flex flex-col justify-end">

          <div class="flex flex-row items-center mb-20 mt-0">
            <div class=" flex flex-col items,center">
             <div class="border-white border-4 rounded-full flex flex-row items-center m-10 mt-13">
            <img 
               src="/imagenes/informacion/aura-35.png" 
               alt="">
            <h1 class="text-4xl text-white px-5">
               habilidades. 
            </h1>
            </div>
             <p class="text-white px-50">
              Mis especializaciones están enfocadas en el 
              diseño UX/UI, branding, marketing digital 
              y en el storytelling.
 
              Soy una apasionada de la organización 
              y de la planificación, lo cual me beneficia 
              a la hora de llevar acabo mis proyectos o 
              en la gestión de proyectos. 

              Crear historias y personajes está entre 
              mis mejores cualidades, lo cual aprovecho 
              al desarrollar tanto estrategias de marketing 
              y branding como a la hora de llevar acabo 
              proyectos más interactivos como páginas web, 
              videojuegos o audiovisuales.
             </p>
            </div>
             <div>
              <img 
              src="/imagenes/informacion/imagen_1.jpg" 
              alt=""
              class="h-auto w-400">
             </div>

          </div>
        
          <div class="z-20 mb-80 mt-20 ">
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
                               <Card class="rounded-full font-[Urbanist] border-white px-10 py-4 text-white bg-transparent border-3 hover:bg-[rgb(24,61,246)] hover:px-20 transition-all">
                                 <CardContent class="flex items-center justify-center">
                                    <span class="text-3xl font-semibold">
                                       {{ habilidad }}
                                    </span>
                                 </CardContent>
                               </Card>
                            </div>
                      </CarouselItem>
                  </CarouselContent>
               </Carousel>
            </div>
        
        <img 
           src="/imagenes/trabajos/degradado_negro_abajo.PNG" 
           alt=""
           class="z-10 absolute"
           >
       </section>
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