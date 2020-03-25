<template>
  <div class="w-full lg:w-1/2 lg:px-2">
    <section class="github-repo-card">
      <div class="w-full flex">
        <div class="flex-none">
          <g-link :to="html_url">
            <unicon class="mx-auto self-center transition duration-300 ease-out opacity-25 hover:opacity-50" name="external-link-alt" :fill="$static.metadata.brandColors.layoutB1"></unicon>
          </g-link>
        </div>
        <div class="ml-2 flex-grow self-center"><p class="m-0 font-glegoo">{{name}}</p></div>
        <div class="flex-none self-center text-layout-b1"><p>{{language}}</p></div>
      </div>
    </section>
    <section class="github-repo-commits">
      <div 
        class="github-repo-commits__list w-full px-2 leading-snug text-xs"
        v-for="ref in refs"
        :key="ref.node.name"
      >
          <p class="font-glegoo py-2 text-xxs font-semibold">On branch '{{ref.node.name}}'</p>
          <ul class="px-1">
              <li 
                class="border-b last:border-b-0 flex py-2 leading-snug text-xs"
                v-for="commit in ref.node.target.history.edges"
                :key="commit.id"
              >
                <p class="flex-grow">
                  <span class="text-xxs text-gray-500">
                    {{new Date(commit.node.committedDate) | dateFormat('MMM DD, YYYY')}}
                  </span> <br>
                  <strong class="text-brand text-xxs font-light">{{commit.node.message}}</strong>
                </p>
              </li>
          </ul>
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
  name: "RepoCard",
  props: ['name', 'html_url', 'language', 'refs']
}
</script>

<style>

</style>