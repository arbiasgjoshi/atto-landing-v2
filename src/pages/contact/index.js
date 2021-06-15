import React from 'react';
import PropTypes from 'prop-types';

import HeaderComponent from '@components/molecules/header';
import SEO from '@components/molecules/seo';
import Divider from '@components/atoms/divider';
import MainTitleCard from '@components/molecules/main-title-card';
import HeartIcon from '@images/heart-icon@2x.png';
import ContactForm from '@components/organisms/contact-form';

import Faq from '@components/organisms/faq';
import FooterComponent from '@components/molecules/footer';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import { FooterLinks, faqList } from '@locale/en.js';

import { container } from '@styles/main.module.scss';
import { middleAlign } from './contact-page.module.scss';

const Contact = () => {
  const form = null;
  return (
    <div className={container}>
      <SEO title="Contact Us" />
      <HeaderComponent />
      <div className={middleAlign}>
        <img src={HeartIcon} width="75" height="75" alt="Heart" />
      </div>
      <MainTitleCard
        title="You're all that matters!"
        subtitle="Get in touch. We’re ready to answer all your questions."
      />
      <ContactForm />
      <Divider />
      <Faq list={faqList} />
      <SubscribeBanner
        bannerImage
        title="There’s no time to waste!"
        subtitle="Try Atto, free for 14 days"
        placeholder="Type your email"
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
        style="pricing"
      />
      <FooterComponent FooterLinks={FooterLinks} />
    </div>
  );
};

export default Contact;
