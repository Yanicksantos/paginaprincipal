<template>
    <div>
        <v-img
        class="d-md-none "
        height="350"
        gradient="to top, rgba(0,0,0,.9), transparent"
        cover
        src="~/assets/services2.jpg"
        dark
        >
            <div class=" d-flex flex-column justify-center align-center w-100 h-100 pa-4" style="background-image: linear-gradient(to top, rgba(0,0,0,.9), transparent);">
                
                <div><v-icon icon="mdi-account-search" size="50"></v-icon></div>
                <h1 class="text-grey-lighten-1 text-h5 text-center font-weight-bold elevation-24 mt-2 pa-2">SERVIÇOS TÉCNICOS DE INSPEÇÃO</h1>           
            
            </div>
        </v-img>



        <!--<div class="d-md-none" style="background-image: url('~/assets/services/2.svg'); height: 350px; background-size: cover; background-position: center center;">
            <div class=" d-flex flex-column justify-center align-center w-100 h-100 pa-4" style="background-image: linear-gradient(to top, rgba(0,0,0,.9), transparent);">
                <div><v-icon icon="mdi-account-search" size="50"></v-icon></div>
                <h1 class="text-grey-lighten-1 text-h5 text-center font-weight-bold elevation-24 mt-2 pa-2">SERVIÇOS TÉCNICOS DE INSPEÇÃO</h1>
            </div>
        </div>-->

        <!-- desktop -->

        <v-img
        class="d-none d-md-flex mt-14"
        gradient="to top, rgba(0,0,0,.9), transparent"
        height="600"
        cover
        src="~/assets/services2.jpg"
        dark
        >
            <div class=" d-flex flex-column justify-center align-center w-100 h-100 pa-4" style="background-image: linear-gradient(to top, rgba(0,0,0,.9), transparent);">
                <div><v-icon icon="mdi-account-search" size="50"></v-icon></div>
                <h1 class="text-grey-lighten-1 text-h5 text-md-h2 text-center font-weight-bold elevation-24 mt-2 pa-4">SERVIÇOS TÉCNICOS DE INSPEÇÃO</h1>
            </div>
        </v-img>

        <!--<div class="d-none d-md-block mt-14" style="background-image: url('/img/services/2.svg'); height: 600px; background-size: cover; background-position: center center;">
            <div class=" d-flex flex-column justify-center align-center w-100 h-100 pa-4" style="background-image: linear-gradient(to top, rgba(0,0,0,.9), transparent);">
                <div><v-icon icon="mdi-account-search" size="50"></v-icon></div>
                <h1 class="text-grey-lighten-1 text-h5 text-md-h2 text-center font-weight-bold elevation-24 mt-2 pa-4">SERVIÇOS TÉCNICOS DE INSPEÇÃO</h1>
            </div>
        </div>-->
        
        <v-main class="pa-0">
            <div>
                <v-container>
                    <div class="px-6 py-4 ml-6">
                        <h1 class="text-h4 font-weight-bold">Termografia</h1>
                        <div 
                        style="width: 70%; height: 1px; background-image: linear-gradient(to left, transparent, transparent,#1A237E);" 
                        class="mb-4 mt-2"></div>
                        <p class="text-grey-darken-3 text-caption">Evitar falhas e acidentes em instalações é tão simples quanto deixa-las ocorrer.</p>
                    </div>

                    <div class="px-6 py-4">
                        <v-img src="~/assets/inspecoes/1.jpg" class="rounded "></v-img>
                        <div class="text-grey-darken-3 ">
                            <p class="text-caption text-md-body-1 my-2">A termografia é uma técnica que permite mapear um corpo ou uma região com o objetivo de distinguir áreas de diferentes temperaturas, sendo, portanto uma técnica que permite a visualização artificial da luz dentro do espectro infravermelho.</p>
                            <p class="text-caption  text-md-body-1 my-2">A termografia tem um papel muito importante na área de manutenção preditiva. Através da sua utilização, é possível eliminar muitos problemas de produção, evitando falhas elétricas, mecânica e fadiga de materiais.</p>
                            <p class="text-caption  text-md-body-1 my-2">A Pred Engenharia atua no mercado de serviços e produtos ligados a Termografia Industrial desde 1993, operando em todos os estados do Brasil e em outros países. Neste segmento, desenvolvemos e utilizamos tecnologias de ponta para planejamento, inspeções, análises, cálculos, avaliações e gerenciamentos termográficos para as mais diversas aplicações industriais.</p>
                            <p class="text-caption text-md-body-1 my-2">Como forma de prevenir acidentes e falhas técnicas, a norma técnica ABNT NBR 15763.2009 recomenda o uso da termografia infravermelha em sistemas elétricos em intervalos de seis meses.  Empresas seguradoras apreciam esta prática de inspeção em suas avaliações de risco e, em casos específicos, exigem laudos periódicos de termografia como forma de se evidenciar a boa condição técnica das instalações dos clientes.</p>
                        </div>
                    </div>
                </v-container>
                <!--outra seção-->
                <div class="bg-grey-lighten-2  px-6 py-2" >
                    <v-container>
                        <div class="ml-6 py-2" >
                            <div class=" mt-4 text-h4 font-weight-bold ">
                                Análise de Vibração
                            </div>
                            <div    
                            style="width: 60%; height: 1px; background-image: linear-gradient(to left, transparent, transparent,#1A237E);" 
                            class="my-6 "></div>
                            <p class=" text-caption   font-weight-light">Técnica que permite a detecção e diagnóstico precoce de anomalias em componentes móveis de equipamentos.</p>
                        </div>
                        <div >
                            <v-img src="~/assets/inspecoes/2.jpg" class="rounded my-6 mx-auto" max-width="600"></v-img>
                            <div>
                                <p class="text-caption text-md-body-1 my-4">A Análise de Vibração é o processo pelo qual as falhas em componentes móveis de um equipamento são descobertas pela taxa de variação das forças dinâmicas geradas. Tais forças afetam o nível de vibração, que pode ser avaliado em pontos acessíveis das máquinas, sem interromper o funcionamento dos equipamentos.
                                <br><br>A análise de vibração usa a condição operacional real do equipamento e está baseada no conhecimento do estado da máquina através de medições periódicas ou contínuas de um ou mais parâmetros significativos, evitando assim, paradas inesperadas e substituição de peças desnecessárias.</p>
                            
                            </div>
                        
                        </div>
                    </v-container>
                </div>
                
                   <!--outra seção-->
                <v-container>
                    <div class="bg-white px-6" >
                        <div class="ml-6 py-4">
                            <h1 class="text-h4 font-weight-bold">Inspeção por Ultrassom</h1>
                            <div 
                            style="width: 100%; height: 1px; background-image: linear-gradient(to left, transparent, transparent,#1A237E);" 
                            class="my-6"></div>
                            <p class="text-grey-darken-3 text-caption text-medium-emphasis font-weight-light">Possibilita a detecção e análise de defeitos mecânicos em máquinas de baixa rotação, instalações elétricas, vazamentos de fluidos gasosos, dentre outros.</p>
                        </div>
                        <div >
                            <v-img src="~/assets/inspecoes/3.png" class="rounded "></v-img>
                            <p class="text-caption text-md-body-1 my-4">A inspeção por ultrassom detecta sons produzidos por operações mecânicas, emissões elétricas e fluxo de fluidos. A detecção por ultrassom permite encontrar falhas em praticamente todos os equipamentos existentes e em instalações industriais.</p>
                            
                        </div>
                    </div>

                    <div class="px-6 py-4" >
                        <div class="ml-6 py-4">
                            <h1 class="text-h4 font-weight-bold">Inspeção Sensitiva</h1>
                            <div 
                            style="width: 100%; height: 1px; background-image: linear-gradient(to left, transparent, transparent,#1A237E);" 
                            class="my-6"></div>
                            <p class="text-grey-darken-3 text-caption text-medium-emphasis font-weight-light">Obtenha resultados de alto valor agregado integrando as inspeções sensitivas às preditivas.</p>
                        </div>
                        <div >
                            <v-img src="~/assets/inspecoes/4.png" class="rounded "></v-img>
                            <p class="text-caption text-md-body-1 my-4">Esta é a modalidade de inspeção que abrange praticamente todos os modos de falhas do equipamento ou instalação industrial. Apesar de se limitar normalmente ao uso dos sentidos naturais do inspetor, ela, na maioria das vezes é suficientemente capaz de detectar e diagnósticar anomalias em seus estágios mediano de degradação. Com  a utilização de computação móvel, as inspeções sensitivas executadas pela Pred Engenharia passam a ser inteligentes e altamente rastreáveis.</p>
                        </div>
                        
                    </div>
                </v-container>
                 <FormularioFormulariopages />

            </div>
        </v-main>

    </div>
</template>