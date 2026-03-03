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
        aplicaciones.
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
          
       </section>

       <section id="aplicaciones" class="bg-white w-full min-h-[60vh] lg:min-h-[120vh] flex flex-row">

       </section>

       <section id="habilidades" class="bg-black w-full min-h-[60vh] lg:min-h-[200vh] flex flex-col justify-end">
        
          <div class="z-20 mb-100">
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
                         v-for="(_, index) in 10"
                         :key="index"
                         class="basis-4/5 sm:basis-1/2 lg:basis-1/4"
                         >
                            <div class="p-1">
                               <Card>
                                 <CardContent class="flex aspect-square items-center justify-center p-10">
                                    <span class="text-3xl font-semibold">
                                      {{ (index % 5) + 1 }}
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