import React from "react"
import { Link } from "gatsby"
import ToggleMenuButton from "./ToggleMenu"
const Navigation = props => {
  return (
    <nav id="navigation" className="navigation">
      <ToggleMenuButton>&times;</ToggleMenuButton>{" "}
      {props.navItems && (
        <ul className="navigation__list">
          {props.navItems.map((item, index) => (
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
          ))}
        </ul>
      )}
    </nav>
  )
}
export default Navigation
