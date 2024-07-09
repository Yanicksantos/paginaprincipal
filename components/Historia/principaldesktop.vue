<template>

        <v-container class="py-4  h-100 d-none d-sm-block">
            <div class="px-10">

           
            <div class="d-flex align-center justify-center my-6">
                <div class=" mr-10"><v-img src="/partelogo3.webp" width="40"></v-img></div>
                <h1 class="text-deep-purple-darken-4 font-weight-black">{{ $t('our_journey') }}</h1>
            </div>


             <v-carousel  
                 hide-delimiter-background
                 cycle
                 height="400"
                 :show-arrows=false
                 
                 class="rounded-xl mb-4 "
                 >
                 <v-carousel-item
                 :src="`/historias/${$t('historia_image1')}`"
               
                 ></v-carousel-item>

                 <v-carousel-item
                 :src="`/historias/${$t('historia_image2')}`"
               
                 ></v-carousel-item>
                 <v-carousel-item
                 :src="`/historias/${$t('historia_image3')}`"
               
                 ></v-carousel-item>
                 <v-carousel-item
                 :src="`/historias/${$t('historia_image4')}`"
               
                 ></v-carousel-item>
                 <v-carousel-item
                 :src="`/historias/${$t('historia_image5')}`"
               
                 ></v-carousel-item>
             </v-carousel>
            </div>
         </v-container>

</template>