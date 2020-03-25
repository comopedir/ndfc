import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHeader from "../components/HomeHeader"
import RestaurantList from "../components/RestaurantList"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HomeHeader />
      <RestaurantList />
      <Footer />
    </Layout>
  )
}

export default IndexPage
