<template>
    <div>
      <!-- Imagem para dispositivos móveis -->
      <v-img
        class="d-md-none"
        height="350"
        gradient="to top, rgba(0,0,0,.9), transparent"
        cover
        src="/services2.webp"
        dark
      >
        <div class="d-flex flex-column justify-center align-center w-100 h-100 pa-4" style="background-image: linear-gradient(to top, rgba(0,0,0,.9), transparent);">
          <div><v-icon icon="mdi-account-search" size="50"></v-icon></div>
          <h1 class="text-grey-lighten-1 text-h5 text-center font-weight-bold elevation-24 mt-2 pa-2">{{ $t('main_content1') }}</h1>
        </div>
      </v-img>
  
      <!-- Imagem para desktops -->
      <v-img
        class="d-none d-md-flex mt-14"
        gradient="to top, rgba(0,0,0,.9), transparent"
        height="600"
        cover
        src="/services2.webp"
        dark
      >
        <div class="d-flex flex-column justify-center align-center w-100 h-100 pa-4" style="background-image: linear-gradient(to top, rgba(0,0,0,.9), transparent);">
          <div><v-icon icon="mdi-account-search" size="50"></v-icon></div>
          <h1 class="text-grey-lighten-1 text-h5 text-md-h2 text-center font-weight-bold elevation-24 mt-2 pa-4">{{ $t('main_content1') }}</h1>
        </div>
      </v-img>
  
      <!-- Conteúdo principal -->
      <v-main class="pa-0">
        <v-container>
          <div class="px-6 py-4 ml-6">
            <h1 class="text-h6">{{ $t('heading_termografia') }}</h1>
            <div style="width: 70%; height: 1px; background-image: linear-gradient(to left, transparent, transparent, #1A237E);" class="mb-4 mt-2"></div>
            <p class="text-grey-darken-3 text-caption">{{ $t('termografia_description') }}</p>
          </div>
  
          <div class="px-6 py-4">
            <v-img src="/inspecoes/1.webp" class="rounded"></v-img>
            <div class="text-grey-darken-3">
              <p class="text-caption text-md-body-1 my-2">{{ $t('termografia_technique') }}</p>
              <p class="text-caption text-md-body-1 my-2">{{ $t('termografia_market') }}</p>
              <p class="text-caption text-md-body-1 my-2">{{ $t('termografia_norms') }}</p>
              <p class="text-caption text-md-body-1 my-2">{{ $t('termografia_trust') }}</p>
            </div>
          </div>
        </v-container>
  
        <!-- Seção de análise de vibração -->
        <div class="bg-grey-lighten-2 px-6 py-2">
          <v-container>
            <div class="ml-6 py-2">
              <div class="mt-4 text-h6 font-weight-bold">{{ $t('heading_vibration_analysis') }}</div>
              <div style="width: 60%; height: 1px; background-image: linear-gradient(to left, transparent, transparent, #1A237E);" class="my-6"></div>
              <p class="text-caption font-weight-light">{{ $t('vibration_analysis_description') }}</p>
            </div>
            <div>
              <v-img src="/inspecoes/2.webp" class="rounded my-6 mx-auto" max-width="600"></v-img>
              <div>
                <p class="text-caption text-md-body-1 my-4">{{ $t('vibration_analysis_technique') }}</p>
              </div>
            </div>
          </v-container>
        </div>
  
        <!-- Seção de inspeção por ultrassom -->
        <v-container>
          <div class="bg-white px-6">
            <div class="ml-6 py-4">
              <h1 class="text-h6 font-weight-bold">{{ $t('heading_ultrasound_inspection') }}</h1>
              <div style="width: 100%; height: 1px; background-image: linear-gradient(to left, transparent, transparent, #1A237E);" class="my-6"></div>
              <p class="text-grey-darken-3 text-caption text-medium-emphasis font-weight-light">{{ $t('ultrasound_inspection_description') }}</p>
            </div>
            <div>
              <v-img src="/inspecoes/3.webp" class="rounded"></v-img>
              <p class="text-caption text-md-body-1 my-4">{{ $t('ultrasound_inspection_technique') }}</p>
              <p class="text-caption text-md-body-1 my-4">{{ $t('ultrasound_inspection_trust') }}</p>
            </div>
          </div>
  
          <!-- Seção de inspeção sensitiva -->
          <div class="px-6 py-4">
            <div class="ml-6 py-4">
              <h1 class="text-h6 font-weight-bold">{{ $t('heading_sensitive_inspection') }}</h1>
              <div style="width: 100%; height: 1px; background-image: linear-gradient(to left, transparent, transparent, #1A237E);" class="my-6"></div>
              <p class="text-grey-darken-3 text-caption text-medium-emphasis font-weight-light">{{ $t('sensitive_inspection_description') }}</p>
            </div>
            <div>
              <v-img src="/inspecoes/4.webp" class="rounded"></v-img>
              <p class="text-caption text-md-body-1 my-4">{{ $t('sensitive_inspection_technique') }}</p>
              <p class="text-caption text-md-body-1 my-4">{{ $t('sensitive_inspection_advanced_technology') }}</p>
              <p class="text-caption text-md-body-1 my-4">{{ $t('sensitive_inspection_trust') }}</p>
            </div>
          </div>
        </v-container>
  
        <!-- Componente de formulário -->
        <FormularioFormulariopages />
      </v-main>
    </div>
  </template>
  