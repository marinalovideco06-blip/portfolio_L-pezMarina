<script setup lang="ts">

import {
  NavigationMenu,
  NavigationMenuItem,
  //NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle, 
} from '@/components/ui/navigation-menu'
import NavigationMenuLink from "@/components/ui/navigation-menu/NavigationMenuLink.vue";

import { Toggle } from '@/components/ui/toggle'
import { onMounted, onUnmounted, ref } from "vue";

interface MenuItemus {
    label: string,
    href: string,
    onClick?: () => void,
}

interface Props {
    items: MenuItemus[],
    homeRoute?: string
}

withDefaults(defineProps<Props>(),{
   homeRoute: '/',
})

 const videreMenu = ref<boolean>(true)
    
 const handleResize = () => {
      if(window.innerWidth <= 640){
        videreMenu.value = false;
      }else{
        videreMenu.value = true;
      }
    }

    onMounted(() => {
      handleResize()
      window.addEventListener('resize', handleResize)
    })

    onUnmounted(() => {
      window.removeEventListener('resize',handleResize)
    })

</script>



<template>
   
     <div>

     
  <Toggle class="fixed top-2 right-4 bg-[rgb(24,61,246)]"
  @click="videreMenu = !videreMenu" 
  >
  <Menu />
  </Toggle>

<nav v-if="videreMenu" class="extra-nav flex flex-col sm:flex-row justify-between px-3">
 <RouterLink :to="homeRoute">
      <HouseHeart class="icon-home" />
    </RouterLink>

     <NavigationMenu>
    <NavigationMenuList class="flex flex-col sm:flex-row">

      <NavigationMenuItem v-for="item in items" :key="item.label">
       <a 
       :href="item.label" 
       @click.prevent="item.onClick && item.onClick()"
       >
        <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md hover:bg-[rgb(24,61,246)] hover:text-white transition-all']">
                 {{  item.label }} 
        </NavigationMenuLink>
       </a>
      </NavigationMenuItem>


    </NavigationMenuList>
  </NavigationMenu>

</nav>

    </div>


</template>



<style scoped>

.icon-home {

    color:blue;
    width: 3rem;
    height: 3rem;
}

.icon-home:hover{

    color:white;
    background-color: blue;
}

.extra-nav {
  background-color: white;
  opacity: 0.7;
  box-shadow: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  width: 11rem;
  border-radius: 0 0 1rem 0;
  z-index: 1;
}

@media (min-width: 640px){
  .extra-nav {
    width: 100%;
    border-radius: 0;
    opacity: 1;
    left: 0;
  }
}


</style>