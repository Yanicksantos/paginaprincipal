<template>
    <v-img
    class="d-md-none" 
    cover
    src="/visao.webp"
    height="400"
    >
        <div style="height: 400px; position: relative; background-color: rgba(0, 0, 0, .2);" class="">
            <v-container class="h-100 pa-0">
            <v-row class="h-100 pa-0">
                <v-col cols="4" class="h-100 pa-0" style="background-color: rgba(26, 35, 126, .75);"></v-col>
                <v-col cols="8" ></v-col>
            </v-row>
            </v-container>
            <div class="mx-6 py-4 px-8 text-grey-lighten-3 elevation-10 rounded text-body-2 "
            style="position: absolute; z-index: 10; color: black; top: 50%; transform: translateY(-50%); background-color: rgba(213, 0, 0, .9);">
            <div 
            style="width: 50%; height: 1px; background-image: linear-gradient(to left, transparent, #fff, transparent);" 
            class="mx-auto my-4"></div>
                <p class="text-right">{{ $t('pred_engineering_description') }}</p>
            </div>           
        </div>
    </v-img>

</template>