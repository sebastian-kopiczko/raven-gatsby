import React from "react"

import Layout from "../components/Layout"
import { Hero, Services, Projects, Testimonials } from "../components/sections/"
const IndexPage = () => {
  return (
    <div>
      <Layout>
        <main id="main">
          <Hero />
          <Services />
          <Projects />
          <Testimonials />
        </main>
      </Layout>
    </div>
  )
}
export default IndexPage
