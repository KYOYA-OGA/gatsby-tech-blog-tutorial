import React from 'react';
import { AuthorGridStyles } from '../../styles/author/AuthorGridStyles';
import AuthorItem from './AuthorItem';

function AuthorGrid({ authors }) {
  return (
    <AuthorGridStyles>
      {authors.map((author) => (
        <AuthorItem key={author.id} author={author} />
      ))}
    </AuthorGridStyles>
  );
}

export default AuthorGrid;
