import React from 'react';

import NumberCard from '@components/atoms/number-card';
import Cover from './cover';

import { container, cardList } from './growth-numbers.module.scss';

const GrowthNumbers = () => (
  <div className={container}>
    <Cover />
    <div className={cardList}>
      <NumberCard hasPadding title="150,000+" description="Employees have signed up" />
      <NumberCard hasPadding hasBorder title="10,000,000+" description="Hours tracked accurately" />
      <NumberCard hasPadding hasBorder title="500,000+" description="Jobs completed" />
    </div>
  </div>
);

export default GrowthNumbers;
