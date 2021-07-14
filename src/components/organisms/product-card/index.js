import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-react-intl';

import Icon from '@components/atoms/icon';
import Title from '@components/molecules/title';
import CheckCard from '@components/molecules/check-card';

import { StaticImage } from 'gatsby-plugin-image';

import arrowIcon from '@images/arrowForward@2x.png';
import { useIntl } from 'gatsby-plugin-react-intl';

import * as styles from './product-card.module.scss';

const ProductCard = ({
  productName,
  title,
  description,
  list,
  image,
  isSwapped,
  insideTitle = false,
  style = '',
  imagePadding = '',
  path = '/',
  imageWidth,
  imageHeight,
}) => {
  const Intl = useIntl();

  const imgStaticSwitch = (val) => {
    if (val === 'img-one-locale-en') {
      return (
        <StaticImage
          alt="Atto - time and location tracking app generating timesheets"
          src="../../../images/en/overview/Atto - time and location tracking app generating timesheets@2x.png"
          width="438"
          height="597"
          quality={96}
          formats={['auto', 'webp', 'avif']}
          placeholder="blurred"
        />
      );
    }
    if (val === 'img-one-locale-de') {
      return (
        <StaticImage
          alt="Atto - time and location tracking app generating timesheets"
          src="../../../images/de/overview/DE_Atto - time and location tracking app generating timesheet@2x.png"
          width="438"
          height="597"
          quality={96}
          formats={['auto', 'webp', 'avif']}
          placeholder="blurred"
        />
      );
    }
    if (val === 'img-one-locale-es') {
      return (
        <StaticImage
          alt="Atto - time and location tracking app generating timesheets"
          src="../../../images/es/overview/ES_Atto - time and location tracking app generating timesheets@2x.png"
          width="438"
          height="597"
          quality={96}
          formats={['auto', 'webp', 'avif']}
          placeholder="blurred"
        />
      );
    }
    if (val === 'img-one-locale-fr') {
      return (
        <StaticImage
          alt="Atto - time and location tracking app generating timesheets"
          src="../../../images/fr/overview/FR_Atto - time and location tracking app generating timesheets@2x.png"
          width="438"
          height="597"
          quality={96}
          formats={['auto', 'webp', 'avif']}
          placeholder="blurred"
        />
      );
    }

    if (val === 'img-two-locale-en') {
      return (
        <StaticImage
          src="../../../images/en/overview/Know where your team is in real-time@2x.png"
          alt="Know where your team is in real-time@2x.png"
          quality={96}
          formats={['auto', 'webp', 'avif']}
          width="531"
          height="650"
          placeholder="blurred"
        />
      );
    }
    if (val === 'img-two-locale-de') {
      return (
        <StaticImage
          src="../../../images/de/overview/DE_Know where your team is in real-time@2x.png"
          alt="DE_Know where your team is in real-time@2x.png"
          quality={96}
          formats={['auto', 'webp', 'avif']}
          width="531"
          height="650"
          placeholder="blurred"
        />
      );
    }
    if (val === 'img-two-locale-es') {
      return (
        <StaticImage
          src="../../../images/es/overview/ES_Know where your team is in real-time@2x.png"
          alt="ES_Know where your team is in real-time@2x.png"
          quality={96}
          formats={['auto', 'webp', 'avif']}
          width="531"
          height="650"
          placeholder="blurred"
        />
      );
    }
    if (val === 'img-two-locale-fr') {
      return (
        <StaticImage
          src="../../../images/fr/overview/FR_Know where your team is in real-time@2x.png"
          alt="FR_Know where your team is in real-time@2x.png"
          quality={96}
          formats={['auto', 'webp', 'avif']}
          width="531"
          height="650"
          placeholder="blurred"
        />
      );
    }

    if (val === 'img-three-locale-en') {
      return (
        <StaticImage
          src="../../../images/en/overview/Stay in the loop as work happens@2x.png"
          alt="Stay in the loop as work happens@2x.png"
          quality={96}
          formats={['auto', 'webp', 'avif']}
          width="471"
          height="597"
          placeholder="blurred"
        />
      );
    }
    if (val === 'img-three-locale-de') {
      return (
        <StaticImage
          src="../../../images/de/overview/DE_Stay in the loop as work happens@2x.png"
          alt="Stay in the loop as work happens@2x.png"
          quality={96}
          formats={['auto', 'webp', 'avif']}
          width="471"
          height="597"
          placeholder="blurred"
        />
      );
    }
    if (val === 'img-three-locale-es') {
      return (
        <StaticImage
          src="../../../images/es/overview/ES_Stay in the loop as work happens@2x.png"
          alt="Stay in the loop as work happens@2x.png"
          quality={96}
          formats={['auto', 'webp', 'avif']}
          width="471"
          height="597"
          placeholder="blurred"
        />
      );
    }
    if (val === 'img-three-locale-fr') {
      return (
        <StaticImage
          src="../../../images/fr/overview/FR_Stay in the loop as work happens@2x.png"
          alt="Stay in the loop as work happens@2x.png"
          quality={96}
          formats={['auto', 'webp', 'avif']}
          width="471"
          height="597"
          placeholder="blurred"
        />
      );
    }

    if (val === 'img-four-locale-en') {
      return (
        <StaticImage
          src="../../../images/en/overview/Relax with timesheets on time, every time@2x.png"
          alt="Relax with timesheets on time, every time"
          quality={96}
          formats={['auto', 'webp', 'avif']}
          width="408"
          height="597"
          placeholder="blurred"
        />
      );
    }
    if (val === 'img-four-locale-de') {
      return (
        <StaticImage
          src="../../../images/de/overview/DE_Relax with timesheets on time, every time@2x.png"
          alt="Relax with timesheets on time, every time"
          quality={96}
          formats={['auto', 'webp', 'avif']}
          width="408"
          height="597"
          placeholder="blurred"
        />
      );
    }
    if (val === 'img-four-locale-es') {
      return (
        <StaticImage
          src="../../../images/es/overview/ES_Relax with timesheets on time, every time@2x.png"
          alt="Relax with timesheets on time, every time"
          quality={96}
          formats={['auto', 'webp', 'avif']}
          width="408"
          height="597"
          placeholder="blurred"
        />
      );
    }
    if (val === 'img-four-locale-fr') {
      return (
        <StaticImage
          src="../../../images/fr/overview/FR_Relax with timesheets on time, every time@2x.png"
          alt="Relax with timesheets on time, every time"
          quality={96}
          formats={['auto', 'webp', 'avif']}
          width="408"
          height="597"
          placeholder="blurred"
        />
      );
    }
  };

  return (
    <div className={`${styles.container} ${isSwapped && styles.swapped} ${styles[style]}`}>
      <div className={styles.firstWrapper}>
        <div className={styles.textContainer}>
          {productName && <p className={styles.prdName}>{productName}</p>}
          <Title leftAlign title={title} description={description} />
        </div>
        {list && (
          <div className={styles.listContainer}>
            {list?.map((item) => (
              <CheckCard
                title={item.title}
                hasDescription
                insideTitle={insideTitle}
                description={item.description}
                style="small"
              />
            ))}
          </div>
        )}
        <div className={styles.learnMoreContainer}>
          <div className={styles.arrowIconContainer}>
            <img src={arrowIcon} alt={title} />
          </div>
          <span className={styles.leftArrow}>
            {style === 'homepage' && <Icon fSize={3} iconClass="long-arrow" />}
          </span>
          <h5>
            <Link to={path}>{Intl.formatMessage({ id: 'pages.miscellaneous.learnMore' })}</Link>
          </h5>
          <span className={styles.rightArrow}>
            {style === 'homepage' && <Icon fSize={3} iconClass="long-arrow" />}
          </span>
        </div>
      </div>
      <div className={styles.secondWrapper}>
        <div style={{ padding: imagePadding }} className={styles.imageContainer}>
          {/* <img
            width={imageWidth}
            height={imageHeight}
            className={styles.img}
            src={image}
            alt={title}
          /> */}

          {imgStaticSwitch(image)}
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  productName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  list: PropTypes.shape(),
  image: PropTypes.shape({}),
  path: PropTypes.string,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  isSwapped: PropTypes.bool,
  style: PropTypes.string,
  imagePadding: PropTypes.string,
};

export default ProductCard;
