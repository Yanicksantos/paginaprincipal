<template>
    <v-img
    class="d-md-none mt-14"
    src="/1.webp"
    cover
    
    height="600"
    >
        <div 
        class=" h-100" 
        style=" background-image: linear-gradient( to bottom ,transparent,rgba(0,0,0, .6), rgba(26,35,126, 1),rgba(26,35,126, 1), rgba(26,35,126, 1));"
        >
            <div class="d-flex flex-column justify-center align-center h-100 px-6 pt-10" >
            <div class="">
                <h1 class="w-100 text-h4 mt-8 mb-12" style="color: #FAFAFA;"> <strong> {{ t('years') }} 30 {{ t('years_label') }}</strong><br> {{ t('trusted_partner') }} {{ t('industrial_solutions') }}</h1>
                <div class="text-body-2 my-4 " style="color: #BDBDBD;">
                    <P class="" >
                        {{ t('description_banners') }}
                        <span class=" mr-2" style="position: relative;">S3i<span class="text-caption" style="position: absolute; top: -5px;">®</span></span> 
                        {{ t('description_bannerss') }}
                    </P>
                </div>
                <v-btn
                variant="outlined"
               
                append-icon="mdi-arrow-top-right"
                class="text-grey-lighten-5 text-caption"
                color="#B71C1C"
                to="/sobre"
                >{{ t('learn_more') }}</v-btn>
            </div>
            </div>
        </div>
    </v-img>
   
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>