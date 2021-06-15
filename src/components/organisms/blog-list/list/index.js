import React from 'react';
import PropTypes from 'prop-types';

import BlogCard from '@components/molecules/blog-card';

import { listWrapper } from './list.module.scss';

const List = ({ list }) => (
  <div className={listWrapper}>
    {list.map(({ title, description, smallTitle, image }) => (
      <BlogCard title={title} description={description} smallTitle={smallTitle} image={image} />
    ))}
  </div>
);

List.propTypes = {
  list: PropTypes.arrayOf({}),
};

export default List;
