import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RestaurantList from "../components/RestaurantList"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Não deixe fechar a conta</h1>
      <RestaurantList />
    </Layout>
  )
}

export default IndexPage
