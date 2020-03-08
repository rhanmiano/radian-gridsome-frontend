// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require('./assets/scss/main.scss')

import DefaultLayout from '~/App.vue'
import Unicon from 'vue-unicons'
import { uniArrowRight, uniLinkedinAlt, uniGithubAlt  } from 'vue-unicons/src/icons'

Unicon.add([uniArrowRight, uniLinkedinAlt, uniGithubAlt])

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('App', DefaultLayout)
  Vue.use(Unicon)
}
