import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Icon from '@components/atoms/icon';

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';

import {
  contentContainer,
  listContainer,
  itemWrapper,
  iconWrapper,
  miniSlider,
  sliderWrapper,
  sliderIconWrapper,
  socialsWrapper,
} from './table-of-content.module.scss';

const TableOfContent = ({ toggleModal }) => {
  const [list, setList] = useState();

  const renderList = () => {
    const blog = document.getElementById('blogContent');
    const el = blog.getElementsByTagName('h2');
    const newListItems = [];

    Array.from(el).forEach((item) => {
      newListItems.push(item.innerHTML);
    });

    setList(newListItems);
  };
  useEffect(() => {
    setTimeout(() => renderList(), 1000);
  }, []);

  const jumpToHeader = (val) => {
    console.log(val);
  };

  return (
    <div className={contentContainer}>
      <h6>Table of Contents</h6>
      <div className={listContainer}>
        {list &&
          list.map((item, index) => (
            <button className={itemWrapper} type="button" onClick={() => jumpToHeader(index)}>
              <div className={iconWrapper}>
                <Icon iconClass="arrow-right" fSize={0.8} />
              </div>
              <span>{`${index + 1}. ${item}`}</span>
            </button>
          ))}
      </div>
      <div className={miniSlider}>
        <p>Tired of paperwork?</p>
        <button type="button" className={sliderWrapper} onClick={() => toggleModal()}>
          <h5>Try Atto</h5>
          <div className={sliderIconWrapper}>
            <Icon iconClass="arrow-right" fSize={1} />
          </div>
        </button>
      </div>
      <div className={socialsWrapper}>
        <TwitterShareButton>
          <TwitterIcon round size={42} />
        </TwitterShareButton>
        <FacebookShareButton>
          <FacebookIcon round size={42} />
        </FacebookShareButton>
        <LinkedinShareButton>
          <LinkedinIcon round size={42} />
        </LinkedinShareButton>
      </div>
    </div>
  );
};

TableOfContent.propTypes = {
  toggleModal: PropTypes.func,
};

export default TableOfContent;
