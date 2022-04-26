require('dotenv').config('./.env');

module.exports = {
  siteMetadata: {
    title: `TechHub-blog`,
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
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'blogs',
        engine: 'flexsearch',
        engineOptions: {
          tokenize: 'forward',
        },
        query: `
          {
            allSanityBlog {
              nodes {
                title
                id
                publishedAt
                slug {
                  current
                }
                coverImage {
                  alt
                  asset{
                    gatsbyImageData
                  }
                }
              }
            }
          }
        `,
        ref: 'id',
        index: ['title'],
        store: ['id', 'title', 'publishedAt', 'slug', 'coverImage'],
        normalizer: ({ data }) =>
          data.allSanityBlog.nodes.map((node) => ({
            id: node.id,
            title: node.title,
            publishedAt: node.publishedAt,
            slug: node.slug.current,
            coverImage: node.coverImage,
          })),
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'categories',
        engine: 'flexsearch',
        engineOptions: {
          tokenize: 'forward',
        },
        query: `
          {
            allSanityCategory {
              nodes {
                title
                id
                slug {
                  current
                }
              }
            }
          }
        `,
        ref: 'id',
        index: ['title'],
        store: ['id', 'title', 'slug'],
        normalizer: ({ data }) =>
          data.allSanityCategory.nodes.map((node) => ({
            id: node.id,
            title: node.title,
            slug: node.slug.current,
          })),
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'authors',
        engine: 'flexsearch',
        engineOptions: {
          tokenize: 'forward',
        },
        query: `
          {
            allSanityAuthor {
              nodes {
                name
                id
                slug {
                  current
                }
                profileImage {
                  alt
                  asset{
                    gatsbyImageData
                  }
                }
              }
            }
          }
        `,
        ref: 'id',
        index: ['name'],
        store: ['id', 'name', 'slug', 'profileImage'],
        normalizer: ({ data }) =>
          data.allSanityAuthor.nodes.map((node) => ({
            id: node.id,
            name: node.name,
            slug: node.slug.current,
            profileImage: node.profileImage,
          })),
      },
    },
  ],
};
