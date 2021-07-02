import React from 'react';
import PropTypes from 'prop-types';
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

  const subscribeBanner = () => {
    if (Intl.locale === 'en') {
      return (
        <StaticImage
          src="../../../images/en/overview/What are you waiting for_ Time is ticking!@2x.png"
          alt="What are you waiting for. Time is ticking"
          width={1140}
          height={470}
          quality={95}
          placeholder="none"
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
          quality={95}
          placeholder="none"
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
          quality={95}
          placeholder="none"
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
          quality={95}
          placeholder="none"
        />
      );
    }
  };
  return (
    <div className={`${bannerWrapper} ${bannerImage && hasImage}`} style={{ padding: formPadding }}>
      {bannerImage && <div className={imgWrap}>{subscribeBanner()}</div>}
      <div className={textWrapper}>
        {style === 'pricing' ? <h2>{title}</h2> : <h3>{title}</h3>}
        {subtitle && <p>{subtitle}</p>}
      </div>
      <EmailForm
        placeholder={placeholder}
        checkItemOne={checkItemOne}
        checkItemTwo={checkItemTwo}
        checkItemThree={checkItemThree}
      />
    </div>
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
