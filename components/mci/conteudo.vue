<template>
    <div>
        <v-container>
            <div class="py-6">
                <p class="text-caption text-center my-4">
                    {{ $t('rbm_notice') }}
                </p>
                
                <v-img  :src="`/mci/${$t('mci_image3')}`" class="rounded my-6 mx-auto"></v-img>
                <p class="text-body-1 my-8">
                    {{ $t('mci_intro') }} <span class="">{{ $t('unprecedented_efficiency') }}</span>
                    {{ $t('mci_offer') }} <span class="">{{ $t('mci_method') }}</span>
                </p>
                <v-img :src="`/${$t('mci_image1')}`" class="rounded my-4 mx-auto" max-width="600"></v-img>

                <p class="text-body-1 my-4">
                    {{ $t('mci_cycle_intro') }} <span class="">{{ $t('perigometro') }}</span>
                    {{ $t('perigometro_role') }} <span class="">{{ $t('perigometro') }}</span>
                    {{ $t('perigometro_benefit') }}
                </p>
                <p class="mt-4 text-body-2">
                    {{ $t('mci_cycle_benefit') }}
                </p>
                <v-img  :src="`/mci/${$t('mci_image2')}`" class="rounded my-4 mx-auto" max-width="700"></v-img>
                <p class="my-4 text-body-1">
                    {{ $t('mci_exceptional') }} <span class="">{{ $t('mci_simplicity') }}</span>
                    {{ $t('mci_philosophy_intro') }}
                    <span class="text-indigo-darken-4">{{ $t('mci_philosophy') }}</span>
                    {{ $t('mci_philosophy_detail') }}
                </p>
            </div>
        </v-container>
    </div>
</template>

