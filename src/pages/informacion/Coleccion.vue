<script setup lang="ts">
import { Card, CardContent, } from '@/components/ui/card'
import { computed, ref } from 'vue';
import { apps } from '@/data/apps';


const inPagina = 4

const nuncPagina = ref(1)

const totalPaginas = Math.ceil(apps.length / inPagina)

const listaAplicaciones = computed(() => {
  const inicio = (nuncPagina.value-1) * inPagina
  const fin = inicio + inPagina
  return apps.slice(inicio, fin)
})

const ireAdPagina = (pagina: number) => {
if(pagina >= 1 && pagina <= totalPaginas) {
  nuncPagina.value = pagina
}
}

const paginaNumeri: number[] = [ ...Array(totalPaginas)].map ((_, i) => i + 1)

</script>


<template>
    
     <img 
  src="/imagenes/trabajos/degradado_blanco_horizontal.PNG" 
  alt=""
  class="absolute top-0 left-0 w-full z-10">
    
    <div class="relative flex flex-col items-center justify-center gap-8 w-full max-w-1400px my-8 mx-auto z-20">
  
      <div class="text-center">

        <h1 class="font-bold text-6xl lg:text-9xl mb-10">
          herramientas.
        </h1>

        <p class="mb-10 mt-4">
          Gracias a mi titulación me encuentro plenamente capacitada y especializada en una amplia variedad de programas, entre ellos los siguientes.
        </p>
        
        <RouterLink to="/info">
          <button class="rounded-full px-2 py-2 bg-black text-white hover:bg-[rgb(24,61,246)] font-[Urbanist]">EXIT</button>
        </RouterLink>

      </div>
    
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
        <Card class="cursor-pointer w-55 h-60 hover:bg-[rgb(24,61,246)] hover:text-white transition-all"
        v-for="apps in listaAplicaciones"
        >
        <CardContent class="flex flex-col items-center gap-1 w-full px-0"
        @click="$router.push(`/info/gallery/${ apps.id }`)"
        >
           <img :src="`/imagenes/info/${ apps.icon }`" alt=""
           class="w-48 h-42 object-cover object-top mt-2 rounded-lg border-2 border-black"
           >
            <h2 class="font-medium text-lg">{{ apps.name }}</h2> 
        </CardContent>
      </Card>
      </div>

      <div class="flex items-center justify-center gap-2 mt-4">
  <button
    @click="ireAdPagina(nuncPagina - 1)"
    :disabled="nuncPagina === 1"
    :class="['px-6 py-2 rounded-full font-medium transition-colors font-[Urbanist]',
      nuncPagina === 1
      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
      : 'bg-[rgb(24,61,246)]  text-white hover:bg-black'
    ]"
  >
    Anterior
  </button>

  <button
    v-for="pagina in paginaNumeri"
    @click = "ireAdPagina(pagina)"
    :class="['w-10 h-10 rounded-full font-medium transition-colors font-[Urbanist]',
      nuncPagina === pagina
      ? 'bg-[rgb(24,61,246)] text-white'
      : 'bg-white text-black'
    ]"
  >
    {{ pagina }}

  </button>

 <button
  :disabled="nuncPagina === totalPaginas"
  @click="ireAdPagina(nuncPagina+1)"
  :class="[
    'px-6 py-2 rounded-full font-medium transition-colors font-[Urbanist]',
    nuncPagina === totalPaginas
      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
      : 'bg-[rgb(24,61,246)] text-white hover:bg-black'
  ]"
>
  Siguiente
</button>
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

  p {
    font-family: Urbanist;
    font-weight: 600;
  }

</style>