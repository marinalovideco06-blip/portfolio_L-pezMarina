<script setup lang="ts">
import { useRoute } from 'vue-router'
import { works } from '@/data/works'

const route = useRoute()
const id = Number(route.params.id)

const work = works.find(w => w.id === id)
</script>

<template>
  <div class="bg-black text-white flex flex-col items-center min-h-screen">
    <h1 class="text-4xl mt-10">{{ work?.title }}</h1>
    <img :src="work?.image" class="w-64 h-64 mt-5"/>
    <p class="mt-5 px-10 text-center">{{ work?.description }}</p>
  </div>
</template>