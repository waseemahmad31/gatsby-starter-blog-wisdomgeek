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

  let uniqueCategories = new Set();
  result.data.allMdx.nodes.forEach(({ frontmatter: { slug, categories } }) => {
    createPage({
      path: `/${categories.join('/')}/${slug}`,
      component: path.resolve(`src/templates/post-template.js`),
      context: {
        slug,
      },
    });
    let categorySlug = '/';
    categories.forEach((category) => {
      categorySlug += category + '/';
      uniqueCategories.add(`${categorySlug}`);
    });
  });

  uniqueCategories.forEach((categorySlug) => {
    let categories = categorySlug.split('/');
    let category = categories[categories.length - 2];

    createPage({
      path: categorySlug,
      component: path.resolve(`src/templates/category-template.js`),
      context: {
        category,
      },
    });
  });
};
