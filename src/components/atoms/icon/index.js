import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ iconClass, hasStyle, fSize, weight }) => (
  <i
    className={`atto attoicon-${iconClass}`}
    style={{ fontSize: `${fSize}rem`, hasStyle, fontWeight: `${weight}` }}
  />
);

Icon.propTypes = {
  iconClass: PropTypes.string,
  hasStyle: PropTypes.string,
  weight: PropTypes.string,
  fSize: PropTypes.number,
};

export default Icon;
