<template>
    <div>
      <!-- Mobile -->
      <div
        role="img"
        aria-label="Imagem de fundo para soluções especializadas"
        class="bg-indigo-darken-4 d-flex align-center flex-column h-100 d-md-none"
        style="background-image: url('/2.webp'); background-position: 100%; background-size: cover; background-attachment: fixed;"
      >
        <div style="background-color: rgba(26, 35, 126, .9);" class="w-100 h-100 px-5 py-8">
          <div class="w-100">
            <div class="mt-4 mb-2 ml-2 text-h6 font-weight-bold text-white" style="color: #BDBDBD;">
              {{ $t('know_us') }}
            </div>
            <div style="width: 70%; height: 1px; background-image: linear-gradient(to left, transparent, white);" class="mb-6 mx-2"></div>
            <iframe
              class="w-100 rounded"
              height="220"
              src="https://www.youtube.com/embed/rIkOP6XrT-A?si=DUtUFaZoGeqyhGqF&amp"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              aria-label="Vídeo institucional sobre a empresa"
            ></iframe>
          </div>
          <div class="pt-6 d-flex h-100" style="overflow: hidden;">
            <div style="width: 20px; background-image: linear-gradient(to bottom, #B71C1C ,transparent);" class="mr-4"></div>
            <div style="color: #BDBDBD;">{{ $t('about_description') }}</div>
          </div>
          <v-btn
            variant="outlined"
            size="small"
            append-icon="mdi-arrow-top-right"
            class="mt-6 text-grey-lighten-5 ml-4"
            color="#B71C1C"
            to="/sobre"
          >
            {{ $t('learn_more') }}
          </v-btn>
        </div>
      </div>
  
      <!-- Desktop -->
      <div role="img" aria-label="Imagem de fundo para soluções especializadas" class="d-none d-md-block" style="height: 500px;">
        <v-container fluid>
          <div
            class="h-100 w-100 pa-4"
            style="background-image: url('/2.webp'); background-position: 100%; background-size: cover; background-attachment: fixed;"
          >
            <div class="h-100 d-flex align-center justify-center">
              <div class="pa-10">
                <div class="d-flex align-center justify-center mb-10">
                  <v-img src="/partelogo2.webp" alt="Logo da empresa Parte" width="40"></v-img>
                  <h1 class="text-deep-purple-darken-4 font-weight-black text-h4 ml-4">{{ $t('know_us') }}</h1>
                </div>
  
                <v-row>
                  <v-col cols="6">
                    <v-img src="/30anos.webp" alt="Imagem representativa dos 30 anos da empresa" cover class="rounded"></v-img>
                  </v-col>
  
                  <v-col cols="6">
                    <div class="ml-6">
                      <div class="text-lg-body-1 text-caption text-black montserrat-font">{{ $t('about_description') }}</div>
                    </div>
                  </v-col>
                </v-row>
  
                <v-row class="mt-6">
                  <v-col cols="12" class="text-center">
                    <v-btn
                      append-icon="mdi-arrow-top-right"
                      class="text-caption"
                      variant="flat"
                      to="/sobre"
                      color="red-accent-4"
                    >
                      {{ $t('learn_more') }}
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </div>
          </div>
        </v-container>
      </div>
    </div>
  </template>
  