import React from "react"
import Section from "../Section"
const Hero = props => {
  return (
    <Section id="home" className="hero" center={true} uppercase={true}>
      <p className="hero__content content">{props.content}</p>
    </Section>
  )
}
export default Hero
