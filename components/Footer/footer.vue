<template lang="">
    <v-footer class="d-flex flex-column w-100  pa-0"  >
   
       <div class="bg-indigo-darken-4 w-100">
         <v-container>
           <div class="d-flex w-100 align-center px-2">
             <strong class="text-caption text-md-subtitle-2">{{ $t('connect_social') }}</strong>
             <v-spacer></v-spacer>
            
                
                <nuxt-link 
                v-for="(social, i) in socias"
                :key="i"
                :to="social.to" 
                target="_blank"
                class="mx-1 d-sm-none"
                    
                >
                <v-icon :icon="social.icon" color="white" size="small"></v-icon>
              </nuxt-link>
               
                <nuxt-link 
                v-for="(social, i) in socias"
                :key="i"
                :to="social.to" 
                target="_blank"
                class="mx-2 d-none d-sm-inline"
                    
                >
                <v-icon :icon="social.icon" color="white"></v-icon>
              </nuxt-link>
                
             
           
           </div>
         </v-container>
       </div>
     

       <div  class="bg-grey w-100">
           <div class="w-100 h-100 py-4 px-5" >
             <v-container>
               <div class="mb-4 text-caption text-md-body-2 text-indigo-darken-4">
                   <div> <v-icon icon="mdi-email-fast-outline"></v-icon> predengenharia@pred.com.br</div>
                   <div class="mt-2"> <v-icon icon="mdi-map-marker-radius"></v-icon> R. Italina Pereira Mota, 440 - Jardim Camburi, Vitória - ES, 29090-370</div>
               </div>
               <hr>
               <div class="mt-4 text-caption text-md-h6 text-indigo-darken-4">
                   <div> <v-icon icon="mdi-phone-dial" class="mr-4 "></v-icon>  +55 27 3337-5977</div>
                   
               </div>
             </v-container>
           </div>
       </div>

       <div class="px-4 py-2 bg-black text-center w-100">
       {{ new Date().getFullYear() }} — <strong>PRED ENGENHARIA</strong>
       </div>
      
   </v-footer>
</template>




<script setup>

const socias = [
    { icon: 'mdi-linkedin', to: 'https://www.linkedin.com/company/pred-engenharia/' },
    { icon: 'mdi-youtube', to: 'https://www.youtube.com/@predengenharia3567' },
    { icon: 'mdi-instagram', to: 'https://www.instagram.com/predengenharia/' },
    { icon: 'mdi-facebook', to: 'https://www.facebook.com/PredEngenharia/' }
  ]
</script>
