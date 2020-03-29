import React from "react"

import Layout from "../Layout"
import SEO from "../seo"
import FAQContent from "../FAQContent"
import Footer from "../Footer"

import styles from "./styles.module.scss"

const FaqPage = () => {
  return (
    <Layout>
      <SEO title="FAQ" />
      <FAQContent />
      <div className={styles.footer}>
        <Footer />
      </div>
    </Layout>
  )
}

export default FaqPage
