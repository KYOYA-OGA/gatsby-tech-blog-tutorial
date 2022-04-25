import { graphql } from 'gatsby';
import React from 'react';
import SEO from '../components/SEO';
import PageSpace from '../components/PageSpace';
import PageHeader from '../components/PageHeader';
import CategoryGrid from '../components/category/CategoryGrid';
import Pagination from '../components/Pagination';

export const query = graphql`
  query CategoryListQuery($limit: Int!, $offset: Int!) {
    allSanityCategory(
      sort: { fields: _createdAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        slug {
          current
        }
        _rawDescription
      }
    }
  }
`;

function CategoryList({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const categories = data.allSanityCategory.nodes;

  return (
    <>
      <SEO title="Categories">CategoryList</SEO>
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
            title="All Categories"
            description="I'm baby irony tumeric sartorial, listicle vaporware portland glossier narwhal pinterest farm-to-table tumblr actually gastropub. Venmo bespoke raclette..."
          />
          <CategoryGrid categories={categories} />

          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseUrl="/categories"
            />
          )}
        </div>
      </PageSpace>
    </>
  );
}

export default CategoryList;
