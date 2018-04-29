const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')
const pkg = require('./package')

module.exports = {
  mode: 'universal',

  env: {
    API_URL: process.env.API_URL || 'http://localhost:8080'
  },

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - Strona_KSI',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Quicksand' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/app.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/axios.js', ssr: false },
    { src: '~plugins/i18n.js' },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage.html
    '@nuxtjs/axios',
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    ['nuxt-i18n', {
      locales: [
        {
          code: 'en',
          iso: 'en-US',
          name: 'English',
          langFile: 'en-US.js'
        },
        {
          code: 'pl',
          iso: 'pl-PL',
          name: 'Polski',
          langFile: 'pl-PL.js'
        },
        {
          code: 'ua',
          iso: 'ua-UA',
          name: 'український',
          langFile: 'ua-UA.js'
        }
      ],
      defaultLocale: 'pl',
      loadLanguagesAsync: true,
      langDir: 'locales/',
    }],
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
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, { isDev, isClient }) {
      // Run ESLint on save
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (!isDev) {
        // Remove unused CSS using purgecss. See https://github.com/FullHuman/purgecss
        // for more information about purgecss.
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue')
            ]),
            whitelist: ['html', 'body']
          })
        )
      }
    }
  }
}
