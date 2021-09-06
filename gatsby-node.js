const path = require('path');

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  // console.log('Page -', page.path);
  if (page.path.match(/^\/app/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = '/*';
    // Update the page.
    createPage(page);
  }

  // if (page.path.match(/^\/blog/)) {
  //   createPage({
  //     path: '/blog',
  //     matchPath: '/blog/*',
  //     component: path.resolve(`./src/components/templates/articles/index.js`),
  //   });
  // }
};
