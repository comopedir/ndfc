export const alphabeticSortArray = (arr = []) =>
  arr.sort((a, b) => {
    const lowerCaseA = a.toLowerCase()
    const lowerCaseB = b.toLowerCase()
    if (lowerCaseA < lowerCaseB) return -1
    if (lowerCaseA > lowerCaseB) return 1
    return 0
  })
