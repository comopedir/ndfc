import React from "react"

import Layout from "../Layout"
import SEO from "../seo"
import HomeHeader from "../Header"
import RestaurantList from "../RestaurantList"
import Footer from "../Footer"
import useTheme from "../../hooks/useTheme"

import styles from "./styles.module.scss"

const IndexPage = () => {
  useTheme("home")

  return (
    <Layout>
      <SEO title="Home" />
      <RestaurantList />
      <div className={styles.footer}>
        <Footer />
      </div>
    </Layout>
  )
}

export default IndexPage
