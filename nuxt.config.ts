import NuxtConfiguration from '@nuxt/config';

const config: NuxtConfiguration = {
  modules: ['@nuxtjs/markdownit'],
  typescript: {
    typeCheck: true
  },
  head: {
    title: 'kitak-info',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'my portfolio' }
    ],
    link: [
      { rel: 'stylesheet', type: 'text/css', href: '/crisp.css' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://netdna.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Bree+Serif|Open+Sans'
      }
    ]
  }
};

export default config;
