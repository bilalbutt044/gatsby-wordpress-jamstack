import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
export const getPage = graphql`
  query getPage($slug: String!) {
    allWpPage(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          slug
        }
      }
    }
  }
`

const Pages = ({ data }) => {
  const page = data.allWpPage.edges[0].node
  return (
    <Layout>
      <SEO title={page.title} />
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
    </Layout>
  )
}

export default Pages
