import React from 'react';
import PropTypes from 'prop-types';

import FeatureCard from '@components/molecules/feature-card';

import * as styles from './features-list.module.scss';

const FeaturesList = ({ list, isLeftAligned, style = '' }) => (
  <div className={styles.container}>
    <div className={`${styles.featuresContainer} ${styles[style]}`}>
      {list?.map(({ title, description, alt, logo, comingSoon = false }, index) => (
        <>
          <FeatureCard
            isLeftAligned={isLeftAligned}
            key={index}
            title={title}
            logo={logo}
            description={description}
            alt={alt}
            comingSoon={comingSoon}
          />
        </>
      ))}
    </div>
  </div>
);

FeaturesList.propTypes = {
  list: PropTypes.shape(),
  isLeftAligned: PropTypes.bool,
  style: PropTypes.string,
};

export default FeaturesList;
