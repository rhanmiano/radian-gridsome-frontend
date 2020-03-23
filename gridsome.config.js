// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

/* if (process.env.NODE_ENV === 'production') */ postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  siteName: 'Rhan Miano',
  siteUrl: 'https://rhanmiano.me',
  siteDescription: 'An experienced Web Developer from Taguig, PH',
  metadata: {
    brandColors: {
      'brandP2': '#18D3C5',
      'brandP1': '#14BBAF',
      'brand': '#11A89D',
      'brandN1': '#0F8C83',
      'brandN2': '#0E7971',
      'denotiveError': '#FF6565',
      'layoutW1': '#F5F5F5',
      'layoutW2': '#DEDEDE',
      'layoutB1': '#5C5C5C',
      'layoutB2': '#414141'
    }
  },
  icon: {
    favicon: './src/radian-favicon-96x96.png',
    touchicon: './src/radian-apple-icon-180x180.png'
  },
  port: 5000,
  plugins: [
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      }
    }
  }
}
