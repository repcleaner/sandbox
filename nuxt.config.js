module.exports = {
    server: {
        port: 4000, // default: 3000
        //host: '52.202.91.184' // default: localhost
        host: '127.0.0.1' // default: localhost
    },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_description || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap' },
    ],
    script: [
      { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCN-cnI2CTOd-lSNxUxNFJ04Aw-0Ab5uNE&libraries=places' },
      {
        src: "https://code.jquery.com/jquery-3.5.1.min.js",
        type: "text/javascript"
      },
      {
        src: 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js',
        type: 'text/javascript'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/Loading.vue',
  /*
  ** Stylus
  */
  router: {
    scrollBehavior(to) {
      if (to.hash) {
        return window.scrollTo({
          top: document.querySelector(to.hash).offsetTop + -50,
          behavior: 'smooth'
        })
      }
      return window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  styleResources: {
    stylus: [
      'assets/stylus/global.styl',
      'assets/stylus/_variables.styl',
      'assets/stylus/_mixins.styl'
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/css/dental.css' },
    { src: '~/assets/css/bootstrap.css' },
    { src: '~/assets/stylus/global.styl' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/vue-placeholders.js' },
    { src: '@/plugins/vue-owl-carousel.js', ssr: false },
    { src: '@/plugins/after-each.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: 
  [
    '@nuxt/http',
    '@nuxtjs/style-resources',
    '@nuxt/content'
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'vue-owl-carousel'],
    node: {
      fs: 'empty'
    },
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      // find the stylus loader
      // var stylus = config.module.rules[0].options.loaders.stylus.find(e => e.loader === 'stylus-loader')

      // // extend default options
      // Object.assign(stylus.options, {
      //   import: ['~assets/stylus/config']
      // })
      if (ctx.isDev && process.client) {
        config.node = {
          fs: 'empty'
        }
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.module.rules.push({
          test: /\.css$/,
          loader: ['css-loader', 'stylus-loader'],
          exclude: /(node_modules)/
        })
      }
    }
  },
  transpile: [
    'gsap'
  ]
}
