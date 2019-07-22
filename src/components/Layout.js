import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"
import 'normalize.css';
import "../styles/main.scss"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          navigationItems
          headerCompanyName
          copyright
        }
      }
    }
  `)
  const navItems = data.site.siteMetadata.navigationItems
  const companyName = data.site.siteMetadata.headerCompanyName
  const copyright = data.site.siteMetadata.copyright
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <div className="app__layout">
      <Header companyName={companyName} navItems={navItems} />
      <Fragment>{props.children}</Fragment>
      <Footer copyright={copyright} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
