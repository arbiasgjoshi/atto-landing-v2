import React from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';
import PropTypes from 'prop-types';

import Title from '@components/molecules/title';
import Divider from '@components/atoms/divider';

import Accordion from '@components/organisms/accordion';

import { questionsContainer, listStyle } from './faq.module.scss';

const Faq = ({ list }) => {
  const Intl = useIntl();
  return (
    <div className={questionsContainer}>
      <Title
        title={Intl.formatMessage({
          id: 'pages.pricing.faqTitle',
        })}
      />
      <Divider className="style2" />
      <div className={listStyle}>
        <Accordion items={list} arrowIcon noIconPadding />
      </div>
      <Divider />
    </div>
  );
};

export default Faq;

Faq.propTypes = {
  list: PropTypes.arrayOf({}),
};
