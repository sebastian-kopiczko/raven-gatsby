import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import { Hero, Services, Projects, Testimonials } from "../components/sections/"
const IndexPage = () => {
  // query dla tresci sekcji

  return (
    <div>
      <Layout>
        <Hero content="asd" />
        <Services />
        <Projects />
        <Testimonials />
      </Layout>
    </div>
  )
}
export default IndexPage
