import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './divider.module.scss';

const Divider = ({ className = '' }) => (
  <hr className={`${styles.dividerContainer} ${styles[className]}`} />
);

Divider.propTypes = {
  className: PropTypes.string,
};

export default Divider;
