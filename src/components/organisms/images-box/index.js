import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './images-box.module.scss';

import Shield from '../../../images/verifiedShield.svg';

import mobileImagePrimary from '../../../images/mobile-image-primary@2x.png';
import mobileImageTwo from '../../../images/mobile-image-one@2x.png';
import mobileImageOne from '../../../images/mobile-image-two@2x.png';

const ImagesBox = ({
  title = 'Trusted by thousands of construction businesses across 50+ countries',
  image1,
  image2,
  image3,
  image4,
  image5,
  styling = '',
}) => (
  <div className={`${styles.container} ${styles[styling]}`}>
    <div className={styles.primaryMobile}>
      <img src={mobileImagePrimary} alt="Primary Mobile Banner" height="217" />
    </div>
    <div className={styles.textContainer}>
      <div className={styles.iconWrapper}>
        <Shield />
      </div>
      <div className={styles.textWrapper}>
        <h4>{title}</h4>
      </div>
    </div>
    <div className={styles.topImage}>
      {image4 && <img src={image4} alt="Box Item One" />}
      {image5 && <img src={image5} alt="Box Item Two" />}
    </div>
    <div className={styles.imagesContainer}>
      <div className={styles.imageBox1}>{image1 && <img src={image1} alt="Box Item Three" />}</div>
      <div className={styles.imageBox2}>
        <img src={image2} alt="Box Item Four" width="350" height="445" />
        <img src={image3} alt="Box Item Five" width="314" height="533" />
      </div>
    </div>
    <div className={styles.mobileVersion}>
      <img src={mobileImageOne} alt="Box Item Four" width="165" />
      <img src={mobileImageTwo} alt="Box Item Five" width="198" />
    </div>
  </div>
);

ImagesBox.propTypes = {
  title: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  image4: PropTypes.string,
  image5: PropTypes.string,
  styling: PropTypes.string,
};

export default ImagesBox;
