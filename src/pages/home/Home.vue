<script lang="ts" setup>

</script>

<template>

    <div class="h-screen w-full flex">
        <img 
          class="absolute inset-0 w-full h-full object-cover" 
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

  

</style>