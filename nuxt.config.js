export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: { base: '/nuxt-spa/' },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt_spa',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/nuxt-spa/favicon.ico' }
    ],
    script: [
      { src: "/nuxt-spa/js/jquery.min.js", body: true },
      { src: "/nuxt-spa/js/browser.min.js", body: true },
      { src: "/nuxt-spa/js/breakpoints.min.js", body: true },
      { src: "/nuxt-spa/js/util.js", body: true },
      { src: "/nuxt-spa/js/main.js", body: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/main.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
