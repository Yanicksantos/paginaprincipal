<template >
    <div  class="d-none d-md-flex">
    
                
                  <v-list class="d-flex">
                     

                      <v-list-item
                     
                      >
                          <v-btn
                          variant="outlined" 
                          width="100%"
                          to="/sobre"
                         
                          >
                            SOBRE NÓS
                          </v-btn>
                      </v-list-item>


                    
                      <v-menu>
                        <template #activator="{ props:menu }">
                          <v-list-item
                         
                         >
                             <v-btn
                             variant="outlined" 
                             width="100%"
                             v-bind="menu"
                             append-icon="mdi-chevron-down"
                           
                             >
                               NOSSOS SERVIÇOS
                             </v-btn>
                         </v-list-item>
                        </template>

                        <v-list density="compact">
                            <v-list-item>
                                <v-btn to="/services/engenharia-manutencao-e-confiabilidade"  class="w-100" variant="tonal">Serviços de Engenharia de Manutenção & Confiabilidade</v-btn>
                            </v-list-item>
                            <v-list-item>
                                <v-btn to="/services/inspecoes"  class="w-100" variant="tonal">Serviços Técnicos de Inspeção</v-btn>
                            </v-list-item>
                            <v-list-item>
                                <v-btn to="/services/s3i"  class="w-100" variant="tonal">S3I - Sistema Inteligente de Inspeção Industrial</v-btn>
                            </v-list-item>
                            <v-list-item>
                                <v-btn to="/services/sft"  class="w-100" variant="tonal">SFT - Sistema Fixo de Termografia</v-btn>
                            </v-list-item>
                        </v-list>


                      </v-menu>

                      
                      <v-list-item
                     
                      >
                          <v-btn
                          variant="outlined" 
                          width="100%"
                          href="https://suporte.s3i.com.br/blog/"
                         
                          >
                              BLOG
                          </v-btn>
                      </v-list-item>


                      <v-list-item>
                          <NavContato/>
                      </v-list-item>
                  </v-list>

      
        
    </div>
</template>