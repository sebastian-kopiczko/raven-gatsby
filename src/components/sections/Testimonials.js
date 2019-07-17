import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Section from "../Section"
import TestimonialsItem from "../TestimonialsItem"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    {
      allTestimonialsJson {
        edges {
          node {
            title
            content
          }
        }
      }
    } 
  `)
  const testimonials = data.allTestimonialsJson.edges;
  return (
    <Section
      id="testimonials"
      className="testimonials"
      center={true}
      uppercase={true}
      heading="Testimonials"
    >
      {testimonials && (
        <div className="testimonials">
          {testimonials.map(({ node: testimonial }, index) => {
            const title = testimonial.title
            const content = testimonial.content
            return (
              <TestimonialsItem
                key={index}
                imageAlt={title}
                content={content}
              />
            )
          })}
        </div>
      )}
    </Section>
  )
}
export default Testimonials
