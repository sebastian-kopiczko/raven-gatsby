import React from "react"

const Section = ({
  center,
  uppercase,
  id,
  customClassName,
  heading,
  style,
  children,
}) => {
  const headingClass = `${center ? `text--center ` : ``} ${
    uppercase ? `text--uppercase ` : ``
  }`
  return (
    <section style={style} id={id} className={`section ${customClassName}`}>
      {heading.length > 0 && (
        <h2
          className={`section__heading 
          ${headingClass} ${` `}
          ${customClassName}__heading`}
        >
          {heading}
        </h2>
      )}
      <div className="section__inner">{children}</div>
    </section>
  )
}

export default Section
