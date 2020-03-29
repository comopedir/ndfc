import React from "react"

import Layout from "../Layout"
import SEO from "../seo"
import RestaurantList from "../RestaurantList"
import Footer from "../Footer"
import useTheme from "../../hooks/useTheme"

import styles from "./styles.module.scss"
import { themes } from "../../utils/theming"

const IndexPage = ({
  pageContext: { data, city, state, locations, categories, category },
}) => {
  useTheme("home")

  return (
    <Layout>
      <SEO title="Home" theme={themes.home.primary} />
      <RestaurantList
        restaurants={data}
        city={city}
        state={state}
        locations={locations}
        categories={categories}
        category={category}
      />
      <div className={styles.footer}>
        <Footer />
      </div>
    </Layout>
  )
}

export default IndexPage
