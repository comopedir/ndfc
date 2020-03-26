const path = require("path")
const helpers = require("./src/helpers")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    query RestaurantList {
      allAirtable {
        edges {
          node {
            id
            data {
              Estado
              Website
              WhatsApp
              Observa__es
              Cidade
              Email
              Nome_do_Estabelecimento
              # Doa__es
              Categoria
              Como_Pedir
              Servi_os
              Foto_da_Comida {
                filename
                thumbnails {
                  full {
                    url
                    height
                    width
                  }
                }
                url
              }
              Instagram
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allAirtable.edges.forEach(({ node }) => {
      const pagePath = helpers.pageNameByNode(node.data)
      if (pagePath) {
        createPage({
          path: pagePath,
          component: path.resolve("./src/templates/restaurant.js"),
          context: {
            data: node,
          },
        })
      }
    })
  })
}
