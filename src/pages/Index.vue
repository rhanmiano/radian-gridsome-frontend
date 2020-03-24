<template>
  <!-- <NavLayout :navInfo="navInfo"> -->
    <main class="bg-brand h-screen">
      <div class="container h-full w-full md:w-3/12 flex flex-wrap justify-center content-center">
        <div class="w-full px-2">
          <figure class="w-1/2 mx-auto mb-6">
            <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" viewBox="0 0 100 100"><defs><filter id="a" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse"><feOffset dy="3" input="SourceAlpha"/><feGaussianBlur stdDeviation="2.5" result="b"/><feFlood flood-opacity="0.2"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter></defs><g transform="translate(-460.5 -55.5)"><g transform="matrix(1, 0, 0, 1, 460.5, 55.5)" filter="url(#a)"><path d="M42.5,0A42.5,42.5,0,1,1,0,42.5,42.5,42.5,0,0,1,42.5,0Z" transform="translate(7.5 4.5)" fill="#fff"/></g><g transform="translate(488.711 78.535)"><path d="M0,48.177V0H43.755V27.658H30.649V13.139H13.139V48.177ZM16.05,37.893V16.059H27.7V37.893Z" fill="#2e2e2e"/></g></g></svg>
          </figure>

          <div class="font-glegoo text-layout-w1 text-center leading-tight">
            <h2 class="mb-6">{{ greet[0] }}</h2>
            <h1 class="">
              I'm <strong class="font-glegoo-bold">Rhan</strong>, an aspiring <strong class="font-glegoo-bold">Web Developer</strong> from <strong class="font-glegoo-bold">Taguig, PH</strong>.
            </h1>
          </div>
          <div class="flex justify-center">
            <g-link class="bg-white hover:bg-brand text-brand hover:text-layout-w1 rounded px-6 py-2 mt-2 font-semibold transition duration-300 ease-out border focus:outline-none" to="/about/" >Explore</g-link>
          </div>
        </div>
      </div>
    </main>
  <!-- </NavLayout> -->
</template>

<script>
import NavLayout from '~/layouts/NavLayout.vue'

export default {
  name: 'Home',
  data() {
    return {
      greet: [
        'Hey there!',
        'Kamusta?'
      ],
    }
  },
  components: {
    NavLayout,
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style scoped>
.home-links a {
  margin-right: 1rem;
}
</style>
