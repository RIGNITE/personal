// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", // '@nuxtjs/eslint-module', //https://eslint.nuxtjs.org/
  //https://iconify.design/
  "nuxt-icon", //https://swiperjs.com/
  "nuxt-swiper", //https://i18n.nuxtjs.org/
  "@nuxtjs/i18n", //https://google-fonts.nuxtjs.org/
  "@nuxtjs/google-fonts", //https://headlessui.dev/
  "nuxt-headlessui", "@nuxtjs/prismic"],

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
    clientConfig: {
      routes: [
        {
          type: "home",
          path: "/",
        },
      ],
    },
  },
});