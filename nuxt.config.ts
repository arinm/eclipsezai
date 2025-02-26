// nuxt.config.js
export default {
  // Target: static site generation
  target: 'static',

  // Global page headers
  head: {
    title: 'eclipsez.ai - Where Intelligence Emerges From Shadow',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Eclipsez.ai - Advanced AI solutions operating at the threshold between known and unknown, illuminating insights that remain obscured to conventional systems.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#0a0a18' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800&display=swap' }
    ]
  },

  // Global CSS
  css: [
    '@/assets/css/main.css'
  ],

  // Auto import components
  components: true,

  // Modules for dev and build
  buildModules: [
    '@nuxtjs/composition-api/module'
  ],

  // Modules
  modules: [],

  // Build Configuration
  build: {
    // You can extend webpack config here
    extend(config, ctx) {}
  },

  compatibilityDate: '2025-02-26'
};