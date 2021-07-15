import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { defaultInput, inputWrapper } from '@components/atoms/input/input.module.scss';
// import { formWrapper } from '@components/molecules/subscribe-form/form.module.scss';
import Button from '@components/atoms/button';
import {
  defaultBtn,
  blackStyle,
  mobileText,
  desktopText,
} from '@components/atoms/button/button.module.scss';
import Icon from '@components/atoms/icon';
import CheckCard from '@components/molecules/check-card';
import { useIntl } from 'gatsby-plugin-react-intl';
import { Formik } from 'formik';
import * as yup from 'yup';

import {
  container,
  firstBox,
  listWrapper,
  ticksWrapper,
  tickItem,
  desktopBtn,
  mobileBtn,
  errorMsgStyle,
  mobileOnly,
} from './free-trial.module.scss';

const FreeTrial = ({ title, description, list = [], onSuccessRes, onToggleModal }) => {
  const Intl = useIntl();
  const [loader, setLoader] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [hasError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const toggleButtonAnimations = () => {
    setLoader(true);
    setDisabled(true);
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email('This field must be a valid email').required('Required'),
  });

  const signUpTrial = (val) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: val }),
    };
    fetch('/confirmation', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setLoader(false);
        setDisabled(false);
        if (data && !data.error) {
          setError(false);
          onSuccessRes(data);
        } else {
          setError(true);
          if (data) {
            setErrorMessage(data.error);
          }
        }
      });
  };

  return (
    <>
      <h4 className={mobileOnly}>{description}</h4>
      <div className={container}>
        <div className={firstBox}>
          <h3>{title}</h3>
          <h4>{description}</h4>
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={validationSchema}
            autoComplete="off"
            onSubmit={(values) => {
              signUpTrial(values.email);
            }}
          >
            {({ values, handleSubmit, handleChange, handleBlur, errors }) => (
              <form method="POST">
                <div className={inputWrapper}>
                  <input
                    placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
                    className={defaultInput}
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className={desktopBtn}>
                  <button
                    onClick={() => {
                      handleSubmit();
                      toggleButtonAnimations();
                    }}
                    disabled={disabled}
                    className={`${defaultBtn} ${blackStyle}`}
                  >
                    {loader ? (
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
                            ></animate>
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
                            ></animate>
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
                            ></animate>
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
                            ></animate>
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
                            ></animate>
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
                            ></animate>
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
                            ></animate>
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
                            ></animate>
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
                            ></animate>
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
                            ></animate>
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
                            ></animate>
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
                            ></animate>
                          </rect>
                        </g>
                      </svg>
                    ) : (
                      <>
                        <span className={desktopText}>
                          {Intl.formatMessage({ id: 'pages.miscellaneous.freeTrial14Days' })}
                        </span>
                        <span className={mobileText}>
                          {Intl.formatMessage({ id: 'pages.miscellaneous.start14Days' })}
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </Formik>
          <div className={mobileBtn}>
            <Button
              onBtnClick={() => onToggleModal()}
              btnMobileText={Intl.formatMessage({ id: 'pages.miscellaneous.start14Days' })}
              btnText={Intl.formatMessage({ id: 'pages.miscellaneous.freeTrial14Days' })}
              btnStyle="black"
            />
          </div>
          {!hasError ? (
            <div className={ticksWrapper}>
              <div className={tickItem}>
                <Icon iconClass="tick" />
                <span>{Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}</span>
              </div>
              <div className={tickItem}>
                <Icon iconClass="tick" />
                <span>{Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}</span>
              </div>
            </div>
          ) : (
            <span className={errorMsgStyle}>{errorMessage}</span>
          )}
        </div>
        <div className={listWrapper}>
          {list.map(({ title: listItemTitle }) => (
            <CheckCard title={listItemTitle} />
          ))}
        </div>
      </div>
    </>
  );
};

FreeTrial.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  list: PropTypes.arrayOf({}),
};

export default FreeTrial;
