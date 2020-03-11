<template>
  <footer class="my-6 text-center text-sm text-brand md:pl-24">
    Rhan Miano - Web Developer &copy; 2019 - <span>{{today}}</span>
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

</style>