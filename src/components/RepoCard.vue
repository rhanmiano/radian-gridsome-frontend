<template>
  <div class="w-full lg:w-1/2 lg:px-2">
    <section class="github-repo-card">
      <div class="w-full flex">
        <div class="flex-none">
          <g-link :to="html_url">
            <unicon
              class="mx-auto self-center transition duration-300 ease-out opacity-25 hover:opacity-50"
              name="external-link-alt"
              :fill="$static.metadata.brandColors.layoutB1"
            ></unicon>
          </g-link>
        </div>
        <div class="ml-2 flex-grow self-center">
          <p class="m-0 font-avenir-medium leading-tight font-medium">
            {{ name }}
          </p>
        </div>
        <div
          class="flex-none self-center text-xxs"
          :style="{ color: languageColor }"
        >
          <p>{{ language }}</p>
        </div>
      </div>
    </section>
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
  name: 'RepoCard',
  props: ['name', 'html_url', 'language', 'languageColor', 'refs'],
  methods: {},
}
</script>

<style></style>
