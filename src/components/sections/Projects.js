import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Section from "../Section"
import PageLink from "../PageLink"
import ProjectCard from "../ProjectCard"

const Projects = props => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            subtitle
            slug
            url
            description
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allProjectsJson.edges
  return (
    <Section
      id="projects"
      customClassName="projects"
      center={true}
      uppercase={true}
      heading="Projects"
    >
      <div className="projects__inner">
        <div className="projects__content">
          <p>
            Laboriosam natus officiis molestias dolorem delectus enim at facilis
            rerum animi in? Maiores quasi, ut quo sit odio dignissimos illo?
            Libero amet corrupti atque ipsam, dolore soluta velit, asperiores.
          </p>{" "}
          <p>
            Praesentium molestias rerum accusantium doloribus vero sapiente
            reiciendis nesciunt laudantium. Voluptate omnis illo nemo
            asperiores.
          </p>
        </div>
        <div className="projects__gallery">
          {projects.map(({ node: project }, index) => {
            const title = project.title
            const subtitle = project.subtitle
            const description = project.description
            const imageData = project.image.childImageSharp.fluid
            const slug = project.slug
            if (index < 6) {
              return (
                <ProjectCard
                  title={title}
                  subtitle={subtitle}
                  description={description}
                  imageData={imageData}
                  slug={slug}
                />
              )
            } else {
              return
            }
          })}
        </div>
      </div>
      {/* <PageLink
        text="browse more"
        to="/projects"
        color="purple"
        customClassName="projects__link"
      /> */}
    </Section>
  )
}
export default Projects
