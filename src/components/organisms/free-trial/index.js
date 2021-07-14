import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { defaultInput, inputWrapper } from '@components/atoms/input/input.module.scss';
// import { formWrapper } from '@components/molecules/subscribe-form/form.module.scss';
import Button from '@components/atoms/button';
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
  const [stopLoad, setStopLoad] = useState(false);
  const [hasError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
        setStopLoad(true);
        if (!data.error) {
          onSuccessRes(data);
        } else {
          setError(true);
          setErrorMessage(data.error);
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
              <form method="POST" onSubmit={handleSubmit}>
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
                  <Button
                    disabled={!values.email}
                    hasLoader
                    stopLoader={stopLoad}
                    btnMobileText={Intl.formatMessage({ id: 'pages.miscellaneous.start14Days' })}
                    btnText={Intl.formatMessage({ id: 'pages.miscellaneous.freeTrial14Days' })}
                    btnStyle="black"
                  />
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
            <span className={errorMsgStyle}>Type your message correctly</span>
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
