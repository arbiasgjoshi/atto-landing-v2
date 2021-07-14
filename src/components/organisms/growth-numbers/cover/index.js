import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import { useIntl } from 'gatsby-plugin-react-intl';

import { container, swap, leftBox, iconWrapper, imageWrapper } from './cover.module.scss';

const Cover = ({ isSwapped = false, titleValue }) => {
  const Intl = useIntl();

  return (
    <div className={`${container} ${isSwapped && swap}`}>
      <div className={leftBox}>
        <div className={iconWrapper}>
          <StaticImage
            quality={96}
            formats={['auto', 'webp', 'avif']}
            width={48}
            height={57}
            src="../../../../images/verifiedShield.svg"
          />
        </div>
        <h4>{titleValue}</h4>
      </div>
      <StaticImage
        className={imageWrapper}
        width={746}
        height={400}
        quality={96}
        formats={['auto', 'webp', 'avif']}
        placeholder="blurred"
        src="../../../../images/en/gps-location-tracking/Trusted by thousands of businesses across 50+ countries globally@2x.png"
      />
    </div>
  );
};

Cover.propTypes = {
  isSwapped: PropTypes.bool,
};

export default Cover;
