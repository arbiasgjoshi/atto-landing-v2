import React from 'react';
import { Link } from '@reach/router';
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

export default BlogCard;
