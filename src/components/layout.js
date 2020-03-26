/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "normalize.css"
import "./../assets/styles/main.scss"
import Header from "./../components/Header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="grid">{children}</main>
      <footer></footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
