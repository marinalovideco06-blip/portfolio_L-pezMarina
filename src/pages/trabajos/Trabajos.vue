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
       <section id="portada" class="bg-black w-full min-h-[60vh] lg:min-h-[180vh] flex flex-col">
          
        <div class="flex flex-row justify-between font-[Urbanist]">
             <h2 class="text-white border-4 rounded-full flex flex-row items-center m-10 mt-13 px-12 py-2 font-bold">
                 Trabajos.
             </h2>
             <div class="flex flex-row">  
             <Button class="text-white border-4 rounded-full m-10 mt-13 px-2 py-3 font-[Urbanist] font-bold hover:bg-[rgb(24,61,246)]">
               <RouterLink to="/">EXIT</RouterLink>
             </Button>
             </div>
            </div>

            <div>
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
            
               <h1 class="bg-black text-white text-6xl border-4 rounded-full px-12 py-4 m-30 mt-110">
                   blue.marina
               </h1>
        <div class="flex items-end">
          <img src="/imagenes/trabajos/degradado_negro_abajo.PNG" alt="">
        </div>
       </section>
    </div>
</template>



<style scoped>


</style>