<template>
    <div>
        <v-img
        class="d-md-none"
        height="350"
        cover
        src="~/assets/services/4.svg"
        gradient="to top, rgba(0,0,0,.9), rgba(0,0,0,.75), transparent"
        >
            <div class=" d-flex flex-column justify-center align-center w-100 h-100 pa-4" style="background-image: linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.75), transparent);">
                <div><v-icon icon="mdi-cogs" size="50"></v-icon></div>
                <h1 class="text-grey-lighten-1 text-h5 text-center font-weight-bold elevation-24 mt-2 pa-2">SFT <br>SISTEMA FIXO DE TERMOGRAFIA </h1>
            </div>
        </v-img>
        <!--
        <div class="d-md-none" style="background-image: url('/img/services/4.svg'); height: 350px; background-size: cover; background-position: center center;">
            <div class=" d-flex flex-column justify-center align-center w-100 h-100 pa-4" style="background-image: linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.75), transparent);">
                <div><v-icon icon="mdi-cogs" size="50"></v-icon></div>
                <h1 class="text-grey-lighten-1 text-h5 text-center font-weight-bold elevation-24 mt-2 pa-2">SFT <br>SISTEMA FIXO DE TERMOGRAFIA </h1>
            </div>
        </div>-->

        <!-- desktop -->
        <v-img
        class="d-none d-md-flex mt-14"
        cover
        height="600"
        src="~/assets/services/4.svg"
        gradient="to top, rgba(0,0,0,.9), rgba(0,0,0,.75), transparent"
        >
        <div class=" d-flex flex-column justify-center align-center w-100 h-100 pa-4" style="background-image: linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.75), transparent);">
                <div><v-icon icon="mdi-cogs" size="50"></v-icon></div>
                <h1 class="text-grey-lighten-1 text-h5  text-md-h2  text-center font-weight-bold elevation-24 mt-2 pa-4">SFT <br>SISTEMA FIXO DE TERMOGRAFIA </h1>
            </div>
        </v-img>
        <!--
        <div class="d-none d-md-block mt-14" style="background-image: url('/img/services/4.svg'); height: 600px; background-size: cover; background-position: center center;">
            <div class=" d-flex flex-column justify-center align-center w-100 h-100 pa-4" style="background-image: linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.75), transparent);">
                <div><v-icon icon="mdi-cogs" size="50"></v-icon></div>
                <h1 class="text-grey-lighten-1 text-h5  text-md-h2  text-center font-weight-bold elevation-24 mt-2 pa-4">SFT <br>SISTEMA FIXO DE TERMOGRAFIA </h1>
            </div>
        </div>-->
        
        
        <v-main class="pa-0">
            <div>
                <v-container>
                    <div class="px-6 py-4">
                        <h1 class="text-body-2 text-md-body-1 font-weight-bold text-center">Uma solução da Pred acompanhada de engenharia de aplicação e ferramentas específicas</h1>
                        <div 
                        style="width: 50%; height: 1px; background-image: linear-gradient(to left, transparent, #1A237E, transparent);" 
                        class="mx-auto my-6"></div>
                        <p class="text-grey-darken-3 text-caption my-2 text-center d-md-none">SISTEMA FIXO POR TERMOGRAFIA</p>
                    </div>

                    <div class="px-6 pb-1 d-md-none">
                        <p class="text-caption my-2">Na indústria, muitas anormalidades ou acidentes operacionais poderiam ser facilmente evitados ou amenizado os seus impactos, se as operações fossem visualizadas em tempo real e integral. Inconvenientes como baixa luminosidade, mal tempo e condições operacionais adversas, dificultam a visualização das operações e consequentemente ampliam a probabilidade da ocorrência de um acidente ou da perda do controle de um processo.</p>
                        <v-img src="~/assets/sft/1.png" class="rounded " cover height="200"></v-img>
                        <div class="text-grey-darken-3 ">
                            <p class="text-caption my-2">A termografia por infravermelho é o método mais confiável e preciso no acompanhamento contínuo de operações onde a temperatura é uma das variáveis do processo. As câmeras termográficas utilizadas pela Pred Engenharia, possuem lentes com zoom contínuo oferecendo uma solução singular de rastreamento e medição de temperaturas em diferentes distancias. A lente de zoom é totalmente controlada por software especialista. Os sistemas fixos de termografia (SFT), fornecidos pela Pred Engenharia, são customizados para atender as mais diversas aplicações de análises e avaliações sistêmicas de irregularidades quantitativas e/ou qualitativas. Sua aplicação se faz presente em processos relacionados à visão de apoio e em controle de processos.</p>
                            <p class="text-caption my-2">Único no mercado que realiza auditoria da qualidade e efetividade de todos os tipos de inspeção em tempo real por meio de uma metodologia própria.</p>
                            <v-img src="~/assets/sft/2.png" class="rounded mt-4" ></v-img>
                       </div>
                    </div>

                    <div class="d-none d-md-block">
                        <v-row class="my-4">
                            <v-col cols="5" class="d-flex justify-center align-center"> 
                                <p class="text-body-1 pa-2">Na indústria, muitas anormalidades ou acidentes operacionais poderiam ser facilmente evitados ou amenizado os seus impactos, se as operações fossem visualizadas em tempo real e integral. Inconvenientes como baixa luminosidade, mal tempo e condições operacionais adversas, dificultam a visualização das operações e consequentemente ampliam a probabilidade da ocorrência de um acidente ou da perda do controle de um processo.</p>
                            </v-col>
                            <v-col cols="7">
                                <v-img src="~/assets/sft/1.png" class="rounded-xl " height="400" cover></v-img>
                            </v-col>
                        </v-row>
                      
                        <v-row class="my-4">
                            <v-col cols="6">
                                <v-img src="~/assets/sft/2.png" class="rounded align-left" height="600" cover></v-img>
                           </v-col>
                            <v-col cols="6" class="d-flex justify-center align-center">
                                <div>
                                    <p class="text-body-1 pa-2 my-2">A termografia por infravermelho é o método mais confiável e preciso no acompanhamento contínuo de operações onde a temperatura é uma das variáveis do processo. As câmeras termográficas utilizadas pela Pred Engenharia, possuem lentes com zoom contínuo oferecendo uma solução singular de rastreamento e medição de temperaturas em diferentes distancias. A lente de zoom é totalmente controlada por software especialista. Os sistemas fixos de termografia (SFT), fornecidos pela Pred Engenharia, são customizados para atender as mais diversas aplicações de análises e avaliações sistêmicas de irregularidades quantitativas e/ou qualitativas. Sua aplicação se faz presente em processos relacionados à visão de apoio e em controle de processos.</p>
                                    <p class="text-body-1 pa-2 my-2">Único no mercado que realiza auditoria da qualidade e efetividade de todos os tipos de inspeção em tempo real por meio de uma metodologia própria.</p>
                                </div>
                           </v-col>
                          
                        </v-row>
                    </div>
                </v-container>


                <div class="px-6 py-4 bg-grey-lighten-2">
                    <v-container>   
                        <div class="d-md-none">
                            <h1 class="text-body-2 font-weight-bold text-center">Visão de Apoio</h1>
                            <div 
                            style="width: 50%; height: 1px; background-image: linear-gradient(to left, transparent, #1A237E, transparent);" 
                            class="mx-auto my-2"></div>

                            <div class="text-grey-darken-3 ">
                                <p class="text-caption my-2">Com ênfase na segurança operacional em equipamentos e processos, esse tipo de aplicação, classificada de baixo custo e de alto valor agregado, é essencialmente qualitativa (distribuição térmica) e possibilita supervisão em tempo real e integral.</p>
                                <v-img src="~/assets/sft/3.jpg" class="rounded mt-4" height="200" cover></v-img>
                            </div>

                            <h1 class="text-body-2 font-weight-bold text-center mt-4">Controle de Processos</h1>
                            <div 
                            style="width: 50%; height: 1px; background-image: linear-gradient(to left, transparent, #1A237E, transparent);" 
                            class="mx-auto my-2"></div>

                            <div class="text-grey-darken-3 ">
                                <p class="text-caption my-2">A termografia aplicada a controle de processos visa assegurar qualidade, produtividade e/ou segurança. As aplicações são qualitativas e também quantitativas em operações em tempo real e integral.</p>
                                <v-img src="~/assets/sft/3.jpg" class="rounded mt-4" height="200" cover></v-img>
                            </div>

                            <div class="text-grey-darken-3 mt-2">
                                <p class="text-caption my-2">A termografia aplicada a controle de processos visa assegurar qualidade, produtividade e/ou segurança. As aplicações são qualitativas e também quantitativas em operações em tempo real e integral.</p>
                                <v-img src="~/assets/sft/4.jpg" class="rounded my-6" height="300" cover></v-img>
                                <p class="text-caption my-2">As soluções da Pred, aplicadas a controle de processos são sempre acompanhadas de engenharia de aplicação e ferramentas específicas. O Portal SFT é uma dessas ferramentas. É um sistema inteligente para a supervisão e monitoração de tendências termográficas de equipamentos e processos nas mais diversas aplicações industriais. O Portal SFT é totalmente configurável e apto a trabalhar em nuvem.</p>
                                <p class="text-caption my-2">A termografia por infravermelho é o método mais confiável e preciso no acompanhamento contínuo de operações em locais com condições adversas para visualização.</p>
                        
                            </div>
                        </div>


                        <div class="d-none d-md-block">
                            <v-row>
                                <v-col>
                                    <div>
                                        <h1 class="text-body-1 font-weight-bold px-6 my-4">Visão de Apoio</h1>
                                            <p class="text-body-1 mt-8 px-6">Com ênfase na segurança operacional em equipamentos e processos, esse tipo de aplicação, classificada de baixo custo e de alto valor agregado, é essencialmente qualitativa (distribuição térmica) e possibilita supervisão em tempo real e integral.</p>
                                        </div>
                                </v-col>
                                <v-col>
                                    <v-img src="~/assets/sft/3.jpg" class="rounded mt-4" height="200" cover></v-img>
                                </v-col>
                            </v-row>

                            <v-row class="text-grey-darken-3 my-6">
                                <v-col>
                                    <div>
                                        <h1 class="text-body-1 font-weight-bold px-6 my-4">Controle de Processos</h1>
                                            <p class="text-body-1 mt-8 px-6">A termografia aplicada a controle de processos visa assegurar qualidade, produtividade e/ou segurança. As aplicações são qualitativas e também quantitativas em operações em tempo real e integral.</p>
                                        </div>
                                </v-col>
                                <v-col>
                                    <v-img src="~/assets/sft/5.jpg" class="rounded mt-4" height="200" cover></v-img>
                                </v-col>
                            </v-row>

                            <v-row class="text-grey-darken-3 my-6">
                                <v-col cols="5">
                                    <v-img src="~/assets/sft/4.jpg" class="rounded mt-4" height="400" cover></v-img>
                                </v-col>
                                <v-col cols="7" class="d-flex justify-center align-center">
                                    <div>
                                        <p  class="text-body-1 pa-2 my-2">As soluções da Pred, aplicadas a controle de processos são sempre acompanhadas de engenharia de aplicação e ferramentas específicas. O Portal SFT é uma dessas ferramentas. É um sistema inteligente para a supervisão e monitoração de tendências termográficas de equipamentos e processos nas mais diversas aplicações industriais. O Portal SFT é totalmente configurável e apto a trabalhar em nuvem.</p>
                                        <p class="text-body-1 pa-2  my-2">A termografia por infravermelho é o método mais confiável e preciso no acompanhamento contínuo de operações em locais com condições adversas para visualização.</p> 
                                    </div>
                                </v-col>
                              
                            </v-row>
                        </div>                    
                    </v-container>
                </div>



                <FormularioFormulariopages />
            </div>
        </v-main>






    </div>
</template>