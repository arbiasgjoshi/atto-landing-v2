import React, { useState } from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';
import { motion } from 'framer-motion';
import { Formik } from 'formik';
import Button from '@components/atoms/button';
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

  const Intl = useIntl();
  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is a required field'),
    text: yup.string().required('Please enter your message before submitting'),
    email: yup
      .string()
      .email('This field must be a valid email')
      .required('Email is a required field'),
  });

  const signUpTrial = (val) => {
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
        setOpen(true);
      });
  };

  const formAnimate = {
    enter: {
      opacity: 1,
      marginTop: 0,
    },
    exit: {
      opacity: 0,
      marginTop: '10rem',
      transition: {
        duration: 0.3,
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
        duration: 0.3,
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
            message: '',
          }}
          validationSchema={validationSchema}
          autoComplete="off"
          onSubmit={(values) => signUpTrial(values)}
        >
          {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
            <form onSubmit={handleSubmit}>
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
                  placeholder={Intl.formatMessage({ id: 'pages.contact.message' })}
                />
              </div>
              <div className={formBtn}>
                <Button
                  btnText={Intl.formatMessage({ id: 'pages.contact.sendMessage' })}
                  btnStyle="formBtn"
                  defaultBtn
                />
                <span className={formMask} />
              </div>
            </form>
          )}
        </Formik>
      </motion.div>
      {isOpen && (
        <motion.div
          initial="exit"
          animate={isOpen ? 'enter' : 'exit'}
          variants={successAnimate}
          className={`${formWrapper} ${successMessage}`}
        >
          <h1>Thank you!</h1>
          <p>Your message was succesfully sent!</p>
        </motion.div>
      )}
    </>
  );
};

export default ContactForm;
