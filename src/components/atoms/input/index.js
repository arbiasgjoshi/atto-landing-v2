import React from 'react';
import PropTypes from 'prop-types';

import { defaultInput, inputWrapper } from './input.module.scss';

const Input = ({ type = 'text', placeholder = 'Enter here...' }) => (
  <div className={inputWrapper}>
    <input type={type} placeholder={placeholder} className={defaultInput} />
  </div>
);

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
