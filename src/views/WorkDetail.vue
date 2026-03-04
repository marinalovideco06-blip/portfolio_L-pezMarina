<script setup lang="ts">
import { useRoute } from 'vue-router'
import { works } from '@/data/works'

const route = useRoute()
const id = Number(route.params.id)

const work = works.find(w => w.id === id)
</script>

<template>

   <div class="relative min-h-screen">

    <img 
      src="/imagenes/trabajos/degradado_blanco_vertical.PNG" 
      alt=""
      class="absolute inset-0 w-full z-0 pointer-events-none"
    >

    <div class="relative z-20 text-black flex flex-col items-center min-h-screen">

      <h1 class="text-7xl mt-10">
        {{ work?.title }}
      </h1>
   
      <div class="mt-20 w-full max-w-5xl px-10">

        <Carousel
          :opts="{ align: 'start', loop: true }"
          class="w-full"
        >
          <CarouselContent class="flex justify-center">

            <CarouselItem
              v-for="(img, index) in work?.images"
              :key="index"
              class="min-w-100 mr-6"
            >
              <div class="aspect-square rounded-2xl overflow-hidden shadow-lg bg-white">
                <img
                  :src="img"
                  class="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>

          </CarouselContent>
        </Carousel>
      </div>

      <p class="mt-5 px-10 text-center">
        {{ work?.description }}
      </p>

     <RouterLink :to="`/${work?.section}`">
        <button class="z-20 mt-20 border-2 rounded-full border-black px-2 py-2 text-black hover:bg-[rgb(24,61,246)] hover:border-[rgb(24,61,246) hover:text-white hover:border-[rgb(24,61,246)]">EXIT</button>
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