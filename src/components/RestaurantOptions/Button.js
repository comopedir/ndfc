import React from "react"
import styles from "./styles.module.scss"

const Button = ({ href, children }) => {
  const Tag = href ? "a" : "div"
  return (
    <Tag className={styles.button} href={href}>
      <div className={styles.service}>{children}</div>
    </Tag>
  )
}

export default Button
