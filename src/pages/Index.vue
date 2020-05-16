<template>
  <!-- <NavLayout :navInfo="navInfo"> -->
    <main class="bg-brand h-screen overflow-hidden">
      <div class="container h-full w-full md:w-10/12 lg:w-8/12 flex flex-wrap justify-center content-center px-4 md:px-8 lg:px-16">
        <div class="w-full px-2">
          <figure class="w-1/2 mx-auto mb-6" ref="logo">
            <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" viewBox="0 0 100 100"><defs><filter id="a" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse"><feOffset dy="3" input="SourceAlpha"/><feGaussianBlur stdDeviation="2.5" result="b"/><feFlood flood-opacity="0.2"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter></defs><g transform="translate(-460.5 -55.5)"><g transform="matrix(1, 0, 0, 1, 460.5, 55.5)" filter="url(#a)"><path d="M42.5,0A42.5,42.5,0,1,1,0,42.5,42.5,42.5,0,0,1,42.5,0Z" transform="translate(7.5 4.5)" fill="#fff"/></g><g transform="translate(488.711 78.535)"><path d="M0,48.177V0H43.755V27.658H30.649V13.139H13.139V48.177ZM16.05,37.893V16.059H27.7V37.893Z" fill="#2e2e2e"/></g></g></svg>
          </figure>

          <div class="text-layout-w1 text-center leading-tight">
            <h1 class="font-avenir-roman m-0 mb-2" ref="title">Hey there! <br class="block md:hidden">I'm Rhan Miano.</h1>
            <h4 class="font-avenir font-light m-0 mb-6" ref="kicker">I design and develop wonderful experiences on the web. <br class="hidden md:block">I work as a fulltime Software Engineer.
            </h4>
          </div>
          <div class="flex justify-center mb-6" ref="explore">
            <g-link class="bg-white hover:bg-brand text-brand hover:text-layout-w1 rounded px-6 py-2 mt-2 font-semibold transition duration-300 ease-out border focus:outline-none" to="/about/" >Explore</g-link>
          </div>

          <div ref="socWrap" class="flex w-1/4 mx-auto">
              <a ref="soc1" title="Download CV" class="flex self-center rounded-full w-8 h-8 transition duration-300 ease-out bg-transparent hover:bg-brand-n2 md:mx-auto mr-2 md:mb-2 opacity-50 hover:opacity-100" href="/rhan-cv-march2020.pdf" target="_blank">
                  <unicon class="flex justify-center flex-1 self-center" width="20" height="20" name="file-download-alt" :fill="$static.metadata.brandColors.layoutW1" ></unicon>
              </a>
              <a ref="soc2" title="Linkedin Profile" class="flex self-center rounded-full w-8 h-8 transition duration-300 ease-out bg-transparent hover:bg-brand-n2 md:mx-auto mr-2 md:mb-2 opacity-50 hover:opacity-100" href="https://www.linkedin.com/in/rhanmiano" rel="noopener noreferrer" target="_blank">
                  <unicon class="flex justify-center flex-1 self-center" width="20" height="20" name="linkedin-alt" :fill="$static.metadata.brandColors.layoutW1" ></unicon>
              </a>
              <a ref="soc3" title="Github Profile" class="flex self-center rounded-full w-8 h-8 transition duration-300 ease-out bg-transparent hover:bg-brand-n2 md:mx-auto mr-2 md:mb-2 opacity-50 hover:opacity-100" href="https://github.com/rhanmiano" rel="noopener noreferrer" target="_blank">
                  <unicon class="flex justify-center flex-1 self-center" width="20" height="20" name="github-alt" :fill="$static.metadata.brandColors.layoutW1"></unicon>
              </a>
            </div>
        </div>
      </div>
    </main>
  <!-- </NavLayout> -->
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
import { TimelineLite, Back} from 'gsap'

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  components: {
    NavLayout,
  },
  metaInfo() {
    return {
      title: 'Home'
    }
  },
  methods: {
    checkViewPort(){
        var viewport = window.innerWidth;
        return viewport;
    }
  }, 
  mounted() {
    const { title, kicker, logo, explore, soc1, soc2, soc3, socWrap } = this.$refs
    const timeline = new TimelineLite()

    const viewport = this.checkViewPort()

    timeline.from(logo, 1, {
      opacity: 0,
      y: -50,
      ease: Back.easeOut,
    })
    .from(title, 1, {
      opacity: 0,
      x: 150,
      ease: Back.easeOut,
    }, '-=1')
    .from(kicker, 1, {
      opacity: 0,
      x: -150,
      ease: Back.easeOut,
    }, '-=1')
    .from(explore, 0.8, {
      opacity: 0,
      y: 20,
      ease: Back.easeInOut,
    })
    .from(socWrap, 0.8, {
      opacity: 0,
      ease: Back.easeIn,
    }, 0.9)
    .from(soc1, 0.6, {
      opacity: 0,
      x: 83,
      ease: Back.easeIn,
    }, 0.9)
    .from(soc3, 0.6, {
      opacity: 0,
      x: -83,
      ease: Back.easeIn,
    }, 0.9)
  }
}
</script>

<style scoped>
.home-links a {
  margin-right: 1rem;
}
</style>
