import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './icon-card.module.scss';

const IconCard = ({
  icon,
  alt,
  bigImage = false,
  title,
  description,
  noImage = false,
  isRound = false,
  style = '',
  titleBreak,
  imagePadding = '',
  imageWidth,
  imageHeight,
}) => (
  <div className={`${styles.container} ${isRound && styles.round} ${styles[style]}`}>
    {!noImage && (
      <div
        style={{ padding: imagePadding }}
        className={`
         ${styles.iconWrapper} 
         ${imageWidth && styles.adjustedWidth}
         ${bigImage && styles.bigImageStyle}`}
      >
        <img width={imageWidth} height={imageHeight} alt={alt} src={icon} />
      </div>
    )}
    <div className={styles.textWrapper}>
      <h4 className={titleBreak && styles.hasBreakStyle}>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

IconCard.propTypes = {
  icon: PropTypes.string,
  alt: PropTypes.string,
  bigImage: PropTypes.bool,
  titleBreak: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  noImage: PropTypes.bool,
  isRound: PropTypes.bool,
  style: PropTypes.string,
  imagePadding: PropTypes.string,
  imageWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imageHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default IconCard;
