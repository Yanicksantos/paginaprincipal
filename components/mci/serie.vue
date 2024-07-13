<template>
    <div>
      <div class="bg-indigo-darken-4 d-flex align-center flex-column h-100"
           style="background-image: url('/2.webp'); background-position: 100%; background-size: cover; background-attachment: fixed;">
        <div style="background-color: rgba(26, 35, 126, .9);" class="w-100 h-100 px-5 py-8">
          <div class="w-100">
            <v-container>
              <p class="text-center mb-4 text-body-1 text-md-h5">{{ $t('mci_series_youtube') }} <span>{{ $t('elevate_maintenance') }}</span></p>
              <div style="height: 1px; background-image: linear-gradient(to left, transparent, white, transparent);"
                   class="mb-6 mx-auto w-75"></div>
              <div>
                <p class="text-right my-4 w-75 mx-auto text-body-2 text-md-body-1">{{ $t('maximize_availability') }}</p>
                <p class="text-caption w-75 mx-auto">{{ $t('exclusive_playlist_intro') }} <span>{{ $t('ozorio_rezende') }}</span>
                  {{ $t('deep_dive') }} <br><br><span class="text-body-1 mt-2">{{ $t('video_series') }}</span></p>
              </div>
              <div class="d-flex justify-space-around align-center py-4 d-sm-none">
                <v-btn variant="text" icon="mdi-arrow-left-drop-circle" @click="model = Math.max(model - 1, 0)"
                       aria-label="Slide anterior do carrossel de vídeos"></v-btn>
                {{ model + 1 }} de 34
                <v-btn variant="text" icon="mdi-arrow-right-drop-circle" @click="model = Math.min(model + 1, 4)"
                       aria-label="Próximo slide do carrossel de vídeos"></v-btn>
              </div>
            </v-container>
  
            <!-- Carousel for mobile view -->
            <v-carousel v-model="model" hide-delimiter-background height="230" :show-arrows="false" class="pa-0 d-sm-none">
              <v-carousel-item v-for="(link, i) in links" :key="i" aria-label="Vídeo do YouTube">
                <iframe class="w-100 rounded" height="180" :src="link" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
              </v-carousel-item>
              <v-carousel-item>
                <nuxt-link to="https://www.youtube.com/playlist?list=PLA8tyKb1AjYCrcGFOOtj0GiE_o5Q4Rpdk" target="_blank">
                  <v-img :src="`/mci/${$t('mci_image4')}`" height="180" alt="Thumbnail da playlist MCI no YouTube"></v-img>
                </nuxt-link>
              </v-carousel-item>
            </v-carousel>
          </div>
        </div>
      </div>
  
      <!-- Carousel for desktop view -->
      <v-container>
        <v-carousel v-model="model" hide-delimiter-background height="400" show-arrows="hover" class="d-none d-sm-block w-75 mx-auto">
          <v-carousel-item v-for="(link, i) in links" :key="i" aria-label="Vídeo do YouTube">
            <iframe class="w-100 mx-auto rounded" height="400" :src="link" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
          </v-carousel-item>
          <v-carousel-item>
            <nuxt-link to="https://www.youtube.com/playlist?list=PLA8tyKb1AjYCrcGFOOtj0GiE_o5Q4Rpdk" target="_blank">
              <v-img :src="`/mci/${$t('mci_image4')}`" height="450" alt="Thumbnail da playlist MCI no YouTube"></v-img>
            </nuxt-link>
          </v-carousel-item>
        </v-carousel>
      </v-container>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        model: 0,
        links: [
          'https://www.youtube.com/embed/hUyfKoShxig?si=zSSkqXaigaxvvd6h',
          'https://www.youtube.com/embed/-XwJyf8qyDs?si=O13duEFHV0M3rJvv',
          'https://www.youtube.com/embed/lRGl1G5UjCw?si=opAcM__u7-z_PWi3',
          'https://www.youtube.com/embed/3u2mk_4X3oI?si=vzhf3xC8kDNzxi7k'
        ]
      }
    }
  }
  </script>
  