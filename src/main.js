// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require('./assets/scss/main.scss')
import VueFilterDateFormat from 'vue-filter-date-format'

import DefaultLayout from '~/App.vue'

const meta = [
  {
    key: 'author',
    name: 'author',
    content: 'Rhan Miano'
  },
  {
    key: 'decription',
    name: 'decription',
    content: 'Aspiring Web Developer from Taguig, PH'
  },
  {
    key: 'keywords',
    name: 'keywords',
    content: 'Web Developer, Software Engineer, Software Developer, Fullstack Developer, Taguig, Philippines'
  },
  {
    key: 'og:type',
    name: 'og:type',
    content: 'website'
  },
  {
    key: 'og:url',
    name: 'og:url',
    content: 'https://rhanmiano.me'
  },
  {
    key: 'og:title',
    name: 'og:title',
    content: 'Rhan Miano'
  },
  {
    key: 'og:description',
    name: 'og:description',
    content: 'Aspiring Web Developer from Taguig, PH'
  },
  {
    key: 'og:site_name',
    name: 'og:site_name',
    content: 'Rhan Miano - Web Developer'
  },
  {
    key: 'og:locale',
    name: 'og:locale',
    content: 'en_US'
  },
  {
    key: 'og:image',
    name: 'og:image',
    content: 'https://rhanmiano.me/assets/static/radian-og-banner.png'
  },
  {
    key: 'og:image:width',
    name: 'og:image:width',
    content: '776'
  },
  {
    key: 'og:site_name',
    name: 'og:site_name',
    content: '338'
  }
]

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('App', DefaultLayout)
  Vue.use(VueFilterDateFormat, {
    dayOfWeekNames: [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
      'Friday', 'Saturday'
    ],
    dayOfWeekNamesShort: [
      'Su', 'Mo', 'Tu', 'We', 'Tr', 'Fr', 'Sa'
    ],
    monthNames: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    monthNamesShort: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]
  })

  if (isClient) {
    const FlashMessage = require('@smartweb/vue-flash-message').default

    Vue.use(FlashMessage, {
      name: 'flashMessage',
      tag: 'FlashMessage',
      time: 3000,
      strategy: 'single'
    })

    const Unicon = require('vue-unicons').default
    const { 
      uniArrowLeft,
      uniArrowRight, 
      uniLinkedinAlt, 
      uniGithubAlt, 
      uniFileDownloadAlt, 
      uniCommentImage,
      uniMonitorHeartRate,
      uniRedo,
      uniExternalLinkAlt
    } = require('vue-unicons/src/icons')

    Unicon.add([
      uniArrowLeft,
      uniArrowRight, 
      uniLinkedinAlt, 
      uniGithubAlt,
      uniFileDownloadAlt,
      uniCommentImage,
      uniMonitorHeartRate,
      uniRedo,
      uniExternalLinkAlt
    ])

    Vue.use(Unicon)

  }
  
  head.meta.push(...meta);
}
