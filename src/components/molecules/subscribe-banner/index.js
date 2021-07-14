import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '@components/molecules/modal';
import { useIntl } from 'gatsby-plugin-react-intl';
import { StaticImage } from 'gatsby-plugin-image';

import EmailForm from '../../atoms/email-form';

import { bannerWrapper, textWrapper, hasImage, imgWrap } from './subscribe.module.scss';

const SubscribeBanner = ({
  title,
  subtitle,
  formPadding,
  placeholder,
  bannerImage,
  checkItemOne,
  checkItemTwo,
  checkItemThree,
  style = '',
}) => {
  const Intl = useIntl();

  const [showDialog, setShowDialog] = useState(false);
  const [deletedInvite, setDeleted] = useState(false);
  const [values, setValues] = useState(null);

  const openModal = () => setShowDialog(true);
  const closeModal = () => setShowDialog(false);

  const toggleDeleteInvite = (data) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: data.email }),
    };
    fetch('/delete-invite', requestOptions)
      .then((response) => response.json())
      .then((res) => {
        setValues(res);
        setDeleted(true);
        openModal();
      });
  };

  const formSuccessState = (val) => {
    closeModal();
    if (val?.action !== 'delete') {
      setValues(val);
      setTimeout(() => {
        openModal();
      }, 500);
    } else {
      toggleDeleteInvite(val);
    }
  };

  const subscribeBanner = () => {
    if (Intl.locale === 'en') {
      return (
        <StaticImage
          src="../../../images/en/overview/What are you waiting for_ Time is ticking!@2x.png"
          alt="What are you waiting for. Time is ticking"
          width={1140}
          height={470}
          quality={98}
          placeholder="blurred"
        />
      );
    }
    if (Intl.locale === 'es') {
      return (
        <StaticImage
          src="../../../images/es/overview/ES_What are you waiting for_ Time is ticking!@2x.png"
          alt="What are you waiting for. Time is ticking"
          width={1140}
          height={470}
          quality={98}
          placeholder="blurred"
        />
      );
    }
    if (Intl.locale === 'fr') {
      return (
        <StaticImage
          src="../../../images/fr/overview/FR_What are you waiting for_ Time is ticking!@2x.png"
          alt="What are you waiting for. Time is ticking"
          width={1140}
          height={470}
          quality={98}
          placeholder="blurred"
        />
      );
    }
    if (Intl.locale === 'de') {
      return (
        <StaticImage
          src="../../../images/de/overview/DE_What are you waiting for_ Time is ticking!@2x.png"
          alt="What are you waiting for. Time is ticking"
          width={1140}
          height={470}
          quality={98}
          placeholder="blurred"
        />
      );
    }
  };
  return (
    <>
      <Modal
        close={closeModal}
        showDialog={showDialog}
        hasValues={values}
        onDelete={toggleDeleteInvite}
        setFormValues={(formValues) => formSuccessState(formValues)}
      />
      <div
        className={`${bannerWrapper} ${bannerImage && hasImage}`}
        style={{ padding: formPadding }}
      >
        {bannerImage && <div className={imgWrap}>{subscribeBanner()}</div>}
        <div className={textWrapper}>
          {style === 'pricing' ? <h2>{title}</h2> : <h3>{title}</h3>}
          {subtitle && <p>{subtitle}</p>}
        </div>
        <EmailForm
          style="banner"
          deleteSucceded={deletedInvite}
          changeModal={(val) => formSuccessState(val)}
          placeholder={placeholder}
          checkItemOne={checkItemOne}
          checkItemTwo={checkItemTwo}
          checkItemThree={checkItemThree}
        />
      </div>
    </>
  );
};

SubscribeBanner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  bannerImage: PropTypes.bool,
  placeholder: PropTypes.string,
  formPadding: PropTypes.string,
  checkItemOne: PropTypes.string,
  checkItemTwo: PropTypes.string,
  checkItemThree: PropTypes.string,
  style: PropTypes.string,
};

export default SubscribeBanner;
