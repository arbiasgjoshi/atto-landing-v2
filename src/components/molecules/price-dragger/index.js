import React, { useState } from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';
import Slider from 'rc-slider';
import Draggable from 'react-draggable';

import {
  draggerResults,
  draggerWrapper,
  plansWrapper,
  planCard,
  currency,
  pricingValue,
  plan,
} from './price-dragger.module.scss';
import '@styles/utils/_rcslider.scss';

const PriceDragger = () => {
  const [val, setVal] = useState(1);
  const Intl = useIntl();

  const onDrag = (value) => {
    setVal(value);
  };

  const handleDrag = (value, info) => {
    const proportionalVal = info.x / 10;
    const roundedVal = Math.round(proportionalVal);
    setVal(roundedVal);
  };

  // TODO potentialy in order to properly dragg, have the elements be divided
  // with the total area, the values of min and max be divided with percentage
  // and that achieve the satisfactory results

  // TODO have these features be on mobile, and responive
  // Ask Etnik about the possibilities

  return (
    <div className={draggerWrapper}>
      <Draggable
        scale={1}
        axis="x"
        bounds={{ left: 10, right: 1000 }}
        position={{ x: val * 10, y: 0 }}
        onDrag={(event, info) => handleDrag(event, info)}
      >
        <div className={draggerResults}>
          <h5>
            {val} {Intl.formatMessage({ id: 'pages.miscellaneous.users' })}
          </h5>
        </div>
      </Draggable>
      <Slider min={1} max={100} value={val} onChange={(v) => onDrag(v)} />
      <div className={plansWrapper}>
        <div className={planCard}>
          <h6>{Intl.formatMessage({ id: 'pages.miscellaneous.monthlyPlan' })}</h6>
          <div className={pricingValue}>
            <p className={currency}>$</p>
            <h2>{val * 7}</h2>
            <p className={plan}>{Intl.formatMessage({ id: 'pages.miscellaneous.perMonth' })}</p>
          </div>
        </div>
        <div className={planCard}>
          <h6>{Intl.formatMessage({ id: 'pages.miscellaneous.annualPlan' })}</h6>
          <div className={pricingValue}>
            <p className={currency}>$</p>
            <h2>{val * 5}</h2>
            <p className={plan}>{Intl.formatMessage({ id: 'pages.miscellaneous.perMonth' })}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDragger;
