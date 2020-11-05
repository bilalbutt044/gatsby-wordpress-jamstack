import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Posts from "../components/posts"
const getTitle = graphql`
  query siteTitle {
    wp {
      generalSettings {
        title
        description
      }
    }
    allWpPost {
      nodes {
        content
        title
        excerpt
        link
        slug
        author {
          node {
            name
          }
        }
        date(formatString: "MM-DD-YYYY")
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            id
            uri
            altText
            sourceUrl
          }
        }
      }
    }
  }
`
export default function Home() {
  const {
    wp: {
      generalSettings: { title, description },
    },
    allWpPost,
  } = useStaticQuery(getTitle)

  return (
    <Layout>
      <SEO title={title} description={description} keywords={["blog"]} />
      <h4>All Posts</h4>
      {allWpPost.nodes.map(post => (
        <Posts post={post} />
      ))}
    </Layout>
  )
}
