import React, { Component } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import { Link } from "gatsby"
import Navigation from "./Navigation"
import pageLogo from "../images/logo.svg"

class Header extends Component {
  state = {
    isToggleOn: false,
    icons: {
      hamburger: `&#8801;`,
      close: `&times;`,
    },
  }

  toggleMenu = e => {
    const viewportWidth =
      window.innerWidth || document.documentElement.clientWidth
    if (viewportWidth < 1024) {
      const d = document
      d.getElementById("navigation").classList.toggle("navigation--active")
      d.body.classList.toggle("noscroll")
      this.setState({ isToggleOn: !this.state.isToggleOn })
    } else {
      return
    }
  }

  render() {
    const { title, companyName } = this.props
    const { isToggleOn, icons } = this.state
    let buttonIcon = `${
      isToggleOn ? (buttonIcon = icons.close) : (buttonIcon = icons.hamburger)
    }`
    return (
      <header className="header">
        <Helmet title={`${title} | official website`} />
        <div className="header__inner">
          <Link className="header__logo" to="/">
            <img src={pageLogo} alt="" />
            <span className="header__title text-uppercase">{companyName}</span>
          </Link>
          <div className="header__nav-container">
            <button
              onClick={this.toggleMenu}
              aria-label="Toggle mobile menu visibility"
              id="menu-close-btn"
              className="navigation__menu-btn menu-btn"
              dangerouslySetInnerHTML={{ __html: buttonIcon }}
            ></button>
            <Navigation
              action={this.toggleMenu}
              navItems={this.props.navItems}
            />
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  // title: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
}

export default Header
