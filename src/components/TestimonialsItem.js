import React from "react"
import Image from "gatsby-image"

const TestimonialsItem = ({ content, imageAlt, imageData }) => {
  return (
    <div className="testimonials__item swiper-slide">
      <Image fluid={imageData} alt={imageAlt} />

      <p className="testimonials__content">{content}</p>
    </div>
  )
}

export default TestimonialsItem
