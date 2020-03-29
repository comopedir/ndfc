import React from "react"
import { Link } from "gatsby"
import { pageNameByNode } from "../../helpers"

import styles from "./styles.module.scss"

const RestaurantThumb = ({ data }) => {
  const {
    Foto_da_Comida: photos,
    Nome_do_Estabelecimento: name,
    Categoria: categories,
  } = data

  const photo = (photos && photos.length && photos[0].thumbnails) || null

  return (
    <Link className={styles.container} to={pageNameByNode(data)}>
      {photo && (
        <div className={styles.thumbnail} key={photo.full?.url}>
          <img src={photo.full?.url} alt={`Foto de ${name}.`} />
        </div>
      )}

      <h3 className={styles.title}>{name}</h3>

      <p className={styles.tag}>
        {categories?.map((category, index) => (
          <span key={category}>
            {category}
            {index < categories.length - 1 && ","}{" "}
          </span>
        ))}
      </p>
    </Link>
  )
}

export default RestaurantThumb
