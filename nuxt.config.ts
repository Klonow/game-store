export default defineNuxtConfig({
  alias: {
    assets: "/<rootDir>/assets",
  },
  modules: [
    '@nuxt/image-edge',
    '@pinia/nuxt'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  imports: {
    dirs: [
      'composables',
      './stores'
    ]
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/global.scss" as *;'
        }
      }
    }
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Manrope:wght@200;300;400;500;600;700&family=Montserrat:wght@300;400;500;700&display=swap'
        },
      ]
    }
  }
})
