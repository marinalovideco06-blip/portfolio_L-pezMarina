<script setup lang="ts">
import {Facebook, Instagram, Mail, Phone} from "lucide-vue-next"

import {
  NavigationMenu,
  //NavigationMenuContent,
  //NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  //NavigationMenuTrigger,
  //NavigationMenuViewport,
} from '@/components/ui/navigation-menu'

import { Label } from '@/components/ui/label'

import { Input } from '@/components/ui/input'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const scrollToSection = (id: string) => {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

import { Calendar } from '@/components/ui/calendar'
import type { DateValue } from "reka-ui";
import { ref } from "vue"

const dies = ref<DateValue>()
   

</script>

<template>
    <div>
       <section id="portada" class="bg-black w-full min-h-[60vh] lg:min-h-[95vh] flex flex-col ">
        
        <div class="flex flex-col md:flex-row md:justify-between font-[Urbanist]">
             <h2 class="text-white border-4 rounded-full flex flex-row items-center m-10 mt-13 px-12 py-2 font-bold">
          Contactos y redes.
        </h2>
             <div class="flex flex-row">
                <NavigationMenu class="text-white border-2 rounded-full flex flex-row items-center m-10 mt-13 lg:px-12 lg:py-2 hover:bg-[rgb(24,61,246)] ">
  <NavigationMenuList >

    <NavigationMenuItem>
      <NavigationMenuLink @click="scrollToSection('comisiones.')">
        comisiones.
      </NavigationMenuLink>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuLink @click="scrollToSection('contactos y redes.')">
        contactos y redes.
      </NavigationMenuLink>
    </NavigationMenuItem>

  </NavigationMenuList>
</NavigationMenu>

<Button class="text-white border-4 rounded-full m-10 mt-13 px-2 py-2 font-[Urbanist] font-bold hover:bg-[rgb(24,61,246)]">
  <RouterLink to="/">EXIT</RouterLink>
</Button>
             </div>
          
        </div>
       

        <div class="flex justify-start">
          <img 
        src="/imagenes/home/guias_1.png" 
        alt=""
        class="w-full max-w-7xl h-auto">
        </div>

        <h1 class="bg-black text-white text-3xl md:text-5xl lg:text-6xl border-4 rounded-full px-6 md:px-12 py-4 m-6">
           blue.marina
         </h1>

       </section>

       <section id="comisiones." class="bg-white w-full min-h-[60vh] lg:min-h-[120vh] flex flex-col lg:flex-row">

          <div class="flex flex-col justify-between items-start">
          <div class="flex flex-col">
           <div class="border-black border-4 rounded-full flex flex-row items-center justify-start m-10 mt-20 px-20">
            <img 
               src="/imagenes/contactos/aura-38.png" 
               alt=""
               class="lg:mb-6 lg:w-50 w-20 mb-2 sm:w-24">
            <h1 class="text-4xl">
               comisiones. 
            </h1>
            </div>

            <div class="m-8 px-6 md:px-20">
              <p>Si estás interesado en realizar una comisión, rellena el siguiente formulario y podremos concretar una reunión para hablar los detalles,estoy deseando saber sobre tus ideas...</p>
            </div>
         </div>
          <div>
            <img 
            src="/imagenes/home/guias_5.png" 
            alt=""
            class="w-100 md:w-150 lg:w-200 mb-20"
            >
          </div>
        </div> 

         <div class="w-full max-w-md mx-auto lg:max-w-none lg:w-1/2 mt-20 mb-20 px-10">

          <form  class="flex flex-col gap-10 md:gap-16 justify-around bg-black text-white p-8 md:p-16 rounded-4xl shadow-lg">
          
            <div class="flex flex-col gap-10 justify-around">

              <div class="space-y-2 rounded-full">
             <div></div>     
              <Label for="nombre" class="font-bold font-[Outfit] text-2xl">nombre y apellidos.</Label>
               <Input id="nombre" required class="rounded-full font-[Urbanist]"/>
          </div>
                
          <div class="space-y-2">
              
            <Label for="apellidos" class="font-bold font-[Outfit] text-2xl">correo electrónico.</Label>
               <Input id="apellidos" required class="rounded-full font-[Urbanist]" />

          </div>

          <div class="space-y-2">

           <Select required>
    <SelectTrigger class="border-[rgb(24,61,246)] rounded-full bg-white text-[rgb(24,61,246)] font-bold font-[Outfit] text-2xl">
      <SelectValue placeholder="tipo de proyecto." />
    </SelectTrigger>
    <SelectContent class="bg-white font-[Urbanist]">
      <SelectItem value="ilustración.">
        ilustración.
      </SelectItem>
      <SelectItem value="ux/ui.">
        ux/ui.
      </SelectItem>
      <SelectItem value="marketing.">
        marketing.
      </SelectItem>
      <SelectItem value="diseño.">
        diseño.
      </SelectItem>
      <SelectItem value="storytelling.">
        storytelling.
      </SelectItem>
    </SelectContent>
  </Select>

          </div>

          <div class="space-y-2">

            <Label class="font-bold font-[Outfit] text-2xl">fecha para la reunión.</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <span v-if="dies">
                    {{ dies.day }}/{{ dies.month }}/{{ dies.year }}
                  </span>
                  <span v-else class="font-[Urbanist]">
                    seleccione fecha.
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent>
              <Calendar v-model="dies" />
              </PopoverContent>
            </Popover>

          </div>

          <Button type="submit" class="w-full bg-[rgb(24,61,246)] hover:bg-white hover:text-[rgb(24,61,246)] text-md mt-4 font-bold font-[Outfit] text-2xl rounded-full py-2">
            Enviar solicitud
          </Button>

            </div>

            

          <img 
          src="/imagenes/home/guias_7.png" 
          alt=""
          class="rounded-lg object-cover w-full h-full max-h-150"
          >
              
        </form>
         </div> 
          
          
       
       </section>

       <section id="contactos y redes." class="bg-black w-full min-h-[60vh] lg:min-h-[95vh] flex flex-col justify-end items-start">

         <img 
           src="/imagenes/trabajos/degradado_negro_abajo.PNG" 
           alt=""
           class="z-10 absolute"
           >

         
           <div class="flex flex-col lg:flex-row justify-center z-20">
             //TITULO SECCION
              <div class="flex flex-col justify-around items-center gap-10">  
              
               <div class="border-white border-4 rounded-full text-white flex flex-row items-center mt-13 ">
                <img 
                  src="/imagenes/contactos/aura-39.png" 
                  alt=""
                  class="w-30 m-4">
                <h1 class="text-3xl md:text-5xl lg:text-6xl m-6 md:m-10">
                  contactos. 
                </h1>
              </div> 
                <img 
                  src="/imagenes/contactos/minimarina_2.png" 
                  alt=""
                  class="w-60"
                  >
           </div>

          //CONTACTOS

           <div class="z-20 flex flex-col items-center mt-6 my-5">
            
             <div class="border-white border-4 rounded-full text-white flex flex-row items-center m-10 mt-13 gap-3">
                 <Mail class="w-8 md:w-12 lg:w-15 h-auto m-4 "/>
                 <h1 class="text-2xl">
                    blue.marina@gmail.com 
                 </h1>
                 <img 
                    src="/imagenes/contactos/aura-39.png" 
                    alt=""
                    class="w-20">
                 </div> 

             <div class="border-white border-4 rounded-full text-white flex flex-row items-center m-10 mt-13 gap-3">
               <Instagram class="w-8 md:w-12 lg:w-15 h-auto m-4"/>
               <h1 class="text-2xl">
                  @blue.marina_06 
               </h1>
               <img 
                 src="/imagenes/contactos/aura-39.png" 
                 alt=""
                 class="w-20">
               </div> 

             <div class="border-white border-4 rounded-full text-white flex flex-row items-center m-10 mt-13 gap-3">
                <Facebook class="w-8 md:w-12 lg:w-15 h-auto m-4"/>
                <h1 class="text-2xl">
                   @blue.marina_06 
                </h1>
                <img 
                   src="/imagenes/contactos/aura-39.png" 
                   alt=""
                   class="w-20">
              </div> 

                 <div class="border-white border-4 rounded-full text-white flex flex-row items-center m-10 mt-13 gap-3">
                    <Phone class="w-8 md:w-12 lg:w-15 h-auto m-4"/>
                    <h1 class="text-2xl">
                       246 802 468 
                    </h1>
                 <img 
                    src="/imagenes/contactos/aura-39.png" 
                    alt=""
                    class="w-20">
                 </div> 

         </div>
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