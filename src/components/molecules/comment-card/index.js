import React from 'react';
import PropTypes from 'prop-types';
// import { StaticImage } from 'gatsby-plugin-image';

import StarsSVG from '@images/review-star.svg';

import {
  container,
  profilePicture,
  authorWrapper,
  content,
  starsWrapper,
  centeredContent,
  stars,
} from './comment-card.module.scss';

const CommentCard = ({ date, title, description, author, authorImage, sliderItem }) => (
  <div className={`${container} ${sliderItem ? centeredContent : null}`}>
    <div className={starsWrapper}>
      <div className={stars}>
        <StarsSVG />
        <StarsSVG />
        <StarsSVG />
        <StarsSVG />
        <StarsSVG />
      </div>
    </div>
    <div className={content}>
      <h6>{title}</h6>
      <span>{description}</span>
      <div className={authorWrapper}>
        <span>{author}</span>
      </div>
    </div>
  </div>
);

CommentCard.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  authorImage: PropTypes.string,
  sliderItem: PropTypes.bool,
};

export default CommentCard;
