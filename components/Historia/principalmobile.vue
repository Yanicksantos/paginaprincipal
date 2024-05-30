<template>
        <v-container class=" h-100  d-sm-none">
             <div class=" mt-4 mb-2 ml-2  text-h6 text-black" >
                 <strong class="font-weight-bold text-black"  >Um pouco da</strong>  nossa caminhada
             </div>
             <div    
             style="width: 70%; height: 1px; background-image: linear-gradient(to left, transparent,white);" 
             class="mb-8 mx-2"></div>

             <v-carousel  
             hide-delimiter-background
             cycle
             height="300"
             :show-arrows=false
             class="rounded-lg mb-4"
             >
                 <v-carousel-item
                 src='/historias/21.webp'
                 cover
                 class="rounded-lg "
                 ></v-carousel-item>

                 <v-carousel-item
                 src='/historias/31.webp'
                 cover
                 class="rounded-lg "
                 ></v-carousel-item>

                 <v-carousel-item
                 src='/historias/41.webp'
                 cover
                 class="rounded-lg "
                 ></v-carousel-item>

                 <v-carousel-item
                 src='/historias/51.webp'
                 cover
                 class="rounded-lg "
                 ></v-carousel-item>

                 <v-carousel-item
                 src='/historias/61.webp'
                 cover
                 class="rounded-lg "
                 ></v-carousel-item>
             </v-carousel>
         </v-container>     
</template>