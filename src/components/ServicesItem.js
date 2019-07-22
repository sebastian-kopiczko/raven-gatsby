import React from "react"
import Icon from "./Icon"

const ServicesItem = ({ iconName, title, description, customClassName }) => {
  return (
    <div className="service-item">
      <Icon name={iconName} customClassName={customClassName} />
      <h4 className="service-item__heading text-uppercase text--center">
        {title}
      </h4>
      <p>{description}</p>
    </div>
  )
}
export default ServicesItem
