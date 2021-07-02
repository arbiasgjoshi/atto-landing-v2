import React from 'react';
import PropTypes from 'prop-types';

import CheckCard from '@components/molecules/check-card';

import {
  container,
  oldListStyle,
  newListStyle,
  oldWayTitle,
  newWayTitle,
} from './old-vs-new.module.scss';

const OldVsNew = ({ oldList, newList }) => (
  <>
    {/* <div className={titleContainer}></div> */}
    <div className={container}>
      <div className={oldListStyle}>
        <span className={oldWayTitle}>The old way with paper timesheets</span>
        {oldList?.map((title, idx) => (
          <CheckCard title={title} style="oldListStyle" hasCloseIcon key={idx} />
        ))}
      </div>
      <div className={newListStyle}>
        <span className={newWayTitle}>The new way with atto</span>
        {newList?.map((title, idx) => (
          <CheckCard title={title} key={idx} />
        ))}
      </div>
    </div>
  </>
);

OldVsNew.propTypes = {
  oldList: PropTypes.shape(),
  newList: PropTypes.shape(),
};

export default OldVsNew;
