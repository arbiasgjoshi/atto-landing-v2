import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { container, topBox, authorBox } from './review-box.module.scss';

const ReviewCard = ({ title, author, job, rating }) => (
  <div className={container}>
    <div className={topBox}>
      <h4>{title}</h4>
      <StaticImage
        src="../../../images/stars.png"
        placeholder="blurred"
        quality={96}
        formats={['auto', 'webp', 'avif']}
      />
      {rating && <p>{rating}</p>}
    </div>
    <div className={authorBox}>
      {author && <h5>{author}</h5>}
      {job && <p>{job}</p>}
    </div>
  </div>
);

export default ReviewCard;
