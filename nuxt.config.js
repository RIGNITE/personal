// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon", 
    "nuxt-swiper",
    "@nuxtjs/i18n", 
    "@nuxtjs/google-fonts",
    "nuxt-headlessui", 
    "@nuxtjs/prismic",
    "nuxt-vercel-analytics"
],

  extends: ["nuxt-lego"],

  googleFonts: {
    families: {
      Inter: true,
      OpenSans: true,
      Roboto: true,
      Lora: true,
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: true,
    },
  },

  swiper: {
    modules: ["navigation", "pagination", "autoplay"], // all modules are imported by default
  },

  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },

  swiper: {
    swiperOption: {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  },

  devtools: { enabled: true },

  prismic: {
    endpoint: "ryan-kim-portfolio",
  },
});