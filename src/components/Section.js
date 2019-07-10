import React from "react"

const Section = props => {
  let headingClassName = `${props.class}__heading`
  if (props.center) {
    headingClassName += " text-center"
  }
  if (props.uppercase) {
    headingClassName += " text-uppercase"
  }
  return (
    <section id={props.id} className={`${props.className} section`}>
      {props.heading && <h2 className={headingClassName}>{props.heading}</h2>}
      {props.children}
    </section>
  )
}
export default Section
