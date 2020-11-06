import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"

export const getPost = graphql`
  query GetPost($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          slug
          date(formatString: "MM-DD-YYYY")
          author {
            node {
              name
            }
          }
        }
      }
    }
  }
`

const BlogPost = ({ data }) => {
  const post = data.allWpPost.edges[0].node
  return (
    <Layout>
      <SEO title={post.title} />
      <h1>{post.title}</h1>
      <p>{post.author.node.name}</p>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </Layout>
  )
}

export default BlogPost
