<template>
    <v-img
    src="~/assets/4.jpg"
    cover
    class="d-md-none"
    dark
    >
        <div class="d-flex flex-column justify-center pa-6 ">
            <div class="">
                <v-img src="~/assets/mcilogo.png" cover max-width="50" class="mx-auto"></v-img>
                <p class="w-100 mx-auto my-4 px-4 text-center text-h5 text-black">Obtenha <strong>todo o potencial na sua manutenção </strong>de forma simples e estruturada</p>
            </div>
            <div>
                <v-container>
                    <v-row>
                        <v-col cols="12"><v-img src="~/assets/mci.jpeg"></v-img></v-col>
                        <v-col cols="12"> <p class="text-body-2 text-black">Desenvolvido pela Pred Engenharia, o método MCI® trouxe uma perspectiva inovadora que, diferente de outros métodos existentes no mercado, promove a integração da cadeia de valores da Manutenção através de atribuições e entregáveis claramente definidos e auditáveis...
                        </p>
                        
                        <v-btn
                        append-icon="mdi-arrow-top-right"
                        variant="flat"
                        class="mt-6"
                        color="#B71C1C"
                        to="/mci"
                        >Saiba mais sobre o método</v-btn></v-col>
                    </v-row>    
                </v-container>                
            </div>  
        </div>
           
    
    </v-img>

</template>