import * as React from "react"
import { useState, useEffect } from "react"

/** load components */
import Layout from "../components/layout"
import Seo from "../components/seo"

/** load logic components   */
import { Clock } from "../components/clock"
import { useLocalStorage } from "../hooks/useLocalStorage"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Clock />
  </Layout>
)

export default IndexPage
