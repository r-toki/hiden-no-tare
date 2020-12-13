export default {
  ssr: false,

  target: 'static',

  head: {
    title: 'hiden-no-tare',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: ['@/plugins/firebaseApp'],

  components: true,

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/stylelint-module'],

  modules: ['bootstrap-vue/nuxt'],

  build: {},

  router: {
    middleware: 'auth',
  },
}
