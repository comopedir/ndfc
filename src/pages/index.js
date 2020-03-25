import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHeader from "../components/HomeHeader"
import RestaurantList from "../components/RestaurantList"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HomeHeader />
      
    </Layout>
  )
}

export default IndexPage
