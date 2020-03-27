import React from "react"
import styles from "./styles.module.scss"
import ServiceButton from "./ServiceButton"

const RestaurantServices = ({ services = [] }) => (
  <div className={styles.container}>
    {services.map(service => (
      <ServiceButton href="#" label={service} />
    ))}
  </div>
)

export default RestaurantServices
