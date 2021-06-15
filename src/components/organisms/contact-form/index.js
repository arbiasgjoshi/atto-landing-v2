import React from 'react';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import Button from '@components/atoms/button';
import * as yup from 'yup';

import { formWrapper, formRow, formBtn, formMask } from './contact-form.module.scss';

const ContactForm = () => {
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .email('This field must be a valid email')
      .required('Email is a required field'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is a required field'),
  });

  return (
    <div className={formWrapper}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        validationSchema={validationSchema}
        autoComplete="off"
        onSubmit={(values) => {
          console.log(values);
          //   send({ type: 'SUBMIT', data: values });
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
          <form method="POST" onSubmit={handleSubmit}>
            <div className={formRow}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className={formRow}>
              <textarea name="email" placeholder="E-mail" />
            </div>
            <div className={formBtn}>
              <Button btnText="Send Message" btnStyle="formBtn" defaultBtn />
              <span className={formMask} />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
