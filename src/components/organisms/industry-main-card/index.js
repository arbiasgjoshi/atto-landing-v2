import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '@components/molecules/modal';

import EmailForm from '@components/atoms/email-form';
import CheckList from '@components/molecules/check-list';

import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './industry-main-card.module.scss';
import { useIntl } from 'gatsby-plugin-react-intl';

// import TimesheetApp from '@images/timesheets/Streamline your payroll with our simple employee timesheet app@2x.png';
// import CleaningImage from '@images/cleaning/Time Tracking for Cleaning Companies@2x.png';
// import ConstructionImage from '@images/construction/Time tracking for construction companies@2x.png';
// import ElectricalImage from '@images/electric/Time Tracking for Electricians@2x.png';
// import HealthCare from '@images/healthcare/Time Tracking Software for Home Healthcare Providers@2x.png';
// import Landscape from '@images/landscaping/Time Tracking for Landscaping Companies@2x.png';
// import Painting from '@images/painting/Time Tracking for Painting and Decorating Companies@2x.png';
// import Plumbing from '@images/plumbing/Time Tracking for Plumbing and Heating Companies@2x.png';
// import Roofing from '@images/roofing/Time Tracking for Roofing Companies@2x.png';
// import MobileTimeTracking from '@images/time-tracking/A highly accurate time tracking solution@2x.png';
// import TimeCard from '@images/time-card-app/A highly accurate time tracking solution@2x.png';
// import TimeClock from '@images/time-clock/A highly accurate time tracking solution@2x.png';
// import WorkHours from '@images/work-hours-tracker/A highly accurate time tracking solution@2x.png';

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
  const [deletedInvite, setDeleted] = useState(false);

  const openModal = () => setShowDialog(true);
  const closeModal = () => setShowDialog(false);

  const staticImageSwitch = (val, title) => {
    if (val === 'timesheet-app-banner') {
      return (
        <StaticImage
          alt={title}
          width={447}
          height={659}
          placeholder="none"
          quality={98}
          src="../../../images/timesheets/Streamline your payroll with our simple employee timesheet app@2x.png"
        />
      );
    }
    if (val === 'cleaning-banner') {
      return (
        <StaticImage
          alt={title}
          width={503}
          height={610}
          placeholder="none"
          quality={98}
          src="../../../images/cleaning/Time Tracking for Cleaning Companies@2x.png"
        />
      );
    }
    if (val === 'construction-banner') {
      return (
        <StaticImage
          alt={title}
          width={503}
          height={610}
          placeholder="none"
          quality={98}
          src="../../../images/construction/Time tracking for construction companies@2x.png"
        />
      );
    }
    if (val === 'landscaping-banner') {
      return (
        <StaticImage
          alt={title}
          width={503}
          height={610}
          placeholder="none"
          quality={98}
          src="../../../images/landscaping/Time Tracking for Landscaping Companies@2x.png"
        />
      );
    }
    if (val === 'electrical-banner') {
      return (
        <StaticImage
          alt={title}
          width={503}
          height={610}
          placeholder="none"
          quality={98}
          src="../../../images/electric/Time Tracking for Electricians@2x.png"
        />
      );
    }
    if (val === 'healthcare-banner') {
      return (
        <StaticImage
          alt={title}
          width={503}
          height={610}
          placeholder="none"
          quality={98}
          src="../../../images/healthcare/Time Tracking Software for Home Healthcare Providers@2x.png"
        />
      );
    }
    if (val === 'landscaping-banner') {
      return (
        <StaticImage
          alt={title}
          width={503}
          height={610}
          placeholder="none"
          quality={98}
          src="../../../images/landscaping/Time Tracking for Landscaping Companies@2x.png"
        />
      );
    }
    if (val === 'painting-banner') {
      return (
        <StaticImage
          alt={title}
          width={503}
          height={610}
          placeholder="none"
          quality={98}
          src="../../../images/painting/Time Tracking for Painting and Decorating Companies@2x.png"
        />
      );
    }
    if (val === 'plumbing-banner') {
      return (
        <StaticImage
          alt={title}
          width={503}
          height={610}
          placeholder="none"
          quality={98}
          src="../../../images/plumbing/Time Tracking for Plumbing and Heating Companies@2x.png"
        />
      );
    }
    if (val === 'roofing-banner') {
      return (
        <StaticImage
          alt={title}
          width={503}
          height={610}
          placeholder="none"
          quality={98}
          src="../../../images/roofing/Time Tracking for Roofing Companies@2x.png"
        />
      );
    }
    if (val === 'mobile-time-tracking-banner') {
      return (
        <StaticImage
          alt={title}
          width={437}
          height={615}
          placeholder="none"
          quality={98}
          src="../../../images/time-tracking/A highly accurate time tracking solution@2x.png"
        />
      );
    }
    if (val === 'timecard-app-banner') {
      return (
        <StaticImage
          alt={title}
          width={437}
          height={615}
          placeholder="none"
          quality={98}
          src="../../../images/time-card-app/A highly accurate time tracking solution@2x.png"
        />
      );
    }
    if (val === 'timeclock-banner') {
      return (
        <StaticImage
          alt={title}
          width={437}
          height={615}
          placeholder="none"
          quality={98}
          src="../../../images/time-clock/A highly accurate time tracking solution@2x.png"
        />
      );
    }
    if (val === 'workhours-banner') {
      return (
        <StaticImage
          alt={title}
          width={437}
          height={615}
          placeholder="none"
          quality={98}
          src="../../../images/work-hours-tracker/A highly accurate time tracking solution@2x.png"
        />
      );
    }
    return null;
  };

  const stateSucceeded = (val) => {
    setValues(val);
  };

  const toggleDeleteInvite = (data) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: data.email }),
    };
    fetch('/delete-invite', requestOptions)
      .then((res) => res.json())
      .then((data) => {
        closeModal();
        setDeleted(true);
        setValues(data);
        setTimeout(() => openModal(), 2000);
      });
  };

  const formSuccessState = (val) => {
    if (val?.action !== 'delete') {
      closeModal();
      setValues(val);
      setTimeout(() => {
        openModal();
      }, 500);
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
              {/* <img src={image} alt={title} width={imageWidth || 500} height={imageHeight || 596} /> */}
              {staticImageSwitch(image, title)}
            </div>
            <EmailForm
              deleteSucceded={deletedInvite}
              changeModal={(val) => formSuccessState(val)}
              placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
              checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
              checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
              checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
              style="productPage"
            />
          </div>
        </div>
        <div className={`${styles.secondBox}`}>
          {/* <img src={image} alt={title} width={imageWidth || 500} height={imageHeight || 596} /> */}
          {staticImageSwitch(image, title)}
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
