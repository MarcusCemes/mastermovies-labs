module.exports = {
  siteMetadata: {
    title: `MasterMovies Labs`,
    description: `A playground for testing out different web projects!`,
    author: `@MarcusCemes`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/src/static`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mastermovies-labs`,
        short_name: `labs`,
        start_url: `/`,
        background_color: `#13C2C2`,
        theme_color: `#13C2C2`,
        display: `minimal-ui`,
        icon: `src/static/logo/experimental.svg`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
      },
    },
  ],
};
