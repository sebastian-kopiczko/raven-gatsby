import React from "react"

import Layout from "../components/Layout"
import { Hero, Services, Projects, Testimonials } from "../components/sections/"
const IndexPage = () => {
  return (
    <div>
      <Layout footerNav={true}>
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
      </Layout>
    </div>
  )
}
export default IndexPage
