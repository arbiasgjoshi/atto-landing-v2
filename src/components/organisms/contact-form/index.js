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
} from './contact-form.module.scss';

const ContactForm = () => {
  const [isOpen, setOpen] = useState(false);
  const [error, setError] = useState(false);
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

  const sendContactEmail = (val) => {
    console.log('we are entering here!');
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
        if (!data.error) {
          setOpen(true);
          setSuccessMessage(data.message);
        } else {
          setError(true);
          setErrorMessage(data.error);
        }
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
          {({ values, handleChange, handleBlur, validateForm, handleSubmit, errors }) => (
            <form onSubmit={handleSubmit}>
              {/* {console.log(errors)} */}
              <div className={formRow}>
                <input
                  type="text"
                  name="name"
                  placeholder={Intl.formatMessage({ id: 'pages.contact.name' })}
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <input
                  type="email"
                  name="email"
                  placeholder={Intl.formatMessage({ id: 'pages.contact.email' })}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <div className={formRow}>
                <textarea
                  name="text"
                  value={values.text}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={Intl.formatMessage({ id: 'pages.contact.message' })}
                />
              </div>
              <div className={formBtn}>
                <button type="submit" className={defaultBtn}>
                  {Intl.formatMessage({ id: 'pages.contact.sendMessage' })}
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
