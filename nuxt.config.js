// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    // '@nuxtjs/eslint-module', //https://eslint.nuxtjs.org/
    'nuxt-icon',  //https://iconify.design/
    'nuxt-swiper',   //https://swiperjs.com/
    '@nuxtjs/i18n',   //https://i18n.nuxtjs.org/
    '@nuxtjs/google-fonts'  //https://google-fonts.nuxtjs.org/
  ],
  googleFonts: {
    families: {
      OpenSans: true,
      Roboto: true,
      Lora: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: true,
    }
  },
  swiper: {
    modules: ['navigation', 'pagination', 'autoplay'], // all modules are imported by default
  },

  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  },
  devtools: { enabled: true },
})
