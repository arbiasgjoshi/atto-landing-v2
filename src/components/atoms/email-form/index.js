import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SubscribeForm from '@components/molecules/subscribe-form';
import Icon from '@components/atoms/icon';

import * as styles from './email-form.module.scss';

const EmailForm = ({
  placeholder,
  checkItemOne,
  checkItemTwo,
  checkItemThree,
  style,
  deleteSucceded = false,
  changeModal,
}) => {
  const [hasError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className={`${styles.container} ${style ? styles[style] : ''}`}>
      <SubscribeForm
        placeholder={placeholder}
        sucessfullyDeleted={deleteSucceded}
        onError={(val) => {
          setErrorMessage(val);
          setError(true);
        }}
        onSuccessRes={(val) => {
          changeModal(val);
          setError(false);
          setErrorMessage('');
        }}
      />
      <div className={styles.checkItems}>
        {!hasError ? (
          <>
            <div className={styles.itemWrapper}>
              <Icon iconClass="tick" />
              <span>{checkItemOne}</span>
            </div>
            <div className={styles.itemWrapper}>
              <Icon iconClass="tick" />
              <span>{checkItemTwo}</span>
            </div>
            <div className={styles.itemWrapper}>
              <Icon iconClass="tick" />
              <span>{checkItemThree}</span>
            </div>
          </>
        ) : (
          <span className={styles.errorMsgStyle}>{errorMessage}</span>
        )}
      </div>
    </div>
  );
};

EmailForm.propTypes = {
  placeholder: PropTypes.string,
  checkItemOne: PropTypes.string,
  checkItemTwo: PropTypes.string,
  checkItemThree: PropTypes.string,
  style: PropTypes.string,
  deleteSucceded: PropTypes.bool,
  changeModal: PropTypes.func,
};

export default EmailForm;
