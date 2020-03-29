import React from "react"
import useTheme from "../../hooks/useTheme"
import { Link } from "gatsby"

import styles from "./styles.module.scss"

const PageNotFoundContent = () => {
  useTheme("faq")

  return (
    <div className={styles.container}>
      <div className={styles.questions}>
        <h2 className={styles.title}>Ops! Página não encontrada...</h2>
      </div>
    </div>
  )
}

export default PageNotFoundContent
