import React from "react"

const ToggleMenu = ({ children }) => {
  return (
    <button
      onClick={() => {
        document
          .getElementById("navigation")
          .classList.toggle("navigation--active")
      }}
      aria-label="Toggle mobile menu visibility"
      id="menu-close-btn"
      className="navigation__menu-btn menu-btn"
    >
      {children}
    </button>
  )
}
export default ToggleMenu
