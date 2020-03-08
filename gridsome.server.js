// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    const {data} = await axios.get('http://localhost/radian/radian-slim-backend/public/projects')
    // console.log(data);
    const projectCollection = actions.addCollection({
      typeName: 'Projects'
    })

    for (const item of data.projects) {
      projectCollection.addNode({
        id: item.id,
        category_id: item.category_id,
        name: item.name,
        description: item.description,
        img_url: item.img_url,
        project_url: item.project_url,
        hearts: item.hearts,
        date_from: item.date_from,
        date_end: item.date_end,
        date_created: item.date_created,
        date_updated: item.date_updated,
        date_deleted: item.date_deleted,
        is_shown: item.is_shown,
        is_deleted: item.is_deleted

      })
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
