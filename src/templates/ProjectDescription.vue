<template>
  <SideNavLayout>
    <NavLayout :navInfo="navInfo">
    <main class="">
      <div class="container h-full w-full pt-12">
        <div class="w-full block md:flex px-8 md:pl-24">
          <div class="w-full md:w-8/12">
            <div class="relative bg-white rounded p-8 shadow-xs">
              <!-- <div class="absolute w-full "></div> -->
              <g-image class="" src="~/assets/img/sample-project.png"></g-image>
              <p class="leading-none text-xxs font-glegoo">
                <strong>{{ $context.category.category_name }}</strong> <br>
                <span class="text-layout-w2">{{new Date($context.date_from) | dateFormat('MMM YYYY')}} - {{new Date($context.date_end) | dateFormat('MMM YYYY')}} </span>
                <br>
              </p>
              <h1 class="m-0 mt-2 font-glegoo-bold leading-tight">{{ $context.name }}</h1>
              
              <div class="text-layout-b2 mt-8 font-light" v-html="htmlDecode($context.description)">
              </div>
            </div>
          </div>
          <div class="w-full md:w-4/12 md:pl-8 pt-4">
            <g-link class="text-center block w-full bg-white hover:bg-brand text-brand hover:text-layout-w1 rounded px-6 py-2 transition duration-300 ease-out border focus:outline-none" to="/about/" >Project Link/Demo</g-link>
            <div class="w-full flex flex-wrap mt-4">
              <span class="leading-none mb-1 bg-brand text-layout-w1 px-2 py-1 rounded-full text-xxs mr-1" v-for="edge in $page.projectTags.edges" :key="edge.node.id"> {{ edge.node.tag_name }} </span>
              <!-- <span class="leading-none mb-1 bg-brand text-layout-w1 px-2 py-1 rounded-full text-xxs mr-1">Wordpress</span>
              <span class="leading-none mb-1 bg-brand text-layout-w1 px-2 py-1 rounded-full text-xxs mr-1">Vue</span>
              <span class="leading-none mb-1 bg-brand text-layout-w1 px-2 py-1 rounded-full text-xxs mr-1">Front-end Development</span> -->
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

export default {
  name: 'ProjectDescription',
  components: {
    NavLayout,
    SideNavLayout,
    CustomFooter
  },
  data() {
    return {
      navInfo: {
        prev: {
          hasPrev: true,
          linksTo: '/portfolio',
          linkText: 'Portfolio',
        },
        next: {
          hasNext: true,
          linksTo: '/feed',
          linkText: 'Feed',
        },
        linkColor: 'text-brand',
        iconColor: '#11A89D'
      },
      test: "<p><strong>Hello World</p></strong>"
    }
  },
  methods: {
    htmlDecode(input) {
      var doc = new DOMParser().parseFromString(input, "text/html");
      return doc.documentElement.textContent;
    }
  },
  metaInfo: {
    title: 'Portfolio'
  },
}
</script>