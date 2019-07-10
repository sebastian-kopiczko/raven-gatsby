import React from "react"
import Section from "../Section"

const Projects = props => {
  return (
    <Section id="projects" className="projects" center={true} uppercase={true}>
      <h5>Projects</h5>
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
