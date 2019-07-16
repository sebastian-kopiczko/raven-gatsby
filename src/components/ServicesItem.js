import React from "react"
import Icon from "./Icon"

const ServicesItem = ({ iconName, title, description }) => {
  return (
    <div className="card">
      <Icon name={iconName} />
      <h4 className="card__content text-uppercase center">{title}</h4>
      <p>{description}</p>
    </div>
  )
}
export default ServicesItem
