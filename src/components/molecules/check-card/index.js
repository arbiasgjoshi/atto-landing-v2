import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@components/atoms/icon';

import * as styles from './check-card.module.scss';

const CheckCard = ({ title, hasDescription, description, grey, style = '', hasCloseIcon }) => (
  <div
    className={`
      ${styles.card}
      ${styles[style]} 
      ${hasDescription && styles.hasDescr}`}
  >
    <div
      className={`
      ${styles.iconWrapper} 
      ${grey ? styles.greyStyle : null} `}
    >
      <Icon iconClass={!hasCloseIcon ? 'tick' : 'close'} fSize={hasCloseIcon ? 1 : null} />
    </div>
    <div className={styles.textWrapper}>
      <h5 className={`${styles.cardTitle}`}>{title}</h5>
      {hasDescription && <p className={styles.paragraph}>{description}</p>}
    </div>
  </div>
);

CheckCard.propTypes = {
  title: PropTypes.string,
  hasDescription: PropTypes.bool,
  isTickCard: PropTypes.bool,
  hasCloseIcon: PropTypes.bool,
  grey: PropTypes.bool,
  description: PropTypes.string,
  style: PropTypes.string,
};

export default CheckCard;
