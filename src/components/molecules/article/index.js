import React from 'react';
import PropTypes from 'prop-types';

import {
  container,
  textWrapper,
  imageWrapper,
  secondDesc,
  secondBlock,
  swap,
} from './article.module.scss';

const Article = ({
  title,
  description,
  secondDescription,
  image,
  isSwapped = false,
  maxWidth,
  imagePadding = '',
  imageHeight,
  imageWidth,
}) => (
  <div className={`${container} ${isSwapped && swap}`}>
    <div style={maxWidth && { maxWidth }} className={textWrapper}>
      <h3>{title}</h3>
      <p>{description}</p>
      {secondDescription && <p className={secondDesc}>{secondDescription}</p>}
    </div>
    <div className={secondBlock}>
      <div style={{ padding: imagePadding }} className={imageWrapper}>
        <img width={imageWidth} alt={title} imageHeight={imageHeight} src={image} />
      </div>
    </div>
  </div>
);

Article.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  isSwapped: PropTypes.bool,
  maxWidth: PropTypes.number,
  imagePadding: PropTypes.string,
  imageHeight: PropTypes.number,
  imageWidth: PropTypes.number,
};

export default Article;
