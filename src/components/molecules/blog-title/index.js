import React from 'react';
import PropTypes from 'prop-types';

import { container } from './blog-title.module.scss';

const BlogTitle = ({ smallTitle, title, author }) => (
  <div className={container}>
    {smallTitle && <p>{smallTitle}</p>}
    <h1>{title}</h1>
    {author && <p>{author}</p>}
  </div>
);

BlogTitle.propTypes = {
  smallTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
};

export default BlogTitle;
