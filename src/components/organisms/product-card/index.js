import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-react-intl';

import Icon from '@components/atoms/icon';
import Title from '@components/molecules/title';
import CheckCard from '@components/molecules/check-card';

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
          <img
            width={imageWidth}
            height={imageHeight}
            className={styles.img}
            src={image}
            alt={title}
          />
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
