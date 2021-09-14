const path = require('path');

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  if (page.path.match(/^\/app/)) {
    page.matchPath = '/*';
    createPage(page);
  }

  if (page.path.match(/^\/blog/)) {
    page.matchPath = '/blog/*';
    createPage(page);
  }
};
