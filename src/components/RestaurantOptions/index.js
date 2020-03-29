import React, { useMemo } from "react"
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
  "Serviços",
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
}) => {
  const optionsWithServices = useMemo(
    () => (services.length ? options.concat(["Serviços"]) : options),
    [options, services]
  )

  // Add instagram based in info availability rather than tagged as an option
  if (
    instagram &&
    !optionsWithServices.find(item => item === "DM no Instagram")
  ) {
    optionsWithServices.push("DM no Instagram")
  }

  // Add website based in info availability rather than tagged as an option
  if (website && !optionsWithServices.find(item => item === "Website")) {
    optionsWithServices.push("Website")
  }

  return (
    <div className={styles.container}>
      {optionsWithServices
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

          return option !== "Serviços" ? (
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
}

export default RestaurantOptions
