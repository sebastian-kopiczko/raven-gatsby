import React from "react"
import Section from "../Section"

import ServicesItems from "../ServicesItem"
// import SERVICE ITEM i nizej petla!!!!
const Services = props => {
  return (
    <Section id="services" className="services" center={true} uppercase={true}>
      <ServicesItems />
    </Section>
  )
}
export default Services
