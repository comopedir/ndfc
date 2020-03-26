import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import RestaurantThumb from "../RestaurantThumb"

import styles from "./styles.module.scss"

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
  `)

  const { edges: restaurants } = data.allAirtable;

  return (
    <div className={styles.container}>

      <div className={styles.citys}>
        <a href="#">São Paulo, SP</a>
        <p className={styles.subtitle}>
          {restaurants.length} lugares que não vamos deixar fechar
        </p>
      </div>


      <div className={styles.list}>
        {
          restaurants.map(restaurant => {
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
    </div>
  )

}

export default RestaurantList