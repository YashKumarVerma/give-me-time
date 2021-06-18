import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Clock } from "../components/clock"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Clock />
  </Layout>
)

export default IndexPage
