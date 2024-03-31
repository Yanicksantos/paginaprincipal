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
          subtile: [
            {title:'Sistema de Manutenção', icon:'mdi-info'}, 
            {title:'Engenharia de Lubrificação', icon:'mdi-info'}, 
            {title:'Planejamento de Manutenção', icon:'mdi-info'}, 
            {title:'Diagnóstico da Manutenção', icon:'mdi-info'},
            { title:'Capacitação de Equipes', icon:'mdi-info'}, 
            {title:'Auditoria da Manutenção', icon:'mdi-info'}
          ],
          src:'/services1.png',
          to: '/services/engenharia-manutencao-e-confiabilidade'
        },

        {
          id:2,
          title: 'Serviços Técnicos de Inspeção',
          subtile: [
            {title:'Termografia', icon:'mdi-info'}, 
            {title:'Análise de Vibração', icon:'mdi-info'}, 
            {title:'Inspeções', icon:'mdi-info'}, 
            {title:'Inspeções por Ultrassom', icon:'mdi-info'}
          ],
          src:'/services2.jpg',
          to:'/services/inspecoes' 
        },


        {
          id:3,
          title: 'S3I - Sistema Inteligente de Inspeção Industrial',
          subtile: false,
          src:'/services3.png',
          content:'Lorem ipsum dolor hjfjhjf sit amet, consectetur adipisicing elit. Quibusdam quas animi neque aliquam voluptate, magnam dolorum eveniet, tempore aspernatur alias quo nam ut consequatur nulla officiis velit rem sint quos!',
          to:'/services/s3i' 
        },

        {
          id:4,
          title: 'SFT - Sistema Fixo de Termografia',
          subtile: false,
          src:'/services4.png',
          content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam quas animi neque aliquam voluptate, magnam dolorum eveniet, tempore aspernatur alias quo nam ut consequatur nulla officiis velit rem sint quos!',
          to:'/services/sft'  
        },
      
      
     
      ],
  })

  }
</script>