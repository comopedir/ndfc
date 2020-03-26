import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHeader from "../components/HomeHeader"
import Footer from "../components/Footer"

const RestaurantPage = ({ pageContext }) => {
  const { data: internalData } = pageContext
  const { data: node } = internalData

  // ↓↓↓ suggestion: deconstruct other data from here ↓↓↓↓
  // the pageContext is feed by /gatsby-node.js createPages method
  const {
    Nome_do_Estabelecimento: restaurantName,
    Estado: state,
    Cidade: city,
  } = node

  return (
    <Layout>
      <SEO title="Restaurante" />
      <HomeHeader />
      <h2>{restaurantName}</h2>
      <h3>{state}</h3>
      <h2>{city}</h2>
      <Footer />
    </Layout>
  )
}

export default RestaurantPage
