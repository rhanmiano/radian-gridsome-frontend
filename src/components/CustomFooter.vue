<template>
  <footer class="my-6 text-center text-xs text-brand mt-24">
    <p class="text-layout-b1 font-medium">
      Rhan Miano - Web Developer &copy; 2019 - <span>{{ today }}</span>
    </p>
    <ul class="sitemap">
      <li><g-link to="/">Home</g-link></li>
      <li><g-link to="/about/">About</g-link></li>
      <li><g-link to="/portfolio/">Portfolio</g-link></li>
      <li><g-link to="/feed/">Feed</g-link></li>
      <li><g-link to="/contact/">Contact</g-link></li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'CustomFooter',
  data() {
    return {
      today: new Date().getFullYear(),
    }
  },
}
</script>

<style>
ul.sitemap > li {
  display: inline;
  margin: 0 0.5rem;
  @apply text-xxs;
}
</style>
