import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, Link } from 'gatsby-plugin-react-intl';

import Button from '@components/atoms/button';

import * as styles from './learn-more-card.module.scss';

const LearnMoreCard = ({
  title,
  description,
  btnText,
  icon,
  imageWidth,
  imageHeight,
  path = '/',
  styling = '',
}) => {
  const Intl = useIntl();

  return (
    <div className={`${styles.container} ${styles[styling]}`}>
      <div className={styles.iconWrapper}>
        <img alt={`title${imageWidth}`} width={imageWidth} height={imageHeight} src={icon} />
      </div>
      <div className={styles.textWrapper}>
        <h5 className={styles.cardTitle}>{title}</h5>
        <p className={styles.paragraphText}>{description}</p>
      </div>
      <Link to={path}>
        <Button
          btnStyle="wide"
          btnText={btnText || Intl.formatMessage({ id: 'pages.miscellaneous.learnMore' })}
        />
      </Link>
    </div>
  );
};

LearnMoreCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  btnText: PropTypes.string,
  icon: PropTypes.string,
  path: PropTypes.string,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
};

export default LearnMoreCard;
