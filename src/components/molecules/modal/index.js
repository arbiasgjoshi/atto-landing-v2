import React, { useEffect, useState } from 'react';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import EmailForm from '../../atoms/email-form';
import Button from '../../atoms/button';
import { useIntl } from 'gatsby-plugin-react-intl';

import { dialogContainer, textContainer, textPush } from './modal.module.scss';

function ModalDialog({ showDialog, setFormValues, close, hasValues }) {
  const Intl = useIntl();

  const stateSucceeded = (val) => {
    setFormValues(val);
  };

  // const deleteInvite = (val) => {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ email: val }),
  //   };
  //   fetch('/delete-invite', requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const parsedData = {
  //         data,
  //         email: val,
  //       };

  //       onSuccessRes(parsedData);
  //     });
  // };

  const deleteInvite = (obj) => {
    setFormValues(obj);
  };

  const renderModalTypes = (data) => {
    if (data?.data?.message === 'Signup Succeeded') {
      return (
        <>
          <div className={textContainer}>
            <h4>Confirm your email</h4>
            <p>
              {`A confirmation email has been sent to <span>'${data.email}'</span>. Click on the confirmation link
              in the email to activate your account.`}
            </p>
          </div>
          <Button btnStyle="teal" btnText="Continue" onBtnClick={() => close()} />
        </>
      );
    }

    if (data?.data?.message === 'invited') {
      return (
        <>
          <div className={textContainer}>
            <h4>Account Setup</h4>
            <p className={textPush}>
              {`<span>${data.data.name}</span> has invited you to join <span>'${data.data.company}</span>'. Join the rest of the team today`}
            </p>
            <a href={`https://app.attotime.com/signup/${data.data.token}`}>
              <Button btnStyle="teal" btnText="Join Team" />
            </a>
            <p>or</p>
            <Button
              btnStyle="black"
              btnText="Setup new Account"
              onBtnClick={() => deleteInvite({ email: data?.data?.email, action: 'delete' })}
            />
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
          changeModal={(val) => stateSucceeded(val)}
          placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
          checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
          checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
          checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
          style="homepage"
        />
      </>
    );
  };

  return (
    <div>
      <Dialog className={dialogContainer} isOpen={showDialog} onDismiss={close}>
        {renderModalTypes(hasValues)}
      </Dialog>
    </div>
  );
}

export default ModalDialog;
