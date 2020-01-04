/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "ホゲホゲブログ",
    description: "ホゲホゲによるブログです",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/blog`,
        name: "blog",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
  ],
}
