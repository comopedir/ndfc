import React from "react"
import { Link } from "gatsby"
import logofood from "../../images/symbol-avocado.png"

import styles from "./styles.module.scss"

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <h1>
          <Link href="/">
            não&nbsp;deixe fechar&nbsp;&nbsp;&nbsp; a&nbsp;conta.
          </Link>
        </h1>
        <p className={styles.subtitle}>
          Todas as formas de pedir dos seus lugares favoritos.
        </p>
      </div>
      <div className={styles.menu}>
        <a
          className={styles.button}
          href="https://airtable.com/shrD4fU2g2GD2yzJ5"
        >
          <span className={styles.desktopSignup}>Cadastrar</span>
          <svg
            className={styles.mobileSignup}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="7" x2="14" y2="7" stroke-width="2" />
            <line x1="7" y1="14" x2="7" stroke-width="2" />
          </svg>
        </a>
      </div>
    </header>
  )
}

export default Header
