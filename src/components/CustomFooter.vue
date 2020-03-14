<template>
  <footer class="my-6 text-center text-xs text-brand md:pl-24 mt-24">
    <p> Rhan Miano - Web Developer &copy; 2019 - <span>{{today}}</span> </p>
    <ul class="sitemap">
      <li><g-link to="/">Home</g-link></li>
      <li><g-link to="/about/">About</g-link></li>
      <li><g-link to="/portfolio/">Portfolio</g-link></li>
      <li><g-link to="/feed/">Feed</g-link></li>
      <li><g-link to="/contact/">Contact</g-link></li>
    </ul>
    <g-image class="mx-auto mt-4" src="~/assets/img/positivessl_trust_seal_sm_124x32.png"></g-image>
  </footer>
</template>

<script>
export default {
  name: 'CustomFooter',
  data() {
    return {
      today: new Date().getFullYear()
    }
  }
}
</script>

<style>
ul.sitemap > li {
  display: inline;
  margin: 0 .5rem;
  @apply text-xxs;
}

</style>