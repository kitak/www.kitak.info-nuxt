module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'kitak-info',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'my portfolio' }
    ],
    link: [
      { rel: 'stylesheet', type: 'text/css', href: '/crisp.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://netdna.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Bree+Serif|Open+Sans' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.module.rules.push({
        test: /\.md/,
        loader: 'raw-loader',
        exclude: /(node_modules)/
      })
    }
  },
  render: {
    resourceHints: false
  }
}
