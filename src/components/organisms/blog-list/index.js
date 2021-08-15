import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Divider from '@components/atoms/divider';
import List from './list';
import Pagination from './pagination';

import { blogListWrapper } from './blog-list.module.scss';

const BlogList = ({ list }) => {
  return (
    <div className={blogListWrapper}>
      <List list={list} />
      <Divider className="style4" />
    </div>
  );
};

BlogList.propTypes = {
  list: PropTypes.arrayOf({}),
};

export default BlogList;
