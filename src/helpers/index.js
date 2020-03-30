const removeAccents = require("remove-accents")

module.exports.pageNameByNode = function(node) {
  const { Instagram: instagram, Nome_do_Estabelecimento: restaurantName } = node

  let path = ""

  if (instagram) {
    path = instagram
      .toLowerCase()
      .replace("instagram.com/", "")
      .replace("intagram.com/", "")
      .replace("instragam.com/", "")
      .replace("@", "")
      .replace("https://", "")
      .replace("http://", "")
      .replace("www.", "")
      .replace("/?hl=pt-br", "")
  } else if (restaurantName) {
    path = restaurantName.toLowerCase()
  }

  return path.replace(/\s/g, "")
}

module.exports.pageNameByLocation = function(state, city) {
  return `/${removeAccents(state.toLowerCase())}/${removeAccents(
    city.replace(/\s/g, "-").toLowerCase()
  )}`
}

module.exports.pageNameWithCategory = function(name, category) {
  return `${name}/${removeAccents(category.replace(/\s/g, "-").toLowerCase())}`
}
