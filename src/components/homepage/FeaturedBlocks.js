import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles';
import { SectionTitle } from '../typography/Title';
import ParagraphText from '../typography/ParagraphText';
import BlogGrid from '../blog/BlogGrid';

function FeaturedBlocks() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          blogs {
            title
            id
            publishedAt
            categories {
              title
              slug {
                current
              }
            }
            coverImage {
              alt
              asset {
                gatsbyImageData
              }
            }
            slug {
              current
            }
          }
        }
      }
    }
  `);
  const featuredBlogs = data.allSanityFeatured.nodes[0].blogs;
  return (
    <FeaturedBlogsStyles>
      <SectionTitle tag="h1">Featured blogs</SectionTitle>
      <ParagraphText className="featuredBlogs__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        molestias quaerat impedit nostrum asperiores temporibus repudiandae
        rerum similique quod velit?
      </ParagraphText>
      <BlogGrid blogs={featuredBlogs} />
    </FeaturedBlogsStyles>
  );
}

export default FeaturedBlocks;
