const path = require('path');

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
            categories
          }
        }
      }
    }
  `);

  result.data.allMdx.nodes.forEach(({ frontmatter: { slug, categories } }) => {
    createPage({
      path: `/${categories.join('/')}/${slug}`,
      component: path.resolve(`src/templates/post-template.js`),
      context: {
        slug,
      },
    });
  });
};
