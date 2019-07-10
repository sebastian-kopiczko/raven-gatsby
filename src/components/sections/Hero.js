import React from "react"
import Section from "../Section"
import PageLink from "../PageLink"
const Hero = props => {
  return (
    <Section
      id="home"
      className="hero"
      center={true}
      uppercase={true}
      heading="Welcome to Raven"
    >
      <p className="hero__content content">responsive multi purpose theme</p>
      <PageLink to="services" text="read more" />
    </Section>
  )
}
export default Hero
