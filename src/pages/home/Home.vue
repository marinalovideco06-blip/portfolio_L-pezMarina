<script lang="ts" setup>

import Button from '@/components/ui/button/Button.vue';

</script>

<template>

    <div class="relative h-screen w-full flex">
        <img 
          class="absolute inset-0 w-full h-full object-cover pointer-events-none" 
          src="/imagenes/home/aura_portada.PNG" 
          alt="">
        
          <div>

            <h1 
              class="absolute inset-0 flex justify-center top-50 text-[170px] z-10">
              <span class="text-white">blue.</span>marina
            </h1>
           
              <h2
                class="absolute right-80 top-140 -translate-y-30 text-4xl z-10 px-12 py-2 bg-black rounded-full text-white">
                Portfolio
              </h2>

          </div>
          
          <div class="relative z-20 flex justify-center items-end pb-35 gap-6 w-full">
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
  }

</style>