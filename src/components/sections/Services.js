import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Section from "../Section"

import ServicesItem from "../ServicesItem"
import servicesPhoto from "../../images/services-man.png"
const Services = props => {
  const data = useStaticQuery(graphql`
    {
      allServicesJson {
        edges {
          node {
            title
            description
            icon_name
          }
        }
      }
    }
  `)

  const services = data.allServicesJson.edges
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
      {services && (
        <div className="services__container">
          <ul className="services__list">
            {services.map(({ node: service }, index) => {
              const title = service.title
              const description = service.description
              const icon = service.icon_name
              return (
                <li key={index} className="services__item">
                  <ServicesItem
                    title={title}
                    iconName={icon}
                    description={description}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </Section>
  )
}
export default Services
