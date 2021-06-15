import React from 'react';
import PropTypes from 'prop-types';

import Input from '@components/atoms/input';
import Button from '@components/atoms/button';

import { formWrapper } from './form.module.scss';

const SubscribeForm = ({ placeholder }) => (
  <div className={formWrapper}>
    <Input placeholder={placeholder} />
    <Button btnText="Start a Free Trial" btnStyle="black" />
  </div>
);

SubscribeForm.propTypes = {
  placeholder: PropTypes.string,
};

export default SubscribeForm;
