import React from "react"

import Articles from "../components/Articles/index"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Articles />
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
