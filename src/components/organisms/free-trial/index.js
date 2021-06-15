import React from 'react';
import PropTypes from 'prop-types';

import Input from '@components/atoms/input';
import Button from '@components/atoms/button';
import Icon from '@components/atoms/icon';
import CheckCard from '@components/molecules/check-card';

import {
  container,
  firstBox,
  listWrapper,
  ticksWrapper,
  tickItem,
  mobileOnly,
} from './free-trial.module.scss';

const FreeTrial = ({ title, description, list = [] }) => (
  <>
    <h4 className={mobileOnly}>{description}</h4>
    <div className={container}>
      <div className={firstBox}>
        <h3>{title}</h3>
        <h4>{description}</h4>
        <Input placeholder="Type your email" />
        <Button
          btnText="Start a Free Trial - 14 Days Free"
          btnMobileText="Start a Free 14-Day Trial"
          btnStyle="black"
        />
        <div className={ticksWrapper}>
          <div className={tickItem}>
            <Icon iconClass="tick" />
            <span>No credit card required</span>
          </div>
          <div className={tickItem}>
            <Icon iconClass="tick" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
      <div className={listWrapper}>
        {list.map(({ title: listItemTitle }) => (
          <CheckCard title={listItemTitle} />
        ))}
      </div>
    </div>
  </>
);

FreeTrial.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  list: PropTypes.arrayOf({}),
};

export default FreeTrial;
