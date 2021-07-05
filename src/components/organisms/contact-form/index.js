import React from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';
import { Formik } from 'formik';
import Button from '@components/atoms/button';
import * as yup from 'yup';

import { formWrapper, formRow, formBtn, formMask } from './contact-form.module.scss';

const ContactForm = () => {
  const Intl = useIntl();
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('This field must be a valid email')
      .required('Email is a required field'),
  });

  const contactUs = (val) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: val.email, name: val.name, text: val.text }),
    };
    fetch('/send-email', requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className={formWrapper}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          text: '',
        }}
        validationSchema={validationSchema}
        autoComplete="off"
        onSubmit={(values) => contactUs(values)}
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
    </div>
  );
};

export default ContactForm;
