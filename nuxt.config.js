export default {
  head: {
    title: 'carousel',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css" }
    ]
  },

  
  css: [
  ],

  
  plugins: [
  ],

  
  components: true,

  
  buildModules: [
  ],

  
  modules: [
    '@nuxtjs/axios',
    'nuxt-buefy'
  ],

  
  build: {
  }
}
