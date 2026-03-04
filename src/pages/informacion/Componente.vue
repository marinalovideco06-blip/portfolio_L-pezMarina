<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { apps } from '@/data/apps' // un array con tus apps { id, name, icon, description }

</script>

<template>
  <Carousel :opts="{ loop: true, align: 'start' }">
    <CarouselContent class="flex gap-4">
      <CarouselItem
        v-for="app in apps"
        :key="app.id"
        class="min-w-37.5"
      >
        <div class="p-4 bg-blue-500 rounded-xl shadow hover:scale-105 transition">
          <img :src="app.icon" class="w-16 h-16 mx-auto mb-2"/>
          <p class="text-center font-semibold">{{ app.name }}</p>
        </div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>