import React from "react"

import styles from "./styles.module.scss"

const RestaurantHeader = ({ name, state, city, category }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>{name}</h1>
    <div className={styles.subtitle}>
      <a className={styles.location} href="#">
        {city} - {state}
      </a>
      <p className={styles.separator}>|</p>
      <p>{category}</p>
    </div>
  </div>
)

export default RestaurantHeader
