import React from 'react';

import { graphql } from 'gatsby';
import Divider from '@components/atoms/divider';
import Seo from '@components/molecules/seo';
import { useIntl } from 'gatsby-plugin-react-intl';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import SubscribeBanner from '@components/molecules/subscribe-banner';

import { container } from '@styles/main.module.scss';
import { privacyPolicyStyle } from '../privacy/privacy.module.scss';

const Terms = ({ data }) => {
  const Intl = useIntl();

  const renderPrivacyPolicy = (lang) => {
    if (lang === 'fr') {
      return (
        <div
          className={privacyPolicyStyle}
          dangerouslySetInnerHTML={{ __html: data.allIubendaDocument.nodes[1].termsAndConditions }}
        />
      );
    }
    if (lang === 'es') {
      return (
        <div
          className={privacyPolicyStyle}
          dangerouslySetInnerHTML={{ __html: data.allIubendaDocument.nodes[2].termsAndConditions }}
        />
      );
    }
    if (lang === 'de') {
      return (
        <div
          className={privacyPolicyStyle}
          dangerouslySetInnerHTML={{ __html: data.allIubendaDocument.nodes[3].termsAndConditions }}
        />
      );
    }
    return (
      <div
        className={privacyPolicyStyle}
        dangerouslySetInnerHTML={{ __html: data.allIubendaDocument.nodes[0].termsAndConditions }}
      />
    );
  };
  return (
    <>
      <div className={`${container}`}>
        <Seo title="Terms & Conditions" />
        <Header />
        {renderPrivacyPolicy(Intl.locale)}
        <SubscribeBanner
          title="Ready to put Atto to work on your construction sites?"
          placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
          checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
          checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
          checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
        />
        <Footer />
      </div>
    </>
  );
};

export const query = graphql`
  query TermsQuery {
    allIubendaDocument {
      nodes {
        documentId
        termsAndConditions
      }
    }
  }
`;

export default Terms;
