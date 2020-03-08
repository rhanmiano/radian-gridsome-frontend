<template>
  <div class="relative">
    <header class="absolute w-full bg-transparent p-5">
      <nav class="font-glegoo" :class="linkColor">
        <g-link class="flex content-center float-right" :to="linksTo">
          <span class="text-right"> {{linkText}} </span> 
          <unicon class="ml-1" name="arrow-right" :fill="iconColor"></unicon>
        </g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'NavLayout',
  props: ['linksTo', 'linkText', 'linkColor', 'iconColor', 'isHome'],
  data() {
    return {
      today: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">

</style>