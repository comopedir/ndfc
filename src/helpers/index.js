const removeAccents = require("remove-accents")

module.exports.pageNameByNode = function(node) {
  const { Instagram: instagram, Nome_do_Estabelecimento: restaurantName } = node

  if (instagram) {
    return instagram
      .toLowerCase()
      .replace("instagram.com/", "")
      .replace("intagram.com/", "")
      .replace("instragam.com/", "")
      .replace("@", "")
      .replace("https://", "")
      .replace("http://", "")
      .replace("www.", "")
      .replace("/?hl=pt-br", "")
  }

  if (restaurantName) {
    return restaurantName.toLowerCase().replace(" ", "_")
  }

  return ""
}

module.exports.pageNameByLocation = function(state, city) {
  return `/${removeAccents(state.toLowerCase())}/${removeAccents(
    city.replace(/\s/g, "-").toLowerCase()
  )}`
}
