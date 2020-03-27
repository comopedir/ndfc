import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import Footer from "../../components/Footer"
import RestaurantHeader from "../../components/RestaurantHeader"

import categoryImage from "../../assets/images/fish.png"
import styles from "./styles.module.scss"
import RestaurantServices from "../../components/RestaurantServices"

const RestaurantPage = ({ pageContext }) => {
  const {
    data: { data },
  } = pageContext
  const {
    Nome_do_Estabelecimento: restaurantName,
    Estado: state,
    Cidade: city,
    Categoria: categories,
    Como_Pedir: services,
    Foto_da_Comida: pictures,
  } = data

  return (
    <Layout>
      <SEO title="Restaurante" />
      <div className={styles.header}>
        <RestaurantHeader
          name={restaurantName}
          city={city}
          state={state}
          category={categories[0]}
        />
      </div>
      <div className={styles.categoryImage}>
        <img src={categoryImage} />
      </div>
      {services && (
        <div className={styles.links}>
          <RestaurantServices services={services} />
        </div>
      )}
      {pictures && (
        <div className={styles.pictures}>
          <h3 className={styles.picturesTitle}>
            Olha o que você não pode perder...
          </h3>
          {pictures.map(item => (
            <img
              className={styles.picture}
              src={item.url}
              alt={item.filename}
            />
          ))}
        </div>
      )}
    </Layout>
  )
}

export default RestaurantPage
