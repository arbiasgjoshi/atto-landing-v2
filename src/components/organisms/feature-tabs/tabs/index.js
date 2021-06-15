import React from 'react';
import PropTypes from 'prop-types';
import { container, listContainer, isActive, item, sideBorder } from './tabs.module.scss';

const Tabs = ({ list, handleClick, activeIndex }) => (
  <div className={container}>
    <div className={listContainer}>
      {list?.map((title, index) => (
        <>
          <div
            onClick={() => handleClick(index)}
            className={`${item} ${index === activeIndex && isActive}`}
          >
            <h5 key={index}>{title}</h5>
          </div>
          <span className={sideBorder} />
        </>
      ))}
    </div>
  </div>
);

Tabs.propTypes = {
  list: PropTypes.arrayOf({}),
  handleClick: PropTypes.func,
  activeIndex: PropTypes.string,
};

export default Tabs;
