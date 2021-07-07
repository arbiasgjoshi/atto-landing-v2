import React from 'react';

import { graphql } from 'gatsby';
import Divider from '@components/atoms/divider';
import Seo from '@components/molecules/seo';
import { useIntl } from 'gatsby-plugin-react-intl';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import SubscribeBanner from '@components/molecules/subscribe-banner';

import { container } from '@styles/main.module.scss';
// import { FooterLinks } from '@locale/en.js';

const Terms = () => {
  // const { site } = useStaticQuery(
  //   graphql`
  //     query MyQuery {
  //       iubendaDocument(documentId: { eq: "77119290" }) {
  //         documentId
  //         termsAndConditions
  //       }
  //     }
  //   `
  // );

  const Intl = useIntl();
  return (
    <>
      <div className={`${container}`}>
        <Seo title="Terms & Conditions" />
        <Header />
        <Divider className="style12" />
        <div></div>
        <SubscribeBanner
          title="Ready to put Atto to work on your construction sites?"
          placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
          checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
          checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
          checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
        />
        {/* <div dangerouslySetInnerHTML={{ __html: data.iubendaDocument.privacyPolicy }} /> */}
        <Footer />
      </div>
    </>
  );
};

export default Terms;
