import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import FAQContent from "../components/FAQContent"
import Footer from "../components/Footer"

const FaqPage = () => {
  return (
    <Layout>
      <SEO title="FAQ" />
      <FAQContent />
      <Footer />
    </Layout>
  )
}

export default FaqPage
