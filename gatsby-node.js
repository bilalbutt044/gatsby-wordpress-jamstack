const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const post = await graphql(
    `
      {
        allWpPost(sort: { fields: [date] }) {
          edges {
            node {
              title
              excerpt
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
  )

  post.data.allWpPost.edges.forEach(({ node }) => {
    createPage({
      // Decide url Structure
      path: node.slug,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: node.slug,
      },
    })
  })

  const pages = await graphql(
    `
      {
        allWpPage {
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
  )

  pages.data.allWpPage.edges.forEach(({ node }) => {
    createPage({
      // Decide url Structure
      path: node.slug,
      component: path.resolve("./src/templates/page.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
