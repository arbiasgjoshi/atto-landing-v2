import React from 'react';
import PropTypes from 'prop-types';

import { container, imageContainer, textContainer } from './step-card.module.scss';

const Step = ({ image, title, description, imageWidth, imageHeight, imagePadding }) => (
  <div className={container}>
    <div style={{ padding: imagePadding }} className={imageContainer}>
      <img width={imageWidth} height={imageHeight} src={image} alt="" />
    </div>
    <div className={textContainer}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

export default Step;

Step.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  imagePadding: PropTypes.string,
};
