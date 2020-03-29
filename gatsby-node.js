const path = require("path")
const helpers = require("./src/helpers")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const restaurantResults = graphql(`
    query RestaurantList {
      allAirtable(
        filter: { data: { Aprovado_: { eq: "Sim" } } }
        sort: { fields: [data___Nome_do_Estabelecimento], order: ASC }
      ) {
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
              Telefone_para_Pedidos
              Categoria
              Como_Pedir
              Servi_os
              Foto_da_Comida {
                filename
                thumbnails {
                  small {
                    url
                    height
                    width
                  }
                  large {
                    url
                    height
                    width
                  }
                }
                url
              }
              Instagram
              Link_do_iFood
              Link_do_Rappi
              Link_do_UberEats
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
          component: path.resolve("./src/templates/Restaurant/index.js"),
          context: {
            data: node,
          },
        })
      }
    })
  })

  const locations = graphql(`
    query Locations {
      allAirtable(filter: { data: { Aprovado_: { eq: "Sim" } } }) {
        nodes {
          data {
            Estado
            Cidade
          }
        }
      }
    }
  `).then(result => {
    const locations = result.data.allAirtable.nodes.reduce(
      (accum, { data: { Estado: state, Cidade: city } }) => {
        if (!accum[state]) {
          accum[state] = [city]
        } else if (!accum[state].includes(city)) {
          accum[state].push(city)
        }

        return accum
      },
      {}
    )

    Object.keys(locations).forEach(state => {
      locations[state].forEach(city => {
        const restaurantsByLocation = graphql(`
          query RestaurantList {
            allAirtable(filter: { data: { Aprovado_: { eq: "Sim" }, Cidade: { regex: "/${city}/i" }, Estado: { regex: "/${state}/i" } } }, sort: {
              fields: [data___Nome_do_Estabelecimento]
              order: ASC
            }) {
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
                    Telefone_para_Pedidos
                    Categoria
                    Como_Pedir
                    Servi_os
                    Foto_da_Comida {
                      filename
                      thumbnails {
                        small {
                          url
                          height
                          width
                        }
                        large {
                          url
                          height
                          width
                        }
                      }
                      url
                    }
                    Instagram
                    Link_do_iFood
                    Link_do_Rappi
                    Link_do_UberEats
                  }
                }
              }
            }
          }`).then(result => {
          if (result.data && result.data.allAirtable.edges) {
            const restaurantsByCategory = result.data.allAirtable.edges.reduce(
              (accum, item) => {
                const categories = item.node.data.Categoria || []
                categories.forEach(category => {
                  if (category) {
                    if (!accum[category]) {
                      accum[category] = [item]
                    } else {
                      accum[category].push(item)
                    }
                  }
                })
                return accum
              },
              {}
            )
            const pagePath = helpers.pageNameByLocation(state, city)
            const component = path.resolve("./src/components/Home/index.js")
            const context = {
              data: result.data.allAirtable.edges,
              city: city,
              state: state,
              locations: locations,
              categories: Object.keys(restaurantsByCategory),
            }

            if (city === "São Paulo" && state === "SP") {
              createPage({
                path: "/",
                component,
                context,
              })

              Object.keys(restaurantsByCategory).forEach(category => {
                createPage({
                  path: helpers.pageNameWithCategory("/", category),
                  component,
                  context: {
                    ...context,
                    data: restaurantsByCategory[category],
                    category,
                  },
                })
              })
            }

            createPage({
              path: pagePath,
              component,
              context,
            })

            Object.keys(restaurantsByCategory).forEach(category => {
              createPage({
                path: helpers.pageNameWithCategory(pagePath, category),
                component,
                context: {
                  ...context,
                  data: restaurantsByCategory[category],
                  category,
                },
              })
            })
          }
        })
      })
    })
  })

  return Promise.all([locations, restaurantResults])
}
