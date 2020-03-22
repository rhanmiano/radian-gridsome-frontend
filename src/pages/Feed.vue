<template>
  <SideNavLayout>
    <NavLayout :navInfo="navInfo">
      <main class="">
        <FlashMessage></FlashMessage>
        <div class="container h-full w-full pt-12">
          <div class="w-full block md:flex px-8 md:pl-24">
            <div class="w-full md:w-8/12">
              <h1 class="decor text-layout-b2 mt-0">Feed</h1>
            
              <p class="text-xl text-layout-b1">Sharing this unexhaustive list of activities with or without relation to development.</p>

              <div class="mt-8">
                <tabs
                  :tabs="tabs"
                  :currentTab="currentTab"
                  :wrapper-class="'default-tabs'"
                  :tab-class="'default-tabs__item'"
                  :tab-active-class="'default-tabs__item_active'"
                  :line-class="'default-tabs__active-line'"
                  @onClick="handleClick"
                />
                <div class="tab-content">
                  <div v-if="currentTab === '1'">
                    <h3>Repos with most recent updates</h3>
                    <div v-if="repos.length == 0" class="flex justify-center w-full h-full bg-transparnt">
                      <clip-loader class="self-center" :loading="true" :color="$static.metadata.brandColors.brand" :size="'80px'"></clip-loader>
                    </div>
                    <div class="github-repo lg:flex lg:flex-wrap lg:-mx-1">
                      <RepoCard
                        class="mt-4"
                        v-for="repo in repos"
                        :key="repo.node.id"
                        :name="repo.node.name"
                        :html_url="repo.node.url"
                        :language="repo.node.primaryLanguage ? repo.node.primaryLanguage.name : 'Markdown'"
                        :refs="repo.node.refs.edges"
                      >
                      </RepoCard>
                    </div>

                  </div>
                  <div v-if="currentTab === '2'">
                    <h3>Daily UI</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis similique inventore laboriosam reiciendis repellat reprehenderit unde quidem sequi. Non maiores voluptates eveniet ex consequatur libero sapiente ab molestiae a quisquam?</p>
                  </div>
                  <div v-if="currentTab === '3'">
                    <h3>Travel</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis similique inventore laboriosam reiciendis repellat reprehenderit unde quidem sequi. Non maiores voluptates eveniet ex consequatur libero sapiente ab molestiae a quisquam?</p>
                  </div>
                </div>
              </div>
              
            </div>
            <div class="w-full md:w-4/12">
            </div>
          </div>

          <CustomFooter></CustomFooter>
        </div>
      </main>
    </NavLayout>
  </SideNavLayout>
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
import NavLayout from '~/layouts/NavLayout.vue'
import SideNavLayout from '~/layouts/SideNavLayout.vue'

import CustomFooter from '~/components/CustomFooter.vue'
import RepoCard from '~/components/RepoCard.vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import Tabs from 'vue-tabs-with-active-line';

import axios from 'axios'

const repoQuery = {
  query:  `query { 
    viewer {
      name
      repositories(first: 8, orderBy: {direction:DESC, field: UPDATED_AT}, privacy: PUBLIC) {
        edges {
          node {
            id
            name
            updatedAt
            url
            primaryLanguage {
              id
              name
            }
            refs(refPrefix: "refs/heads/", orderBy: {direction: DESC, field: TAG_COMMIT_DATE}, first: 100) {
              edges {
                node {
                  ... on Ref {
                    name
                    target {
                      ... on Commit {
                        history(first: 5, author:{emails: ["rhanmiano29@gmail.com"]}) {
                          edges {
                            node {
                              id
                              committedDate
                              message
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }`
}

export default {
  name: 'Feed',
  components: {
    NavLayout,
    SideNavLayout,
    CustomFooter,
    RepoCard,
    ClipLoader,
    Tabs
  },
  data() {
    return {
      repos: [],
      navInfo: {
        prev: {
          hasPrev: true,
          linksTo: '/portfolio/',
          linkText: 'Portfolio',
        },
        next: {
          hasNext: true,
          linksTo: '/contact/',
          linkText: 'Contact',
        },
        linkColor: 'text-brand',
        iconColor: '#11A89D'
      },
      tabs: [
        { title: 'Github', value: '1' },
        { title: 'Daily UI', value: '2' },
        { title: 'Travel', value: '3' }
      ],
      currentTab: '1',
    }
  },
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    },
    async getRepos() {
      const {data} = await axios.post(
        `https://api.github.com/graphql`,
        repoQuery,
        {
          responseType: 'json',
          headers: {
            'content-type': 'application/json',
            'authorization': 'bearer 34f44225bba2d100df53ec1925b85cb94027ac24'
          },
        }
      )

      return data
    }
  },
  mounted() {
    this.getRepos()
    .then(res => {
      this.repos = res.data.viewer.repositories.edges

      console.log(this.repos)
    })
  },
  metaInfo: {
    title: 'Feed'
  },
}
</script>

<style lang="scss">
.github-repo {
  &-card {
    @apply text-xs px-4 py-4 bg-white leading-none rounded transition duration-300  shadow-xs cursor-pointer;
    transition: all 300ms ease-out;
  }

  @screen lg {
    // @apply w-3/4;
  }

  &-commits {
    position: relative;
    display: none;
    opacity: 0;
    width: 100%;
    transition: opacity 800ms ease-out;

    &__list {
      @apply z-20 shadow-md;
      background-color: #fff;
      border: solid 1px gainsboro;
      position: absolute;
      top: 12px;
      right: 0;
    }
  }
  &-card:hover {
    @apply shadow-md;
  }

  &-card:hover ~ section {
    display: block;
    opacity: 1;
  }
}
</style>