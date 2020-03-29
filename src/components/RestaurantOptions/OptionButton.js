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
      /(https?:\/\/)?(\w*\.*)?inst(r)?ag(r)?am.com(.br)?\//,
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
  let contentProps
  let className
  switch (option) {
    case "iFood":
    case "Rappi":
    case "Uber Eats":
    case "James Delivery":
      Content = options.app
      if (option) {
        contentProps = { app: option }
        className = styles.withBackground
      }
      break
    case "Telefone":
      Content = options.phone
      if (phone) {
        contentProps = { number: phone }
        className = styles.withBackground
      }
      break
    case "Whatsapp":
      Content = options.wpp
      if (wpp) {
        contentProps = { number: wpp }
        className = styles.withBackground
      }
      break
    case "DM no Instagram":
      Content = options.instagram
      if (instagram) {
        contentProps = { instagram }
      }
      break
    case "Website":
      Content = options.website
      if (website) {
        contentProps = { website }
      }
      break
    default:
      break
  }

  if (!Content || !contentProps) {
    return null
  }

  return (
    <Button className={className} href={href}>
      <Content {...contentProps} />
    </Button>
  )
}

export default OptionButton
