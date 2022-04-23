import React from 'react';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';
import { Title } from '../typography/Title';
import Button from '../buttons/Button';
import { buttonTypes } from '../../constants/buttonTypes';
import MyPortableText from '../typography/MyPortableText';

function CategoryItem({ title, description, slug }) {
  return (
    <CategoryItemStyles>
      <Title className="title">{title}</Title>
      <div className="text">
        <MyPortableText value={description} />
      </div>
      <Button to={`/categories/${slug.current}`} variant={buttonTypes.outline}>
        Explore category
      </Button>
    </CategoryItemStyles>
  );
}

export default CategoryItem;
