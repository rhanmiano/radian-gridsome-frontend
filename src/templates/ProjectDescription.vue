<template>
  <SideNavLayout :navActiveInfo="2">
    <NavLayout :navInfo="navInfo">
      <main class="">
        <div class="container h-full w-full pt-12 mt-12 md:mt-0">
          <div class="w-full block md:flex px-6 md:px-12">
            <div class="w-full md:w-9/12">
              <div class="relative py-8">
                <!-- <div class="absolute w-full "></div> -->
                <g-image class="" :src="$context.img_url"></g-image>
                <p class="leading-tight text-xxs font-avenir-medium">
                  <strong>{{ $context.category.category_name }}</strong> <br />
                  <span class="text-layout-b2"
                    >{{
                      new Date($context.date_from) | dateFormat('MMM YYYY')
                    }}
                    - {{ new Date($context.date_end) | dateFormat('MMM YYYY') }}
                  </span>

                  <br />
                </p>
                <h1 class="m-0 font-avenir-medium-bold leading-tight">
                  {{ $context.name }}
                </h1>
                <p class="text-xs font-medium">
                  {{ $context.short_description }}
                </p>
                <p class="text-xs">
                  <a
                    class="external-link"
                    :href="$context.project_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    >{{ $context.project_url }}</a
                  >
                </p>
                <div
                  class="text-layout-b2 mt-8 font-light text-justify"
                  id="project-description"
                  v-html="htmlDecode($context.description)"
                ></div>
              </div>
            </div>
            <div class="w-full md:w-3/12 md:pl-8 pt-4">
              <p class="text-xs my-1">Tags:</p>
              <div class="w-full flex flex-wrap">
                <span
                  class="leading-none mb-1 bg-brand text-layout-w1 px-2 py-1 rounded-full text-xxs mr-1"
                  v-for="edge in $page.projectTags.edges"
                  :key="edge.node.id"
                >
                  {{ edge.node.tag_name }}
                </span>
              </div>
            </div>
          </div>
          <CustomFooter></CustomFooter>
        </div>
      </main>
    </NavLayout>
  </SideNavLayout>
</template>

<page-query>
  query ProjectTags($id: String!){
    projectTags: allProjectTags(filter: {
      project_id: {eq: $id}
    }) {
      edges {
        node {
          id
          project_id
          tag_id
          tag_name
        }
      }
      
    }
  }
</page-query>

<script>
import NavLayout from '~/layouts/NavLayout.vue'
import SideNavLayout from '~/layouts/SideNavLayout.vue'

import CustomFooter from '~/components/CustomFooter.vue'

import unescape from 'lodash/unescape'

export default {
  name: 'ProjectDescription',
  components: {
    NavLayout,
    SideNavLayout,
    CustomFooter,
  },
  data() {
    return {
      navInfo: {
        prev: {
          hasPrev: true,
          linksTo: '/portfolio',
          linkText: 'portfolio',
        },
        next: {
          hasNext: true,
          linksTo: '/feed',
          linkText: 'feed',
        },
        linkColor: 'text-brand',
        iconColor: '#11A89D',
      },
      // unescape: new DOMParser()
    }
  },
  methods: {
    htmlDecode(input) {
      return unescape(input)
      // var doc = this.DOMParser.parseFromString(input, "text/html");
      // return doc.documentElement.textContent;
    },
  },
  mounted() {},
  metaInfo() {
    return {
      title: this.$context.name,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$context.short_description,
        },
        {
          key: 'og:url',
          name: 'og:url',
          content: this.$context.project_url,
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: this.$context.name,
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: this.$context.short_description,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
div#project-description {
  @apply mb-2;
}
</style>
