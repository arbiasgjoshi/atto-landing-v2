import React from 'react';
import {
  cardWrapper,
  smallTitleWrapper,
  textContainer,
  imageWrapper,
  horizontalLine,
} from './blog-card.module.scss';

const BlogCard = ({ image, smallTitle, title, description }) => {
  return (
    <div className={cardWrapper}>
      <div className={smallTitleWrapper}>
        <div className={horizontalLine}></div>
        <p>{smallTitle}</p>
      </div>
      <div className={imageWrapper}>
        <img src={image} alt="" />
      </div>
      <div className={textContainer}>
        <div className={horizontalLine}></div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
