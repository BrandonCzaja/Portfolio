/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "My New Blog",
    description: "This is my awesome blog I made from scratch!",
    cheese: "gouda",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images/`,
        ignore: ["**/.*"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/mark/`,
        ignore: ["**/.*"],
      },
    },
    `gatsby-transformer-remark`,
  ],
}
