import React from 'react';
import PropTypes from 'prop-types';

import EmailForm from '@components/atoms/email-form';

import * as styles from './newsletter.module.scss';

const NewsLetter = ({ style }) => (
  <div className={`${styles.container} ${styles[style]}`}>
    <div className={styles.leftWrapper}>
      <h3>Enjoying these posts?</h3>
    </div>
    <div className={styles.formWrapper}>
      <p>Sign up for our newsletter</p>
      <EmailForm
        placeholder="Type your email"
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
        style="homepage"
      />
    </div>
  </div>
);

NewsLetter.propTypes = {
  style: PropTypes.string,
};

export default NewsLetter;
