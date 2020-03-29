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
      <p className={styles.contact}>Contato</p>
    </div>
  )
}

export default Footer
