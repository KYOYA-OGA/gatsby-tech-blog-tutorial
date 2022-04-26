import React from 'react';
import { useFlexSearch } from 'react-use-flexsearch';
import ParagraphText from '../typography/ParagraphText';
import {
  AuthorSearchResultItem,
  BlogSearchResultItem,
  CategorySearchResultItem,
} from './SearchResultItem';

function SearchResult({
  searchQuery,
  blogsIndexStore,
  categoriesIndexStore,
  authorsIndexStore,
}) {
  const blogsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(blogsIndexStore.index),
    blogsIndexStore.store
  );
  const categoriesResult = useFlexSearch(
    searchQuery,
    JSON.stringify(categoriesIndexStore.index),
    categoriesIndexStore.store
  );
  const authorsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(authorsIndexStore.index),
    authorsIndexStore.store
  );

  if (
    !blogsResult.length &&
    !categoriesResult.length &&
    !authorsResult.length
  ) {
    return <ParagraphText>No Result Found</ParagraphText>;
  }
  return (
    <>
      {blogsResult.length > 0 && (
        <>
          <ParagraphText>Blogs</ParagraphText>
          {blogsResult.map((blog) => (
            <BlogSearchResultItem key={blog.id} blog={blog} />
          ))}
        </>
      )}
      {categoriesResult.length > 0 && (
        <>
          <ParagraphText>Categories</ParagraphText>
          {categoriesResult.map((category) => (
            <CategorySearchResultItem key={category.id} category={category} />
          ))}
        </>
      )}
      {authorsResult.length > 0 && (
        <>
          <ParagraphText>Authors</ParagraphText>
          {authorsResult.map((author) => (
            <AuthorSearchResultItem key={author.id} author={author} />
          ))}
        </>
      )}
    </>
  );
}

export default SearchResult;
