// // gatsby-node.js

// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */


exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
  
    if (page.path.match(/^\/product/)) {
      page.matchPath = "/product/*"
  
      createPage(page)
    }
}