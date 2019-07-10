import React from "react"

const NavigationItem = props => {
  return (
    <li key={index} className="navigation__item">
      <Link
        onClick={() => {
          document
            .getElementById("navigation")
            .classList.remove("navigation--active")
        }}
        to={`/#${item}`}
        className="navigation__link"
      >
        {item}
      </Link>
    </li>
  )
}
export default NavigationItem
