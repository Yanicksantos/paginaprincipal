<template>
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
            <div class="w-50 px-4 ">
                <div class="mb-2">
                    <h1 class="text-lg-h4 text-h6  text-white montserrat-font"><strong class="text-red-accent-4"># 1</strong> <span  style="opacity: .8;">SERVIÇOS DE ENGENHARIA DE</span> <strong class="">MANUTENÇÃO & CONFIABILIDADE</strong></h1>
                </div>
                <div>
                    <p class="text-white pr-4 text-lg-body-1 text-caption">Na Pred Engenharia, oferecemos uma gama completa de serviços de engenharia
                    projetados para otimizar a performance dos seus equipamentos e processos
                    industriais. De diagnósticos precisos a treinamentos especializados, nossa equipe
                    de especialistas está aqui para impulsionar a eficiência, reduzir custos e maximizar
                    a produtividade da sua operação. Descubra como nossos serviços de ponta podem
                    elevar o seu negócio para novos patamares de sucesso.</p>
                </div>
                <v-btn       
                append-icon="mdi-arrow-top-right"
                class="mt-2 text-caption"
                to="/servicos/engenharia-manutencao-e-confiabilidade"
                color="#1A237E"
                >Saiba mais</v-btn>

            </div>
        </div>



        <div class="w-100 d-flex">
            <div class="w-50 pl-16 pr-4 ">
                <div class="ml-6">     
                    <div class="mb-2">
                        <h1 class="text-lg-h4 text-h6 text-white "><strong class="text-red-accent-4"># 2</strong> <span class="" style="opacity: .8;">SERVIÇOS TÉCNICOS <br>DE </span> <strong>INSPEÇÃO</strong></h1>
                    </div>
                    <div>
                        <p class="text-white text-lg-body-1 text-caption">Na Pred Engenharia, oferecemos mais do que simples inspeções; oferecemos uma
                        visão detalhada e abrangente do estado dos seus equipamentos industriais. Nossos
                        serviços técnicos de inspeção vão além do óbvio, utilizando tecnologias avançadas
                        e abordagens inovadoras para revelar os segredos que podem estar escondidos nas
                        entranhas da sua operação. <span class="d-none d-lg-inline">Seja por meio da termografia, análise de vibração,
                        inspeção sensitiva ou outras técnicas especializadas, estamos aqui para fornecer
                        insights valiosos que impulsionam a eficiência, a segurança e a confiabilidade dos
                        seus ativos.</span> 
                        </p>
                    </div>
                    <v-btn       
                    append-icon="mdi-arrow-top-right"
                    class="mt-4 text-caption"
                    to="/servicos/inspecoes"
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
            <div class="w-50 px-8 ">
                <div class="mb-4">
                    <h1 class="text-lg-h4 text-h6 text-white"><strong class="text-red-accent-4"># 3</strong> <strong>
                        <span style="position: relative;" class="mr-2">S3I<span class="text-caption" style="position: absolute; top: 0;">®</span></span>
                    </strong> <span  style="opacity: .8;"> - SISTEMA INTELIGENTE <br>DE INTERVENÇÃO INDUSTRIAL</span> </h1>
                </div>
                <div>
                    <p class="text-white pr-6 text-lg-body-1 text-caption">Convidamos você a explorar uma nova era na gestão industrial.
                    Imagine uma ferramenta que não apenas simplifica, mas também aprimora cada
                    etapa da sua manutenção. Aperte abaixo para mergulhar no mundo do S3i® e
                    descubra como ele pode elevar sua operação a novos patamares de excelência.</p>
                </div>
                <v-btn       
                append-icon="mdi-arrow-top-right"
                class="mt-4 text-caption"
                to="/servicos/s3i"
                color="#1A237E"
                >Saiba mais</v-btn>

            </div>
        </div>


        <div class="w-100 d-flex mb-14">
            <div class="w-50 pl-16 pr-4">
                <div class="ml-6">                 
                    <div class="mb-2">
                        <h1 class="text-lg-h4 text-h6 text-white"><strong class="text-red-accent-4"># 4</strong> <strong>SFT</strong> <span style="opacity: .8;"> - SISTEMA FIXO DE TERMOGRAFIA </span> </h1>
                    </div>
                    <div>
                        <p class="text-white text-body-1">Imagine ter o controle completo das temperaturas críticas em suas operações
                        industriais, mesmo em condições desafiadoras. Com o Sistema Fixo de Termografia
                        (SFT) da Pred Engenharia, essa visão se torna realidade.
                        Quer descobrir como o SFT (Sistema Fixo de Termografia ) pode transformar sua
                        abordagem à segurança operacional e eficiência na indústria? <span class="d-none d-lg-inline">Aperte abaixo para
                        saber mais sobre essa ferramenta inteligente de monitoramento termográfico e leve
                        sua operação a um novo patamar de precisão e confiabilidade.</span></p>
                    </div>
                    <v-btn       
                    append-icon="mdi-arrow-top-right"
                    class="mt-4 text-caption"
                    to="/servicos/sft"
                    color="#1A237E"
                    >Saiba mais</v-btn>
                </div>

            </div>
            <div class="w-50"><v-img src="/services4.webp" ></v-img></div>
        </div>
    </div>
</template>