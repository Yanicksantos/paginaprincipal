<template>
  <div>
      <v-container class=" h-100  d-sm-none" >
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
   

      <!-- historia desktop --->
         <v-container class="py-4  h-100 d-none d-sm-block">
            <div class="px-10">

           
            <div class="d-flex align-center justify-center my-6">
                <div class=" mr-10"><v-img src="/partelogo3.png" width="40"></v-img></div>
                <h1 class="text-deep-purple-darken-4 font-weight-black">UM POUCO DA NOSSA CAMINHADA</h1>
            </div>


             <v-carousel  
                 hide-delimiter-background
                 
                 height="500"
                 
                 class="rounded-xl mb-4 "
                 >
                 <v-carousel-item
                 src='/historias/1.webp'
               
                 ></v-carousel-item>

                 <v-carousel-item
                 src='/historias/2.webp'
               
                 ></v-carousel-item>
                 <v-carousel-item
                 src='/historias/3.webp'
               
                 ></v-carousel-item>
                 <v-carousel-item
                 src='/historias/4.webp'
               
                 ></v-carousel-item>
                 <v-carousel-item
                 src='/historias/5.webp'
               
                 ></v-carousel-item>
             </v-carousel>
            </div>
         </v-container>
    
    </div>    

</template>



