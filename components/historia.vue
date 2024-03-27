<template>
  <div>
      <v-container class=" h-100  d-sm-none" >
             <div class=" mt-4 mb-2 ml-2  text-h6" style="color: #BDBDBD;">
                 <strong class="font-weight-bold text-white"  >Um pouco da</strong>  nossa caminhada
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
                 v-for="(src, i) in srcs"
                 :key="i"
                 :src=src
                 cover
                 class="rounded-lg "
                 ></v-carousel-item>
             </v-carousel>
         </v-container>         
   

      <!-- historia desktop --->
         <v-container class="py-4  h-100 d-none d-sm-block">
            <div class="px-10">

           
            <div class="d-flex align-center justify-center my-6">
                <div class=" mr-10"><v-img src="~/assets/partelogo3.png" width="40"></v-img></div>
                <h1 class="text-deep-purple-darken-4 font-weight-black">UM POUCO DA NOSSA CAMINHADA</h1>
            </div>


             <v-carousel  
                 hide-delimiter-background
                 
                 height="500"
                 
                 class="rounded-xl mb-4 "
                 >
                 <v-carousel-item
                 v-for="(src2, i) in scrs2"
                 :key="i"
                 :src=src2
               
                 ></v-carousel-item>
             </v-carousel>
            </div>
         </v-container>
    
    </div>    

</template>




<script>
 export default {
   data () {
     return {
        srcs:[
             '/historias/2.jpeg',
             '/historias/3.jpeg',
             '/historias/4.jpeg',
             '/historias/5.jpeg',
             '/historias/6.jpeg'
        ],
        scrs2:[
             '/historias/1.svg',
             '/historias/2.svg',
             '/historias/3.svg',
             '/historias/4.svg',
             '/historias/5.svg'
        ]
     }
   },
 }
</script>
