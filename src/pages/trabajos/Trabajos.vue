<script setup lang="ts">

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
       <section id="portada" class="bg-black w-full flex flex-col">
          
        <div class="flex flex-row justify-between font-[Urbanist]">
             <h2 class="text-white border-4 rounded-full flex flex-row items-center m-10 mt-13 px-5 py-2 font-bold">
                 Trabajos.
             </h2>
             <div class="flex flex-row">  
             <Button class="text-white border-4 rounded-full m-10 mt-13 px-2 py-3 font-[Urbanist] font-bold hover:bg-[rgb(24,61,246)]">
               <RouterLink to="/">EXIT</RouterLink>
             </Button>
             </div>
            </div>

            <div class="mt-40">
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

            <div>
              <h1 class="bg-black text-white text-6xl border-4 rounded-full px-12 py-4 mb-4 mt-60 flex justify-center">
                   selección de trabajos.
               </h1>
               <div class="z-20">
        <p class="text-white p-40 text-lg px-95">
          He realizado gran cantidad de trabajos a lo largo de mi carrera pero he querido hacer un recopilatorio de los más relevantes y que más representan mi estilo personal y competencia.. 
        </p>
            </div>
            
            <div class="flex flex-row justify-center gap-10">
              <Button>
              <RouterLink to="/ilustracion">
                <div class="border-white text-white border-4 rounded-full flex flex-row items-center px-10 mt-13 hover:bg-white hover:text-[rgb(24,61,246)]">
                   <img 
                      src="/imagenes/trabajos/aura-36.png" 
                      alt=""
                      class="w-30 m-2">
                   <h1 class="text-4xl">
                      ilustración. 
                   </h1>
                </div>
              </RouterLink>
              </Button>

             <Button>
              <RouterLink to="/ilustracion">
                <div class="border-white text-white border-4 rounded-full flex flex-row items-center px-10 mt-13 hover:bg-white hover:text-[rgb(24,61,246)]">
            <img 
               src="/imagenes/trabajos/aura-41.png" 
               alt=""
               class="w-30 m-2">
            <h1 class="text-4xl">
               marketing. 
            </h1>
            </div>
              </RouterLink>
            </Button>


             <Button>
              <RouterLink to="/ilustracion">
                <div class="border-white text-white border-4 rounded-full flex flex-row items-center px-10 mt-13 hover:bg-white hover:text-[rgb(24,61,246)]">
            <img 
               src="/imagenes/trabajos/aura-40.png" 
               alt=""
               class="w-30 m-2">
            <h1 class="text-4xl">
               diseño. 
            </h1>
            </div>
              </RouterLink>
            </Button>
            </div>
            </div>
          <div class="mt-0">
          <img 
             src="/imagenes/trabajos/aura_abajo.png" 
             alt=""
             class="w-full z-10">
        </div>
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