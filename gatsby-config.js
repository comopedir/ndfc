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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-162138553-1",
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Playfair Display",
              variants: ["400", "500", "600", "700"],
            },
          ],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["src/assets/styles"],
      },
    },
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
        short_name: `ÑDFaC.com.br`,
        start_url: `/`,
        background_color: `#34482b`,
        theme_color: `#34482b`,
        display: `minimal-ui`,
        icon: `src/images/ndfac_ico.png`, // This path is relative to the root of the site.
        theme_color_in_head: false,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `${process.env.AIRTABLE_API_KEY}`, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: `${process.env.AIRTABLE_RESTAURANTS_BASE_ID}`,
            tableName: `${process.env.AIRTABLE_RESTAURANTS_TABLE_NAME}`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "site.naodeixefecharaconta.com",
      },
    },
  ],
}
