import React from "react"

export default props => (
  <a
    href={`#${props.slug}`}
    className={`button button--${props.color} ${
      props.centered ? "center" : ""
    }`}
  >
    {props.buttonText}
  </a>
)
