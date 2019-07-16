import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Section from "../Section"
import ProjectsItem from "../ProjectsItem"
import PageLink from "../PageLink"

import ProjectPreview from "../ProjectPreview"

const Projects = props => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
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
      className="projects"
      center={true}
      uppercase={true}
      heading="Projects"
    >
      <div className="projects__gallery">
        {projects.map(({ node: project }, index) => {
          const title = project.title
          const description = project.description
          const imageData = project.image.childImageSharp.fluid
          const slug = project.slug

          return (
            <ProjectPreview
              title={title}
              description={description}
              imageData={imageData}
              slug={slug}
            />
          )
          // <ProjectsItem imageAlt={project} />
        })}
      </div>
      <PageLink text="browse more" to="" color="purple" />

      {/* //     <div className="projects__gallery">
  //       {data.allFile.edges.map((img, index) => {
  //         return (
  //           <Img
  //             className="projects__image icon--search"
  //             key={index}
  //             resolutions={img.node.childImageSharp.fluid}
  //           />
  //         )
  //       })}
  //     </div></div> */}
    </Section>
  )
}
export default Projects
