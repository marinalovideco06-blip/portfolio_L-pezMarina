<script setup lang="ts">



</script>


<template>
    <div>
       <section id="portada" class="bg-black w-full min-h-[60vh] lg:min-h-[95vh] flex items-center">
          
        <h1 class="bg-black text-white text-6xl border-4 rounded-full px-12 py-4 m-30 mt-110">
           blue.marina
         </h1>

       </section>

       <section id="personal" class="bg-white w-full min-h-[60vh] lg:min-h-[120vh] flex flex-row">
        
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

       <section id="titulación" class="bg-black w-full min-h-[60vh] lg:min-h-[95vh] flex items-center">

       </section>

       <section id="aplicaciones" class="bg-white w-full min-h-[60vh] lg:min-h-[120vh] flex flex-row">

       </section>

       <section id="habilidades" class="bg-black w-full min-h-[60vh] lg:min-h-[95vh] flex items-center">

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