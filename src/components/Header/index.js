import React from "react"
import logofood from "../../images/symbol-avocado.png"

import styles from './styles.module.scss'

const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.logo}>
                <h1>não&nbsp;deixe fechar&nbsp;&nbsp;&nbsp; a&nbsp;conta.</h1>
                <p className={styles.subtitle}>Todas as formas de pedir dos seus lugares favoritos.</p>
            </div>
            <div className={styles.button}>
                Cadastrar
            </div>
        </header>
    )

}

export default Header