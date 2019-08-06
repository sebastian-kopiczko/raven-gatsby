import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"
import "normalize.css"
import "../styles/main.scss"

const Layout = ({ children, footerNav, footerBottom }) => {
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
  console.log(companyName)
  return (
    <main id="main">
      <div className="app__layout">
        <Header
          companyName={companyName}
          title={companyName}
          navItems={navItems}
        />
        <Fragment>{children}</Fragment>
        <Footer
          copyright={copyright}
          footerNav={footerNav}
          footerBottom={footerBottom}
        />
      </div>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
