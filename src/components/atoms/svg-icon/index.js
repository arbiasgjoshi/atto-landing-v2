import React from 'react';
import PropTypes from 'prop-types';

const SvgIcon = ({ icon }) => <div>{icon}</div>;

SvgIcon.propTypes = {
  icon: PropTypes.oneOf({}),
};
export default SvgIcon;
