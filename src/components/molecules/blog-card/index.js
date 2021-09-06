import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import {
  cardWrapper,
  smallTitleWrapper,
  textContainer,
  imageWrapper,
  horizontalLine,
} from './blog-card.module.scss';

const BlogCard = ({ image, slug, smallTitle, date, title, description }) => (
  <Link to={`/blog/${slug}`} className={cardWrapper}>
    <div className={smallTitleWrapper}>
      <div className={horizontalLine} />
      <p>{`${date} · ${smallTitle}`}</p>
    </div>
    <div className={imageWrapper}>
      <img src={image} alt={title} height={300} />
    </div>
    <div className={textContainer}>
      <div className={horizontalLine} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </Link>
);

BlogCard.propTypes = {
  image: PropTypes.string,
  slug: PropTypes.string,
  smallTitle: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default BlogCard;
