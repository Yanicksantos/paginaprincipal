<template lang="">
    <v-footer class="d-flex flex-column w-100  pa-0"  >
   
       <div class="bg-indigo-darken-4 w-100">
         <v-container>
           <div class="d-flex w-100 align-center px-2">
             <strong class="text-caption text-md-subtitle-2">Conecte-se conosco nas redes sociais</strong>
             <v-spacer></v-spacer>
             <v-btn
                 v-for="icon in icons"
                 :key="icon"
                 class="mx-1 d-sm-none"
                 :icon="icon"
                 variant="plain"
                 size="small"
             ></v-btn>
             <v-btn
                 v-for="icon in icons"
                 :key="icon"
                 class="mx-1 d-none d-sm-block"
                 :icon="icon"
                 variant="plain"
                
             ></v-btn>
           </div>
         </v-container>
       </div>
     

       <div style="background-color: #212121; background-image: url('/footer.gif'); background-size: cover; background-position: center center; overflow-x: hidden;" class="bg-grey w-100">
           <div class="w-100 h-100 py-4 px-5" >
             <v-container>
               <div class="mb-4 text-caption">
                   <div> <v-icon icon="mdi-email-fast-outline"></v-icon> predengenharia@pred.com.br</div>
                   <div class="mt-2"> <v-icon icon="mdi-map-marker-radius"></v-icon> R. Italina Pereira Mota, 440 - Jardim Camburi, Vitória - ES, 29090-370</div>
               </div>
               <hr>
               <div class="mt-4 text-caption">
                   <div>Espírito Santo: +55 27 333755977</div>
                   <div>São Paulo: +55 11 31360817</div>
                   <div>Minas Gerais: +55 31 26261382</div>
                   <div>Rio de Janeiro: +55 21 30053174</div>
                   <div>Região Sul: +55 48 31810364</div>
                   <div>Região Nordeste: +55 85 21805072</div>
                   <div>Região Norte: +55 91 40404351</div>
               </div>
             </v-container>
           </div>
       </div>

       <div class="px-4 py-2 bg-black text-center w-100">
       {{ new Date().getFullYear() }} — <strong>PRED ENGENHARIA</strong>
       </div>
      
   </v-footer>
</template>




<script >

export default {
   data: () => ({
     icons: [
       'mdi-linkedin',
       'mdi-youtube',
       'mdi-instagram',
       'mdi-facebook'
     ],
   }),
 }
</script>
