import React, { useMemo } from "react"
import arrow from "../../assets/icons/arrow.svg"
import { alphabeticSortArray } from "../../utils/array"
import { pageNameWithCategory, pageNameByLocation } from "../../helpers/"
import { navigate } from "gatsby"

import styles from "./styles.module.scss"

const CategoryFilter = ({
  category,
  categories = [],
  pageName,
  city,
  state,
}) => {
  const selectedCategory = category || "Todos"
  const sortedCategories = useMemo(
    () => ["Todos"].concat(alphabeticSortArray(categories)),
    [categories]
  )

  const handleCategoryChange = e => {
    navigate(
      pageNameWithCategory(
        pageNameByLocation(state, city),
        e.target.value === "Todos" ? "" : e.target.value
      )
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.selectContainer}>
        <button className={styles.button}>
          {selectedCategory}
          <img src={arrow} alt=">" />
        </button>
        <select
          className={styles.select}
          onChange={handleCategoryChange}
          value={selectedCategory}
        >
          {sortedCategories.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default CategoryFilter
