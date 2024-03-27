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
      Inter: [400, 700],
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
     
    }
  }],
],

  vuetify: {
    moduleOptions: {
      prefixComposables: true,
    },
  },

})
