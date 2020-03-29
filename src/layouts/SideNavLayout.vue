<template>
  <div class="relative">
      <div class="sidenav-wrapper bg-brand md:absolute h-16 md:h-screen w-full md:w-16 z-50">
        <nav class="font-glegoo text-layout-w1 h-full flex flex-wrap justify-between md:content-between px-4 md:px-0 md:py-4">
            <g-link class="flex content-center md:w-full md:justify-center" to="/">
              <figure class="flex content-center md:w-full md:block">
                  <svg class="my-auto md:mx-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="55" height="55" viewBox="0 0 55 55"><defs><filter id="a" x="0" y="0" width="55" height="55" filterUnits="userSpaceOnUse"><feOffset dy="3" input="SourceAlpha"/><feGaussianBlur stdDeviation="2.5" result="b"/><feFlood flood-opacity="0.2"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter></defs><g transform="translate(-460.5 -55.5)"><g transform="matrix(1, 0, 0, 1, 460.5, 55.5)" filter="url(#a)"><path d="M20,0A20,20,0,1,1,0,20,20,20,0,0,1,20,0Z" transform="translate(7.5 4.5)" fill="#fff"/></g><g transform="translate(477.746 68.722)"><path d="M0,22.672V0H20.591V13.015H14.423V6.183H6.183V22.672Zm7.553-4.84V7.557h5.48V17.832Z" fill="#2e2e2e"/></g></g></svg>
              </figure>
            </g-link>

            <div class="flex md:w-full md:block">
              <a title="Download CV" class="flex self-center rounded-full w-8 h-8 transition duration-300 ease-out bg-transparent hover:bg-brand-n2 md:mx-auto mr-2 md:mb-2 opacity-50 hover:opacity-100" href="/rhan-cv-march2020.pdf" target="_blank">
                  <unicon class="flex-1 self-center" width="20" height="20" name="file-download-alt" :fill="$static.metadata.brandColors.layoutW1" ></unicon>
              </a>
              <a title="Linkedin Profile" class="flex self-center rounded-full w-8 h-8 transition duration-300 ease-out bg-transparent hover:bg-brand-n2 md:mx-auto mr-2 md:mb-2 opacity-50 hover:opacity-100" href="https://www.linkedin.com/in/rhanmiano" rel="noopener noreferrer" target="_blank">
                  <unicon class="flex-1 self-center" width="20" height="20" name="linkedin-alt" :fill="$static.metadata.brandColors.layoutW1" ></unicon>
              </a>
              <a  title="Github Profile" class="flex self-center rounded-full w-8 h-8 transition duration-300 ease-out bg-transparent hover:bg-brand-n2 md:mx-auto mr-2 md:mb-2 opacity-50 hover:opacity-100" href="https://github.com/rhanmiano" rel="noopener noreferrer" target="_blank">
                  <unicon class="flex-1 self-center" width="20" height="20" name="github-alt" :fill="$static.metadata.brandColors.layoutW1"></unicon>
              </a>
            </div>
        </nav>
      </div>
      <transition name="fade" appear>
        <slot/>
      </transition>
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
    // data() {
    //   return {
    //     socialIconColor: '#F5F5F5'
    //   }
    // }
}
</script>

<style lang="scss">
.sidenav-wrapper .unicon > svg {
  margin: 0 auto !important;
}
</style>