import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import RestaurantThumb from "../RestaurantThumb"

const RestaurantList = () => {
  const data = useStaticQuery(graphql`
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
              Doa__es
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
  `)

  const { edges: restaurants } = data.allAirtable;

  return (
    <div>
      {restaurants.length} lugares que não vamos deixar fechar
      {
        restaurants.map( restaurant => {          
          const { id, data } = restaurant.node;

          return (
            <RestaurantThumb
              key={id}
              data={data}
            />
          )
        })
      }
    </div>
  )

}

export default RestaurantList