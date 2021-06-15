import React from 'react';
import PropTypes from 'prop-types';

import { container } from './blog-title.module.scss';

const BlogTitle = ({ smallTitle, title, author }) => (
  <div className={container}>
    <p>{smallTitle}</p>
    <h2>{title}</h2>
    <p>{author}</p>
  </div>
);

BlogTitle.propTypes = {
  smallTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
};

export default BlogTitle;
