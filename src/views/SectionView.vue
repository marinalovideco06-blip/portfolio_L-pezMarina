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
  <div class="bg-black w-full min-h-screen flex flex-col items-center">
    <h1 class="text-white text-6xl mt-10">{{ section?.name }}</h1>

    <div class="mt-10 flex gap-4">
      <RouterLink to="/otra-pagina-1">
        <button class="border px-4 py-2 text-white">Botón 1</button>
      </RouterLink>
      <RouterLink to="/otra-pagina-2">
        <button class="border px-4 py-2 text-white">Botón 2</button>
      </RouterLink>
    </div>

    <div class="mt-10 w-full max-w-6xl">
      <Carousel :opts="{ loop: true }">
        <CarouselContent>
          <CarouselItem v-for="work in filteredWorks" :key="work.id">
            <RouterLink :to="`/trabajo/${work.id}`">
              <div class="p-2 border rounded-lg bg-white flex flex-col items-center">
                <img :src="work.image" class="w-32 h-32 object-cover"/>
                <p>{{ work.title }}</p>
              </div>
            </RouterLink>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  </div>
</template>