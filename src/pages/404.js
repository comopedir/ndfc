import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PageNotFoundContent from "../components/PageNotFoundContent"
import Footer from "../components/Footer"

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="Página não encontrada" />
      <PageNotFoundContent />
      <Footer />
    </Layout>
  )
}

export default NotFoundPage
