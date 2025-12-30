// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {
    port: 4000,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      Inter: ['300', '400', '500', '600', '700'],
      Outfit: ['300', '400', '500', '600', '700', '800'],
      'Playfair+Display': ['400', '500', '600', '700', '800', '900', '400i', '500i', '600i', '700i'],
      Anton: ['400']
    },
    display: 'swap'
  },

  app: {
    head: {
      title: 'Portfolio - Modern & Professional',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A modern and aesthetic portfolio website showcasing my work and expertise.' }
      ]
    }
  },

  srcDir: 'app',
  css: ['~/assets/css/main.css']

})
