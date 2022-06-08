export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '95 Degrees - Discord Community',
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
      { rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Montserrat:wght@700;800&display=swap"}
    ]
  },
  components: {
    dirs: [
      '~/components',
      '~/components/base'
    ]
  },
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  target: 'static'
}
