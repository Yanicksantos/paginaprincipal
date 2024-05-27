<template >
    <div class="pt-14">
        <!-- BANNER PRINCIPAL -->
        <SobreBanner />

        <!--conteudo-->
        <v-main class="pa-0">
            <div  class="pa-4" >
                <div class="d-flex mb-4 pa-2" style="max-height: 400px;">
                    <div style="width: 5px;  background-image: linear-gradient(to bottom, #B71C1C ,transparent, transparent);" class="mr-4 d-sm-none"></div>
                    <p class="text-body-2 mx-auto my-4 font-weight-bold">Nossas soluções inovadoras são oferecidas através de três áreas principais:
                   <span class="text-red text-body-1">Serviços Técnicos, Tecnologia da Informação e Automação Industrial.</span>  
                    </p>
                </div>
                <v-img src="/sobre/2.webp" class="rounded mx-auto" max-width="600"></v-img>
            </div>



            <div class="bg-indigo-darken-4 mt-2 py-2 rounded-ts-xl">
                <v-container>
                    <p class="text-body-2 text-md-body-1 py-2 px-4">Cada uma de nossas áreas representa pilares fundamentais que nos permitem
                    oferecer uma ampla gama de soluções e expertise, atendendo eficazmente às
                    diversas necessidades de nossos clientes.</p>
                    <v-list-item prepend-icon="mdi-checkbox-marked-circle-auto-outline" class="text-caption text-md-body-2 mb-2">
                        <span class="text-red text-body-1">Na área de Serviços Técnicos, </span> oferecemos inspeção preditiva, consultoria em
                        engenharia de manutenção e treinamento técnico.
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-checkbox-marked-circle-auto-outline" class="text-caption text-md-body-2 mb-2">
                        <span class="text-red text-body-1">Em Tecnologia da Informação,</span>  apresentamos o S3i (Sistema Inteligente de
                        Inspeções Industriais), uma plataforma pioneira que utiliza dispositivos móveis de
                        forma rastreável, inteligente e integrada com sistemas como IBM Maximo, Infor,
                        Oracle JDE, SAP e Totvs, desde 2002.
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-checkbox-marked-circle-auto-outline" class="text-caption text-md-body-2 mb-2">
                       <span class="text-red text-body-1">Na área de Automação Industrial,</span>  fornecemos soluções de monitoramento térmico
                        por termografia infravermelha para aprimorar a segurança, qualidade e eficiência em
                        processos críticos.
                    </v-list-item>  
                </v-container>        
            </div>



            <div class="bg-indigo-darken-4 d-flex  align-center flex-column h-100" 
                style="background-image: url('/2.webp'); background-position: 100%; background-size: cover; background-attachment: fixed;"
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
                                <iframe class="w-50 mx-auto rounded d-none d-sm-block" height="300"  src="https://www.youtube.com/embed/rIkOP6XrT-A?si=DUtUFaZoGeqyhGqF&amp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                                ></iframe>
                            </v-container>
                        </div>
                    
                    </div>
                
            </div>

            <FormularioFormulariopages />
            
        </v-main>
    </div>
</template>