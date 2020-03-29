import React from "react"
import styles from "./styles.module.scss"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <a
          href="https://www.instagram.com/naodeixefecharaconta"
          className={styles.contact}
        >
          @naodeixefecharaconta
        </a>
        <p className={styles.contact}>#naodeixefecharaconta</p>
      </div>
      <div className={styles.content}>
        <a
          className={styles.contact}
          href="https://airtable.com/shrD4fU2g2GD2yzJ5"
          target="_blank"
        >
          Cadastrar
        </a>
        <a
          className={styles.contact}
          href="mailto:naodeixefecharaconta@gmail.com"
        >
          Contato
        </a>
      </div>
    </div>
  )
}

export default Footer
