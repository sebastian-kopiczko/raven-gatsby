import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const ProjectCard = ({ slug, title, subtitle, description, imageData }) => {
  return (
    <article className="project-card">
      <Link className="project-card__image" to={`/${slug}`}>
        <Image fluid={imageData} alt={title} />
      </Link>
      <div className="project-card__content">
        <h3 className="project-card__title">
          <Link to={`/${slug}`}>{title}</Link>
        </h3>
        {/* <p className="text--faded text--small">{subtitle}</p> */}
        <p>{description}</p>
      </div>
      <div className="project-card__action">
        <Link className="project-card__link text--uppercase" to={`/${slug}`}>
          View project
        </Link>
      </div>
    </article>
  )
}

export default ProjectCard
