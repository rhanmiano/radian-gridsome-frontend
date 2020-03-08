// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require('./assets/scss/main.scss')
import VueFilterDateFormat from 'vue-filter-date-format';

import DefaultLayout from '~/App.vue'
import Unicon from 'vue-unicons'
import { 
  uniArrowRight, 
  uniLinkedinAlt, 
  uniGithubAlt, 
  uniFileDownloadAlt, 
  uniCommentImage,
  uniMonitorHeartRate  } from 'vue-unicons/src/icons'

Unicon.add([
  uniArrowRight, 
  uniLinkedinAlt, 
  uniGithubAlt,
  uniFileDownloadAlt,
  uniCommentImage,
  uniMonitorHeartRate
])

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('App', DefaultLayout)
  Vue.use(Unicon)
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
  
}
