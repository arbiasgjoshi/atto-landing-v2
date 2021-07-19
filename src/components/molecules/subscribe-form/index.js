import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';

import { inputWrapper, defaultInput, inputError } from '@components/atoms/input/input.module.scss';
import { defaultBtn, blackStyle } from '@components/atoms/button/button.module.scss';
import { useIntl } from 'gatsby-plugin-react-intl';

import { formWrapper } from './form.module.scss';

const SubscribeForm = ({ placeholder, onSuccessRes, onError, sucessfullyDeleted }) => {
  const Intl = useIntl();
  const [disabled, setDisabled] = useState(false);
  const [loader, setLoader] = useState(false);
  const [hasError, setHasError] = useState(false);

  const validationSchema = yup.object().shape({
    email: yup.string().email('This field must be a valid email').required('Required'),
  });

  const toggleButtonAnimations = () => {
    setLoader(true);
    setDisabled(true);
  };

  const signUpTrial = (val) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(val),
    };
    fetch('/confirmation', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setLoader(false);
        setDisabled(false);

        if (data && !data.error) {
          setHasError(false);
          onSuccessRes(data);
        } else {
          setHasError(true);
          if (data) {
            onError(data.error);
          }
        }
      })
      .catch((err) => {
        setLoader(false);
        setDisabled(false);
      });
  };

  const toggleSubmit = (e, submit, valid, err) => {
    e.preventDefault();
    if (valid) {
      if (!err && err !== undefined) {
        toggleButtonAnimations();
      }
      submit();
    }
  };

  useEffect(() => {
    setLoader(false);
  }, [sucessfullyDeleted]);

  return (
    <>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={validationSchema}
        autoComplete="off"
        onSubmit={(values) => {
          signUpTrial(values);
        }}
      >
        {({ values, isValid, handleSubmit, handleChange, handleBlur, errors }) => (
          <form method="POST" className={formWrapper}>
            <div className={inputWrapper}>
              <input
                placeholder={placeholder}
                className={`${defaultInput} ${(hasError || errors.email) && inputError}`}
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <button
              type="submit"
              aria-label="Submit Form"
              onClick={(e) => {
                toggleSubmit(e, handleSubmit, isValid, errors.email);
              }}
              disabled={disabled || !isValid}
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
              ) : (
                Intl.formatMessage({ id: 'pages.miscellaneous.startFreeTrial' })
              )}
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

SubscribeForm.propTypes = {
  placeholder: PropTypes.string,
  onSuccessRes: PropTypes.func,
  onError: PropTypes.func,
};

export default SubscribeForm;
