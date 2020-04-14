import React from "react"
import styles from "./styles.module.scss"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <a
          href="https://www.instagram.com/comopedir"
          className={styles.contact}
        >
          @comopedir
        </a>
        <p className={styles.contact}>#comopedir</p>
      </div>
      <div className={styles.content}>
        <a
          className={styles.faqlink}
          href="https://airtable.com/shrD4fU2g2GD2yzJ5"
          target="_blank"
        >
          Cadastrar
        </a>
        <a
          className={styles.faqlink}
          href="mailto:naodeixefecharaconta@gmail.com"
        >
          Contato
        </a>
      </div>
    </div>
  )
}

export default Footer
