import React from "react"
import Icon from "./Icon"

const ServicesItem = props => {
  return (
    <div className="card">
      <Icon name={props.iconName} />
      <h4 className="card__content text-uppercase center">{props.text}</h4>
    </div>
  )
}
export default ServicesItem
