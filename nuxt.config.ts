// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  devtools: { enabled: false },
  sourcemap: true,
  imports: {
    autoImport: true,
    injectAtEnd: true,
  },

  modules: ['vuetify-nuxt-module', '@vee-validate/nuxt',
  ['@nuxtjs/google-fonts', {
    families: {
      Roboto: true,
      Montserrat: true,
     
     
    }
  }],
],

vuetify: {
  moduleOptions: {
    prefixComposables: true,
  },
},

})
