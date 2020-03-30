import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import RestaurantHeader from "../../components/RestaurantHeader"

import styles from "./styles.module.scss"
import RestaurantOptions from "../../components/RestaurantOptions"
import useTheme from "../../hooks/useTheme"
import Footer from "../../components/Footer"

import { themes } from "../../utils/theming"

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
    Link_do_iFood: ifoodLink,
    Link_do_Rappi: rappiLink,
    Link_do_UberEats: uberEatsLink,
    Doa__es: donations,
  } = data

  useTheme(categories[0])

  return (
    <Layout>
      <SEO
        title={`${restaurantName} | Restaurante`}
        theme={themes[categories[0]].primary}
      />
      <div className={styles.header}>
        <RestaurantHeader
          name={restaurantName}
          city={city}
          state={state}
          categories={categories}
        />
      </div>
      <div className={styles.categoryImage}>
        <img
          src={themes[categories[0]] ? themes[categories[0]].img : ""}
          alt={categories[0]}
          title={categories[0]}
        />
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
            ifoodLink={ifoodLink}
            uberEatsLink={uberEatsLink}
            rappiLink={rappiLink}
            donations={donations}
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
              src={item.thumbnails?.large?.url}
              alt={`Imagem ilustrativa de cardápio (${restaurantName}).`}
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
