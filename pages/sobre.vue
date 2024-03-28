<template >
    <div class="pt-14">
        <!-- BANNER PRINCIPAL -->
        <PagesSobreBanner />

        <!--conteudo-->
        <v-main class="pa-0">
            <div  class="pa-4" >
                <div class="d-flex mb-4 pa-2" style="max-height: 400px;">
                    <div style="width: 5px;  background-image: linear-gradient(to bottom, #B71C1C ,transparent, transparent);" class="mr-4 d-sm-none"></div>
                    <p class="text-body-2 mx-auto my-4 font-weight-bold">Nossas inovadoras soluções são disponibilizadas no mercado por meio de três áreas de atuação distintas: Serviços Técnicos, Tecnologia da Informação e Automação Industrial. </p>
                </div>
                <v-img src="/img/sobre/2.jpg" class="rounded mx-auto" max-width="800"></v-img>
            </div>



            <div class="bg-indigo-darken-4 mt-2 py-2 rounded-ts-xl">
                <v-container>
                    <p class="text-body-2 text-md-body-1 py-2 px-4">Cada uma dessas áreas representa pilares fundamentais que nos permitem oferecer um amplo leque de soluções e expertise, atendendo às necessidades variadas dos nossos clientes de forma eficaz e eficiente.</p>
                    <v-list-item prepend-icon="mdi-checkbox-marked-circle-auto-outline" class="text-caption text-md-body-2 mb-2">
                        Na área de Serviços Técnicos, atua com inspeção preditiva, consultoria em engenharia de manutenção e treinamento técnico.
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-checkbox-marked-circle-auto-outline" class="text-caption text-md-body-2 mb-2">
                        Em Tecnologia da Informação, dispõe de uma plataforma chamada S3i (Sistema Inteligente de Inspeções Industriais), que de forma pioneira usa desde 2002 dispositivos móveis de forma rastreável, inteligente e integrada à ERP/EAM, como IBM Maximo, Infor, Oracle JDE, SAP e Totvs.
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-checkbox-marked-circle-auto-outline" class="text-caption text-md-body-2 mb-2">
                        Na área de Automação Industrial provê soluções de monitoramento térmico com termografia infravermelha para melhoria da segurança, qualidade e custo em processos críticos.
                    </v-list-item>  
                </v-container>        
            </div>


            <FormularioForm class="d-sm-none"/>

            <div class="bg-indigo-darken-4 d-flex  align-center flex-column h-100" 
                style="background-image: url('/img/Headers/2.svg'); background-position: 100%; background-size: cover; background-attachment: fixed;"
            >
                
                    <div style="background-color: rgba(26, 35, 126, .9);" class="w-100 h-100 px-5 py-8">
                    
                        <div class="w-100 ">
                            <v-container>
                                <div    
                                style="height: 1px; background-image: linear-gradient(to left, transparent,white, transparent);" 
                                class="mb-6 mx-auto w-75"
                                ></div>
                                <iframe class="w-100  rounded d-sm-none" height="180" src="https://www.youtube.com/embed/rIkOP6XrT-A?si=DUtUFaZoGeqyhGqF&amp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                                ></iframe>
                                <iframe class="w-100  rounded d-none d-sm-block" height="500" src="https://www.youtube.com/embed/rIkOP6XrT-A?si=DUtUFaZoGeqyhGqF&amp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                                ></iframe>
                            </v-container>
                        </div>
                    
                    </div>
                
            </div>

            <PagesPrincipalForms />
            
        </v-main>
    </div>
</template>