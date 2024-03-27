<template >
    <div>
        
        <v-list class="bg-transparent">
        <v-list-item>
                <v-menu :close-on-content-click="false">
                    <template #activator=" { props } ">
                        <v-btn icon="mdi-account" size="large" v-bind="props" ></v-btn>
                    </template>
                    <v-list nav variant="compact" size="small">
                        <v-list-item 
                        append-icon="mdi-account-cog-outline" 
                        href="http://www.pred.com.br/sgv/login/index.asp"
                        variant="tonal"
                        density="compact"
                        
                        >
                            <v-list-item-title>
                                Sala Vip
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item 
                        append-icon="mdi-account-hard-hat-outline" 
                        variant="tonal" 
                        density="compact"
                        href="http://www.pred.com.br/salavip/manutencao/default.asp"
                        >
                            <v-list-item-title >
                                    Intranet
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-list-item>
        </v-list>
        
    </div>
</template>