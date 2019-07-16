import React from "react"
import Section from "../Section"

import ServicesItem from "../ServicesItem"
import servicesPhoto from "../../images/services-man.png"
// import SERVICE ITEM i nizej petla!!!!\

const Services = props => {
  const servicesIcons = [
    "box",
    "cd",
    "compass",
    "pulse",
    "shield",
    "syringe",
    "truck",
    "vehicle",
  ]
  return (
    <Section
      id="services"
      className="services"
      center={true}
      uppercase={true}
      heading="Our services"
    >
      <img src={servicesPhoto} alt="" />
      <p className="content services__content">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      {servicesIcons && (
        <div className="services__container">
          <ul className="services__list">
            {servicesIcons.map((icon, index) => (
              <li key={index} className="services__item">
                <ServicesItem iconName={icon} text={icon} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  )
}
export default Services
