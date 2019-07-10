import React from "react"
import Section from "../Section"
import ProjectsItem from "../ProjectsItem"
import PageLink from "../PageLink"

const Projects = props => {
  const projects = [
    "thumb-1",
    "thumb-2",
    "thumb-3",
    "thumb-4",
    "thumb-5",
    "thumb-6",
    "thumb-7",
    "thumb-8",
    "thumb-9",
    "thumb-10",
    "thumb-11",
    "thumb-12",
  ]
  return (
    <Section
      id="projects"
      className="projects"
      center={true}
      uppercase={true}
      heading="Projects"
    >
      <div className="projects__gallery">
        {projects.map((project, index) => (
          <ProjectsItem imageAlt={project} />
        ))}
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
