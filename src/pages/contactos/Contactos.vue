<script setup lang="ts">
import {Facebook, Instagram, Mail, Phone} from "lucide-vue-next"
</script>

<template>
    <div>
       <section id="portada" class="bg-black w-full min-h-[60vh] lg:min-h-[95vh] flex items-center">
         
         <div class="px-200">
            <h1 class="bg-black text-white text-6xl border-4 rounded-full px-12 py-4 m-30 mt-110">
           blue.marina
         </h1>
         </div>
        

       </section>

       <section id="comisiones." class="bg-white w-full min-h-[60vh] lg:min-h-[120vh] flex flex-row">
        
         <div class="flex flex-col p-10 justify-center gap-15">
          <img 
           src="/imagenes/informacion/imagen_1.jpg" 
           alt=""
           class="w-2/2 h-auto">

           <img 
           src="/imagenes/informacion/imagen_2.jpg" 
           alt=""
           class="w-2/2 h-auto">
         </div>
        

        <div class="flex flex-col justify-start ">
            <div class="border-black border-4 rounded-full flex flex-row items-center m-10 mt-13">
            <img 
               src="/imagenes/informacion/aura-32.png" 
               alt="">
            <h1 class="text-4xl">
               información personal. 
            </h1>
            </div>

            <div class="flex flex-col items-end">
               <p class="m-40 mt-20">
              Mi nombre es Marina López Villegas, y soy una diseñadora, ilustradora y escritura. Especializada en desarrollo de proyectos multidisciplinares de organización, marketing, narrativa y storytelling y desarrollo de tecnologías interactivas 
            </p>

            <img 
               src="/imagenes/informacion/minimarina_1.png" 
               alt=""
               class="w-50 p-3"
               >
            </div>
            
        </div>   
       
       </section>

       <section id="contactos y redes." class="bg-black w-full min-h-[60vh] lg:min-h-[95vh] flex flex-col justify-end items-start">

         <img 
           src="/imagenes/trabajos/degradado_negro_abajo.PNG" 
           alt=""
           class="z-10 absolute"
           >

         
           <div class="flex flex-row justify-center z-20">
             //TITULO SECCION
              <div class="flex flex-col justify-around items-center gap-10">  
              
               <div class="border-white border-4 rounded-full text-white flex flex-row items-center mt-13 ">
                <img 
                  src="/imagenes/contactos/aura-39.png" 
                  alt=""
                  class="w-30 m-4">
                <h1 class="text-6xl m-10">
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
                 <Mail class="w-15 h-auto m-4 "/>
                 <h1 class="text-2xl">
                    blue.marina@gmail.com 
                 </h1>
                 <img 
                    src="/imagenes/contactos/aura-39.png" 
                    alt=""
                    class="w-20">
                 </div> 

             <div class="border-white border-4 rounded-full text-white flex flex-row items-center m-10 mt-13 gap-3">
               <Instagram class="w-15 h-auto m-4 "/>
               <h1 class="text-2xl">
                  @blue.marina_06 
               </h1>
               <img 
                 src="/imagenes/contactos/aura-39.png" 
                 alt=""
                 class="w-20">
               </div> 

             <div class="border-white border-4 rounded-full text-white flex flex-row items-center m-10 mt-13 gap-3">
                <Facebook class="w-15 h-auto m-4 "/>
                <h1 class="text-2xl">
                   @blue.marina_06 
                </h1>
                <img 
                   src="/imagenes/contactos/aura-39.png" 
                   alt=""
                   class="w-20">
              </div> 

                 <div class="border-white border-4 rounded-full text-white flex flex-row items-center m-10 mt-13 gap-3">
                    <Phone class="w-15 h-auto m-4 "/>
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