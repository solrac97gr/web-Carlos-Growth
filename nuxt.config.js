export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Carlos Growth 🥇| Growth & Data ✅',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Descubre las estrategias de Growth Hacking más modernas usadas actualmente por las Startups en Perú  🚀,Empieza a crecer ya! ✅'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/vue-form-wizard/dist/vue-form-wizard.min.css'
      }
    ],

    script: [
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#821D24', height: '8px' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '@/plugins/vuetouch', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  server: {
    host: '0.0.0.0'
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      '@nuxtjs/google-adsense',
      {
        id: 'ca-pub-9020181949258952'
      }
    ],
    ['@nuxtjs/google-tag-manager', { id: 'GTM-5FVZBN6' }]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    vendor: [],
    extend(config, ctx) {
      if (ctx.isServer) {
        config.resolve.alias.hammerjs$ =
          '/node_modules/vue-touch/dist/hammer-ssr.js'
      }
    }
  }
}
