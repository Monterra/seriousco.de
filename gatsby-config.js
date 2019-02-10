module.exports = {
  siteMetadata: {
    title: `seriousco.de`,
    description: `It's all about software - serious code.`,
    author: `Dominik Sumer`,
    siteUrl: `https://seriousco.de`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `seriousco.de`,
        short_name: `seriousco.de`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#007bb3`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-less`,
    `gatsby-plugin-webpack-size`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    `gatsby-plugin-offline`,
  ],
}
