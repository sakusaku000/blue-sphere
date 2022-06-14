export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '95 Degrees Cafe - Discord Community',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name:"title", content:"95 Degrees - Discord Community"},
      { name:"description", content:"Serving coffee and conversation 24/7 since 2016 - 95 Degrees is a welcoming Discord server with many exclusive features."},
      { name:"keywords", content:"discord, server, community, 95 degrees, cafe"},
      { name:"robots", content:"index, follow"},
      { name:"language", content:"english"},
      // opengraph
      { property:"og:type", content:"website"},
      { property:"og:url", content:"https://95degrees.cafe/"},
      { property:"og:title", content:"95 Degrees Cafe"},
      { property:"og:description", content:"Serving coffee and conversation 24/7 since 2016 - 95 Degrees is a welcoming Discord server with many exclusive features."},
      { property:"og:image", content:"https://95degrees.cafe/nf-card.png"},
      // twitter
      { property:"twitter:card", content:"summary_large_image"},
      { property:"twitter:url", content:"https://95degrees.cafe/"},
      { property:"twitter:title", content:"95 Degrees Cafe"},
      { property:"twitter:description", content:"Serving coffee and conversation 24/7 since 2016 - 95 Degrees is a welcoming Discord server with many exclusive features."},
      { property:"twitter:image", content:"https://95degrees.cafe/nf-card.png"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Montserrat:wght@700;800&display=swap"}
    ]
  },
  css:[
    '~/assets/css/main.css'
  ],
  components: {
    dirs: [
      '~/components',
      '~/components/base'
    ]
  },
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  target: 'static',
  build: {
    publicPath: '/assets/'
  }
}
