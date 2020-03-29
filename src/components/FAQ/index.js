import React from "react"

import Layout from "../Layout"
import SEO from "../seo"
import FAQContent from "../FAQContent"
import Footer from "../Footer"

import styles from "./styles.module.scss"
import { themes } from "../../utils/theming"

const FaqPage = () => {
  return (
    <Layout>
      <SEO title="FAQ" theme={themes.faq.primary} />
      <FAQContent />
      <div className={styles.footer}>
        <Footer />
      </div>
    </Layout>
  )
}

export default FaqPage
