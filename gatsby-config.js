module.exports = {
  siteMetadata: {
    title: `MasterMovies Labs`,
    description: `A playground for testing out different web projects!`,
    author: `@MarcusCemes`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `static`,
    //     path: `${__dirname}/src/static`
    //   }
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mastermovies-labs`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0074D9`,
        theme_color: `#0074D9`,
        display: `minimal-ui`,
        // icon: `src/images/icon.png`
      }
    }
  ]
};
