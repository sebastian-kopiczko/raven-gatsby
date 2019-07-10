import React from "react"

const TestimonialsItem = props => {
  return (
    <div className="testimonials__item">
      <img src="" alt={props.imageAlt} className="testimonials__img center" />
      <p className="testimonials__content">{props.content}</p>
    </div>
  )
}

export default TestimonialsItem
