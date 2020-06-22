import React from "react"
import Layout from "../components/layout"
import RightHomeComponent from "../components/right-home-component"
import {StaticQuery, graphql} from "gatsby"

export default () => {
  <StaticQuery query={graphql`
  {
    test: file(relativePath: {eq: "test.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
        }
      }
    }
  `}
  render={(data) => (
  <Layout>
    <RightHomeComponent />
  </Layout>
  )}

