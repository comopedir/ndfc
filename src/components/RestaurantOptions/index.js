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
  "Doações",
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
  ifoodLink,
  rappiLink,
  uberEatsLink,
  donations,
}) => {
  const updatedOptions = useMemo(() => {
    let newOptions = options
    if (donations) {
      newOptions = newOptions.concat("Doações")
    }

    if (services.length) {
      newOptions = newOptions.concat("Serviços")
    }
    return newOptions
  }, [options, services, donations])

  console.log(updatedOptions)

  // Add instagram based in info availability rather than tagged as an option
  if (instagram && !updatedOptions.find(item => item === "DM no Instagram")) {
    updatedOptions.push("DM no Instagram")
  }

  // Add website based in info availability rather than tagged as an option
  if (website && !updatedOptions.find(item => item === "Website")) {
    updatedOptions.push("Website")
  }

  return (
    <div className={styles.container}>
      {updatedOptions
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
              if (ifoodLink && ifoodLink !== "Sem resultado") {
                href = ifoodLink
              } else {
                href = "https://www.ifood.com.br/"
              }
              break
            case "Rappi":
              if (rappiLink && rappiLink !== "Sem resultado") {
                href = rappiLink
              } else {
                href = "https://www.rappi.com.br/"
              }
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
              href =
                uberEatsLink && uberEatsLink !== "Sem resultado"
                  ? uberEatsLink
                  : "https://www.ubereats.com/br"
              break
            case "James Delivery":
              href = "https://jamesdelivery.com.br/"
              break
            case "Doações":
              href = donations
              break
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
