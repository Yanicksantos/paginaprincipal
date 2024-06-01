// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  sourcemap: true,
  imports: {
    autoImport: true,
    injectAtEnd: true,
  },
  modules: [
    'vuetify-nuxt-module', 
    '@vee-validate/nuxt',
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
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt',
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      meta: [
        { name: "description", content: "A Pred Engenharia é uma provedora de soluções para gestão de ativos e processos, com foco na garantia da segurança, confiabilidade e produtividade das atividades. Atuando na indústria e na área de serviços desde 1993, suas inovadoras soluções são fornecidas ao mercado através de três áreas de negócios: Serviços Técnicos, Tecnologia da Informação e Automação Industrial." },
        { name: "keywords", content: "Inspeções, Preditiva, Manutenção, S3I, Sistema inteligente de Intervenção Industrial, SERVIÇOS TÉCNICOS DE INSPEÇÃO, MCI, Manutenção Condicionada a Inspeção" },
        { name: "author", content: "Pred Engenharia" },
        { property: "og:title", content: "Pred Engenharia" },
        { property: "og:description", content: "A Pred Engenharia é uma provedora de soluções para gestão de ativos e processos, com foco na garantia da segurança, confiabilidade e produtividade das atividades. Atuando na indústria e na área de serviços desde 1993, suas inovadoras soluções são fornecidas ao mercado através de três áreas de negócios: Serviços Técnicos, Tecnologia da Informação e Automação Industrial." },
        { property: "og:image", content: "https://pred-engenharia.vercel.app/30anos.webp" },
        { property: "og:url", content: "https://pred-engenharia.vercel.app/" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Pred Engenharia" },
        { name: "twitter:description", content: "A Pred Engenharia é uma provedora de soluções para gestão de ativos e processos, com foco na garantia da segurança, confiabilidade e produtividade das atividades. Atuando na indústria e na área de serviços desde 1993, suas inovadoras soluções são fornecidas ao mercado através de três áreas de negócios: Serviços Técnicos, Tecnologia da Informação e Automação Industrial." },
        { name: "twitter:image", content: "https://pred-engenharia.vercel.app/30anos.webp" },

      ],
      link: [
        { rel: "canonical", href: "https://pred-engenharia.vercel.app/" },
      ],
      title: "Pred Engenharia"
    }
  }
});
