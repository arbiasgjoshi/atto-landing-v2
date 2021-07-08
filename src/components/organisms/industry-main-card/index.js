import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '@components/molecules/modal';

import EmailForm from '@components/atoms/email-form';
import CheckList from '@components/molecules/check-list';

import * as styles from './industry-main-card.module.scss';
import { useIntl } from 'gatsby-plugin-react-intl';

const IndustryMainCard = ({
  smallTitle,
  title,
  description,
  list,
  image,
  styling,
  imageHeight,
  imageWidth,
}) => {
  const Intl = useIntl();
  const [showDialog, setShowDialog] = useState(false);
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
        openModal();
      });
  };

  const formSuccessState = (val) => {
    closeModal();
    if (val?.action !== 'delete') {
      setValues(val);
    } else {
      toggleDeleteInvite(val);
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
      <div className={`${styles.container} ${styles[styling]}`}>
        <div className={styles.firstBox}>
          <p className={styles.smallTitleStyle}>{smallTitle}</p>
          <h1 className={description && styles.hasDescr}>{title}</h1>
          {description && <p className={styles.descr}>{description}</p>}
          {list && (
            <div className={styles.listContainer}>
              <CheckList list={list} cardStyle="rowSmall" />
            </div>
          )}
          <div
            className={`${styles.emailContainer} ${Intl.locale !== 'en' && styles.differentLocale}`}
          >
            <div className={styles.mobileImage}>
              <img src={image} alt={title} width={imageWidth || 500} height={imageHeight || 596} />
            </div>
            <EmailForm
              changeModal={(val) => console.log(val)}
              placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
              checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
              checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
              checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
              style="productPage"
            />
          </div>
        </div>
        <div className={`${styles.secondBox}`}>
          <img src={image} alt={title} width={imageWidth || 500} height={imageHeight || 596} />
        </div>
      </div>
    </>
  );
};

export default IndustryMainCard;

IndustryMainCard.propTypes = {
  smallTitle: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  styling: PropTypes.string,
  list: PropTypes.arrayOf({}),
  image: PropTypes.string,
  imageHeight: PropTypes.string,
  imageWidth: PropTypes.string,
};
