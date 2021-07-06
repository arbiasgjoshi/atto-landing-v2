import React, { useEffect, useState } from 'react';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import EmailForm from '../../atoms/email-form';
import { useIntl } from 'gatsby-plugin-react-intl';

import { dialogContainer, textContainer } from './modal.module.scss';

function ModalDialog({ showDialog, close, value = 'random@email.com' }) {
  const Intl = useIntl();
  const [type, setType] = useState('default');

  const renderModalTypes = (data) => {
    if (data.message === 'success') {
      return (
        <>
          <div className={textContainer}>
            <h4>Confirm your email</h4>
            <p>
              {`A confirmation email has been sent to '${value}'. Click on the confirmation link
              in the email to activate your account.`}
            </p>
          </div>
        </>
      );
    }

    if (data.message === 'invited') {
      return (
        <>
          <div className={textContainer}>
            <h4>You were invited</h4>
            <p>
              {`A confirmation email has been sent to '${value}'. Click on the confirmation link
              in the email to activate your account.`}
            </p>
          </div>
        </>
      );
    }
    return (
      <>
        <div className={textContainer}>
          <h3>Sign up for a 14-day free trial</h3>
          <p>There's no time to waste!</p>
        </div>
        <EmailForm
          changeModal={(val) => setType(val)}
          placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
          checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
          checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
          checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
          onSuccessChange={(val) => setType(val)}
          style="homepage"
        />
      </>
    );
  };

  return (
    <div>
      <Dialog className={dialogContainer} isOpen={showDialog} onDismiss={close}>
        {renderModalTypes(type)}
      </Dialog>
    </div>
  );
}

export default ModalDialog;
