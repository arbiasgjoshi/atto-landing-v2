import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';

import { inputWrapper, defaultInput, inputError } from '@components/atoms/input/input.module.scss';
import Button from '@components/atoms/button';
import { useIntl } from 'gatsby-plugin-react-intl';

import { formWrapper, errorMessage } from './form.module.scss';

const SubscribeForm = ({ placeholder, onSuccessRes, onError, sucessfullyDeleted }) => {
  const Intl = useIntl();
  const [stopLoad, setStopLoad] = useState(false);
  const [hasError, setHasError] = useState(false);

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
        if (!data.error) {
          setHasError(false);
          console.log('we are having an error');
          setStopLoad(true);
          onSuccessRes(data);
        } else {
          console.log('we are succeeding');
          setStopLoad(true);
          setHasError(true);
          onError(data.error);
        }
      });
  };

  useEffect(() => {
    setStopLoad(true);
  }, [sucessfullyDeleted]);

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
              className={`${defaultInput} ${hasError && inputError}`}
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <Button
            btnText={Intl.formatMessage({ id: 'pages.miscellaneous.startFreeTrial' })}
            btnStyle="black"
            disabled={!values.email}
            hasLoader
            stopLoader={stopLoad}
          />
        </form>
      )}
    </Formik>
  );
};

SubscribeForm.propTypes = {
  placeholder: PropTypes.string,
  onSuccessRes: PropTypes.func,
  onError: PropTypes.func,
};

export default SubscribeForm;
