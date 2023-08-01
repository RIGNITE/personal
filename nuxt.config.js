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
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  },
  devtools: { enabled: true },
})
