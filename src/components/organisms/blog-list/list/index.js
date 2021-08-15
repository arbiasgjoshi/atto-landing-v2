import React from 'react';
import PropTypes from 'prop-types';

import BlogCard from '@components/molecules/blog-card';

import { listWrapper } from './list.module.scss';

const List = ({ list }) => (
  <div className={listWrapper}>
    {list.map(({ title, description, slug, date, tag, cover_image }, idx) => (
      <BlogCard
        title={title}
        description={description}
        key={idx}
        date={date}
        slug={slug}
        smallTitle={tag}
        image={cover_image}
      />
    ))}
  </div>
);

List.propTypes = {
  list: PropTypes.arrayOf({}),
};

export default List;
