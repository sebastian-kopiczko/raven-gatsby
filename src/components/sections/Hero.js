import React from "react"
import Section from "../Section"
import PageLink from "../PageLink"
import BackgroundImage from '../../../data/images/bg-home.jpg'

const Hero = props => {

  return (
    <Section
      id="home"
      customClassName="hero"
      center={true}
      uppercase={true}
      heading="Welcome to Raven"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <p className="hero__content content">responsive multi purpose theme</p>
      <PageLink customClassName="hero__link" to="services" text="read more" />
    </Section >
  )
}
export default Hero
