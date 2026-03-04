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
    <div class="flex flex-col items-center justify-center gap-8 w-full max-w-1400px my-8 mx-auto">
  
      <div class="text-center">

        <h1 class="font-bold text-xl lg:text-5xl mb-5">
          Dandadan App, babies!!
        </h1>

        <p class="mb-4">
          Dale a la linea de tu personaje favorito
        </p>

      </div>
    
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
        <Card class="cursor-pointer w-55 h-60 hover:bg-[rgb(24,61,246)] hover:text-white transition-all"
        v-for="apps in listaAplicaciones"
        >
        <CardContent class="flex flex-col items-center gap-1 w-full px-0"
        @click="$router.push(`/info/gallery/${ apps.id }`)"
        >
           <img :src="`/imagenes/info/${ apps.icon }`" alt=""
           class="w-48 h-42 object-cover object-top mt-2 bg-[rgb(13,222,245)] rounded-t-md border border-black"
           >
            <h2 class="font-medium text-lg">{{ apps.name }}</h2> 
        </CardContent>
      </Card>
      </div>

      <div class="flex items-center justify-center gap-2 mt-4">
  <button
    @click="ireAdPagina(nuncPagina - 1)"
    :disabled="nuncPagina === 1"
    :class="['px-4 py-2 rounded-md font-medium transition-colors bg-white hover:bg-[rgb(24,61,246)] hover:text-white',
      nuncPagina === 1
      ? 'bg-white text-black cursor-not-allowed'
      : 'bg-[rgb(24,61,246)] hover:bg-black'
    ]"
  >
    Anterior
  </button>

  <button
    v-for="pagina in paginaNumeri"
    @click = "ireAdPagina(pagina)"
    :class="['w-10 h-10 rounded-md font-medium transition-colors  ',
      nuncPagina === pagina
      ? 'bg-[rgb(24,61,246)] text-white'
      : 'bg-white hover:bg-[rgb(24,61,246)] hover:text-white'
    ]"
  >
    {{ pagina }}

  </button>

  <button
  :disabled="nuncPagina === totalPaginas"
  @click="ireAdPagina(nuncPagina+1)"
    :class="['px-4 py-2 rounded-md font-medium transition-colors bg-white hover:bg-[rgb(24,61,246)] hover:text-white',
      nuncPagina === totalPaginas
      ? 'bg-black text-white cursor-not-allowed'
      : 'bg-[rgb(24,61,246)] hover:bg-black'
    ]"
  >
    Siguiente
  </button>
</div>

    </div>
</template>



<style scoped>

</style>