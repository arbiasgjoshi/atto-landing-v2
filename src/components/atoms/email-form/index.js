import React from 'react';
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
  changeModal,
}) => {
  // const subscribeSuccess = () => {}

  return (
    <div className={`${styles.container} ${style ? styles[style] : ''}`}>
      <SubscribeForm placeholder={placeholder} onSuccessRes={(val) => changeModal(val)} />
      <div className={styles.checkItems}>
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
  changeModal: PropTypes.func,
};

export default EmailForm;
