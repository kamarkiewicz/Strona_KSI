const pkg = require('./package')
const webpack = require('webpack')

module.exports = {
  mode: 'universal',

  env: {
    API_URL: process.env.API_URL || 'http://localhost:8080'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: '...',
    titleTemplate: '%s • Strona_KSI',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  /*
  ** PWA
  */
  manifest: {
    name: 'Strona_KSI',
    lang: 'pl'
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/scss/app.scss', lang: 'scss' },
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/axios.js', ssr: false },
    { src: '~plugins/gallery.js', ssr: false },
    { src: '~plugins/scrollto.js', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/pwa', { icon: true }],
    // Doc: https://axios.nuxtjs.org/usage.html
    '@nuxtjs/axios',
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    ['nuxt-i18n', {
      parsePages: false, // Disable acorn parsing
      detectBrowserLanguage: false,
      locales: [
        {
          code: 'en',
          iso: 'en',
          name: 'English',
          file: 'eng.js'
        },
        {
          code: 'pl',
          iso: 'pl',
          name: 'Polski',
          file: 'pol.js'
        },
        {
          code: 'uk',
          iso: 'uk',
          name: 'українська мова',
          file: 'ukr.js'
        }
      ],
      defaultLocale: 'pl',
      lazy: true,
      langDir: 'locales/',
    }],
    '@nuxtjs/sitemap',
    // Doc: https://bootstrap-vue.js.org/docs/
    ['bootstrap-vue/nuxt', { css: false }],
    // Doc: https://fontawesome.com/icons
    '@nuxtjs/font-awesome'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://axios.nuxtjs.org/options.html
  },

  /*
  ** Sitemap module configuration
  */
  sitemap: {
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    plugins: [
      new webpack.ProvidePlugin({
        '_': 'lodash',
      }),
    ],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
