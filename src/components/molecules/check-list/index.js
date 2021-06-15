import React from 'react';
import PropTypes from 'prop-types';

import CheckCard from '@components/molecules/check-card';

import * as styles from './check-list.module.scss';

const CheckList = ({ list, hasDescription = false, cardStyle = '' }) => (
  <div className={`${styles.container} ${hasDescription && styles.hasDescr} ${styles[cardStyle]}`}>
    {list?.map(({ title, description, id }) => (
      <CheckCard
        key={id}
        hasDescription={hasDescription}
        title={title}
        description={description}
        style={cardStyle}
      />
    ))}
  </div>
);

CheckList.propTypes = {
  list: PropTypes.string.isRequired,
  hasDescription: PropTypes.bool,
  cardStyle: PropTypes.string,
};

export default CheckList;
