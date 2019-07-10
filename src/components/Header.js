import React from "react"
import { Helmet } from "react-helmet"

import Navigation from "./Navigation"
import ToggleMenu from "./ToggleMenu"

import { Link } from "gatsby"
const Header = props => {
  return (
    <header className="header">
      <Helmet title={`${props.title} | official website`} />
      <div className="header__inner">
        <div className="header__logo">
          <Link className="header__link" to="/">
            {/* <img src={logo} alt="" />z */}
            <span className="header__title text-uppercase">
              {props.companyName}
            </span>
          </Link>
        </div>
        <div className="header__nav-container">
          <ToggleMenu>&#9776;</ToggleMenu>
          <Navigation navItems={props.navItems} />
        </div>
      </div>
    </header>
  )
}

export default Header
