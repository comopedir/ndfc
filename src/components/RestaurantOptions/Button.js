import React from "react"
import styles from "./styles.module.scss"
import cx from "classnames"

const Button = ({ href, children, className }) => {
  const Tag = href ? "a" : "div"
  const externalLink =
    href && !href.match(/^http(s)?:\/\//) ? `http://${href}` : href
  return (
    <Tag
      target="_blank"
      className={cx(styles.button, className)}
      href={externalLink}
    >
      <div className={styles.service}>{children}</div>
    </Tag>
  )
}

export default Button
