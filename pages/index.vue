<template>
    <div class="h-100 bg-blue-grey" >
        <div class="" style="position: relative;">
            <div class="d-none d-sm-block">
                <v-img src="~/assets/predwhitedesf2.png" width="700" 
                        style="position: absolute; top: 13.5%; left: 40%;  height: 200px; z-index: 100;"
                ></v-img>

                <v-img src="~/assets/predreddesf.png" width="700" cover
                        style="position: absolute; top: 30.7%; right: -1%;  height: 200px;"
                ></v-img>

                <v-img src="~/assets/predwhitedesf.png" width="85%" cover
                        style="position: absolute; top: 61.5%; left: 5%; z-index: 1;  "
                ></v-img>
                
                <v-img src="~/assets/predwhite.png" width="100" height="500" 
                        style="position: absolute; top: 37.5%; left: -2.7%; z-index: 1;  "
                ></v-img>
                
                <v-img src="~/assets/predwhite.png" width="100" height="500" 
                        style="position: absolute; top: 43.3%; right:-3.1%; z-index: 1;  "
                ></v-img>

                <v-img src="~/assets/predwhite.png" width="100" height="500" 
                        style="position: absolute; top: 52.5%; left:-2.5%; z-index: 1;  "
                ></v-img>

                <v-img src="~/assets/predblue.png" width="300" height="1180"  
                        style="position: absolute; top: 71.5%; right: -8%; z-index: 1;  "
                ></v-img>

            </div>



            <!--Começa as secções do site-->
            <div 
            class="d-none  mt-16 d-sm-flex justify-end align-center "
            style="background-image: url('/banner.png'); background-size: contain; height: 900px; overflow: hidden; background-position: left left; position: relative;" 
            >
                <div style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; background-color: rgba(0, 0, 0, .2);"></div>
                <div class="h-75 w-50 pl-16 pr-4 " style="position: relative">
                    <v-img src="~/assets/partelogo2.png" width="200" class="" ></v-img>
                    <div style="position: absolute; top: 0; left: 0; bottom: 0; right: 0; z-index: 10;">
                        <div class="">
                            <div class="d-flex align-center  montserrat-font  " style="height: 200px; ">
                                <div class=" d-flex h-100 pl-16 ml-16" >
                                    <p class=" align-self-center text-h4 montserrat-font text-white font-weight-black ml-16">HÁ</p>
                                    <p class=" montserrat-font font-weight-black text-white  "  style="font-size: 140px;">30</p>
                                    <p class="align-self-center mt-16 pt-8 text-h3 montserrat-font text-white font-weight-black">ANOS</p>
                                </div> 
                            </div>

                            <div>
                                <div class="mt-2 pl-16">
                                    <h2 class="text-white text-h4 montserrat-font">SUA PARCERIRA CONFIÁVEL</h2>
                                    <h2 class="text-white text-h4 montserrat-font ml-12">EM SOLUÇÕES INDUSTRIAIS</h2>
                                </div>

                                <P class="w-75 text-h6 text-white montserrat-font mt-10 pl-16" >
                                    Oferecemos inspeções, consultoria e treinamentos especializados, bem como a plataforma inteligente S3i® para inspeções industriais e soluções de automação industrial, incluindo monitoramento térmico por termografia infravermelha. Garantimos segurança, confiabilidade e produtividade para nossos clientes...
                                </P>
                                <v-btn class="mt-4 ml-16" append-icon="mdi-arrow-top-right" color="indigo-darken-4">SAIBA MAIS</v-btn>
                                
                            </div>
                        </div>
                       
                    </div>

                </div>
            
            </div>

            <BannerPrincipalmobile />









            <!--mci-->
            <div 
            class="d-none d-sm-block"
            style="background-image: url('/bgmci.png'); background-size: cover; height: 1000px; overflow: hidden; background-position: left left; " 
            >
                <v-container>
                    <div class="">
                        <v-img src="~/assets/2.png" width="300" cover></v-img>
                        <div class="">
                            <p class="text-h5 text-uppercase w-50 text-white montserrat-font">Obtenha <span class="text-white montserrat-font font-weight-black ">todo o potencial <br>na sua manutenção</span>  de <br>forma simples e estruturada</p>
                        </div>
                        <div style="border: 10px solid white; width: 750px; height: 420px;" class=" d-flex justify-center align-center pa-3 mt-10" >
                            <v-img src="~/assets/mci.jpeg" cover height="400"></v-img>
                        </div>
                        <div class="my-6 ">
                            <p class="text-white montserrat-font" style="width: 750px;">Desenvolvido pela Pred Engenharia, o método MCI® trouxe uma perspectiva inovadora que, diferente de outros métodos existentes no mercado, promove a integração da cadeia de valores da Manutenção através de atribuições e entregáveis claramente definidos e auditáveis...</p>
                        </div>

                        <v-btn
                        append-icon="mdi-arrow-top-right"
                        variant="flat"
                        color="#B71C1C"
                        to="/mci"
                        >Saiba mais sobre o método</v-btn>
                    </div>
                </v-container>
                            
            </div>


            <MciMciprincipal />  













            <!--serviços-->
            <div 
            class="pb-16 d-none d-sm-block"
            style="background-image: url('/pred_site_03.png'); background-size: cover; overflow: hidden;" 
            >
            
        

            <div class="d-flex pa-16 align-center">
                <div class=" mr-10"><v-img src="~/assets/partelogo2.png" width="40"></v-img></div>
                
                <h1 class="text-white montserrat-font font-weight-black">NOSSOS SERVIÇOS</h1>
            </div>

            <div class="w-100 d-flex">
                <div class="w-50">
                    <v-img src="~/assets/services1.png" ></v-img>
                </div>
                <div class="w-50 px-8 mt-6">
                    <div class="mb-4">
                        <h1 class="text-h4 text-white"><span class="text-red-accent-4">#1</span> <span>SERVIÇOS DE ENGENHARIA DE</span> <strong>MANUTENÇÃO & CONFIABILIDADE</strong></h1>
                    </div>
                    <div>
                        <p class="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero unde rem vel voluptatem quia reprehenderit commodi. Aspernatur impedit neque maxime reprehenderit corporis incidunt ex! Porro provident optio ducimus illum maxime!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet placeat laudantium quaerat itaque fugit ad dignissimos, ratione corrupti consequuntur suscipit optio ut quam incidunt est illum perspiciatis molestiae repudiandae?</p>
                    </div>
                    <v-btn       
                    append-icon="mdi-arrow-top-right"
                    class="mt-6 "
                    to="/services/engenharia-manutencao-e-confiabilidade"
                    color="#1A237E"
                    >Saiba mais</v-btn>

                </div>
            </div>



            <div class="w-100 d-flex">
                <div class="w-50 pl-16 pr-4 mt-6">
                    <div class="ml-6">     
                        <div class="mb-4">
                            <h1 class="text-h4 text-white"><span class="text-red-accent-4">#1</span> <span>SERVIÇOS DE ENGENHARIA DE</span> <strong>MANUTENÇÃO & CONFIABILIDADE</strong></h1>
                        </div>
                        <div>
                            <p class="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero unde rem vel voluptatem quia reprehenderit commodi. Aspernatur impedit neque maxime reprehenderit corporis incidunt ex! Porro provident optio ducimus illum maxime!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet placeat laudantium quaerat itaque fugit ad dignissimos, ratione corrupti consequuntur suscipit optio ut quam incidunt est illum perspiciatis molestiae repudiandae?</p>
                        </div>
                        <v-btn       
                        append-icon="mdi-arrow-top-right"
                        class="mt-6 "
                        to="/services/inspecoes"
                        color="#1A237E"
                        >Saiba mais</v-btn>
                    </div>

                </div>
                <div class="w-50"><v-img src="~/assets/services2.jpg" ></v-img></div>
            </div>


            <div class="w-100 d-flex">
                <div class="w-50">
                    <v-img src="~/assets/services3.png" ></v-img>
                </div>
                <div class="w-50 px-8 mt-6">
                    <div class="mb-4">
                        <h1 class="text-h4 text-white"><span class="text-red-accent-4">#1</span> <span>SERVIÇOS DE ENGENHARIA DE</span> <strong>MANUTENÇÃO & CONFIABILIDADE</strong></h1>
                    </div>
                    <div>
                        <p class="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero unde rem vel voluptatem quia reprehenderit commodi. Aspernatur impedit neque maxime reprehenderit corporis incidunt ex! Porro provident optio ducimus illum maxime!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet placeat laudantium quaerat itaque fugit ad dignissimos, ratione corrupti consequuntur suscipit optio ut quam incidunt est illum perspiciatis molestiae repudiandae?</p>
                    </div>
                    <v-btn       
                    append-icon="mdi-arrow-top-right"
                    class="mt-6 "
                    to="/services/s3i"
                    color="#1A237E"
                    >Saiba mais</v-btn>

                </div>
            </div>


            <div class="w-100 d-flex mb-14">
                <div class="w-50 pl-16 pr-4 mt-6">
                    <div class="ml-6">                 
                        <div class="mb-4">
                            <h1 class="text-h4 text-white"><span class="text-red-accent-4">#1</span> <span>SERVIÇOS DE ENGENHARIA DE</span> <strong>MANUTENÇÃO & CONFIABILIDADE</strong></h1>
                        </div>
                        <div>
                            <p class="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero unde rem vel voluptatem quia reprehenderit commodi. Aspernatur impedit neque maxime reprehenderit corporis incidunt ex! Porro provident optio ducimus illum maxime!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet placeat laudantium quaerat itaque fugit ad dignissimos, ratione corrupti consequuntur suscipit optio ut quam incidunt est illum perspiciatis molestiae repudiandae?</p>
                        </div>
                        <v-btn       
                        append-icon="mdi-arrow-top-right"
                        class="mt-6 "
                        to="/services/sft"
                        color="#1A237E"
                        >Saiba mais</v-btn>
                    </div>

                </div>
                <div class="w-50"><v-img src="~/assets/services4.png" ></v-img></div>
            </div>


            </div>



            <ServicesServicesmobile />








            <!--Visão-->
            <div 
            class="w-100 d-none d-sm-flex"
            style="height: 350px;  position: relative; " 
            >
                <div style="position: absolute; top: 0; bottom: 0; right: 0; left: 0; " class="gradiente"></div>
                <div style="width: 50%;"></div>
                <div class="" style="height: 350px;  width: 50%; background-image: url('/visao.png'); background-position: right right; background-size: cover;"></div>
                <!--Conteudo-->
                <div style="position: absolute; top: -5%; bottom: 0; right: 0; left: 4%;  z-index: 1;">
                    <div style="height: 370px; width: 45%;" class=" bg-red-accent-4 ml-16 rounded-te-xl rounded-be-xl rounded-bs-xl d-flex justify-center align-center" >
                        <div class="px-10">
                            <p class="text-h5 font-weight-light">A <span class="font-weight-black"> PRED ENGENHARIA</span> visa atender às necessidades das indústrias, na área de manutenção preditiva industrial, através de prestação de serviços e consultorias. Atua também na pesquisa e desenvolvimento de dispositivos, equipamentos e sistemas voltados para área de manutenção preditiva, instrumentação e controle.</p>
                        </div>
                       
                    </div>

                </div>
            
            </div>

            <VisaoVisaomobile />


            <!--Parcerias-->
            <div class="mb-2 bg-white">
                <v-container class="w-100 ">
                    <v-row class="w-100 ">
                        <v-col cols="6" md="3"><v-img src="~/assets/parceiro/1.png" ></v-img></v-col>
                        <v-col cols="6" md="3"><v-img src="~/assets/parceiro/2.png"></v-img></v-col>
                        <v-col cols="6" md="3"><v-img src="~/assets/parceiro/3.png"></v-img></v-col>
                        <v-col cols="6" md="3"><v-img src="~/assets/parceiro/4.png"></v-img></v-col>
                    </v-row>
                </v-container>
            </div>



            <!--Historias e Conheça-nos-->
            <div
            
            style=" background-image: url('/pred_site_04.png'); background-size: cover; background-position: center center;"
            >
                <historia  style="position: relative; z-index: 10;"/>

                <SobrePagePrincipal style="position: relative; z-index: 10;"/>
            </div>


            <!--Formularios-->
            <div
            class="bg-grey-lighten-1 d-flex"
            style="height: 550px; position: relative;"
            >
            <v-img src="~/assets/predred.png" width="100%" height="300px" cover style="position: absolute; bottom: 0; left: 0;"></v-img>
                <div class=" h-100 w-50">
                    <v-img src="~/assets/sobre.png"  width="100%" class="h-100" cover 
                    @loadstart="handleLoadStart"
                    @load="handleLoad"
                    ></v-img>
                </div>

                <div class="d-flex  align-center h-100">
                    <v-card style="width: 95%;">
                        <v-card-item>
                            <FormularioForm />
                        </v-card-item>
                    </v-card>
                    
                </div>

            </div>




        </div>

    </div>
</template>


<script>

export default {
 
data() {
    return {
      imagemCarregada: false
    };
  },
  methods: {
    handleLoadStart() {
      // Define o estado de carregamento como falso quando o carregamento da imagem começa
      this.imagemCarregada = false;
    },
    handleLoad() {
      // Define o estado de carregamento como verdadeiro quando a imagem é totalmente carregada
      this.imagemCarregada = true;
    }
  }
};


</script>





<style>
.texto-usado {
  /* Pode usar a classe customizada para aplicar a fonte Montserrat também */
  font-family: 'Montserrat', sans-serif;
}

.montserrat-font {
  font-family: 'Montserrat', sans-serif;
}

.gradiente{
        background-image: linear-gradient(to right, rgba(0,0,128,1),rgba(0,0,128,1), rgba(29,35,93,1), rgba(29,35,93,.8), transparent, transparent);
}
</style>