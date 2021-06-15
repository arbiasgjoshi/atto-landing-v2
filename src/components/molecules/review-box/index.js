import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { container, topBox, authorBox } from './review-box.module.scss';

const ReviewCard = ({ title, author, job, rating }) => (
  <div className={container}>
    <div className={topBox}>
      <h4>{title}</h4>
      <StaticImage src="../../../images/stars.png" placeholder="none" quality={95} />
      <p>{rating}</p>
    </div>
    <div className={authorBox}>
      <h5>{author}</h5>
      <p>{job}</p>
    </div>
  </div>
);

export default ReviewCard;
