import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './story.module.scss';
import stars from '../../../images/stars.png';

const Story = ({ img, paragraph, author, className = '' }) => (
  <div className={`${styles.container} ${styles[className]}`}>
    <div className={styles.imageContainer}>
      <img alt={`img-${author}`} width={250} height={400} src={img} />
    </div>
    <div className={styles.paragraphContainer}>
      <img alt={`star-${author}`} className={styles.starsPic} src={stars} />
      <h4>{paragraph}</h4>
      <h6>{author}</h6>
    </div>
  </div>
);

Story.propTypes = {
  img: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Story;
