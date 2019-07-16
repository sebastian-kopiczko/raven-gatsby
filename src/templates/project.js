import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Project from "../components/Project"

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      url
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson
  const title = project.title
  const description = project.description
  const url = project.url
  const imageData = project.image.childImageSharp.fluid

  return (
    <Layout>
      <Project
        title={title}
        description={description}
        url={url}
        imageData={imageData}
      />
    </Layout>
  )
}

export default ProjectTemplate
