import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Jokes from "../content/jokes.mdx"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Página não encontrada" />
    <h1>Página não encontrada</h1>
    <p>Mas já que você está aqui, não perca a viagem:</p>
    <Jokes />
  </Layout>
)

export default NotFoundPage
