import React from "react"
import styles from "./styles.module.scss"

const ServiceButton = ({ href = "", label }) => (
  <a className={styles.button} href={href}>
    <div className={styles.service}>{label}</div>
  </a>
)

export default ServiceButton
