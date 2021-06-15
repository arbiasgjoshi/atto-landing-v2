import React from 'react';
import PropTypes from 'prop-types';

import CommonQuestionsIcon from '@images/common-questions-icon.svg';
import Accordion from '@components/organisms/accordion';

import './commonCollapsible.scss';

import {
  container,
  imageContainer,
  firstBox,
  secondBox,
  swap,
} from './common-questions.module.scss';

const CommonQuestions = ({ title = 'Common Questions', list, isSwapped }) => (
  <div className={`${container} ${isSwapped && swap}`}>
    <div className={firstBox}>
      <div className={imageContainer}>
        <CommonQuestionsIcon />
      </div>
      <h2>{title}</h2>
    </div>
    <div className={secondBox}>
      <Accordion items={list} />
    </div>
  </div>
);

CommonQuestions.propTypes = {
  title: PropTypes.string,
  list: PropTypes.shape(),
  isSwapped: PropTypes.bool,
};

export default CommonQuestions;
