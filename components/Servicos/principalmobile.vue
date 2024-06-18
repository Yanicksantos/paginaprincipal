<template>
    <div class="bg-grey-lighten-3 d-sm-none">
        <div  class="rounded-ts-xl " >
            <div  class="h-100 w-100 d-flex justify-center align-center bg-grey-lighten-3 ">
                                        
                <div class="w-100 px-4 py-6">
                        <div class="pt-3 px-2 pb-2 text-h5  text-indigo-darken-4">
                                Nossos Serviços
                        </div>
                        <div 
                        style="width: 70%; height: 1px; background-image: linear-gradient(to left, transparent, transparent,#1A237E);" 
                        class="mb-4 mx-2"></div>
                    <v-card
                    class="mx-auto w-100 mb-4 rounded-xl"
                    v-for="(servico, i) in services"
                    :key="i"
                    flat
                    >
                    <nuxt-link :to="servico.to" class="text-decoration-none">
                    <v-img
                    class="align-end text-white"
                        height="200"
                        :src="servico.src"
                        cover
                        gradient="to bottom, transparent,rgba(0,0,0,.4), rgba(0,0,0,1)"
                    >
                    <v-card-title class="text-right text-caption">
                        {{ servico.title }}
                    </v-card-title>
                    </v-img>

                    <v-card-subtitle 
                    class="mx-1 my-3 text-black" 
                    v-if="servico.subtile !== false"
                    v-for="(subtitle, i) in servico.subtile"
                    :key="i"
                    >
                        <v-icon
                        size="large"
                        class="mr-2"
                        icon="mdi-account-hard-hat-outline"
                        ></v-icon> 
                        {{ subtitle.title }}
                </v-card-subtitle>
                    <v-card-text
                    v-else
                    class="text-black"
                    >
                    {{ servico.content }}
                    </v-card-text>
                    
                        <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                            class="px-6"
                                color="primary"
                            variant="text"
                            size="small"
                            :to=servico.to
                            >ler mais...</v-btn>
                        </v-card-actions>
                    </nuxt-link>
                    </v-card>
                </div>                              
            </div>
        </div>
    </div>
</template>



<script>
  export default {

    data: () => ({
      services: 
      [
        {
          id:1,
          title: 'Serviços de Engenharia de Manutenção & Confiabilidade',
          subtile:false,
          src:'/services1.webp',
          content:'Na Pred Engenharia, oferecemos uma gama completa de serviços de engenharia projetados para otimizar a performance dos seus equipamentos e processos industriais. De diagnósticos precisos a treinamentos especializados, nossa equipe de especialistas está aqui para impulsionar a eficiência, reduzir custos e maximizar a produtividade da sua operação. Descubra como nossos serviços de ponta podem elevar o seu negócio para novos patamares de sucesso.',
          to: '/servicos/engenharia-manutencao-e-confiabilidade'
        },

        {
          id:2,
          title: 'Serviços Técnicos de Inspeção',
          subtile: false,
          src:'/services2.webp',
          content:'Na Pred Engenharia, oferecemos mais do que simples inspeções; oferecemos uma visão detalhada e abrangente do estado dos seus equipamentos industriais. Nossos serviços técnicos de inspeção vão além do óbvio, utilizando tecnologias avançadas e abordagens inovadoras para revelar os segredos que podem estar escondidos nas entranhas da sua operação. Seja por meio da termografia, análise de vibração, inspeção sensitiva ou outras técnicas especializadas, estamos aqui para fornecer insights valiosos que impulsionam a eficiência, a segurança e a confiabilidade dos seus ativos.',
          to:'/servicos/inspecoes' 
        },


        {
          id:3,
          title: 'S3I® - Sistema Inteligente de Intervenção Industrial',
          subtile: false,
          src:'/services3.webp',
          content:'Convidamos você a explorar uma nova era na gestão industrial. Imagine uma ferramenta que não apenas simplifica, mas também aprimora cada etapa da sua manutenção. Aperte abaixo para mergulhar no mundo do S3i® e descubra como ele pode elevar sua operação a novos patamares de excelência.',
          to:'/servicos/s3i' 
        },

        {
          id:4,
          title: 'SFT - Sistema Fixo de Termografia',
          subtile: false,
          src:'/services4.webp',
          content:'Imagine ter o controle completo das temperaturas críticas em suas operações industriais, mesmo em condições desafiadoras. Com o Sistema Fixo de Termografia (SFT) da Pred Engenharia, essa visão se torna realidade. Quer descobrir como o SFT (Sistema Fixo de Termografia ) pode transformar sua abordagem à segurança operacional e eficiência na indústria? Aperte abaixo para saber mais sobre essa ferramenta inteligente de monitoramento termográfico e leve sua operação a um novo patamar de precisão e confiabilidade.',
          to:'/servicos/sft'  
        },
      
      
     
      ],
  })

  }
</script>