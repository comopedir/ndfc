import React from "react"

import Layout from "../Layout"
import SEO from "../seo"
import RestaurantList from "../RestaurantList"
import Footer from "../Footer"
import useTheme from "../../hooks/useTheme"

import styles from "./styles.module.scss"

const IndexPage = ({ pageContext: { data, city, state, locations } }) => {
  useTheme("home")

  return (
    <Layout>
      <SEO title="Home" />
      <RestaurantList
        restaurants={data}
        city={city}
        state={state}
        locations={locations}
      />
      <div className={styles.footer}>
        <Footer />
      </div>
    </Layout>
  )
}

export default IndexPage
