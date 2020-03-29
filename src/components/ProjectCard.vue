<template>
  <div class="project-wrapper">
    <g-link title="View Project" :to="`/portfolio/${slug}`">
      <div class="w-full h-16 transition duration-300 bg-white hover:shadow-md flex rounded shadow-xs mb-2">
        <div class="flex flex-none self-center w-10 h-10 m-2">
          <unicon class="mx-auto self-center" :name="`custom-${tech}`" :fill="$static.metadata.brandColors.layoutW1"></unicon>
        </div>
        <div class="flex-grow self-center text-sm md:text-xs leading-none font-glegoo">
          <strong class="project-title font-bold">{{name}}</strong> <br>
          <span class="text-xxs text-layout-w2">{{new Date(date_from) | dateFormat('MMM YYYY')}} - {{new Date(date_end) | dateFormat('MMM YYYY')}} </span>
        </div>
        <div class="hidden sm:flex sm:w-2/4  flex-grow self-center">
          <span class="text-xs text-layout-b1 leading-none pl-4">{{short_description}}</span>
        </div>
        <div class="flex flex-none self-center mr-4">
          <a :href="project_url" target="_blank" rel="noopener noreferrer" title="Project Demo">
            <unicon class="self-center ml-1" name="comment-image" :fill="$static.metadata.brandColors.layoutW2"></unicon>
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
      layoutW2,
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
      'tech',
      'project_url',
      'date_from',
      'date_end'
    ]
}
</script>

<style>

</style>