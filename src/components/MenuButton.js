import React from "react"

const MenuButton = ({ children }) => {

  return (
    <button
      onClick={e => {
        // e.preventDefault();
        // document
        //   .getElementById("navigation")
        //   .classList.toggle("navigation--active")
        // const nav = e.target.nextElementSibling;
        // nav.classList.contains("navigation--active") ? buttonIcon = icons.hamburger : buttonIcon = icons.close;
      }}
      aria-label="Toggle mobile menu visibility"
      id="menu-close-btn"
      className="navigation__menu-btn menu-btn"
      dangerouslySetInnerHTML={{ __html: buttonIcon }}
    >
    </button>
  )
}
export default MenuButton
