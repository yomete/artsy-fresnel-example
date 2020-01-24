import React from "react"

import Articles from "../components/Articles/index"
import Layout from "../components/Layout/index"
import SEO from "../components/SEO/index"

const IndexPage = () => (
  <Layout>
    <Articles />
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
