/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }




const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
  {
    allWpPage {
      edges {
        node {
          uri
          id
          seo {
            title
            metaDesc
          }
        }
      }
    }
  }

  `).then(result => {
    result.data.allWpPage.edges.forEach(({ node }) => {
      createPage({
        // Decide URL structure
        path: node.uri,
        // path to template
        component: path.resolve(`./src/templates/page-template.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          id: node.id,
        },
      })
    })
  })}