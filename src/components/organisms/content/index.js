import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { parseHTML } from '@helpers';
import { contentContainer } from './content.module.scss';

const Content = ({ content }) => {
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
    </div>
  );
};

Content.propTypes = {
  content: PropTypes.string,
};

export default Content;
