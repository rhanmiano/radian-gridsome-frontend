<template>
  <div class="project-wrapper">
    <!-- <g-link title="View Project" :to="`/portfolio/${slug}`"> -->
    <div
      @click="gotoProjectSlug"
      class="w-full py-4 transition duration-300 bg-white hover:shadow-md flex rounded shadow-xs mb-2 cursor-pointer"
    >
      <div class="flex flex-none self-center w-10 h-10 mx-2">
        <unicon
          class="mx-auto self-center"
          :name="`custom-${tech}`"
          :fill="$static.metadata.brandColors.layoutW1"
        ></unicon>
      </div>
      <div class="w-full self-center">
        <div
          class="self-center text-sm md:text-xs leading-tight font-avenir mb-1"
        >
          <strong class="project-title font-bold">{{ name }}</strong> <br />
        </div>
        <div class="sm:flex  flex-grow self-center leading-3">
          <span class="text-xs text-layout-b1">{{ short_description }}</span>
        </div>
      </div>
      <div class="flex flex-none self-center mr-4">
        <a
          @mouseover="changeUniconColor"
          @mouseleave="origUniconColor"
          target="_blank"
          rel="noopener noreferrer"
          title="Project Demo"
          :href="project_url"
        >
          <unicon
            class="self-center ml-1"
            name="comment-image"
            :fill="projectLinkColor"
          ></unicon>
        </a>
      </div>
    </div>
    <!-- </g-link> -->
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
    'date_end',
  ],
  data() {
    return {
      projectLinkColor: null,
    }
  },
  methods: {
    changeUniconColor() {
      this.projectLinkColor = this.$static.metadata.brandColors.layoutW2
    },
    origUniconColor() {
      this.projectLinkColor = this.$static.metadata.brandColors.brand
    },
    gotoProjectSlug() {
      this.$router.push({ path: `/portfolio/${this.slug}` })
    },
  },
  mounted() {
    this.projectLinkColor = this.$static.metadata.brandColors.brand
  },
}
</script>

<style></style>
