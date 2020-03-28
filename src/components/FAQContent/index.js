import React from "react"
import useTheme from "../../hooks/useTheme"
import { Link } from "gatsby"

import styles from "./styles.module.scss"

import faqImage from "../../assets/images/faq.png"

const FAQContent = () => {
  useTheme("faq")

  return (
    <div className={styles.container}>
      <img src={faqImage} alt="Ramen" className={styles.faqImage} />
      <div className={styles.questions}>
        <h2 className={styles.title}>Perguntas frequentes</h2>
        <ul>
          <li className={styles.question}>
            <p>Como posso incluir o meu estabelecimento?</p>
            Fácil, clique em ‘<Link to="/cadastro">Cadastrar</Link>’ :)
          </li>
          <li className={styles.question}>
            <p>Qual o preço para fazer parte?</p>É completamente de graça.
          </li>
          <li className={styles.question}>
            <p>Pode estabelecimentos que não sejam de alimentos & bebida?</p>
            Não, estamos focados para aumentar a chance de sucesso. Esperamos
            que isso inspire outras iniciativas.
          </li>
          <li className={styles.question}>
            <p>O projeto está disponível no Brasil inteiro?</p>
            Sim, em qualquer cidade.
          </li>
          <li className={styles.question}>
            <p>Como posso ajudar?</p>
            Divulgando, usando, e pedindo dos seus estabelecimentos favoritos.
          </li>
          <li className={styles.question}>
            <p>Quem está tocando essa projeto?</p>
            <a href="https://www.instagram.com/kato78/">Kato</a>,{" "}
            <a href="https://www.instagram.com/tbanares/">Bañares</a>,{" "}
            <a href="https://www.instagram.com/zambrano/">Zambrano</a>,{" "}
            <a href="https://www.instagram.com/nandico/">Nandico</a>,{" "}
            <a href="https://www.instagram.com/bonicio/">Bonicio</a>,{" "}
            <a href="https://www.instagram.com/renatomorenocz/">Renatão</a>,{" "}
            <a href="https://www.instagram.com/victorbelinatti/">Belinatti</a>,{" "}
            <a href="https://www.instagram.com/gkozlowaski/">Koz</a> e o suporte
            de muita gente.
          </li>
          <li className={styles.question}>
            <p>O que vocês ganham com isso?</p>A chance de voltar aos lugares
            que amamos tanto, e garantir a existência dos que nunca fomos, assim
            podemos visitar um dia.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FAQContent