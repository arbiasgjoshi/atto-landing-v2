import React, { useState } from 'react';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import EmailForm from '../../atoms/email-form';
import Button from '../../atoms/button';
import { useIntl } from 'gatsby-plugin-react-intl';

import {
  dialogContainer,
  textContainer,
  textPush,
  greenArrow,
  noMargin,
  pushButton,
  pushAround,
} from './modal.module.scss';

function ModalDialog({ showDialog, setFormValues, close, hasValues }) {
  const Intl = useIntl();
  const [disabled, setDisabled] = useState(false);

  const stateSucceeded = (val) => {
    setFormValues(val);
  };

  const deleteInvite = (obj) => {
    setFormValues(obj);
  };

  const confirmLabel = (lang) => {
    if (lang === 'fr') {
      return 'Confirmez votre e-mail';
    }
    if (lang === 'de') {
      return 'Bestätigen Sie Ihre E-Mail-Adresse';
    }
    if (lang === 'es') {
      return 'Confirme su correo electrónico';
    }
    return 'Confirm your email';
  };

  const confirmDesc = (lang, data) => {
    if (lang === 'fr') {
      return (
        <p>
          Un e-mail de confirmation a été envoyé à <span>{data.email}</span>. Cliquez sur le lien de
          confirmation qu’il contient pour activer votre compte.
        </p>
      );
    }
    if (lang === 'de') {
      return (
        <p>
          Eine Bestätigungs-E-Mail wurde an <span>{data.email}</span> gesendet. Klicken Sie auf den
          Bestätigungslink in der E-Mail, um Ihr Konto zu aktivieren
        </p>
      );
    }
    if (lang === 'es') {
      return (
        <p>
          Se ha enviado un correo electrónico de confirmación a <span>{data.email}</span>. Haga clic
          en el enlace de confirmación del correo electrónico para activar su cuenta.
        </p>
      );
    }
    return (
      <p>
        A confirmation email has been sent to <span>{data.email}</span>. Click on the confirmation
        link in the email to activate your account.
      </p>
    );
  };

  const confirmButton = (lang) => {
    if (lang === 'fr') {
      return 'Poursuivre';
    }
    if (lang === 'de') {
      return 'Weiter';
    }
    if (lang === 'es') {
      return 'Continuar';
    }
    return 'Continue';
  };

  const accountLabel = (lang) => {
    if (lang === 'fr') {
      return 'Configuration du compte';
    }
    if (lang === 'de') {
      return 'Kontoeinrichtung';
    }
    if (lang === 'es') {
      return 'Configuración de la cuenta';
    }
    return 'Account Setup';
  };

  const accountText = (lang, data) => {
    if (lang === 'fr') {
      return (
        <p className={textPush}>
          <span>{data.name}</span> vous a invité(e) à rejoindre <span>{data.company}</span> le
          compte de société. <br />
          Rejoignez le reste de l’équipe dès aujourd’hui
        </p>
      );
    }
    if (lang === 'de') {
      return (
        <p className={textPush}>
          <span>{data.name}</span> hat Sie eingeladen, sich dem Firmenkonto von{' '}
          <span>{data.company}</span> anzuschließen. <br />
          Schließen Sie sich noch heute dem Rest des Teams an
        </p>
      );
    }
    if (lang === 'es') {
      return (
        <p className={textPush}>
          <span>{data.name}</span> le ha invitado a unirse a <span>{data.company}</span> la cuenta
          de la empresa. <br />
          Únase hoy al resto del equipo
        </p>
      );
    }
    return (
      <p className={textPush}>
        <span>{data.name}</span> has invited you to join <span>{data.company}</span> company
        account. <br />
        Join the rest of the team today
      </p>
    );
  };

  const orLabel = (lang) => {
    if (lang === 'fr') {
      return 'ou';
    }
    if (lang === 'es') {
      return 'o';
    }
    if (lang === 'de') {
      return 'oder';
    }
    return 'or';
  };

  const buttonLabelOne = (lang) => {
    if (lang === 'fr') {
      return 'Rejoindre l’équipe';
    }
    if (lang === 'es') {
      return 'Unirse al equipo';
    }
    if (lang === 'de') {
      return 'Beitritt zum Team';
    }
    return 'Join Team';
  };

  const buttonLabelTwo = (lang) => {
    if (lang === 'fr') {
      return 'Configurer un nouveau compte';
    }
    if (lang === 'es') {
      return 'Configurar una nueva cuenta';
    }
    if (lang === 'de') {
      return 'Neues Konto einrichten';
    }
    return 'Setup New Account';
  };

  const toggleDeleteInvite = (data) => {
    deleteInvite({ email: data?.email, action: 'delete' });
    setDisabled(true);
  };

  const renderModalTypes = (data) => {
    if (data?.message === 'Signup Succeeded' || data?.message === '__Signup Succeeded') {
      return (
        <>
          <div className={`${textContainer} ${pushButton} ${noMargin}`}>
            <span className={greenArrow} />
            <h4>{confirmLabel(Intl.locale)}</h4>
            <p>{confirmDesc(Intl.locale, data)}</p>
            <Button
              btnStyle="gray"
              btnText={confirmButton(Intl.locale)}
              onBtnClick={() => close()}
            />
          </div>
        </>
      );
    }

    if (data?.message === 'invited') {
      return (
        <>
          <div className={`${textContainer} ${noMargin}`}>
            <h4>{accountLabel(Intl.locale)}</h4>
            {accountText(Intl.locale, data)}
            <a href={`https://app.attotime.com/signup/${data.token}`}>
              <Button btnStyle="teal" btnText={buttonLabelOne(Intl.locale)} />
            </a>
            <p className={pushAround}>{orLabel(Intl.locale)}</p>
            <Button
              btnStyle="gray"
              disabled={disabled}
              btnText={buttonLabelTwo(Intl.locale)}
              onBtnClick={() => toggleDeleteInvite(data)}
            />
          </div>
        </>
      );
    }

    return (
      <>
        <div className={textContainer}>
          <h3>{Intl.formatMessage({ id: 'pages.miscellaneous.modalTitle' })}</h3>
          <p>{Intl.formatMessage({ id: 'pages.pricing.subscribeBanner' })}</p>
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
