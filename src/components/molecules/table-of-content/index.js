import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@components/atoms/icon';

import {
  contentContainer,
  listContainer,
  itemWrapper,
  iconWrapper,
  miniSlider,
  sliderWrapper,
  sliderIconWrapper,
} from './table-of-content.module.scss';

const TableOfContent = ({ list }) => (
  <div className={contentContainer}>
    <h6>Table of Contents</h6>
    <ul className={listContainer}>
      {list.map((item, index) => (
        <li className={itemWrapper}>
          <div className={iconWrapper}>
            <Icon iconClass="arrow-right" fSize={0.8} />
          </div>
          <span>{`${index + 1}. ${item}`}</span>
        </li>
      ))}
    </ul>
    <div className={miniSlider}>
      <p>Tired of paperwork?</p>
      <div className={sliderWrapper}>
        <h5>Try Atto</h5>
        <div className={sliderIconWrapper}>
          <Icon iconClass="arrow-right" fSize={1} />
        </div>
      </div>
    </div>
  </div>
);

TableOfContent.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
};

export default TableOfContent;
