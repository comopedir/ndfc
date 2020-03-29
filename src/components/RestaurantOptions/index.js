import React from "react"
import styles from "./styles.module.scss"
import Button from "./Button"
import OptionButton from "./OptionButton"

const order = [
  "iFood",
  "Rappi",
  "Uber Eats",
  "James Delivery",
  "Telefone",
  "Whatsapp",
  "DM no Instagram",
  "Website",
]

const RestaurantOptions = ({
  options = [],
  phone,
  wpp,
  instagram,
  website,
  services = [],
  name,
}) => (
  <div className={styles.container}>
    {options
      .sort((a, b) => {
        if (order.indexOf(a) > order.indexOf(b)) {
          return 1
        } else {
          return -1
        }
      })
      .map((option, index, array) => {
        let href
        switch (option) {
          case "iFood":
            const searchUrl = "https://www.ifood.com.br/busca?q="
            if (name) {
              href = `${searchUrl}${encodeURIComponent(name)}`
            }
            break
          case "Rappi":
            href = `https://www.rappi.com.br/search?store_type=all&query=${encodeURIComponent(
              name
            )}`
            break
          case "Whatsapp":
            if (wpp) {
              href = `whatsapp://send?&phone=+55${wpp.replace(/\D*/g, "")}`
            }
            break
          case "Telefone":
            if (phone) {
              href = `tel:${phone.replace(/\D*/g, "")}`
            }
            break
          case "DM no Instagram":
            if (instagram) {
              href = instagram.replace(
                /(\@)|((\w*\.*)?inst(r)?ag(r)?am.com(.br)?\/?)/,
                "https://www.instagram.com/"
              )
            }
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
