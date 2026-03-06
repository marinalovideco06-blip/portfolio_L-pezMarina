<script setup lang="ts">
import { useRoute } from 'vue-router'
import { sections, works } from '@/data/works'

const route = useRoute()
const slug = route.params.slug as string

// Encuentra la sección
const section = sections.find(s => s.slug === slug)

// Filtra los trabajos de esta sección
const filteredWorks = works.filter(w => w.section === slug)
</script>

<template>

  <img 
  src="/imagenes/trabajos/degradado_blanco_horizontal.PNG" 
  alt=""
  class="absolute top-0 left-0 w-full z-10 pointer-events-none">

  <div class="bg-white w-full min-h-screen flex flex-col gap-20 items-center z-20 px-6 sm:px-10">
    <h1 class="text-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl mt-20 sm:mt-40 z-20 text-center">
      {{ section?.name }}
    </h1>

    <div class="mt-10 flex flex-wrap justify-center gap-4 z-20">
      <RouterLink to="/contactos">
        <button class="z-20 border-2 bg-black rounded-full border-black px-6 py-2 text-white hover:bg-[rgb(24,61,246)] hover:border-[rgb(24,61,246) hover:text-white hover:border-[rgb(24,61,246)]">comisiones.</button>
      </RouterLink>
      <RouterLink to="/trabajos">
        <button class="z-20 border-2 rounded-full border-black px-2 py-2 text-black hover:bg-[rgb(24,61,246)] hover:text-white hover:border-[rgb(24,61,246)]">EXIT</button>
      </RouterLink>
    </div>

    <p class="text-sm sm:text-lg mt-10 sm:mt-20 px-6 sm:px-20 lg:px-60 text-center">
      {{ section?.text }}
    </p>

    <div class="mt-20 mb-40 w-full max-w-7xl z-20 px-10 overflow-hidden">
  <Carousel
    :opts="{
      align: 'start',
      loop: true
    }"
    class="w-full"
  >
    <CarouselContent class="flex">

      <CarouselItem
        v-for="work in filteredWorks"
        :key="work.id"
        class="min-w-55 sm:min-w-65 lg:min-w-[320px] mr-6"
      >
       <RouterLink :to="`/trabajo/${work.id}`">
  <div class="relative aspect-square bg-white rounded-2xl shadow-lg overflow-hidden border group cursor-pointer">

    <!-- Imagen -->
    <img
      :src="work.image"
      class="w-full h-full object-cover transition duration-500 group-hover:scale-110"
    />

    <!-- Overlay oscuro -->
    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition duration-500"></div>

    <!-- Título -->
    <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
      <h2 class="text-white text-lg sm:text-2xl font-semibold text-center px-4">
        {{ work.title }}
      </h2>
    </div>

  </div>
</RouterLink>
      </CarouselItem>

    </CarouselContent>
  </Carousel>
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