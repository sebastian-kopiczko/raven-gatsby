import React from "react"
import PropTypes from "prop-types"

const Icon = ({ name, customClassName }) => {
  return (
    <span className={`icon icon--${name} ${customClassName}`} aria-label={name}></span>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  customClassName: PropTypes.string
}

export default Icon
