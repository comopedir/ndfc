import React from "react"
import styles from "./styles.module.scss"

const Button = ({ href, children }) => (
  <a className={styles.button} href={href}>
    <div className={styles.service}>{children}</div>
  </a>
)

export default Button
