import React from "react"
import PropTypes from "prop-types"

const Icon = props => {
  return (
    <span className={`icon icon--${props.name}`} aria-label={props.name}></span>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
