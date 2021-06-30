<template>
  <main class="bg-brand h-screen overflow-hidden relative">
    <div
      class="container relative h-full w-full md:w-10/12 lg:w-8/12 flex flex-wrap justify-center content-center px-4 md:px-8 lg:px-16"
    >
      <div
        v-if="loading"
        class="absolute flex justify-center w-full h-full top-0 left-0 opacity-50"
      >
        <clip-loader
          class="self-center"
          :loading="true"
          :color="$static.metadata.brandColors.layoutW1"
          :size="'80px'"
        ></clip-loader>
      </div>
      <div v-else class="w-full px-2 wrap-animate" ref="wrapAnimate">
        <figure class="w-1/2 mx-auto mb-6 logo" ref="logo">
          <svg
            class="mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="100"
            height="100"
            viewBox="0 0 100 100"
          >
            <defs>
              <filter
                id="a"
                x="0"
                y="0"
                width="100"
                height="100"
                filterUnits="userSpaceOnUse"
              >
                <feOffset dy="3" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="2.5" result="b" />
                <feFlood flood-opacity="0.2" />
                <feComposite operator="in" in2="b" />
                <feComposite in="SourceGraphic" />
              </filter>
            </defs>
            <g transform="translate(-460.5 -55.5)">
              <g transform="matrix(1, 0, 0, 1, 460.5, 55.5)" filter="url(#a)">
                <path
                  d="M42.5,0A42.5,42.5,0,1,1,0,42.5,42.5,42.5,0,0,1,42.5,0Z"
                  transform="translate(7.5 4.5)"
                  fill="#fff"
                />
              </g>
              <g transform="translate(488.711 78.535)">
                <path
                  d="M0,48.177V0H43.755V27.658H30.649V13.139H13.139V48.177ZM16.05,37.893V16.059H27.7V37.893Z"
                  fill="#2e2e2e"
                />
              </g>
            </g>
          </svg>
        </figure>

        <div class="text-layout-w1 text-center leading-tight">
          <h1 class="title font-glegoo-bold" ref="title">
            Hello! <br class="block md:hidden" />I'm Rhan Miano.
          </h1>
          <h4 class="subtitle" ref="subtitle">
            {{ bio.bio }}
          </h4>
        </div>
        <div class="flex justify-center mb-6 explore" ref="explore">
          <g-link
            class="bg-white hover:bg-brand text-brand hover:text-layout-w1 rounded px-6 py-2 mt-2 font-semibold transition duration-300 ease-out border focus:outline-none"
            to="/about/"
            >Explore</g-link
          >
        </div>

        <div ref="socWrap" class="flex w-1/4 mx-auto socWrap">
          <a
            ref="soc1"
            title="Download CV"
            class="social-icons soc1"
            href="/rhan-cv-march2020.pdf"
            target="_blank"
          >
            <unicon
              class="flex justify-center flex-1 self-center"
              width="20"
              height="20"
              name="file-download-alt"
              :fill="$static.metadata.brandColors.layoutW1"
            ></unicon>
          </a>
          <a
            ref="soc2"
            title="Linkedin Profile"
            class="social-icons soc2"
            href="https://www.linkedin.com/in/rhanmiano"
            rel="noopener noreferrer"
            target="_blank"
          >
            <unicon
              class="flex justify-center flex-1 self-center"
              width="20"
              height="20"
              name="linkedin-alt"
              :fill="$static.metadata.brandColors.layoutW1"
            ></unicon>
          </a>
          <a
            ref="soc3"
            title="Github Profile"
            class="social-icons soc3"
            href="https://github.com/rhanmiano"
            rel="noopener noreferrer"
            target="_blank"
          >
            <unicon
              class="flex justify-center flex-1 self-center"
              width="20"
              height="20"
              name="github-alt"
              :fill="$static.metadata.brandColors.layoutW1"
            ></unicon>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<static-query>
query {
  metadata {
    brandColors {
      brand,
      layoutW1,
      layoutB2
    }
  }
}
</static-query>

<script>
import NavLayout from '~/layouts/NavLayout.vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

import axios from 'axios'

const bioQuery = {
  query: `query {
    viewer {
      login
      name
      bio
      status {
        message
      }
    }
  }`,
}

export default {
  name: 'Home',
  components: {
    NavLayout,
    ClipLoader,
  },
  data() {
    return {
      loading: true,
      bio: {},
    }
  },
  metaInfo() {
    return {
      title: 'Home',
    }
  },
  methods: {
    checkViewPort() {
      var viewport = window.innerWidth
      return viewport
    },
    async getBio() {
      const { data } = await axios.post(
        `${process.env.GRIDSOME_GH_API_URL}`,
        bioQuery,
        {
          responseType: 'json',
          headers: {
            'content-type': 'application/json',
            authorization: `bearer ${process.env.GRIDSOME_GH_TOKEN}`,
          },
        }
      )
      sessionStorage.setItem('lsBio', JSON.stringify(data.data.viewer))
    },
  },
  async mounted() {
    if (!process.isClient) return

    if (!sessionStorage.getItem('lsBio')) {
      this.loading = true
      await this.getBio().then(() => {
        this.bio = JSON.parse(sessionStorage.getItem('lsBio'))
        this.loading = false
      })
    } else {
      this.bio = await JSON.parse(sessionStorage.getItem('lsBio'))
      this.loading = false
    }

    await this.$nextTick()

    if (this.loading === false) {
      const { TimelineLite, Back } = require('gsap-umd')
      const {
        wrapAnimate,
        title,
        subtitle,
        logo,
        explore,
        soc1,
        soc2,
        soc3,
        socWrap,
      } = this.$refs
      // const plugins = [TimelineLite, Back]

      const timeline = new TimelineLite()

      await timeline
        .to(wrapAnimate, 0.1, {
          opacity: 1,
          ease: Back.easeIn,
        })
        .from(logo, 1, {
          opacity: 0,
          y: -50,
          ease: Back.easeOut,
        })
        .from(
          title,
          1,
          {
            opacity: 0,
            x: 150,
            ease: Back.easeOut,
          },
          '-=1'
        )
        .from(
          subtitle,
          1,
          {
            opacity: 0,
            x: -150,
            ease: Back.easeOut,
          },
          '-=1'
        )
        .from(explore, 0.8, {
          opacity: 0,
          y: 20,
          ease: Back.easeInOut,
        })
        .from(
          socWrap,
          0.8,
          {
            opacity: 0,
            ease: Back.easeIn,
          },
          0.9
        )
        .from(
          soc1,
          0.6,
          {
            opacity: 0,
            x: 83,
            ease: Back.easeIn,
          },
          0.9
        )
        .from(
          soc3,
          0.6,
          {
            opacity: 0,
            x: -83,
            ease: Back.easeIn,
          },
          0.9
        )
    }
  },
}
</script>

<style scoped>
.home-links a {
  margin-right: 1rem;
}

/* figure.logo, .title, .kicker, .explore, .socWrap, .soc1, .soc2, .soc3{
  position: relative;
  opacity: 0;
}
.logo {
  top: -50px;
}*/
.title {
  @apply font-avenir-roman m-0 mb-2;
}
.subtitle {
  @apply font-avenir font-light m-0 mb-6 text-center;
}
/*.explore {
  top: 20px;
}
.soc1 {
  left: 83px;
}
.soc3 {
  left: -83px;
} */
</style>
