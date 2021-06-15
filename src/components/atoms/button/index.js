import React from 'react';
import PropTypes from 'prop-types';

import {
  defaultBtn,
  tealStyle,
  blackStyle,
  grayStyle,
  wideStyle,
  roundStyle,
  pricingStyle,
  activeStyle,
  hasMobileText,
  activeBlogItem,
  bigStyle,
  mobileText,
  desktopText,
} from './button.module.scss';

const Button = ({
  btnText,
  btnMobileText,
  disabled,
  btnStyle,
  pricing,
  activeClass,
  onBtnClick,
}) => {
  const checkBtnStyle = () => {
    let className = '';
    if (btnStyle === 'teal') {
      className += ` ${tealStyle}`;
    }
    if (btnStyle === 'black') {
      className += ` ${blackStyle}`;
    }
    if (btnStyle === 'gray') {
      className += ` ${grayStyle}`;
    }
    if (btnStyle === 'wide') {
      className += ` ${wideStyle}`;
    }
    if (btnStyle === 'round') {
      className += ` ${roundStyle}`;
    }
    if (btnStyle === 'big') {
      className += ` ${bigStyle}`;
    }
    if (btnStyle === 'activeBlogItem') {
      className += ` ${activeBlogItem}`;
    }
    if (pricing) {
      className += ` ${pricingStyle}`;
    }
    if (activeClass) {
      className += ` ${activeStyle}`;
    }
    if (btnMobileText) {
      className += ` ${hasMobileText}`;
    }
    return className;
  };
  return (
    <button
      className={`${defaultBtn} ${checkBtnStyle()}`}
      type="submit"
      disabled={disabled}
      onClick={() => onBtnClick && onBtnClick()}
    >
      <span className={desktopText}>{btnText}</span>
      <span className={mobileText}>{btnMobileText}</span>
    </button>
  );
};

Button.propTypes = {
  btnText: PropTypes.string,
  btnMobileText: PropTypes.string,
  disabled: PropTypes.bool,
  pricing: PropTypes.bool,
  btnStyle: PropTypes.string,
  onBtnClick: PropTypes.func,
  activeClass: PropTypes.bool,
};
export default Button;
