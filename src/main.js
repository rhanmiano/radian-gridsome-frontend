// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import VueFilterDateFormat from 'vue-filter-date-format'
// import vmodal from 'vue-js-modal'
import vmodal from 'vue-js-modal/dist/ssr.nocss'

import DefaultLayout from '~/App.vue'

require('typeface-inria-sans')
require('./assets/scss/main.scss')

const meta = [
  {
    key: 'author',
    name: 'author',
    content: 'Rhan Miano',
  },
  {
    key: 'description',
    name: 'description',
    content:
      'Helps in changing the world by developing wonderful experiences on the web.',
  },
  {
    key: 'keywords',
    name: 'keywords',
    content:
      'Web Developer, Software Engineer, Software Developer, Fullstack Developer, Freelance Web Developer, Taguig, Philippines',
  },
  {
    key: 'og:type',
    property: 'og:type',
    content: 'website',
  },
  {
    key: 'og:url',
    property: 'og:url',
    content: 'https://rhanmiano.me',
  },
  {
    key: 'og:title',
    property: 'og:title',
    content: 'Rhan Miano — Full-stack Web Developer from Taguig, PH',
  },
  {
    key: 'og:description',
    property: 'og:description',
    content:
      'Helps in changing the world by developing wonderful experiences on the web.',
  },
  {
    key: 'og:site_name',
    property: 'og:site_name',
    content: 'Rhan Miano — Full-stack Web Developer from Taguig, PH',
  },
  {
    key: 'og:locale',
    property: 'og:locale',
    content: 'en_US',
  },
  {
    key: 'og:image',
    property: 'og:image',
    content: 'https://rhanmiano.me/radian-og-banner.png',
  },
  {
    key: 'og:image:width',
    property: 'og:image:width',
    content: '776',
  },
  {
    key: 'og:image:height',
    property: 'og:image:height',
    content: '338',
  },
]

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('App', DefaultLayout)
  Vue.use(VueFilterDateFormat, {
    dayOfWeekNames: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    dayOfWeekNamesShort: ['Su', 'Mo', 'Tu', 'We', 'Tr', 'Fr', 'Sa'],
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  })

  if (isClient) {
    Vue.use(vmodal)

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
      uniExternalLinkAlt,
      uniEnvelopeHeart,
      uniHomeAlt,
      uniArrow,
      uniWindow,
      uniHeartAlt,
    } = require('vue-unicons/src/icons')

    const {
      customAngular,
      customWordpress,
      customJs,
      customNode,
      customPhp,
      customVue,
      customReact,
    } = require('./custom-icons')

    Unicon.add([
      uniArrowLeft,
      uniArrowRight,
      uniLinkedinAlt,
      uniGithubAlt,
      uniFileDownloadAlt,
      uniCommentImage,
      uniMonitorHeartRate,
      uniRedo,
      uniExternalLinkAlt,
      uniEnvelopeHeart,
      uniHomeAlt,
      uniArrow,
      uniWindow,
      uniHeartAlt,
      customAngular,
      customWordpress,
      customJs,
      customNode,
      customPhp,
      customVue,
      customReact,
    ])

    Vue.use(Unicon)
  }

  head.script.push({
    src: 'https://www.googletagmanager.com/gtag/js?id=UA-130182876-1',
    async: true,
  })

  head.script.push({
    innerHTML:
      "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-130182876-1');",
  })

  head.meta.push(...meta)
}
