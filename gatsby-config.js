require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Não deixe fechar a conta`,
    description: `Iniciativa aberta de apoio a restaurantes brasileiros durante a crise COVID-19.`,
    author: `@naodeixefecharaconta`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mdx`
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `${process.env.AIRTABLE_API_KEY}`, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: `${process.env.AIRTABLE_RESTAURANTS_BASE_ID}`,
            tableName: `${process.env.AIRTABLE_RESTAURANTS_TABLE_NAME}`
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'site.naodeixefecharaconta.com'
      },
    },
  ],
}