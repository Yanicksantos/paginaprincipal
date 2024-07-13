<template>
    <v-img
    src="/4.webp"
    cover
    class="d-md-none"
    dark
    >
        <div class="d-flex flex-column justify-center pa-6 ">
            <div class="">
                <v-img src="/mcilogo.webp" cover max-width="50" class="mx-auto"></v-img>
                <p class="w-100 mx-auto my-4 px-4 text-center text-h5 text-black">{{ $t('mci_titile1') }}<strong>{{$t('mci_titile2')}} {{$t('mci_titile3')}} </strong> {{$t('mci_titile4')}}</p>
            </div>
            <div>
                <v-container>
                    <v-row>
                        <v-col cols="12"><v-img :src="`/${$t('mci_image1')}`"></v-img></v-col>
                        <v-col cols="12"> 
                            <p class=" montserrat-font text-black text-body-2" >
                                {{ $t('mci_description1') }}
                                <span style="position: relative;" class="mr-2">MCI<span class="text-caption" style="position: absolute; top: -5px;">®</span></span> 
                                {{ $t('mci_description2') }}
                            <span style="position: relative;" class="mr-2">MCI<span class="text-caption" style="position: absolute; top: -5px;">®</span></span>
                                {{ $t('mci_description3') }}
                            </p>
                        
                        <v-btn
                        append-icon="mdi-arrow-top-right"
                        variant="flat"
                        class="mt-6 text-caption"
                        color="#B71C1C"
                        to="/mci"
                        >{{ $t('mci_learn_more') }}</v-btn></v-col>
                    </v-row>    
                </v-container>                
            </div>  
        </div>
           
    
    </v-img>

</template>