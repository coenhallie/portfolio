import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (
    <div>
      <h1>Hello gatsby-image</h1>
      {console.log(data)}
      <Img fixed={data.test.childImageSharp.fixed} />
    </div>
  )
  
  export const query = graphql`
    query {
      test: file(relativePath: { eq: "test.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `