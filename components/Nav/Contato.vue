
<template >
        <v-dialog max-width="500px">
            <template v-slot:activator="{ props }">
                <v-btn 
                variant="flat"
                 width="100%" 
                 prepend-icon="mdi-card-account-mail"
                 v-bind="props"
                 color="#1A237E"
                 class="text-caption"
                                
                 >
                    Contato
                </v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card class="pb-6">

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                        icon="mdi-close-box-multiple-outline" 
                        @click="isActive.value = false"
                        ></v-btn>
                    </v-card-actions>

                    <v-card-item>
                        <FormularioForm />
                    </v-card-item>

                </v-card>
            </template>
        </v-dialog>
</template>
