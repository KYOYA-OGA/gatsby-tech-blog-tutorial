import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';
import React from 'react';
import { BlogItemStyles } from '../../styles/blog/BlogItemStyles';
import ParagraphText from '../typography/ParagraphText';
import { Title } from '../typography/Title';

function BlogItem({ title, path, image, publishedAt, categories }) {
  return (
    <BlogItemStyles>
      <Link to={`/blogs/${path}`}>
        <GatsbyImage
          image={image.imageData}
          alt={image.altText}
          className="img"
        />
      </Link>
      <Link to={`/blogs/${path}`}>
        <Title>{title}</Title>
      </Link>
      {publishedAt && (
        <ParagraphText className="publishedAt">
          {format(new Date(publishedAt), 'p, MMMM dd, yyyy')}
        </ParagraphText>
      )}
      <ParagraphText className="categoriesText">
        {categories &&
          categories.map((category, index) => (
            <span key={category.slug.current}>
              <Link to={`/categories/${category.slug.current}`}>
                {category.title}
              </Link>
              {index < categories.length - 1 ? ', ' : ''}
            </span>
          ))}
      </ParagraphText>
    </BlogItemStyles>
  );
}

export default BlogItem;
