import React from "react"
import styles from "./styles.module.scss"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.contact}>@naodeixefecharaconta</p>
        <p className={styles.contact}>#naodeixefecharaconta</p>
      </div>
      <a
        className={styles.contact}
        href="mailto:naodeixefecharaconta@gmail.com"
      >
        Contato
      </a>
    </div>
  )
}

export default Footer
