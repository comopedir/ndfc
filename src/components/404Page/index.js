import React from "react"

import Layout from "../Layout"
import SEO from "../seo"
import PageNotFoundContent from "../PageNotFoundContent"
import Footer from "../Footer"

import styles from "./styles.module.scss"
import themes from "../../utils/theming"

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="Página não encontrada" theme={themes.home.primary} />
      <PageNotFoundContent />
      <div className={styles.footer}>
        <Footer />
      </div>
    </Layout>
  )
}

export default NotFoundPage
