// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')
const slugify = require('slugify')

module.exports = function (api) {
  api.loadSource(async ({addCollection, store}) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    const {data: projects} = await axios.get(
      `${process.env.GRIDSOME_RESOURCE_URL}/projects`
    )

    const {data: categories} = await axios.get(
      `${process.env.GRIDSOME_RESOURCE_URL}/categories`
    ) 

    const {data: tags} = await axios.get(
      `${process.env.GRIDSOME_RESOURCE_URL}/project_tags`
    )
    
    const projectCollection = addCollection({
      typeName: 'Projects'
    })

    const categoryCollection = addCollection({
      typeName: 'Categories'
    })

    const projectTagCollection = addCollection({
      typeName: 'ProjectTags'
    })

    for (const category of categories.categories) {
      categoryCollection.addNode({
        id: category.id,
        category_name: category.name,
        is_deleted: category.is_deleted
      })
    }

    for (const tag of tags.tags) {
      projectTagCollection.addNode({
        id: tag.id,
        project_id: tag.project_id,
        tag_id: tag.tag_id,
        tag_name: tag.tag_name
      })
    }

    for (const project of projects.projects) {
      projectCollection.addNode({
        id: project.id,
        name: project.name,
        slug: slugify(project.name, {lower: true}),
        category_id: project.category_id,
        category: store.createReference('Categories', project.category_id),
        description: project.description,
        short_description: project.short_description,
        img_url: project.img_url ? project.img_url : '#',
        project_url: project.project_url ? project.project_url : '#',
        hearts: project.hearts,
        date_from: project.date_from,
        date_end: project.date_end,
        date_created: project.date_created,
        date_updated: project.date_updated,
        date_deleted: project.date_deleted,
        is_shown: project.is_shown,
        is_deleted: project.is_deleted
      })
    }

  })

  api.createPages(async ({ graphql, createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    const { data: qProjects } = await graphql(`{
      projects: allProjects(filter: {
        is_shown: {eq: 1}, 
        is_deleted:{eq: 0}
      }) { 
        edges {
          node {
            id,
            name,
            slug,
            category {
              id,
              category_name
            },
            description,
            short_description,
            img_url,
            project_url,
            date_from,
            date_end
          }
        }
      }
    }`)

    qProjects.projects.edges.forEach(({ node }) => {
      createPage({
        path: `/portfolio/${node.slug}`,
        component: './src/templates/ProjectDescription.vue',
        context: {
          id: node.id,
          name: node.name,
          slug: node.slug,
          category: node.category,
          description: node.description,
          short_description: node.short_description,
          img_url: node.img_url,
          project_url: node.project_url,
          date_from: node.date_from,
          date_end: node.date_end
        }
      })
    })
  })
}
