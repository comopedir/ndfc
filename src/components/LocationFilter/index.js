import React, { useState, useMemo, useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "gatsby"
import { pageNameByLocation } from "../../helpers"
import arrow from "../../assets/icons/arrow.svg"
import styles from "./styles.module.scss"

const alphabeticSortFn = (a, b) => {
  const lowerCaseA = a.toLowerCase()
  const lowerCaseB = b.toLowerCase()
  if (lowerCaseA < lowerCaseB) return -1
  if (lowerCaseA > lowerCaseB) return 1
  return 0
}

const LocationFilter = ({ locations = {}, city, state }) => {
  const cityRef = useRef(null)
  const sortedStates = useMemo(
    () => Object.keys(locations).sort(alphabeticSortFn),
    [locations]
  )

  const sortedCities = useMemo(
    () => (locations[state] ? locations[state].sort(alphabeticSortFn) : []),
    [locations, state]
  )

  const handleStateChange = e => {
    const value = e.target.value
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
          <img src={arrow} />
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
          <img src={arrow} />
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
