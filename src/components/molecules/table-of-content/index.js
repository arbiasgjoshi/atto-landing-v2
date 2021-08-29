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
  buttonWrapper,
} from './table-of-content.module.scss';

const TableOfContent = ({ toggleModal, slug, title, description }) => {
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
    const element = document.getElementById(val);
    const headerOffset = 90;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <div className={contentContainer}>
      <h6>Table of Contents</h6>
      <div className={listContainer}>
        {list &&
          list.map((item, index) => (
            <button
              className={itemWrapper}
              type="button"
              onClick={() => jumpToHeader(`title-${index}`)}
            >
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
        <span>Share this post</span>
        <div className={buttonWrapper}>
          <TwitterShareButton url={`https://attotime.com/blog-template?slug=${slug}`}>
            <TwitterIcon round size={34} bgStyle={{ fill: '#efefef' }} iconFillColor="#999" />
          </TwitterShareButton>
          <FacebookShareButton url={`https://attotime.com/blog-template?slug=${slug}`}>
            <FacebookIcon round size={34} bgStyle={{ fill: '#efefef' }} iconFillColor="#999" />
          </FacebookShareButton>
          <LinkedinShareButton
            title={title}
            summary={description}
            url={`https://attotime.com/blog-template?slug=${slug}`}
          >
            <LinkedinIcon round size={34} bgStyle={{ fill: '#efefef' }} iconFillColor="#999" />
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
};

TableOfContent.propTypes = {
  toggleModal: PropTypes.func,
  slug: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default TableOfContent;
