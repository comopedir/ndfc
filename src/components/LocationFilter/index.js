import React, { useMemo, useRef } from "react"
import { navigate } from "gatsby"
import { pageNameByLocation } from "../../helpers"
import arrow from "../../assets/icons/arrow.svg"
import styles from "./styles.module.scss"
import { alphabeticSortArray } from "../../utils/array"

const LocationFilter = ({ locations = {}, city, state }) => {
  const cityRef = useRef(null)
  const sortedStates = useMemo(
    () => alphabeticSortArray(Object.keys(locations)),
    [locations]
  )

  const sortedCities = useMemo(
    () => (locations[state] ? alphabeticSortArray(locations[state]) : []),
    [locations, state]
  )

  const handleStateChange = e => {
    navigate(pageNameByLocation(e.target.value, locations[e.target.value][0]))
  }

  const handleCityChange = e => {
    navigate(pageNameByLocation(state, e.target.value))
  }
  return (
    <div className={styles.container}>
      <div className={styles.selectContainer}>
        <button className={styles.button}>
          {state}
          <img src={arrow} alt=">" />
        </button>
        <select
          className={styles.select}
          onChange={handleStateChange}
          value={state}
        >
          {sortedStates.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.selectContainer}>
        <button className={styles.button}>
          {city}
          <img src={arrow} alt=">" />
        </button>
        <select
          className={styles.select}
          ref={cityRef}
          onChange={handleCityChange}
          value={city}
        >
          {sortedCities.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default LocationFilter
