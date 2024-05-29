<template>
    <div class="h-100  " style="overflow-x: hidden; background-color: #838595; ">
        <div class="" style="position: relative;">
            <div class="d-none d-md-block">
                <v-img src="/predwhitedesf2.png" width="600" 
                        style="position: absolute; top: 800px; left: 40%;  height: 200px; z-index: 100;"
                ></v-img>

                <v-img src="/predreddesf.png" width="600" 
                        style="position: absolute; top: 1810px; right: -1%;  height: 200px;"
                ></v-img>

                <v-img src="/predwhitedesf.png" width="80%" cover
                        style="position: absolute; top: 3600px; left: 5%; z-index: 14;  "
                ></v-img>
                
                <v-img src="/predwhite.png" width="100" height="500" 
                        style="position: absolute; top: 37.5%; left: -2.7%; z-index: 1;  "
                ></v-img>
                
                <v-img src="/predwhite.png" width="100" height="500" 
                        style="position: absolute; top: 43.3%; right:-3.1%; z-index: 1;  "
                ></v-img>

                <v-img src="/predwhite.png" width="100" height="500" 
                        style="position: absolute; top: 52.5%; left:-2.5%; z-index: 1;  "
                ></v-img>

                <v-img src="/predblue.png" width="400" height="1220"  
                        style="position: absolute; top: 4050px; right: -7%; z-index: 1;  "
                ></v-img>

            </div>



            <!--Começa as secções do site-->
            <div 
            class="d-none  mt-16 d-md-flex justify-end align-center "
            style="background-image: url('/banner.webp'); background-size: cover; height: 900px; overflow: hidden; background-position: left left; position: relative;" 
            >
                <div style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; background-color: rgba(0, 0, 0, .2);"></div>
                <div class="h-75 w-50 pl-16 pr-4 " style="position: relative">
                    <v-img src="/partelogo2.webp" width="200" class="" ></v-img>
                    <div style="position: absolute; top: 0; left: 0; bottom: 0; right: 0; z-index: 10;">
                        <div class="">
                            <div class="d-flex align-center  montserrat-font  " style="height: 200px; ">
                                <div class=" d-flex h-100 pl-16 ml-16" >
                                    <p class=" align-self-center text-h4 montserrat-font text-white font-weight-black ml-1">HÁ</p>
                                    <p class=" montserrat-font font-weight-black text-white  "  style="font-size: 140px;">30</p>
                                    <p class="align-self-center mt-16 pt-8 text-h3 montserrat-font text-white font-weight-black">ANOS</p>
                                </div> 
                            </div>

                            <div>
                                <div class=" pl-16">
                                    <h2 class="text-white text-h4  font-weight-thin">SUA PARCERIRA CONFIÁVEL</h2>
                                    <h2 class="text-white text-h4 montserrat-font ml-12">EM SOLUÇÕES INDUSTRIAIS</h2>
                                </div>

                                <P class="w-75 text-h6 text-white montserrat-font  pl-16" >
                                    Por três décadas, temos sido a escolha confiável para empresas em busca de
                                    soluções industriais. Oferecemos inspeções, consultoria e treinamentos
                                    especializados. Além disso, fornecemos a <span class="text-black font-weight-bold">plataforma inteligente S3i®</span> para
                                    inspeções industriais e soluções de automação, incluindo monitoramento térmico
                                    por termografia infravermelha. Nosso compromisso é garantir segurança,
                                    confiabilidade e produtividade para nossos clientes.
                                </P>
                                <v-btn class="mt-2 ml-16" append-icon="mdi-arrow-top-right" color="indigo-darken-4" to="/sobre">SAIBA MAIS</v-btn>
                                
                            </div>
                        </div>
                       
                    </div>

                </div>
            
            </div>

            <BannerPrincipalmobile />









            <!--mci-->
            <div 
            class="d-none d-md-block"
            style="background-image: url('/bgmci.webp'); background-size: cover; height: 1000px; overflow: hidden; background-position: left left; " 
            >
                <v-container>
                    <div class="">
                        <v-img src="/2.webp" width="300" cover></v-img>
                        <div class="">
                            <p class="text-h5 text-uppercase w-50 text-grey-lighten-1 montserrat-font">Obtenha <span class="text-white Roboto-font font-weight-black " >todo o potencial <br>na sua manutenção</span>  de <br>forma simples e estruturada</p>
                        </div>
                        <div style="border: 10px solid white; width: 750px; height: 420px;" class=" d-flex justify-center align-center pa-3 mt-10" >
                            <v-img src="/mci.webp" cover height="400"></v-img>
                        </div>
                        <div class="my-4 ">
                            <p class="text-grey-lighten-1 montserrat-font" style="width: 750px;">Com o <span class="text-red text-h6">método MCI® da Pred Engenharia,</span>  você experimentará uma perspectiva
                            revolucionária na gestão da manutenção. Ao contrário de outros métodos, o MCI®
                            não apenas integra a cadeia de valor da manutenção, mas também oferece
                            atribuições e resultados claros e auditáveis. <span class="text-white ">Prepare-se para uma transformação
                            completa na forma como você enxerga e gerencia a manutenção</span> .</p>
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
            class="pb-16 d-none d-md-block"
            style="background-image: url('/pred_site_03.webp'); background-size: cover; overflow: hidden;" 
            >
            
        

            <div class="d-flex pa-16 align-center">
                <div class=" mr-10"><v-img src="/partelogo2.webp" width="40"></v-img></div>
                
                <h1 class="text-white montserrat-font font-weight-black">NOSSOS SERVIÇOS</h1>
            </div>

            <div class="w-100 d-flex">
                <div class="w-50">
                    <v-img src="/services1.webp" ></v-img>
                </div>
                <div class="w-50 px-6 mt-6">
                    <div class="mb-4">
                        <h1 class="text-h4 text-white montserrat-font"><strong class="text-red-accent-4"># 1</strong> <span  style="opacity: .8;">SERVIÇOS DE ENGENHARIA DE</span> <strong class="">MANUTENÇÃO & CONFIABILIDADE</strong></h1>
                    </div>
                    <div>
                        <p class="text-white pr-4 text-body-2">Na Pred Engenharia, oferecemos uma gama completa de serviços de engenharia
                        projetados para otimizar a performance dos seus equipamentos e processos
                        industriais. De diagnósticos precisos a treinamentos especializados, nossa equipe
                        de especialistas está aqui para impulsionar a eficiência, reduzir custos e maximizar
                        a produtividade da sua operação. Descubra como nossos serviços de ponta podem
                        elevar o seu negócio para novos patamares de sucesso.</p>
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
                            <h1 class="text-h4 text-white "><strong class="text-red-accent-4"># 2</strong> <span class="" style="opacity: .8;">SERVIÇOS TÉCNICOS <br>DE </span> <strong>INSPEÇÃO</strong></h1>
                        </div>
                        <div>
                            <p class="text-white text-body-2">Na Pred Engenharia, oferecemos mais do que simples inspeções; oferecemos uma
                            visão detalhada e abrangente do estado dos seus equipamentos industriais. Nossos
                            serviços técnicos de inspeção vão além do óbvio, utilizando tecnologias avançadas
                            e abordagens inovadoras para revelar os segredos que podem estar escondidos nas
                            entranhas da sua operação. Seja por meio da termografia, análise de vibração,
                            inspeção sensitiva ou outras técnicas especializadas, estamos aqui para fornecer
                            insights valiosos que impulsionam a eficiência, a segurança e a confiabilidade dos
                            seus ativos.
                            </p>
                        </div>
                        <v-btn       
                        append-icon="mdi-arrow-top-right"
                        class="mt-2 "
                        to="/services/inspecoes"
                        color="#1A237E"
                        >Saiba mais</v-btn>
                    </div>

                </div>
                <div class="w-50"><v-img src="/services2.webp" ></v-img></div>
            </div>


            <div class="w-100 d-flex">
                <div class="w-50">
                    <v-img src="/services3.webp" ></v-img>
                </div>
                <div class="w-50 px-8 mt-6">
                    <div class="mb-4">
                        <h1 class="text-h4 text-white"><strong class="text-red-accent-4"># 3</strong> <strong>S3I®</strong> <span  style="opacity: .8;"> - SISTEMA INTELIGENTE <br>DE INTERVENÇÃO INDUSTRIAL</span> </h1>
                    </div>
                    <div>
                        <p class="text-white pr-6 text-body-2">Convidamos você a explorar uma nova era na gestão industrial.
                        Imagine uma ferramenta que não apenas simplifica, mas também aprimora cada
                        etapa da sua manutenção. Aperte abaixo para mergulhar no mundo do S3i® e
                        descubra como ele pode elevar sua operação a novos patamares de excelência.</p>
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
                            <h1 class="text-h4 text-white"><strong class="text-red-accent-4"># 4</strong> <strong>SFT</strong> <span style="opacity: .8;"> - SISTEMA FIXO DE TERMOGRAFIA </span> </h1>
                        </div>
                        <div>
                            <p class="text-white text-body-2">Imagine ter o controle completo das temperaturas críticas em suas operações
                            industriais, mesmo em condições desafiadoras. Com o Sistema Fixo de Termografia
                            (SFT) da Pred Engenharia, essa visão se torna realidade.
                            Quer descobrir como o SFT (Sistema Fixo de Termografia ) pode transformar sua
                            abordagem à segurança operacional e eficiência na indústria? Aperte abaixo para
                            saber mais sobre essa ferramenta inteligente de monitoramento termográfico e leve
                            sua operação a um novo patamar de precisão e confiabilidade.</p>
                        </div>
                        <v-btn       
                        append-icon="mdi-arrow-top-right"
                        class="mt-6 "
                        to="/services/sft"
                        color="#1A237E"
                        >Saiba mais</v-btn>
                    </div>

                </div>
                <div class="w-50"><v-img src="/services4.webp" ></v-img></div>
            </div>


            </div>



            <ServicesServicesmobile />








            <!--Visão-->
            <div 
            class="w-100 d-none d-md-flex"
            style="height: 300px;  position: relative; " 
            >
                <div style="position: absolute; top: 0; bottom: 0; right: 0; left: 0; background-color: rgba(21, 101, 192, .7); z-index: 10;" ></div>
                <div style="position: absolute; top: 0; bottom: 0; right: 0; left: 0; background-color: rgba(0, 0, 0, .4); z-index: 12;" ></div>
                <div style="width: 25%;"></div>
                <div class="" style="height: 300px;  width: 75%; background-image: url('/visao.webp'); background-position: center center; background-size: cover; "></div>
                <!--Conteudo-->
                <div style="position: absolute; top: -6%; bottom: 0; right: 0; left: 4%;  z-index: 15;">
                    <div style="height: 320px; width: 40%;" class=" bg-red-accent-4 ml-16 rounded-te-xl rounded-be-xl rounded-bs-xl d-flex justify-center align-center" >
                        <div class="px-8">
                            <p class="text-h6  montserrat-font" >A <span class="font-weight-black text-white Roboto-font" style="opacity: 1;"> PRED ENGENHARIA</span> visa atender às necessidades das indústrias, na área de manutenção preditiva industrial, através de prestação de serviços e consultorias. Atua também na pesquisa e desenvolvimento de dispositivos, equipamentos e sistemas voltados para área de manutenção preditiva, instrumentação e controle.</p>
                        </div>
                       
                    </div>

                </div>
            
            </div>

            <VisaoVisaomobile />


            <!--Parcerias-->
            <div class="mb-2 bg-white">
                <v-container class="w-100 ">
                    <v-row class="w-100 ">
                        <v-col cols="6" md="3"><v-img src="/parceiro/1.webp" ></v-img></v-col>
                        <v-col cols="6" md="3"><v-img src="/parceiro/2.webp"></v-img></v-col>
                        <v-col cols="6" md="3"><v-img src="/parceiro/3.webp"></v-img></v-col>
                        <v-col cols="6" md="3"><v-img src="/parceiro/4.webp"></v-img></v-col>
                    </v-row>
                </v-container>
            </div>



            <!--Historias e Conheça-nos-->
            <div
            
            style=" background-image: url('/pred_site_04.webp'); background-size: cover; background-position: center center;"
            >
                <historia  style="position: relative; z-index: 10;"/>

                <SobrePagePrincipal style="position: relative; z-index: 10;"/>
            </div>


            <!--Formularios-->
            <div
            class="bg-grey-lighten-1 d-md-flex d-none "
            style="height: 550px; position: relative;"
            >
            <v-img src="/predred.png" width="100%" height="300px" cover style="position: absolute; bottom: 0; left: 0;"></v-img>
                <div class=" h-100 w-50">
                    <v-img src="/sobre.webp"  width="100%" class="h-100" cover 
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

            <div class="d-md-none h-100">
                <v-img
                src="/sobre.webp"
                height="550"
                cover
                class="d-flex justify-center align-center pa-4"
                >
                    <v-card max-width="700" class="mx-auto">
                            <v-card-item>
                                <FormularioForm />
                            </v-card-item>
                    </v-card>
                </v-img>
            </div>




        </div>

    </div>
</template>







<style>

.montserrat-font {
  font-family: 'Montserrat', sans-serif;
}

.Roboto-font {
    font-family: 'Roboto', sans-serif;
}

.gradiente{
        background-image: linear-gradient(to right, rgba(0,0,128,1),rgba(0,0,128,1), rgba(29,35,93,1), rgba(29,35,93,.8), transparent, transparent);
}
</style>