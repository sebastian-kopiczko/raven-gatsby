import React from "react"
import Section from "../Section"
import TestimonialsItem from "../TestimonialsItem"

const Testimonials = () => {
  const testimonials = [
    {
      title: "Testimonial1",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Testimonial2",
      content:
        "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.Eveniet debitis asperiores ipsum ea magni illo necessitatibus in provident.",
    },
    {
      title: "Testimonial3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatur illo unde provident voluptate blanditiis, minima culpa? Rem, iure magni quia quidem porro impedit ratione voluptatem deleniti animi corrupti consequuntur.",
    },
  ]
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
          {testimonials.map((item, index) => (
            <TestimonialsItem
              imageAlt={item.title}
              key={index}
              content={item.content}
            />
          ))}
        </div>
      )}
    </Section>
  )
}
export default Testimonials
