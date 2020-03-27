import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import Footer from "../../components/Footer"
import RestaurantHeader from "../../components/RestaurantHeader"

import categoryImage from "../../assets/images/fish.png"
import styles from "./styles.module.scss"
import RestaurantOptions from "../../components/RestaurantOptions"

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
    Telefone_Para_Pedidos: phone,
    Servi_os: services,
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
      {options && (
        <div className={styles.links}>
          <RestaurantOptions
            options={options}
            website={website}
            phone={phone || wpp}
            instagram={instagram}
            wpp={wpp}
            services={services}
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
