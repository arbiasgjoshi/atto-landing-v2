import React from 'react';

import FeatureCard from '@components/molecules/feature-card';

import * as styles from './any-device.module.scss';

const AnyDevice = ({ title, description, image, list, styling }) => (
  <div className={`${styles.container} ${styles[styling]}`}>
    <div className={styles.firstRow}>
      <div className={styles.textContainer}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
      </div>
    </div>
    <div className={styles.secondRow}>
      {list.map(({ title, description, logo }) => (
        <FeatureCard logo={logo} isWorkCard higherMargin title={title} description={description} />
      ))}
    </div>
  </div>
);

export default AnyDevice;
