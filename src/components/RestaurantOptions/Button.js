import React from "react"
import styles from "./styles.module.scss"
import cx from "classnames"

const Button = ({ href, children, className }) => {
  const Tag = href ? "a" : "div"
  return (
    <Tag target="_blank" className={cx(styles.button, className)} href={href}>
      <div className={styles.service}>{children}</div>
    </Tag>
  )
}

export default Button
