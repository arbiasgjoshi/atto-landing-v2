import React from 'react';
import CheckCard from '@components/molecules/check-card';

import { container, item } from './tick-card-list.module.scss';

const TickCardList = ({ list }) => (
  <div className={container}>
    {list.map((title) => (
      <div className={item}>
        <CheckCard title={title} style="centerAligned" />
      </div>
    ))}
  </div>
);

export default TickCardList;
