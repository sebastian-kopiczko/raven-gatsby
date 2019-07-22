import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Section from "../Section"

import ServicesItem from "../ServicesItem"

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
      file(relativePath: { eq: "images/services-image.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  // ...GatsbyImageSharpFluid
  const services = data.allServicesJson.edges
  const imageData = data.file.childImageSharp.fluid

  const serviceIconClass = "service-item__icon"
  return (
    <Section
      id="services"
      heading="Our services"
      customClassName="services"
      center={true}
      uppercase={true}
    >
      <div className="services__inner">
        <div className="services__content">
          <p>
            Corporis explicabo saepe ab a voluptatum accusamus quo, harum
            laborum placeat similique sequi iure nam aliquid ipsum error omnis
            atque consequatur eaque perferendis nostrum.
          </p>
          <p>
            Officiis eveniet cupiditate alias iure quis possimus magnam libero
            obcaecati saepe deleniti neque corporis harum velit delectus odit
            beatae dignissimos, asperiores voluptas.
          </p>
        </div>
        <Image className="services__image" fluid={imageData} />

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
                      customClassName={serviceIconClass}
                    />
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </Section>
  )
}
export default Services
