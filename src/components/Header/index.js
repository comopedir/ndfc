import React from "react"
import logofood from "../../images/symbol-avocado.png"

import styles from "./styles.module.scss"

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <h1><a href="/">não&nbsp;deixe fechar&nbsp;&nbsp;&nbsp; a&nbsp;conta.</a></h1>
        <p className={styles.subtitle}>
          Todas as formas de pedir dos seus lugares favoritos.
        </p>
      </div>
      <div className={styles.menu}>
        <a className={styles.button} href="https://airtable.com/shrD4fU2g2GD2yzJ5">Cadastrar</a>
      </div>
    </header>
  )
}

export default Header
