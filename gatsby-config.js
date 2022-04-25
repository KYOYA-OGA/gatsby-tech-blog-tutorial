require('dotenv').config('./.env');

module.exports = {
  siteMetadata: {
    title: `TechHub-blog`,
    siteUrl: `https://techhub-blog.netlify.com`,
    description: `TechHub Blog is a platform for latest technology news and updates.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
      },
    },
  ],
};
