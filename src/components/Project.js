import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Project = ({ title, subtext, description, url, imageData }) => (
  <section className="section project">
    <div className="section__inner">
      <h1 className="project__heading">{title}</h1>
      <p className="project__subtext">{subtext}</p>
      <Image className="project__image" fluid={imageData} alt={title} />
      <p>{description}</p>
      <div className="project__link">
        <Link to="/#projects">&larr; Go back</Link>
      </div>
    </div>
  </section>
)

export default Project
