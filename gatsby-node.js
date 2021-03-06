exports.createPages = async ({ graphql, actions }) => {
  const singleBlogTemplate = require.resolve('./src/templates/single-blog.js');
  const blogListTemplate = require.resolve('./src/templates/blog-list.js');
  const singleCategoryTemplate = require.resolve(
    './src/templates/single-category.js'
  );
  const categoryListTemplate = require.resolve(
    './src/templates/category-list.js'
  );
  const authorListTemplate = require.resolve('./src/templates/author-list.js');
  const singleAuthorTemplate = require.resolve(
    './src/templates/single-author.js'
  );
  const postPerPage = parseInt(process.env.GATSBY_POST_PER_PAGE) || 5;
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityBlog {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityCategory {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityAuthor {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const blogs = result.data.allSanityBlog.nodes;
  const categories = result.data.allSanityCategory.nodes;
  const authors = result.data.allSanityAuthor.nodes;

  // single blog pages
  blogs.forEach((blog) => {
    createPage({
      path: `/blogs/${blog.slug.current}`,
      component: singleBlogTemplate,
      context: { id: blog.id },
    });
  });

  // blog list pages
  const totalBlogListPages = Math.ceil(blogs.length / postPerPage);
  Array.from({ length: totalBlogListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/blogs` : `/blogs/${index + 1}`,
      component: blogListTemplate,
      context: {
        limit: postPerPage,
        offset: index * postPerPage,
        numberOfPages: totalBlogListPages,
        currentPage: index + 1,
      },
    });
  });

  // single category pages
  categories.forEach((category) => {
    createPage({
      path: `/categories/${category.slug.current}`,
      component: singleCategoryTemplate,
      context: { id: category.id },
    });
  });

  // category list
  const totalCategoryListPages = Math.ceil(categories.length / postPerPage);
  Array.from({ length: totalCategoryListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/categories` : `/categories/${index + 1}`,
      component: categoryListTemplate,
      context: {
        limit: postPerPage,
        offset: index * postPerPage,
        numberOfPages: totalCategoryListPages,
        currentPage: index + 1,
      },
    });
  });

  // author pages
  authors.forEach((author) => {
    createPage({
      path: `/authors/${author.slug.current}`,
      component: singleAuthorTemplate,
      context: { id: author.id },
    });
  });

  // author list
  const totalAuthorListPages = Math.ceil(authors.length / postPerPage);
  Array.from({ length: totalAuthorListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/authors` : `/authors/${index + 1}`,
      component: authorListTemplate,
      context: {
        limit: postPerPage,
        offset: index * postPerPage,
        numberOfPages: totalAuthorListPages,
        currentPage: index + 1,
      },
    });
  });
};
