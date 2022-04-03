<template>
  <div class="relative">
    <div
      class="sidenav-wrapper bg-brand fixed md:absolute md:left-0 md:h-screen w-full md:w-3/12 z-50"
    >
      <nav class="text-layout-w1 h-full px-4 md:px-8 py-1 md:py-4">
        <div
          class="flex flex-wrap justify-between md:content-center h-full"
          ref="wrapAnimate"
        >
          <g-link class="flex content-center md:mb-4" to="/">
            <figure class="flex content-center md:block" ref="homeLogo">
              <svg
                class="my-auto"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="55"
                height="55"
                viewBox="0 0 55 55"
              >
                <defs>
                  <filter
                    id="a"
                    x="0"
                    y="0"
                    width="55"
                    height="55"
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
                  <g
                    transform="matrix(1, 0, 0, 1, 460.5, 55.5)"
                    filter="url(#a)"
                  >
                    <path
                      d="M20,0A20,20,0,1,1,0,20,20,20,0,0,1,20,0Z"
                      transform="translate(7.5 4.5)"
                      fill="#fff"
                    />
                  </g>
                  <g transform="translate(477.746 68.722)">
                    <path
                      d="M0,22.672V0H20.591V13.015H14.423V6.183H6.183V22.672Zm7.553-4.84V7.557h5.48V17.832Z"
                      fill="#2e2e2e"
                    />
                  </g>
                </g>
              </svg>
            </figure>
          </g-link>

          <div class="hidden md:block text-layout-w1 leading-tight">
            <h3 class="font-inria-sans m-0 mb-2" ref="title">
              Hello! <br class="hidden md:block" />I'm Rhan Miano.
            </h3>
            <p class="font-inria-sans text-sm font-light m-0 mb-6" ref="kicker1">
              {{ bio.bio }}
            </p>
          </div>

          <div class="hidden md:block navlist mb-6" ref="navlist">
            <ul class="left-0">
              <li
                class="navlist-item"
                :class="{ 'navlist-item-active': index == navActiveInfo }"
                v-for="(nav, index) in navs"
                :key="index"
              >
                <g-link :to="nav.link">{{ nav.text }}</g-link>
              </li>
            </ul>
          </div>

          <p
            class="hidden lg:block font-inria-sans text-sm font-light m-0 mb-6 leading-tight"
            ref="kicker2"
          >
            For freelance work please
            <g-link class="external-link" to="/contact"
              ><unicon
                class="mx-2"
                width="18"
                height="18"
                name="envelope-heart"
                :fill="$static.metadata.brandColors.layoutW1"
              ></unicon></g-link
            >me.
          </p>
          <div ref="socWrap" class="flex md:w-1/2">
            <a
              ref="soc1"
              title="Download CV"
              class="flex self-center rounded-full w-8 h-8 transition duration-300 ease-out bg-transparent hover:bg-brand-n2 mr-2 md:mx-auto md:mb-2 opacity-50 hover:opacity-100"
              href="/rhan-cv-july2021.pdf"
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
              class="flex self-center rounded-full w-8 h-8 transition duration-300 ease-out bg-transparent hover:bg-brand-n2 mr-2 md:mx-auto md:mb-2 opacity-50 hover:opacity-100"
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
              class="flex self-center rounded-full w-8 h-8 transition duration-300 ease-out bg-transparent hover:bg-brand-n2 mr-2 md:mx-auto md:mb-2 opacity-50 hover:opacity-100"
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
      </nav>
      <nav class="bg-layout-b2 w-full block md:hidden overflow-hidden py-3">
        <div class="md:block navlist" ref="navlist2">
          <ul class="flex">
            <li
              class="navlist-icon"
              :class="{ 'navlist-icon-active': index == navActiveInfo }"
              v-for="(nav, index) in navs"
              :key="index"
            >
              <g-link :to="nav.link"
                ><unicon
                  class="flex justify-center flex-1 self-center"
                  width="15"
                  height="15"
                  :name="nav.icon"
                  :fill="$static.metadata.brandColors.layoutW1"
                ></unicon
              ></g-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="wrap-animate" ref="wrapAnimate2">
      <div ref="slot">
        <slot />
      </div>
    </div>
  </div>
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
export default {
  name: 'SideNavLayout',
  props: ['navActiveInfo'],
  data() {
    return {
      navs: [
        { text: 'Home', link: '/', icon: 'home-alt' },
        { text: 'About', link: '/about/', icon: 'arrow' },
        { text: 'Portfolio', link: '/portfolio/', icon: 'window' },
        { text: 'Feed', link: '/feed/', icon: 'heart-alt' },
        { text: 'Contact', link: '/contact/', icon: 'envelope-heart' },
      ],
      bio: {},
    }
  },
  async mounted() {
    if (!process.isClient) return
    const { TimelineLite, Back, Power1 } = require('gsap-umd')

    const {
      wrapAnimate,
      wrapAnimate2,
      homeLogo,
      title,
      kicker1,
      kicker2,
      navlist,
      navlist2,
      socWrap,
      slot,
    } = this.$refs
    const timeline = new TimelineLite()

    // Side Nav
    /* timeline.to(wrapAnimate, 0.1, {
      opacity: 1,
      ease: Back.easeIn,
    })
    .from([homeLogo,title,kicker1,navlist,navlist2,kicker2,socWrap,], 0.6, {
        opacity: 0,
        x: 10,
        stagger: {
          each: 0.2,
          ease: Power1.EaseIn
        },
        ease: Back.easeInOut,
      }) */

    // Main Section
    timeline
      .to(wrapAnimate2, 0.4, {
        opacity: 1,
        ease: Back.easeIn,
      })
      .from(
        slot,
        0.2,
        {
          opacity: 0,
          y: -20,
          ease: Back.EaseIn,
        },
        '-=0.1'
      )

    this.bio = await JSON.parse(sessionStorage.getItem('lsBio'))
    console.log('bio', this.bio)
  },
}
</script>

<style lang="scss">
.sidenav-wrapper .unicon > svg {
  margin: 0 auto !important;
}

.navlist {
  width: 100%;
  position: relative;

  &-icon {
    @apply w-1/3 transition-all duration-300 ease-out  opacity-50;

    &:hover {
      @apply opacity-100 #{!important};
    }

    &-active {
      @apply opacity-100;
    }
  }

  &-item {
    @apply text-white text-xs w-1/3 pl-5 transition-all duration-300 ease-out  opacity-50 relative left-0;
    cursor: pointer;

    &:hover {
      @apply opacity-100 #{!important};
      // left: 25px;

      &:after {
        width: 25px;
      }
    }

    &:focus {
      // @apply outline-none;
    }

    &-active {
      @apply opacity-100 #{!important};
      // left: 25px;

      &:after {
        width: 25px;
      }
    }

    &::after {
      @apply transition-all duration-300 ease-out;
      content: ' ';
      position: absolute;
      // left: -10px;
      display: block;
      background-color: white;
      z-index: -30px;
      height: 1px;
    }
  }
}
</style>
