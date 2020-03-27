import React from "react"
import styles from "./styles.module.scss"
import Button from "./Button"
import OptionButton from "./OptionButton"

const RestaurantOptions = ({
  options = [],
  phone = '',
  wpp = '',
  instagram = '',
  website = '',
  services = [],
  name,
}) => (
  <div className={styles.container}>
    {options.map((option, index, array) => {
      let href
      switch (option) {
        case "iFood":
          const searchUrl = "https://www.ifood.com.br/busca?q="
          href = `${searchUrl}${encodeURI(name)}`
          break
        case "Rappi":
          href = `https://www.rappi.com.br/search?store_type=all&query=${encodeURI(
            name
          )}`
          break
        case "Whatsapp":
          href = `whatsapp://send?&phone=${wpp.replace(/\D*/g, "")}`
          break
        case "Telefone":
          href = `tel:${phone.replace(/\D*/g, "")}`
          break
        case "DM no Instagram":
          href = instagram.replace(
            /(\@)|((\w*\.*)?instagram.com(.br)?\/?)/,
            "https://www.instagram.com/"
          )
          break
        case "Website":
          href = website
          break
        case "Uber Eats":
        case "James Delivery":
        default:
          break
      }

      return index !== 3 || index !== array.length - 1 || !services.length ? (
        <OptionButton
          key={option}
          href={href}
          option={option}
          phone={phone}
          wpp={wpp}
          instagram={instagram}
          website={website}
        />
      ) : (
        <Button key="services">
          <p className={styles.label}>Serviços</p>
          <p>{services.join(", ")}</p>
        </Button>
      )
    })}
  </div>
)

export default RestaurantOptions
