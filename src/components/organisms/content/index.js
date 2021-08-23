import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { parseHTML } from '@helpers';

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';

import { contentContainer, socialsWrapper, buttonWrapper } from './content.module.scss';

const Content = ({ content, title, description, slug }) => {
  const addAnchors = () => {
    const allElements = document.getElementById('blogContent').getElementsByTagName('h2');

    Array.from(allElements).forEach((item, idx) => {
      const gId = `title-${idx}`;
      item.setAttribute('id', gId);
    });
  };
  useEffect(() => {
    setTimeout(() => addAnchors(), 1000);
  }, []);
  return (
    <div className={contentContainer} id="blogContent">
      {content && parseHTML(content)}
      <div className={socialsWrapper}>
        <span>Share this post</span>
        <div className={buttonWrapper}>
          <TwitterShareButton url={`https://attotime.com/blog-template?slug=${slug}`}>
            <TwitterIcon round size={42} bgStyle={{ fill: '#efefef' }} iconFillColor="#999" />
          </TwitterShareButton>
          <FacebookShareButton url={`https://attotime.com/blog-template?slug=${slug}`}>
            <FacebookIcon round size={42} bgStyle={{ fill: '#efefef' }} iconFillColor="#999" />
          </FacebookShareButton>
          <LinkedinShareButton
            title={title}
            summary={description}
            url={`https://attotime.com/blog-template?slug=${slug}`}
          >
            <LinkedinIcon round size={42} bgStyle={{ fill: '#efefef' }} iconFillColor="#999" />
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
};

export default Content;
