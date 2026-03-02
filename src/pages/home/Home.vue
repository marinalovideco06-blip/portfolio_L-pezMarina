<script lang="ts" setup>

import Button from '@/components/ui/button/Button.vue';

</script>

<template>

    <div class="relative h-screen w-full flex overflow-hidden">
      
      <div>
         <img 
          class="absolute inset-0 w-full h-full object-cover pointer-events-none" 
          src="/imagenes/home/aura_portada.PNG" 
          alt="">
        
          <div>

            <h1 
              class="absolute inset-0 flex justify-center 
         top-32 md:top-40 lg:top-50
         text-[80px] sm:text-[100px] md:text-[120px] lg:text-[170px]
         z-10">
              <span class="text-black sm:text-white">blue.</span>marina
            </h1>
           
              <h2
                class="absolute 
         right-10 sm:right-16 md:right-34 lg:right-80
         top-90 sm:top-95 md:top-110 lg:top-140
         -translate-y-30
         text-lg sm:text-2xl md:text-3xl lg:text-4xl
         z-10 px-6 sm:px-8 md:px-12 py-2 
         bg-black rounded-full text-white">
                Portfolio
              </h2>

          </div>
      </div>
      
      
          
          <div  class="relative z-20 flex 
         flex-col md:flex-row
         justify-center items-center md:items-end
         pb-16 md:pb-35
         gap-6 w-full px-6 pt-50">
             <Button variant="marina_boton">
                <RouterLink to="/info">
                  Información profesional
                </RouterLink>
              </Button>    
             <Button variant="marina_boton">
                <RouterLink to="/trabajos">
                  Selección de trabajos
                </RouterLink>   
             </Button>    
             <Button variant="marina_boton">
                <RouterLink to="/contactos">
                  Contacto y redes
                </RouterLink>
             </Button>    
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
    font-weight: 500;
  }

   @font-face {
  font-family: 'Urbanist';
  src: url('/fonts/Urbanist.ttf');
  }

  h2 {
    font-family: 'Urbanist';
  }

  button {
    font-family: "Urbanist";
    font-weight: 1000;
  }

</style>