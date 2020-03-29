import React from "react"

import Layout from "../Layout"
import SEO from "../seo"
import PageNotFoundContent from "../PageNotFoundContent"
import Footer from "../Footer"

import styles from "./styles.module.scss"

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="Página não encontrada" />
      <PageNotFoundContent />
      <div className={styles.footer}>
        <Footer />
      </div>
    </Layout>
  )
}

export default NotFoundPage
