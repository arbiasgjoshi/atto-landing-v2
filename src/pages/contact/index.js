import React from 'react';

import HeaderComponent from '@components/molecules/header';
import Seo from '@components/molecules/seo';
import { useIntl } from 'gatsby-plugin-react-intl';
import Divider from '@components/atoms/divider';
import MainTitleCard from '@components/molecules/main-title-card';
import HeartIcon from '@images/heart-icon@2x.png';
import ContactForm from '@components/organisms/contact-form';

import Faq from '@components/organisms/faq';
import FooterComponent from '@components/molecules/footer';
import SubscribeBanner from '@components/molecules/subscribe-banner';

import { container } from '@styles/main.module.scss';
import { middleAlign } from './contact-page.module.scss';

const Contact = () => {
  const Intl = useIntl();

  const faqList = [
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.faqOneTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.pricing.faqOneDesc',
      }),
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.faqTwoTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.pricing.faqTwoDesc',
      }),
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.faqThreeTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.pricing.faqThreeDesc',
      }),
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.faqFourTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.pricing.faqFourDesc',
      }),
    },
  ];
  return (
    <div className={container}>
      <Seo
        title={Intl.formatMessage({ id: 'pages.contact.metaTitle' })}
        description={Intl.formatMessage({ id: 'pages.contact.metaDescription' })}
      />
      <HeaderComponent />
      <div className={middleAlign}>
        <img src={HeartIcon} width="75" height="75" alt="Heart" />
      </div>
      <MainTitleCard
        title={Intl.formatMessage({ id: 'pages.allFeatures.subscribeBanner' })}
        subtitle={Intl.formatMessage({ id: 'pages.allFeatures.subscribeBannerDesc' })}
      />
      <ContactForm />
      <Divider />
      <Faq list={faqList} />
      <SubscribeBanner
        bannerImage
        title={Intl.formatMessage({ id: 'pages.pricing.subscribeBanner' })}
        subtitle={Intl.formatMessage({ id: 'pages.pricing.subscribeBannerDesc' })}
        placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
        checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
        checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
        checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
        style="pricing"
      />
      <FooterComponent />
    </div>
  );
};

export default Contact;
