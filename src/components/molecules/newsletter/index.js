import React from 'react';
import PropTypes from 'prop-types';

import EmailForm from '@components/atoms/email-form';
import { useIntl } from 'gatsby-plugin-react-intl';

import * as styles from './newsletter.module.scss';

const NewsLetter = ({ style }) => {
  const Intl = useIntl();
  return (
    <div className={`${styles.container} ${styles[style]}`}>
      <div className={styles.leftWrapper}>
        <h3>Enjoying these posts?</h3>
      </div>
      <div className={styles.formWrapper}>
        <p>Sign up for our newsletter</p>
        <EmailForm
          placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
          checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
          checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
          checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
          style="homepage"
        />
      </div>
    </div>
  );
};

NewsLetter.propTypes = {
  style: PropTypes.string,
};

export default NewsLetter;
