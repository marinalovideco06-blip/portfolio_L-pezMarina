<script setup lang="ts">

//import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const autoplay = Autoplay({
  delay: 1500,
  stopOnInteraction: false,
})

const trabajos = [
"/imagenes/home/guias_6.png",
"/imagenes/home/guias_8.png",
"/imagenes/home/guias_9.png",
"/imagenes/home/guias_10.png",
"/imagenes/home/guias_11.png",
"/imagenes/home/guias_6.png",
"/imagenes/home/guias_8.png",
"/imagenes/home/guias_9.png",
"/imagenes/home/guias_10.png",
"/imagenes/home/guias_11.png",
]

</script>


<template>
  <div>
       <section id="portada" class="bg-black w-full flex flex-col">
          
        <div class="flex flex-row justify-between font-[Urbanist] items-center">

<h2 class="text-white border-4 rounded-full flex items-center 
m-4 sm:m-10 px-4 sm:px-5 py-2 lg:px-6 font-bold text-sm sm:text-base">
Trabajos.
</h2>

<Button class="text-white border-4 rounded-full 
m-4 sm:m-10 px-2 py-2 sm:py-3 font-bold hover:bg-[rgb(24,61,246)]">
<RouterLink to="/">EXIT</RouterLink>
</Button>

</div>

            <div class="mt-20">
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
      v-for="trabajo in trabajos"
      :key="trabajo"
      class="basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
    >
      <div class="p-2">
        
        <img
          :src="trabajo"
          alt="trabajo"
          class="w-full aspect-square object-cover transition-transform duration-500 hover:scale-105"
        />

      </div>
    </CarouselItem>

  </CarouselContent>
</Carousel>
            </div>

            <div>
              <h1 class="bg-black text-white 
text-3xl sm:text-4xl md:text-5xl lg:text-6xl
border-4 rounded-full 
px-6 sm:px-12 py-3 sm:py-4 
mb-4 mt-16 sm:mt-30 
flex justify-center text-center">
selección de trabajos.
</h1>
               <div class="z-20">
       <p class="text-white 
px-6 sm:px-20 lg:px-60 
py-10 text-sm sm:text-base lg:text-lg 
text-center lg:mb-20">
He realizado gran cantidad de trabajos a lo largo de mi carrera pero he querido hacer un recopilatorio de los más relevantes y que más representan mi estilo personal y competencia.
</p>
            </div>
            
            <div class="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-10 items-center">
  <Button>
    <RouterLink :to="`/ilustracion`">
      <div class="border-white text-white border-4 rounded-full 
flex items-center gap-3
px-6 sm:px-10 py-2
hover:bg-white hover:text-[rgb(24,61,246)]">
        <img src="/imagenes/trabajos/aura-36.png" alt="" class="lg:w-30 lg:m-2 w-12 sm:w-20">
        <h1 class="text-xl sm:text-3xl lg:text-4xl">ilustración.</h1>
      </div>
    </RouterLink>
  </Button>

  <Button>
    <RouterLink :to="`/marketing`">
      <div class="border-white text-white border-4 rounded-full 
flex items-center gap-3
px-6 sm:px-10 py-2
hover:bg-white hover:text-[rgb(24,61,246)]">
        <img src="/imagenes/trabajos/aura-41.png" alt="" class="lg:w-30 lg:m-2 w-12 sm:w-20">
        <h1 class="text-xl sm:text-3xl lg:text-4xl">marketing.</h1>
      </div>
    </RouterLink>
  </Button>

  <Button>
    <RouterLink :to="`/diseno`">
      <div class="border-white text-white border-4 rounded-full 
flex items-center gap-3
px-6 sm:px-10 py-2
hover:bg-white hover:text-[rgb(24,61,246)]">
        <img src="/imagenes/trabajos/aura-40.png" alt="" class="lg:w-30 lg:m-2 w-12 sm:w-20">
        <h1 class="text-xl sm:text-3xl lg:text-4xl">diseño.</h1>
      </div>
    </RouterLink>
  </Button>
</div>
            </div>
          <div class="mt-0">
          <img 
             src="/imagenes/trabajos/aura_abajo.png" 
             alt=""
             class="w-full z-10 object-cover">
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