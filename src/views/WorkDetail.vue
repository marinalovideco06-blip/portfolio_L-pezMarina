<script setup lang="ts">
import { useRoute } from 'vue-router'
import { works } from '@/data/works'

const route = useRoute()
const id = Number(route.params.id)

const work = works.find(w => w.id === id)

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

</script>

<template>

   <div class="relative min-h-screen">

    <img 
      src="/imagenes/trabajos/degradado_blanco_vertical.PNG" 
      alt=""
      class="absolute inset-0 w-full h-full z-0 pointer-events-none bg-no-repeat bg-cover bg-center"
      
      >

    <div class="relative z-20 text-black flex flex-col items-center min-h-screen px-6 sm:px-10">

      <h1 class="text-3xl sm:text-5xl lg:text-7xl mt-10 text-center">
        {{ work?.title }}
      </h1>
   
      <div class="mt-10 sm:mt-20 w-full max-w-5xl px-4 sm:px-10">

        <Carousel
          :opts="{ align: 'start', loop: true }"
          class="w-full"
        >
          <CarouselContent class="flex gap-6">

            <CarouselItem
              v-for="(img, index) in work?.images"
              :key="index"
              class="basis-65 sm:basis-[320px] lg:basis-95 shrink-0"
            >
              <div class="w-full aspect-square rounded-2xl overflow-hidden shadow-lg bg-white">
                <img
                  :src="img"
                  class="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>

          </CarouselContent>

           <CarouselPrevious />
  <CarouselNext />

        </Carousel>
      </div>

      <p class="mt-10 text-sm sm:text-base lg:text-lg px-4 sm:px-20 text-center max-w-3xl">
        {{ work?.description }}
      </p>

     <RouterLink :to="`/${work?.section}`">
        <button class="mt-16 sm:mt-20 border-2 rounded-full border-black px-4 py-2 text-black hover:bg-[rgb(24,61,246)] hover:border-[rgb(24,61,246)] hover:text-white">EXIT</button>
      </RouterLink>

    </div>

  </div>
</template>

<style scoped>

 @font-face {
  font-family: 'Outfit';
  src: url('/fonts/Outfit.ttf');
  }

  h1 {
    font-family: 'Outfit';
    font-weight: 600;
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