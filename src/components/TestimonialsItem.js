import React from "react"
import Image from 'gatsby-image'

const TestimonialsItem = ({ content, imageAlt, imageData }) => {
  return (
    <div className="testimonials__item swiper-slide">
      {/* <img src="" alt={imageAlt} className="testimonials__img center" /> */}
      <Image fluid={imageData} alt={imageAlt} />

      <p className="testimonials__content">{content}</p>
    </div>
  )
}

export default TestimonialsItem
