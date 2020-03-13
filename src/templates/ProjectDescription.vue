<template>
  <Layout>
    <SideNavLayout>
      <NavLayout :linksTo="linksTo" :linkText="linkText" :linkColor="linkColor" :iconColor="iconColor" :isHome="false">
      <main class="md:h-screen overflow-y-auto">
        <div class="container h-full w-full pt-16">
          <div class="w-full px-8 md:pl-24">
            <div class="w-full lg:w-8/12">
              <h1>{{ $context.name }}</h1>
              <p>ID: {{$context.id}}</p>
              <div class="text-layout-b2" v-html="$context.description"></div>
            </div>
            <div class="w-full lg:w-4/12">
            </div>
          </div>
          <CustomFooter></CustomFooter>
        </div>
      </main>
      </NavLayout>
    </SideNavLayout>
  </Layout>
</template>

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
      linksTo: '/contact',
      linkText: 'Contact',
      linkColor: 'text-brand',
      iconColor: '#11A89D',
    }
  },
  metaInfo: {
    title: 'Portfolio'
  },
}
</script>