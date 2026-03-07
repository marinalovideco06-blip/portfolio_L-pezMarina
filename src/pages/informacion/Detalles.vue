<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { apps, type Apps } from '@/data/apps';


const route = useRoute()

//const router = useRouter()

const aplicacion = ref<Apps | undefined>(
    apps.find(char => char.id === Number(route.params.id))
)



</script>


<template>

  <img 
      src="/imagenes/trabajos/degradado_blanco_vertical.PNG" 
      alt=""
      class="absolute inset-0 w-full h-full z-0 pointer-events-none"
    >
    <div v-if="aplicacion"  class="flex flex-col items-center w-full max-w-5xl mx-auto my-8 gap-10 px-6 lg:px-20">
      
      
      <div class="flex flex-col items-center">
	<h1 class="text-4xl sm:text-6xl lg:text-8xl relative z-20 mb-10 text-center"> 
		{{ aplicacion.name }}
	</h1>

  <RouterLink 
  to="/info/gallery" 
  class="relative z-20 mt-10">
    <button class="font-[Urbanist] rounded-full bg-black hover:bg-[rgb(24,61,246)] text-white px-2 py-2">EXIT</button>
  </RouterLink>

	<div class="relative z-20 font-bold">
		<p class="text-base lg:text-lg mt-6 max-w-2xl text-center">
			{{ aplicacion.description }}
		</p>
                
	</div>
</div>

<figure class="relative z-20">
  <img 
    :src="`${aplicacion.icon}`"
    :alt="aplicacion.name"
    class="w-40 sm:w-52 lg:w-60 object-contain"
  />
</figure>
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