import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { AuthorItemStyles } from '../../styles/author/AuthorItemStyles';
import { Title } from '../typography/Title';

function AuthorItem({ author }) {
  const { name, profileImage, slug } = author;
  return (
    <AuthorItemStyles to={slug.current} className="author">
      <GatsbyImage
        image={profileImage.asset.gatsbyImageData}
        alt={profileImage.alt}
        className="profileImage"
      />
      <Title>{name}</Title>
    </AuthorItemStyles>
  );
}

export default AuthorItem;
