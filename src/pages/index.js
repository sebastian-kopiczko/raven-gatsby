import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import { Hero, Services, Projects, Testimonials } from "../components/sections/"
const IndexPage = () => {
  // query dla tresci sekcji

  return (
    <div>
      <Layout>
        <main>
          <Hero content="asd" />
          <Services />
          <Projects />
          <Testimonials />
        </main>
      </Layout>
    </div>
  )
}
export default IndexPage
