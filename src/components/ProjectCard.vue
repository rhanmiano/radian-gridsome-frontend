<template>
  <div class="project-wrapper">
    <g-link title="View Project" :to="`/portfolio/${slug}`">
      <div class="w-full h-16 transition duration-300 bg-white hover:shadow-md flex rounded shadow-xs mb-2">
        <div class="flex flex-none self-center rounded-full w-10 h-10 bg-brand-n2 m-4">
          <unicon class="mx-auto self-center" name="monitor-heart-rate" :fill="$static.metadata.brandColors.layoutW1"></unicon>
        </div>
        <div class="flex-grow self-center leading-none font-glegoo">
          <strong class="project-title text-sm font-bold">{{name}}</strong> <br>
          <span class="text-xxs text-layout-w2">{{category_name.toUpperCase() }} | {{new Date(date_from) | dateFormat('MMM YYYY')}} - {{new Date(date_end) | dateFormat('MMM YYYY')}} </span>
        </div>
        <div class="hidden sm:flex sm:w-2/4  flex-grow self-center">
          <span class="text-xs text-layout-b1 leading-none pl-4">{{short_description}}</span>
        </div>
        <div class="flex flex-none self-center mr-4">
          <a href="#" target="_blank" rel="noopener noreferrer" title="Project Demo">
            <unicon class="self-center ml-1" name="comment-image" :fill="$static.metadata.brandColors.brand"></unicon>
          </a>
        </div>
      </div>
    </g-link>
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
    name: 'ProjectCard',
    props: [
      'name',
      'slug',
      'category_name',
      'description',
      'short_description',
      'date_from',
      'date_end'
    ]
}
</script>

<style>

</style>