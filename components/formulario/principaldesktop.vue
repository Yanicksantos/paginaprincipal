<template>
    <div
    class="bg-grey-lighten-1 d-lg-flex d-none "
    style="height: 550px; position: relative;"
    >
        <v-img src="/predred.webp" width="100%" height="300px" cover style="position: absolute; bottom: 0; left: 0;"></v-img>
            <div class=" h-100" style="width: 60%;">
                <v-img src="/sobre.webp"  width="100%" class="h-100" cover 
                ></v-img>
            </div>

            <div class="d-flex align-center  h-100" style="width: 40%;">
                <v-card style="width: 90%;">
                    <v-card-item>
                        <FormularioForm />
                    </v-card-item>
                </v-card>
                
            </div>

    </div>
</template>