<template >
    <div >
        <v-img
        class="d-md-none"
        gradient="to top, rgba(0,0,0,.9), rgba(0,0,0,.7),transparent"
        height="350"
        cover
        src="~/assets/services/1.svg"
        >
            <div class=" d-flex flex-column justify-center align-center w-100 h-100 pa-4" style="background-image: linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.7),transparent);">
                <div><v-icon icon="mdi-cog-play" size="50"></v-icon></div>
                <h1 class="text-grey-lighten-1 text-h5 text-center font-weight-bold elevation-24 mt-2 pa-2">SERVIÇOS DE ENGENHARIA DE MANUTENÇÃO E CONFIABILIDADE</h1>
            </div>
        </v-img>

       <!--<div class="d-md-none" style="background-image: url('/img/services/1.svg'); height: 350px; background-size: cover; background-position: center center;">
            <div class=" d-flex flex-column justify-center align-center w-100 h-100 pa-4" style="background-image: linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.7),transparent);">
                <div><v-icon icon="mdi-cog-play" size="50"></v-icon></div>
                <h1 class="text-grey-lighten-1 text-h5 text-center font-weight-bold elevation-24 mt-2 pa-2">SERVIÇOS DE ENGENHARIA DE MANUTENÇÃO E CONFIABILIDADE</h1>
            </div>
        </div>-->

        <!-- DESKTOP -->
        <v-img
        class="d-none d-md-flex mt-14"
        gradient="to top, rgba(0,0,0,.9), rgba(0,0,0,.7),transparent"
        height="600"
        cover
        src="~/assets/services/1.svg"
        >
            <div class=" d-flex flex-column justify-center align-center w-100 h-100 pa-4" style="background-image: linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.7),transparent);">
                <div><v-icon icon="mdi-cog-play" size="50"></v-icon></div>
                <h1 class="text-grey-lighten-1 text-h5 text-md-h2 text-center font-weight-bold elevation-24 mt-6 pa-4">SERVIÇOS DE ENGENHARIA DE MANUTENÇÃO E CONFIABILIDADE</h1>
            </div>
        </v-img>

        <!--<div class="d-none d-md-block mt-14" style="background-image: url('/img/services/1.svg'); height: 600px; background-size: cover; background-position: center center;">
            <div class=" d-flex flex-column justify-center align-center w-100 h-100 pa-4" style="background-image: linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.7),transparent);">
                <div><v-icon icon="mdi-cog-play" size="50"></v-icon></div>
                <h1 class="text-grey-lighten-1 text-h5 text-md-h2 text-center font-weight-bold elevation-24 mt-6 pa-4">SERVIÇOS DE ENGENHARIA DE MANUTENÇÃO E CONFIABILIDADE</h1>
            </div>
        </div>-->







        <v-main class="pa-0">
            <div>
                <v-container>
                    <div class="px-6 py-6 ml-6">
                        <h1 class="text-h4 font-weight-bold">Sistematização da Manutenção</h1>
                        <div 
                        style="width: 100%; height: 1px; background-image: linear-gradient(to left, transparent, transparent,#1A237E);" 
                        class="mb-4 my-6"></div>
                        <p class="text-grey-darken-3 text-body-2">A sistematização racional da manutenção pode contribuir para a redução de 15 a 30% de seu custo fixo/variável.</p>
                    </div>

                    <div class="px-6 pb-4">
                        <v-img src="~/assets/man/1.jpg" class="rounded my-6" max-width="700"></v-img>
                        <div class="text-grey-darken-3 my-4">
                            <p class="text-caption my-2">Depois da onda de implementações de sistemas de gestão integrada com ênfase no contábil, os chamados ERP <span class="font-italic">(Enterprise Resource Planning)</span>, é hora da manutenção partir para uma nova forma de integrar seus ativos reduzindo custos e melhorando controles.</p>
                            <p class="text-body-2 text-md-body-1 my-6">O problema ganha dimensões ainda maiores no caso de grandes indústrias que têm como ponto crítico os seus custos de manutenção. Reduzir essas despesas se torna prioridade à medida que os custos de manutenção de ativos representam de 20% a 40% do total de custos operacionais destas empresas alcançando, em todo o mundo, aproximadamente US$ 1 trilhão ao ano. A boa notícia é que esse valor pode (e deve), ser reduzido em cerca de um terço com a adoção de uma boa gestão dos ativos operacionais, que parte de uma implantação racional do sistema/módulo de gestão da manutenção.</p>
                        </div>
                    </div>
                </v-container>
                <div class="px-4 py-4 bg-grey-lighten-2 h-100" >
                    <v-container>
                        <div class=" pa-2">
                            <h4 class="text-body-2 text-md-body-1 pa-2">Com a experiência de 20 anos nesta área, a Pred Engenharia apoia consultivamente no desenvolvimento e/ou na implementação de projetos envolvendo:</h4>
                            <div class="bg-grey-lighten-3 my-4 py-2 rounded">
                                <v-list-item prepend-icon="mdi-cog-play" class="text-caption text-md-body-2 mb-2">
                                    Cadastro de ativos (físicos e funcionais);
                                </v-list-item>
                                <v-list-item prepend-icon="mdi-cog-play" class="text-caption text-md-body-2 mb-2">
                                    Criação/revisão de Planos de manutenção com ênfase na inspeção e lubrificação;
                                </v-list-item>
                                <v-list-item prepend-icon="mdi-cog-play" class="text-caption text-md-body-2 mb-2">
                                    Computação móvel para operacionalização e gestão da manutenção, de forma que a solução não se limite a um simples e-paper. A partir da analise crítica dos requisitos do cliente a Pred Engenharia contribui na formatação do projeto, envolvendo definição da tecnologia de transmissão, definição de hardware, implementação de código de barras/2D/RFID e estratégia de integração com o SAP/PM, MAXIMO, MICROSIGA, dentre outros;
                                </v-list-item>
                                <v-list-item prepend-icon="mdi-cog-play" class="text-caption text-md-body-2 mb-2">
                                    Criação/revisão de Listas técnicas de sobressalentes e estratégia de estoque;
                                </v-list-item>
                                <v-list-item prepend-icon="mdi-cog-play" class="text-caption text-md-body-2">
                                    Nivelamento racional do RH da manutenção através da contabilização de tempos e movimentos das equipes, e sua capacitação através das competências essenciais, utilizando metodologia própria. Neste processo a Pred Engenharia apoia o cliente na avaliação dos aspectos comportamentais/culturais, que não devem ser desconsiderados.
                                </v-list-item>
                            </div>
                            <div class="text-caption text-md-body-1 pa-2">Caso a sua necessidade seja apoio na migração de ERP ou troca de versão do mesmo, a Pred Engenharia fornece o serviço de preparação dos dados mestres do legado para uma nova versão e/ou estrutura de dados.</div>
                        </div>
                    </v-container>
                </div>
                

                <!--outra secção-->

                <div class="bg-white px-6" >
                    <v-container>
                        <div class=" py-4 ml-6 my-4">
                            <h1 class="text-h4 font-weight-bold">Engenharia de Lubrificação</h1>
                            <div 
                            style="width: 100%; height: 1px; background-image: linear-gradient(to left, transparent, transparent,#1A237E);" 
                            class="mb-6 mt-6"></div>
                            <p class="text-grey-darken-3 text-caption text-medium-emphasis font-weight-light my-4">Pelo menos 50% das falhas em rolamentos e 60% dos problemas em redutores de engrenagens estão associadas à lubrificação.</p>
                        </div>
                        <div >
                            <p class="text-body-2 text-md-body-1 mb-2">A Pred Engenharia disponibiliza cinco serviços de engenharia essenciais à otimização técnica, gerencial e financeira dos seus processos de lubrificação de equipamentos. São eles:</p>
                            <v-img src="~/assets/man/2.jpg" class="rounded mx-auto my-4" max-width="600"></v-img>
                        </div>
                    </v-container>
                </div>

                  <!--outra secção-->

                  <div class="bg-white px-6 py-2 my-4" >
                    <v-container>
                        <div class=" py-2 ml-4 " >
                            <div class=" mt-4  text-h4 font-weight-bold" >
                                Planejamento da Manutenção
                            </div>
                            <div    
                            style="width: 70%; height: 1px; background-image: linear-gradient(to left, transparent, transparent,#1A237E);" 
                            class="my-6"></div>
                            <p class="text-white text-caption s font-weight-light">O seu planejamento da manutenção foi feito em campo ou dentro de sala?</p>
                        </div>
                        <div >
                            <v-img src="~/assets/man/3.jpg" class="rounded-shaped my-6 mx-auto" max-width="600"></v-img>
                            <div>
                                <p class="text-body-2 text-md-body-1 mt-4">É muito comum encontrar planos de manutenção que são cópias exatas dos manuais dos equipamentos. Esta prática é típica de planejamentos feitos dentro de sala, ou seja, sem levantamento em campo das peculiaridades das instalações. Quando isso ocorre, acredite, as execuções destes planos provavelmente estão sendo feitas dentro da oficina/escritório. Isso é denominado pela Pred Engenharia como Gestão do Autoengano, ou seja, alguém fez de conta que planejou e as equipes envolvidas estão fazendo de conta que executam.</p>
                                <p class="text-body-2 text-md-body-1 my-3">A Pred Engenharia acredita que um bom plano de manutenção é aquele que é “cumprível”. Para tanto, precisa ser feito em campo e por profissionais experientes, seguindo procedimentos/diretrizes formalmente definidos no <a href="#" class="text-decoration-none">diagnóstico da manutenção</a>, sobre as quatro linhas de planejamento acima ilustrado.</p>
                            </div>
                        
                        </div>
                    </v-container>
                </div>

                <!--outra secção-->

                <div  class="bg-white px-6 py-4">
                    <v-container>
                        <div class=" py-2 ml-6" >
                            <div class=" mt-4 text-h4 font-weight-bold " >
                                Diagnóstico da Manutenção
                            </div>
                            <div    
                            style="width: 70%; height: 1px; background-image: linear-gradient(to left, transparent, transparent,#1A237E);" 
                            class="my-6"></div>
                            <p class="text-white text-caption s font-weight-light">Um diagnóstico racional da sua manutenção fornecerá subsídios para decisões que poderão reduzir seus custos na ordem de 15 a 30%.</p>
                        </div>
                        <div >
                            <v-img src="~/assets/man/4.png" class="rounded-shaped my-6 mx-auto" max-width="600"></v-img>
                            <p class="text-body-2 text-md-body-1 mt-4">A metodologia Pred Engenharia para a elaboração do diagnóstico da manutenção lhe permite cruzar informações de cinco fontes, e assim obter indicadores que determinarão as medidas necessárias para otimizar os resultados de sua manutenção.</p>
                        </div>
                    </v-container>
                </div>


                <!--outra secção-->
                <div class="px-4 py-4 bg-grey-lighten-1 h-100" >
                    <v-container>
                        <div class=" pa-2">
                            <div class="px-6 py-4">
                            <h1 class="text-h4 font-weight-bold">Capacitação de Equipes</h1>
                            <div 
                            style="width: 100%; height: 1px; background-image: linear-gradient(to left, transparent, transparent,#1A237E);" 
                            class="my-6"></div>
                            <p class="text-grey-darken-3 text-body-2 text-md-body-1">A Pred Engenharia disponibiliza treinamentos abertos ou fechados às suas reais necessidades, sempre acompanhados de medição de eficiência e eficácia.</p>
                        </div>

                        
                        <div class="bg-grey-lighten-3 mt-2 pa-6 rounded">
                            <p class="text-body-2 py-2 px-4 text-md-body-1">A Pred Engenharia é especialista em treinamentos de alto valor agregado. Através da FLIR, disponibiliza os Treinamentos nível 1 e 2 do ITC (Infrared Training Center), em ambientes abertos e também in company. Promove também treinamentos fechados, customizados e voltados à engenharia de aplicação de técnicas e práticas de planejamento e controle da manutenção/inspeção. São eles:</p>
                            <v-list-item prepend-icon="mdi-cog-play" class="text-caption text-md-body-2 mb-2">
                                Planejamento e Controle da Manutenção – Partindo da RBM (Rice & Beans Maintenance) e chegando a RCM (Reliability Centered Maintenance).
                            </v-list-item>
                            <v-list-item prepend-icon="mdi-cog-play" class="text-caption text-md-body-2 mb-2">
                                Aplicações avançadas da termografia em inspeções de instalações elétricas.
                            </v-list-item>
                            <v-list-item prepend-icon="mdi-cog-play" class="text-caption text-md-body-2 mb-2">
                                Aplicações avançadas da termografia em inspeções de revestimentos estruturais (refratários).
                            </v-list-item>
                            <v-list-item prepend-icon="mdi-cog-play" class="text-caption text-md-body-2 mb-2">
                                Aplicações avançadas da termografia em inspeções de equipamentos rotativos.
                            </v-list-item>
                            <v-list-item prepend-icon="mdi-cog-play" class="text-caption text-md-body-2">
                                Aplicações avançadas da termografia em inspeções de equipamentos estáticos.
                            </v-list-item>
                            <v-list-item prepend-icon="mdi-cog-play" class="text-caption text-md-body-2">
                                Aplicações avançadas da termografia em monitoramento de processos (automação).
                            </v-list-item>
                            <v-list-item prepend-icon="mdi-cog-play" class="text-caption text-md-body-2">
                                Capacitação de equipes de lubrificadores e gestores.
                            </v-list-item>
                        </div>
                        
                    </div>
                    </v-container>
                </div>


                   <!--outra secção-->

                <div class="bg-white px-6 py-4" >
                    <v-container>
                        <div class=" py-4 ml-6">
                            <h1 class="text-h4 font-weight-bold">Auditoria da Manutenção</h1>
                            <div 
                            style="width: 100%; height: 1px; background-image: linear-gradient(to left, transparent, transparent,#1A237E);" 
                            class="my-6"></div>
                            <p class="text-grey-darken-3 text-caption text-medium-emphasis font-weight-light">Confira, através de auditorias, se os planos e as rotinas de sua manutenção estão sendo de fato atualizados na linha do tempo.</p>
                        </div>
                        <div >
                            <v-img src="~/assets/man/5.jpg" class="rounded my-6 mx-auto" max-width="600"></v-img>
                            <p class="text-body-2  text-md-body-1 mb-3">O grande desafio dos gestores da manutenção é garantir que, os processos de análise crítica sobre as rotinas da manutenção, estejam acontecendo e que os resultados destes estejam sendo usados na otimização do plano de manutenção.</p>
                            <p class="text-body-2 text-md-body-1 mb-2">Com um programa regular de auditorias você terá como detectar a descontinuidade destes processos e tomar medidas para a regularização, antes que os mesmos reflitam na sua taxa de falhas/interrupções e/ou nos custos da manutenção.</p>
                        </div>
                    </v-container>
                </div>


                        <FormularioFormulariopages />
                  

            </div>
        </v-main>
       
        
    </div>
</template>