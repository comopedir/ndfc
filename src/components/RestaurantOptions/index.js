import React from "react"
import styles from "./styles.module.scss"
import Button from "./Button"
import OptionButton from "./OptionButton"

const RestaurantOptions = ({
  options = [],
  phone,
  wpp,
  instagram,
  website,
  services = [],
}) => (
  <div className={styles.container}>
    {options.map((option, index, array) =>
      index !== 3 || index !== array.length - 1 || !services.length ? (
        <OptionButton
          href="#"
          option={option}
          phone={phone}
          wpp={wpp}
          instagram={instagram}
          website={website}
        />
      ) : (
        <Button>
          <p className={styles.label}>Serviços</p>
          <p>{services.join(", ")}</p>
        </Button>
      )
    )}
  </div>
)

export default RestaurantOptions
