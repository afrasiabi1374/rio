// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'vuetify-nuxt-module',
    'nuxt-swiper',
  ],
  vuetify: {
    vuetifyOptions: {
      locale: {
        locale: 'fa',            // زبان‌ت رو بذار (مثلا فارسی)
        fallback: 'fa',
        messages: { /* پیام‌ها / ترجمه‌ها */ },
        rtl: { fa: true },        // مهم: بگو که fa راست‌چینه
      },
    },
  },

})