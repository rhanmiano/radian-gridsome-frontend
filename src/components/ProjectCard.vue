<template>
  <div class="project-wrapper">
    <div class="w-full h-16 bg-white flex rounded shadow-xs mb-2">
      <div class="flex-none self-center rounded-full w-10 h-10 bg-layout-b1 m-4"></div>
      <div class="flex-grow self-center">
        <strong class="decor text-sm font-glegoo-bold leading-none m-0">{{name}}</strong> <br>
        <span class="text-xs text-layout-w2">Personal | {{date_from}} - {{date_end}} </span>
      </div>
      <div class="flex flex-none self-center mr-4">
        <unicon class="self-center ml-1" name="arrow-right" fill="gray"></unicon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: ['name', 'date_from', 'date_end']
}
</script>

<style>

</style>