exports.createPages = async ({ graphql, actions }) => {
  const singleBlogTemplate = require.resolve('./src/templates/single-blog.js');
  const BlogListTemplate = require.resolve('./src/templates/blog-list.js');
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
    }
  `);

  if (result.errors) throw result.errors;

  const blogs = result.data.allSanityBlog.nodes;

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
      component: BlogListTemplate,
      context: {
        limit: postPerPage,
        offset: index * postPerPage,
        numberOfPages: totalBlogListPages,
        currentPage: index + 1,
      },
    });
  });
};
