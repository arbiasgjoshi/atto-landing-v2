import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@components/atoms/icon';

import * as styles from './check-card.module.scss';

const CheckCard = ({
  title,
  hasDescription,
  description,
  grey,
  insideTitle = false,
  style = '',
  hasCloseIcon,
}) => {
  return (
    <div
      className={`
          ${styles.card}
          ${styles[style]} 
          ${hasDescription && styles.hasDescr}`}
    >
      <div className={`${styles.textWrapper} ${insideTitle && styles.insideTitle}`}>
        {title && (
          <div className={styles.titleWrap}>
            <div className={`${styles.iconWrapper} ${grey ? styles.greyStyle : null} `}>
              <Icon iconClass={!hasCloseIcon ? 'tick' : 'close'} fSize={hasCloseIcon ? 1 : null} />
            </div>
            <h5 className={`${styles.cardTitle}`}>{title}</h5>
          </div>
        )}
        {hasDescription && <p className={styles.paragraph}>{description}</p>}
      </div>
    </div>
  );
};

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
