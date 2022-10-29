// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', 'nuxt-icon', '@nuxtjs/tailwindcss'],
  typescript: {
    typeCheck: true
  },
  runtimeConfig: {
    jwtSignSecret: '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',
  }
})
