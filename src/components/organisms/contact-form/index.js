import React, { useState } from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';
import { motion } from 'framer-motion';
import { Formik } from 'formik';
import { defaultBtn } from '@components/atoms/button/button.module.scss';
import * as yup from 'yup';

import {
  formWrapper,
  formRow,
  formBtn,
  formMask,
  successMessage,
  hasError,
} from './contact-form.module.scss';

const ContactForm = () => {
  const [isOpen, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMsg, setSuccessMessage] = useState('');

  const Intl = useIntl();
  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is a required field'),
    text: yup.string().required('Please enter your message before submitting'),
    email: yup
      .string()
      .email('This field must be a valid email')
      .required('Email is a required field'),
  });

  const toggleButtonAnimations = () => {
    setLoader(true);
    setDisabled(true);
  };

  const sendContactEmail = (val) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: val.email, text: val.text, name: val.name }),
    };
    fetch('/send-email', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setLoader(false);
        setDisabled(false);

        if (!data.error) {
          setOpen(true);
          setSuccessMessage(data.message);
        } else {
          setError(true);
          setErrorMessage(data.error);
        }
      })
      .catch(() => {
        setLoader(false);
        setDisabled(false);
      });
  };

  const formAnimate = {
    enter: {
      opacity: 1,
      marginTop: 0,
    },
    exit: {
      opacity: 0,
      translateY: '10rem',
      display: 'none',
      height: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const successAnimate = {
    enter: {
      opacity: 1,
      marginTop: 0,
    },
    exit: {
      opacity: 0,
      marginTop: '10rem',
      transition: {
        duration: 0.4,
        delay: 0.7,
      },
    },
  };

  return (
    <>
      <motion.div
        initial="enter"
        animate={isOpen ? 'exit' : 'enter'}
        variants={formAnimate}
        className={formWrapper}
      >
        <Formik
          initialValues={{
            name: '',
            email: '',
            text: '',
          }}
          validationSchema={validationSchema}
          autoComplete="off"
          onSubmit={(values) => sendContactEmail(values)}
        >
          {({ values, handleChange, handleBlur, isValid, handleSubmit, errors }) => (
            <form method="POST">
              <div className={formRow}>
                <input
                  type="text"
                  name="name"
                  placeholder={Intl.formatMessage({ id: 'pages.contact.name' })}
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.name && hasError}
                />
                <input
                  type="email"
                  name="email"
                  placeholder={Intl.formatMessage({ id: 'pages.contact.email' })}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && hasError}
                />
              </div>

              <div className={formRow}>
                <textarea
                  name="text"
                  value={values.text}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={Intl.formatMessage({ id: 'pages.contact.message' })}
                  className={errors.text && hasError}
                />
              </div>
              <div className={formBtn}>
                <button
                  type="submit"
                  onClick={() => {
                    if (isValid) {
                      handleSubmit();
                      if (!errors) {
                        toggleButtonAnimations();
                      }
                    }
                  }}
                  disabled={disabled || !isValid}
                  className={defaultBtn}
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
                    Intl.formatMessage({ id: 'pages.contact.sendMessage' })
                  )}
                </button>
                <span className={formMask} />
              </div>
            </form>
          )}
        </Formik>
        {error && <span>{errorMessage}</span>}
      </motion.div>
      {isOpen && (
        <motion.div
          initial="exit"
          animate={isOpen ? 'enter' : 'exit'}
          variants={successAnimate}
          className={`${formWrapper} ${successMessage}`}
        >
          <h1>Thank you!</h1>
          <p>{successMsg}</p>
        </motion.div>
      )}
    </>
  );
};

export default ContactForm;
