import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Section from "../Section"
import Carousel from "../Carousel"
import TestimonialsItem from "../TestimonialsItem"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    {
      allTestimonialsJson {
        edges {
          node {
            title
            content
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const testimonials = data.allTestimonialsJson.edges
  return (
    <Section
      id="testimonials"
      customClassName="testimonials"
      center={true}
      uppercase={true}
      heading="Testimonials"
    >
      {testimonials && (
        <div className="testimonials__inner">
          <Carousel>
            {testimonials.map(({ node: testimonial }, index) => {
              const title = testimonial.title
              const content = testimonial.content
              const imageData = testimonial.image.childImageSharp.fluid

              return (
                <TestimonialsItem
                  key={index}
                  content={content}
                  imageAlt={title}
                  imageData={imageData}
                />
              )
            })}
          </Carousel>
        </div>
      )}
    </Section>
  )
}
export default Testimonials
