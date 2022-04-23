import React from 'react';
import { CategoryGridStyles } from '../../styles/category/CategoryGridStyles';
import CategoryItem from './CategoryItem';

function CategoryGrid({ categories }) {
  return (
    <CategoryGridStyles>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          title={category.title}
          description={category._rawDescription}
          slug={category.slug}
        />
      ))}
    </CategoryGridStyles>
  );
}

export default CategoryGrid;
