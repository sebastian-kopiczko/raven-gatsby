import React from "react"
import PropTypes from 'prop-types'

import { Link } from "gatsby"

const Navigation = ({ navItems, action }) => {
  return (
    <nav id="navigation" className="navigation">
      {navItems && (
        <ul className="navigation__list">
          {navItems.map((item, index) => (
            <li key={index} className="navigation__item">
              <Link
                onClick={action}
                to={`/#${item}`}
                className="navigation__link"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

Navigation.propTypes = {
  action: PropTypes.func.isRequired,
  navItems: PropTypes.array.isRequired
}

export default Navigation
