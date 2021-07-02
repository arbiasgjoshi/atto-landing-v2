import React from 'react';

import { useIntl } from 'gatsby-plugin-react-intl';

import NumberCard from '@components/atoms/number-card';
import Cover from './cover';

import { container, cardList } from './growth-numbers.module.scss';

const GrowthNumbers = ({ title }) => {
  const Intl = useIntl();
  return (
    <div className={container}>
      <Cover titleValue={title} />
      <div className={cardList}>
        <NumberCard
          hasPadding
          title="750M +"
          description={Intl.formatMessage({ id: 'pages.miscellaneous.hoursTracked' })}
        />
        <NumberCard
          hasPadding
          hasBorder
          title="10k +"
          description={Intl.formatMessage({ id: 'pages.miscellaneous.companiesTrustUs' })}
        />
        <NumberCard
          hasPadding
          hasBorder
          title="1.2M +"
          description={Intl.formatMessage({ id: 'pages.miscellaneous.timesheetsGenerated' })}
        />
      </div>
    </div>
  );
};

export default GrowthNumbers;
