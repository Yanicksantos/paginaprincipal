<template>
    <div>
        <div style="background-image: url('/1.webp'); background-size: cover; background-position: center center; height: 400px;" class="d-sm-none">
            <div class="w-100 h-100 d-flex justify-center align-center pa-2" style="background-color: rgba(0, 0, 0, .75);">
                <div class="elevation-24 pa-4 rounded" style="background-color: rgba(0, 0, 0, .3);">
                    <h1 class="text-h5 font-weight-black text-white">{{ $t('specialized_solutions') }}</h1>
                    <p class="my-8 text-caption text-md-body-1 font-weight-light text-grey-lighten-1">
                        {{ $t('pred_engineering') }}
                        <span class="text-body-1 text-white">{{ $t('om_industry_services') }}</span>
                    </p>
                    <div style="width: 50%; height: 1px; background-image: linear-gradient(to left, transparent, #B71C1C, transparent);" class="mx-auto mt-2"></div>
                </div>
            </div>
        </div>

        <!-- desktop -->
        <div style="background-image: url('/1.webp'); background-size: cover; background-position: center center; height: 600px;" class="d-none d-sm-block">
            <div class="w-100 h-100 d-flex justify-center align-center pa-2" style="background-color: rgba(0, 0, 0, .75);">
                <v-container>
                    <div class="elevation-24 pa-8 rounded text-center" style="background-color: rgba(0, 0, 0, .3);">
                        <h1 class="text-h5 text-sm-h4 text-md-h4 font-weight-black text-white">{{ $t('specialized_solutions') }}</h1>
                        <p class="my-8 text-caption text-md-body-1 font-weight-light text-grey-lighten-1">
                            {{ $t('pred_engineering') }}
                            <span class="text-body-1 text-white">{{ $t('om_industry_services') }}</span>
                        </p>
                        <div style="width: 50%; height: 1px; background-image: linear-gradient(to left, transparent, #B71C1C, transparent);" class="mx-auto mt-2"></div>
                    </div>
                </v-container>
            </div>
        </div>
    </div>
</template>

