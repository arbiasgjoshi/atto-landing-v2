import React from 'react';
import PropTypes from 'prop-types';
import { parseHTML } from '@helpers';
import { contentContainer } from './content.module.scss';

const Content = ({ content }) => (
  <div className={contentContainer}>{content && parseHTML(content)}</div>
);

Content.propTypes = {
  content: PropTypes.string,
};

export default Content;
