import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import HomeHeader from "../components/Header"
import RestaurantList from "../components/RestaurantList"
import Footer from "../components/Footer"
import useTheme from "../hooks/useTheme"

const IndexPage = () => {
  useTheme("home")

  return (
    <Layout>
      <SEO title="Home" />
      <RestaurantList />
      <Footer />
    </Layout>
  )
}

export default IndexPage
