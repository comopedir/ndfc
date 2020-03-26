import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHeader from "../components/Header"
import RestaurantList from "../components/RestaurantList"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <RestaurantList />
      <Footer />
    </Layout>
  )
}

export default IndexPage
