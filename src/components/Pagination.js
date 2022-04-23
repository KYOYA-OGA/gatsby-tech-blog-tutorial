import clsx from 'clsx';
import { Link } from 'gatsby';
import React from 'react';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import { PaginationStyles } from '../styles/PaginationStyles';
import ParagraphText from './typography/ParagraphText';

function Pagination({ baseUrl, numberOfPages, currentPage }) {
  const prevPage = currentPage - 1 <= 1 ? '' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();
  return (
    <div className="container">
      <PaginationStyles>
        <div className="icons">
          <Link
            to={`${baseUrl}/${prevPage}`}
            className={clsx(currentPage <= 1 && 'disabled')}
          >
            <FiChevronsLeft /> Prev
          </Link>
          <Link
            to={`${baseUrl}/${nextPage}`}
            className={clsx(currentPage >= numberOfPages && 'disabled')}
          >
            Next <FiChevronsRight />
          </Link>
        </div>
        <ParagraphText>
          page {currentPage} of {numberOfPages}
        </ParagraphText>
      </PaginationStyles>
    </div>
  );
}

export default Pagination;
