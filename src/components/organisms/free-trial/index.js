import React from 'react';
import PropTypes from 'prop-types';

import Input from '@components/atoms/input';
import Button from '@components/atoms/button';
import Icon from '@components/atoms/icon';
import CheckCard from '@components/molecules/check-card';
import { useIntl } from 'gatsby-plugin-react-intl';

import {
  container,
  firstBox,
  listWrapper,
  ticksWrapper,
  tickItem,
  mobileOnly,
} from './free-trial.module.scss';

const FreeTrial = ({ title, description, list = [] }) => {
  const Intl = useIntl();

  return (
    <>
      <h4 className={mobileOnly}>{description}</h4>
      <div className={container}>
        <div className={firstBox}>
          <h3>{title}</h3>
          <h4>{description}</h4>
          <Input placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })} />
          <Button
            btnText={Intl.formatMessage({ id: 'pages.miscellaneous.freeTrial14Days' })}
            btnMobileText={Intl.formatMessage({ id: 'pages.miscellaneous.start14Days' })}
            btnStyle="black"
          />
          <div className={ticksWrapper}>
            <div className={tickItem}>
              <Icon iconClass="tick" />
              <span>{Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}</span>
            </div>
            <div className={tickItem}>
              <Icon iconClass="tick" />
              <span>{Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}</span>
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
};

FreeTrial.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  list: PropTypes.arrayOf({}),
};

export default FreeTrial;
