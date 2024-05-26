<template >
    <div>
        <div class="bg-indigo-darken-4 d-flex  align-center flex-column h-100" 
            style="background-image: url('/2.svg'); background-position: 100%; background-size: cover; background-attachment: fixed;"
        >
            <div style="background-color: rgba(26, 35, 126, .9);" class="w-100 h-100 px-5 py-8">
                
                <div class="w-100 ">
                    <v-container>
                        <p class="text-center mb-4 text-body-1 text-md-h5">SÉRIE MCI® NO YOUTUBE: <span class="text-red">ELEVE SUA MANUTENÇÃO A UM NOVO PATAMAR</span> </p>
                        <div    
                        style="height: 1px; background-image: linear-gradient(to left, transparent,white, transparent);" 
                        class="mb-6 mx-auto w-75"
                        ></div>
                        <div>
                            <p class="text-right my-4 w-75 mx-auto text-body-2 text-md-body-1">Você está realmente maximizando a disponibilidade dos equipamentos da sua
                            planta? Como anda a sua produtividade? E o controle de custos e eficiência das
                            rotinas de manutenção?</p>
                            <p class="text-caption w-75  mx-auto">Em nossa playlist exclusiva, <span class="text-green-lighten-2">Ozório Rezende, Assessor Técnico da Pred Engenharia,</span> 
                            mergulha profundamente no universo da manutenção industrial. <br><br><span class="text-body-1 mt-2">Prepare-se para
                            uma série de vídeos que vão transformar a sua abordagem à manutenção. Esteja
                            pronto para uma jornada de aprendizado e aprimoramento que levará sua
                            manutenção a um novo patamar!</span> </p>
                        </div>
                        <div class="d-flex justify-space-around align-center py-4 d-sm-none">
                            <v-btn
                                variant="text"
                                icon="mdi-arrow-left-drop-circle"
                                @click="model = Math.max(model - 1, 0)"
                            ></v-btn>
                            {{ model + 1}} de 34
                            <v-btn
                                variant="text"
                                icon="mdi-arrow-right-drop-circle"
                                @click="model = Math.min(model + 1, 4)"
                            ></v-btn>
                        </div>
                        
                    
                    </v-container>

                    <v-carousel
                    v-model="model"
                    hide-delimiter-background
                    height="230"
                    :show-arrows=false
                    class="pa-0  d-sm-none"
                    
                    >
                        <v-carousel-item
                        v-for="(link, i) in links"
                        :key="i"
                        >
                            <iframe class="w-100  rounded" height="180" :src="link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                            ></iframe>
                        </v-carousel-item>
                        <v-carousel-item
                          
                        >
                        <nuxt-link to="https://www.youtube.com/playlist?list=PLA8tyKb1AjYCrcGFOOtj0GiE_o5Q4Rpdk" target="_blank"><v-img src='mci/mciseries.jpg' height="180"></v-img></nuxt-link>
                        </v-carousel-item>
                    </v-carousel>

                    <v-container>
                        <v-carousel
                        v-model="model"
                        hide-delimiter-background
                        height="400"
                        show-arrows="hover"
                        class=" d-none d-sm-block w-75 mx-auto"
                        
                        >
                            <v-carousel-item
                                v-for="(link, i) in links"
                                :key="i"
                                
                            >
                                <iframe class="w-100 mx-auto rounded" height="400" :src="link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                                ></iframe>
                            </v-carousel-item>
                            <v-carousel-item>
                                <nuxt-link to="https://www.youtube.com/playlist?list=PLA8tyKb1AjYCrcGFOOtj0GiE_o5Q4Rpdk" target="_blank"><v-img src='/mci/mciseries.jpg' height="450" ></v-img></nuxt-link>
                            </v-carousel-item>
                        </v-carousel>
                    </v-container>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
  export default {
    data () {
      return {
        model: 0,
        links:[
            'https://www.youtube.com/embed/hUyfKoShxig?si=zSSkqXaigaxvvd6h',
            'https://www.youtube.com/embed/-XwJyf8qyDs?si=O13duEFHV0M3rJvv',
            'https://www.youtube.com/embed/lRGl1G5UjCw?si=opAcM__u7-z_PWi3',
            'https://www.youtube.com/embed/3u2mk_4X3oI?si=vzhf3xC8kDNzxi7k'
        ]
      }
    },
  }
</script>
