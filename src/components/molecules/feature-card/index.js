import React from 'react';
import PropTypes from 'prop-types';

import {
  container,
  cardHeader,
  workCardContainer,
  allFeaturesStyle,
  logoWrapper,
  textContainer,
  leftAligned,
  titlePush,
} from './feature-card.module.scss';

const FeatureCard = ({
  logo,
  title,
  description,
  isLeftAligned,
  higherMargin = false,
  imagePadding,
  isWorkCard = false,
  style = '',
}) => {
  const render = () => {
    switch (style) {
      case 'all-features':
        return (
          <div className={`${container} ${allFeaturesStyle}`}>
            <div className={cardHeader}>
              <div style={imagePadding && { padding: imagePadding }} className={logoWrapper}>
                {logo}
              </div>
              <h5>{title}</h5>
            </div>
            <div className={textContainer}>
              <p>{description}</p>
            </div>
          </div>
        );
      default:
        return (
          <div
            className={`${isWorkCard ? workCardContainer : container} ${
              isLeftAligned ? leftAligned : ''
            }`}
          >
            <div style={imagePadding && { padding: imagePadding }} className={logoWrapper}>
              {logo}
            </div>
            <div className={textContainer}>
              <h5 className={higherMargin && titlePush}>{title}</h5>
              <p>{description}</p>
            </div>
          </div>
        );
    }
  };

  return render();
};

FeatureCard.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  isWorkCard: PropTypes.bool,
  higherMargin: PropTypes.bool,
  isLeftAligned: PropTypes.bool,
  imagePadding: PropTypes.string,
};

export default FeatureCard;
