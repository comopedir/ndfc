import React from "react"

const RestaurantThumb = ({data}) => {
  const {
    Foto_da_Comida: photos,
    Nome_do_Estabelecimento: name,
    Categoria: categories,
  } = data;

  return (
    <div>
      {
        photos.map( photo => {
          const { thumbnails } = photo;
          return (
            <div key={thumbnails.full.url}>
              <img src={thumbnails.full.url} width="200" alt={`Foto de ${name}.`} />
            </div>
          )
        })
      }
      <h3>{name}</h3>
      <p>
        {
          categories.map( category => (
            <span key={category}>{category}</span>
          ))
        }
      </p>
    </div>
  )
}

export default RestaurantThumb;