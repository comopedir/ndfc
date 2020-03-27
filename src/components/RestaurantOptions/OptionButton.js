import React from "react"
import Button from "./Button"
import styles from "./styles.module.scss"

const options = {
  app: ({ app }) => (
    <>
      <p>Peça no</p>
      <p>{app}</p>
    </>
  ),
  wpp: ({ number }) => (
    <>
      <p>Peça no Whatsapp</p>
      <p>{number}</p>
    </>
  ),
  phone: ({ number }) => (
    <>
      <p>Ligue para pedir</p>
      <p>{number}</p>
    </>
  ),
  instagram: ({ instagram }) => {
    let handle = instagram.replace(
      /(https?:\/\/)?(\w*\.*)instagram.com(.br)?\//,
      "@"
    )
    return (
      <>
        <p className={styles.label}>Instagram</p>
        <p>{handle}</p>
      </>
    )
  },
  website: ({ website }) => (
    <>
      <p className={styles.label}>Website</p>
      <p>{website}</p>
    </>
  ),
}

const OptionButton = ({
  href = "",
  option,
  phone,
  wpp,
  instagram,
  website,
}) => {
  let Content
  const contentProps = {}
  switch (option) {
    case "iFood":
    case "Rappi":
    case "Uber Eats":
    case "James Delivery":
      Content = options.app
      contentProps.app = option
      break
    case "Telefone":
      Content = options.phone
      contentProps.number = phone
      break
    case "Whatsapp":
      Content = options.wpp
      contentProps.number = wpp
      break
    case "DM no Instagram":
      Content = options.instagram
      contentProps.instagram = instagram
      break
    case "Website":
      Content = options.website
      contentProps.website = website
      break
    default:
      break
  }

  if (!Content) {
    return null
  }

  return (
    <Button href={href}>
      <Content {...contentProps} />
    </Button>
  )
}

export default OptionButton
