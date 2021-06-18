import * as React from "react"
import { useState, useEffect } from "react"

/** load components */
import Layout from "../components/layout"
import Seo from "../components/seo"

/** load logic components   */
import { Clock } from "../components/clock"

const IndexPage = () => (
  <Layout>
    <Seo title="Time Machine" />
    <Clock />
  </Layout>
)

export default IndexPage
