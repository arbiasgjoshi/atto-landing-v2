import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';

import { inputWrapper, defaultInput } from '@components/atoms/input/input.module.scss';
import { Api } from '../../../helpers/api';
import Button from '@components/atoms/button';
import { useIntl } from 'gatsby-plugin-react-intl';

import { formWrapper } from './form.module.scss';

const SubscribeForm = ({ placeholder }) => {
  const Intl = useIntl();

  const validationSchema = yup.object().shape({
    email: yup.string().email('This field must be a valid email'),
  });

  // const submitRequest = (val) => {};

  const signUpTrial = (val) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: val }),
    };
    fetch('https://attoime.com/api/v2/signup', requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
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
        <form method="POST" onSubmit={handleSubmit} className={formWrapper}>
          <div className={inputWrapper}>
            <input
              placeholder={placeholder}
              className={defaultInput}
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              // onChange={handleChange}
              // onBlur={handleBlur}
            />
          </div>
          <Button
            btnText={Intl.formatMessage({ id: 'pages.miscellaneous.startFreeTrial' })}
            btnStyle="black"
          />
        </form>
      )}
    </Formik>
  );
};

SubscribeForm.propTypes = {
  placeholder: PropTypes.string,
};

export default SubscribeForm;
