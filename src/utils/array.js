const removeAccents = require("remove-accents")

export const alphabeticSortArray = (arr = []) =>
  arr.sort((a, b) => {
    const lowerCaseA = removeAccents(a).toLowerCase()
    const lowerCaseB = removeAccents(b).toLowerCase()
    if (lowerCaseA < lowerCaseB) return -1
    if (lowerCaseA > lowerCaseB) return 1
    return 0
  })
