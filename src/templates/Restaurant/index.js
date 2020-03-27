import React, { useEffect } from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import RestaurantHeader from "../../components/RestaurantHeader"

import categoryImage from "../../assets/images/fish.png"
import styles from "./styles.module.scss"
import RestaurantOptions from "../../components/RestaurantOptions"
import variables from "../../assets/styles/variables.scss"
import useTheme from "../../hooks/useTheme"
import Footer from "../../components/Footer"

const RestaurantPage = ({ pageContext }) => {
  const {
    data: { data },
  } = pageContext
  const {
    Nome_do_Estabelecimento: restaurantName,
    Estado: state,
    Cidade: city,
    Categoria: categories,
    Como_Pedir: options,
    Foto_da_Comida: pictures,
    Website: website,
    WhatsApp: wpp,
    Instagram: instagram,
    Telefone_para_Pedidos: phone,
    Servi_os: services,
  } = data

  useTheme(categories[0])

  return (
    <Layout>
      <SEO title="Restaurante" />
      <div className={styles.header}>
        <RestaurantHeader
          name={restaurantName}
          city={city}
          state={state}
          categories={categories}
        />
      </div>
      <div className={styles.categoryImage}>
        <img src={categoryImage} />
      </div>
      {options && (
        <div className={styles.links}>
          <RestaurantOptions
            options={options}
            website={website}
            phone={phone || wpp}
            instagram={instagram}
            wpp={wpp}
            services={services}
            name={restaurantName}
          />
        </div>
      )}
      {pictures && (
        <div className={styles.pictures}>
          <h3 className={styles.picturesTitle}>
            Olha o que você não pode perder...
          </h3>
          {pictures.map(item => (
            <img
              key={item.url}
              className={styles.picture}
              src={item.url}
              alt={item.filename}
            />
          ))}
        </div>
      )}
      <div className={styles.footer}>
        <Footer />
      </div>
    </Layout>
  )
}

export default RestaurantPage
