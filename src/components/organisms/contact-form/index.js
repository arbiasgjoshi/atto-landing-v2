import React from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';
import { Formik } from 'formik';
import Button from '@components/atoms/button';
import * as yup from 'yup';

import { formWrapper, formRow, formBtn, formMask } from './contact-form.module.scss';

const ContactForm = () => {
  const Intl = useIntl();
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
                name="message"
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
    </div>
  );
};

export default ContactForm;
