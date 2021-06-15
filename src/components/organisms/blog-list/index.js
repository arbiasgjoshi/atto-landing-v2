import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Divider from '@components/atoms/divider';
import List from './list';
import Pagination from './pagination';

import { blogListWrapper } from './blog-list.module.scss';

const BlogList = ({ list }) => {
  const [blogs, setBlogs] = useState(list);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(4);

  const indexOfLastPost = currentPage * blogsPerPage;
  const indexOfFirstPost = indexOfLastPost - blogsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className={blogListWrapper}>
      <List list={currentPosts} />
      <Divider className="style4" />
      <Pagination
        currentPage={currentPage}
        postsPerPage={blogsPerPage}
        totalPosts={blogs.length}
        paginate={paginate}
      />
    </div>
  );
};

BlogList.propTypes = {
  list: PropTypes.arrayOf({}),
};

export default BlogList;
