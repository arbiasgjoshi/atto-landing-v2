import React, { useState, useEffect } from 'react';
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
  customClass,
  hasLoader,
  stopLoader,
  disabled,
  btnStyle,
  pricing,
  activeClass,
  onBtnClick,
}) => {
  const [toggleLoader, setToggle] = useState(false);
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

  const toggleButtonClick = () => {
    if (onBtnClick) {
      onBtnClick();
    }
    if (hasLoader) {
      setToggle(true);
    }
  };

  useEffect(() => {
    if (stopLoader) {
      setToggle(false);
    }
  }, [stopLoader]);

  return (
    <button
      className={`${defaultBtn} ${customClass} ${checkBtnStyle()}`}
      type="submit"
      aria-label="Submit Form"
      disabled={disabled}
      onClick={() => toggleButtonClick()}
    >
      {!toggleLoader ? (
        <>
          <span className={desktopText}>{btnText}</span>
          <span className={mobileText}>{btnMobileText}</span>
        </>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{
            margin: 'auto',
            background: 'transparent',
            display: 'block',
            shapeRendering: ' auto',
          }}
          width="30px"
          height="30px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <g transform="rotate(0 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffffff">
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.9166666666666666s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <g transform="rotate(30 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffffff">
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.8333333333333334s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <g transform="rotate(60 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffffff">
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.75s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <g transform="rotate(90 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffffff">
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.6666666666666666s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <g transform="rotate(120 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffffff">
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.5833333333333334s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <g transform="rotate(150 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffffff">
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.5s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <g transform="rotate(180 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffffff">
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.4166666666666667s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <g transform="rotate(210 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffffff">
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.3333333333333333s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <g transform="rotate(240 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffffff">
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.25s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <g transform="rotate(270 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffffff">
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.16666666666666666s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <g transform="rotate(300 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffffff">
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.08333333333333333s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <g transform="rotate(330 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffffff">
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
        </svg>
      )}
    </button>
  );
};

Button.propTypes = {
  btnText: PropTypes.string,
  customClass: PropTypes.string,
  btnMobileText: PropTypes.string,
  disabled: PropTypes.bool,
  hasLoader: PropTypes.bool,
  stopLoader: PropTypes.bool,
  pricing: PropTypes.bool,
  btnStyle: PropTypes.string,
  onBtnClick: PropTypes.func,
  activeClass: PropTypes.bool,
};
export default Button;
