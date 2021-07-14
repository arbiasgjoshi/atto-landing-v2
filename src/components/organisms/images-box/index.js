import React from 'react';
import PropTypes from 'prop-types';
import Shield from '../../../images/verifiedShield.svg';

import { StaticImage } from 'gatsby-plugin-image';

import mobileImagePrimary from '../../../images/electric/Electricians timesheets@2x.png';
import mobileImageTwo from '../../../images/electric/Electricians timesheets@2x.png';
import mobileImageOne from '../../../images/electric/Electricians location tracking@2x.png';
import * as styles from './images-box.module.scss';

const ImagesBox = ({
  title = 'Trusted by thousands of construction businesses across 50+ countries',
  imageType,
  styling = '',
}) => {
  const staticImageSwitch = (val) => {
    if (val === 'construction-boxes') {
      return (
        <>
          <div className={styles.topImage}>
            {/* Image 4 */}
            <StaticImage
              src="../../../images/construction/Construction time tracking@2x.png"
              alt="Construction time tracking"
              width={736}
              height={463}
              placeholder="none"
              quality={96}
            />
          </div>
          <div className={styles.imagesContainer}>
            <div className={styles.imageBox1}>
              {/* boxImage1 */}
              <StaticImage
                src="../../../images/construction/Construction Daily Timeline@2x.png"
                alt="Construction Daily Timeline"
                width={412}
                height={842}
                placeholder="none"
                quality={96}
              />
            </div>
            <div className={styles.imageBox2}>
              {/* boxImage2 */}
              <StaticImage
                src="../../../images/construction/Construction Location@2x.png"
                alt="Construction Location"
                width={350}
                height={749}
                placeholder="none"
                quality={96}
              />
              {/* boxImage3 */}
              <StaticImage
                src="../../../images/construction/Construction timesheets@2x.png"
                alt="Construction timesheets"
                width={378}
                placeholder="none"
                quality={100}
              />
            </div>
          </div>
        </>
      );
    }
    if (val === 'cleaning-boxes') {
      return (
        <>
          <div className={styles.topImage}>
            {/* Image 4 */}
            <StaticImage
              src="../../../images/cleaning/Cleaners time tracking@2x.png"
              alt="Cleaners time tracking"
              width={736}
              height={463}
              placeholder="none"
              quality={96}
            />
          </div>
          <div className={styles.imagesContainer}>
            <div className={styles.imageBox1}>
              {/* boxImage1 */}
              <StaticImage
                src="../../../images/cleaning/Cleaners daily timeline@2x.png"
                alt="Cleaners Daily Timeline"
                width={412}
                height={842}
                placeholder="none"
                quality={96}
              />
            </div>
            <div className={styles.imageBox2}>
              {/* boxImage2 */}
              <StaticImage
                src="../../../images/cleaning/Cleaners location tracking@2x.png"
                alt="Cleaners Location Tracking"
                width={350}
                height={749}
                placeholder="none"
                quality={96}
              />
              {/* boxImage3 */}
              <StaticImage
                src="../../../images/cleaning/Cleaners timesheets@2x.png"
                alt="Cleaners timesheets"
                width={378}
                placeholder="none"
                quality={96}
              />
            </div>
          </div>
        </>
      );
    }

    if (val === 'landscape-boxes') {
      return (
        <>
          <div className={styles.topImage}>
            {/* Image 4 */}
            <StaticImage
              src="../../../images/landscaping/The grass is always greener with Atto@2x.png"
              alt="The grass is always greener with Atto"
              width={736}
              height={463}
              placeholder="none"
              quality={96}
            />
          </div>
          <div className={styles.imagesContainer}>
            <div className={styles.imageBox1}>
              {/* boxImage1 */}
              <StaticImage
                src="../../../images/landscaping/Landscaping daily timeline@2x.png"
                alt="Landscaping Daily Timeline"
                width={412}
                height={842}
                placeholder="none"
                quality={96}
              />
            </div>
            <div className={styles.imageBox2}>
              {/* boxImage2 */}
              <StaticImage
                src="../../../images/landscaping/Landscaping location tracking@2x.png"
                alt="Landscaping Location Tracking"
                width={350}
                height={749}
                placeholder="none"
                quality={96}
              />
              {/* boxImage3 */}
              <StaticImage
                src="../../../images/landscaping/Landscaping timesheets@2x.png"
                alt="Landscaping timesheets"
                width={378}
                placeholder="none"
                quality={96}
              />
            </div>
          </div>
        </>
      );
    }

    if (val === 'electrical-boxes') {
      return (
        <>
          <div className={styles.topImage}>
            {/* Image 4 */}
            <StaticImage
              src="../../../images/electric/Electricians time tracking@2x.png"
              alt="Electricians time tracking"
              width={736}
              height={463}
              placeholder="none"
              quality={96}
            />
          </div>
          <div className={styles.imagesContainer}>
            <div className={styles.imageBox1}>
              {/* boxImage1 */}
              <StaticImage
                src="../../../images/electric/Electricians daily timeline@2x.png"
                alt="Electricians daily timeline"
                width={412}
                height={842}
                placeholder="none"
                quality={96}
              />
            </div>
            <div className={styles.imageBox2}>
              {/* boxImage2 */}
              <StaticImage
                src="../../../images/electric/Electricians location tracking@2x.png"
                alt="Electricians location tracking"
                width={350}
                height={749}
                placeholder="none"
                quality={96}
              />
              {/* boxImage3 */}
              <StaticImage
                src="../../../images/electric/Electricians timesheets@2x.png"
                alt="Electricians timesheets"
                width={378}
                placeholder="none"
                quality={96}
              />
            </div>
          </div>
        </>
      );
    }

    if (val === 'healthcare-boxes') {
      return (
        <>
          <div className={styles.topImage}>
            {/* Image 4 */}
            <StaticImage
              src="../../../images/healthcare/Healthcare time tracking@2x.png"
              alt="Healthcare time tracking"
              width={736}
              height={463}
              placeholder="none"
              quality={96}
            />
          </div>
          <div className={styles.imagesContainer}>
            <div className={styles.imageBox1}>
              {/* boxImage1 */}
              <StaticImage
                src="../../../images/healthcare/Healthcare daily timeline@2x.png"
                alt="Healthcare daily timeline"
                width={412}
                height={842}
                placeholder="none"
                quality={96}
              />
            </div>
            <div className={styles.imageBox2}>
              {/* boxImage2 */}
              <StaticImage
                src="../../../images/healthcare/Healthcare location tracking@2x.png"
                alt="Healthcare location tracking"
                width={350}
                height={749}
                placeholder="none"
                quality={96}
              />
              {/* boxImage3 */}
              <StaticImage
                src="../../../images/healthcare/Healthcare timesheets@2x.png"
                alt="Healthcare timesheets"
                width={378}
                placeholder="none"
                quality={96}
              />
            </div>
          </div>
        </>
      );
    }

    if (val === 'painting-boxes') {
      return (
        <>
          <div className={styles.topImage}>
            {/* Image 4 */}
            <StaticImage
              src="../../../images/electric/Electricians time tracking@2x.png"
              alt="Electricians time tracking"
              width={736}
              height={463}
              placeholder="none"
              quality={96}
            />
          </div>
          <div className={styles.imagesContainer}>
            <div className={styles.imageBox1}>
              {/* boxImage1 */}
              <StaticImage
                src="../../../images/painting/Painting daily timeline@2x.png"
                alt="Painting daily timeline"
                width={412}
                height={842}
                placeholder="none"
                quality={96}
              />
            </div>
            <div className={styles.imageBox2}>
              {/* boxImage2 */}
              <StaticImage
                src="../../../images/painting/Painting location tracking@2x.png"
                alt="Painting location tracking"
                // width={350}
                height={749}
                placeholder="none"
                quality={96}
              />
              {/* boxImage3 */}
              <StaticImage
                src="../../../images/painting/Painting timesheets@2x.png"
                alt="Painting timesheets"
                width={366}
                height={856}
                placeholder="none"
                quality={96}
              />
            </div>
          </div>
        </>
      );
    }

    if (val === 'plumbing-boxes') {
      return (
        <>
          <div className={styles.topImage}>
            {/* Image 4 */}
            <StaticImage
              src="../../../images/electric/Electricians time tracking@2x.png"
              alt="Electricians time tracking"
              width={736}
              height={463}
              placeholder="none"
              quality={96}
            />
          </div>
          <div className={styles.imagesContainer}>
            <div className={styles.imageBox1}>
              {/* boxImage1 */}
              <StaticImage
                src="../../../images/plumbing/Plumbers daily timeline@2x.png"
                alt="Plumbers daily timeline"
                width={412}
                height={842}
                placeholder="none"
                quality={96}
              />
            </div>
            <div className={styles.imageBox2}>
              {/* boxImage2 */}
              <StaticImage
                src="../../../images/plumbing/Plumbers location tracking@2x.png"
                alt="Plumbers location tracking"
                width={350}
                height={749}
                placeholder="none"
                quality={96}
              />
              {/* boxImage3 */}
              <StaticImage
                src="../../../images/plumbing/Plumbers timesheets@2x.png"
                alt="Plumbers timesheets"
                width={378}
                placeholder="none"
                quality={96}
              />
            </div>
          </div>
        </>
      );
    }

    if (val === 'roofing-boxes') {
      return (
        <>
          <div className={styles.topImage}>
            {/* Image 4 */}
            <StaticImage
              src="../../../images/electric/Electricians time tracking@2x.png"
              alt="Electricians time tracking"
              width={736}
              height={463}
              placeholder="none"
              quality={96}
            />
          </div>
          <div className={styles.imagesContainer}>
            <div className={styles.imageBox1}>
              {/* boxImage1 */}
              <StaticImage
                src="../../../images/roofing/Roofers daily timeline@2x.png"
                alt="Roofers daily timeline"
                width={412}
                height={842}
                placeholder="none"
                quality={96}
              />
            </div>
            <div className={styles.imageBox2}>
              {/* boxImage2 */}
              <StaticImage
                src="../../../images/roofing/Roofers location tracking@2x.png"
                alt="Roofers location tracking"
                width={350}
                height={749}
                placeholder="none"
                quality={96}
              />
              {/* boxImage3 */}
              <StaticImage
                src="../../../images/roofing/Roofers timesheets@2x.png"
                alt="Roofers timesheets"
                width={378}
                placeholder="none"
                quality={96}
              />
            </div>
          </div>
        </>
      );
    }

    if (val === 'timeclock-boxes') {
      return (
        <>
          <div className={styles.topImage}>
            {/* Image 4 */}
            <StaticImage
              src="../../../images/time-clock/Mobile time tracking app@2x.png"
              alt="Mobile time tracking app"
              width={736}
              height={463}
              placeholder="none"
              quality={96}
            />
            <StaticImage
              src="../../../images/time-clock/Location tracking@2x.png"
              alt="Location tracking"
              width={736}
              height={270}
              placeholder="none"
              quality={96}
            />
          </div>
          <div className={styles.imagesContainer}>
            <div className={styles.imageBox1}>
              {/* boxImage1 */}
              <StaticImage
                src="../../../images/construction/Construction Daily Timeline@2x.png"
                alt="Construction Daily Timeline"
                width={412}
                height={842}
                placeholder="none"
                quality={96}
              />
            </div>
            <div className={styles.imageBox2}>
              {/* boxImage2 */}
              <StaticImage
                src="../../../images/time-clock/Real time location tracking@2x.png"
                alt="Real time location tracking"
                width={350}
                height={445}
                placeholder="none"
                quality={96}
              />
              {/* boxImage3 */}
              <StaticImage
                src="../../../images/time-clock/Team activity updates@2x.png"
                alt="Team activity updates"
                width={378}
                placeholder="none"
                quality={100}
              />
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className={`${styles.container} ${styles[styling]}`}>
      {/* <div className={styles.primaryMobile}>
        <img src={mobileImagePrimary} alt="Primary Mobile Banner" height="217" />
      </div> */}
      <div className={styles.textContainer}>
        <div className={styles.iconWrapper}>
          <Shield />
        </div>
        <div className={styles.textWrapper}>
          <h4>{title}</h4>
        </div>
      </div>
      {staticImageSwitch(imageType)}
      {/* <div className={styles.mobileVersion}>
        <img src={mobileImageOne} alt="Box Item Four" width="165" />
        <img src={mobileImageTwo} alt="Box Item Five" width="198" />
      </div> */}
    </div>
  );
};

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
