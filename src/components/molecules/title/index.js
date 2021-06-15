import React from 'react';
import PropTypes from 'prop-types';

import {
  container,
  titleWrapper,
  descriptionWrapper,
  leftAligned,
  smallTitleStyle,
  notMiddleAligned,
  secondBodyStyle,
  smallMargin,
  lighterTitle,
} from './title.module.scss';

const Title = ({
  smallTitle,
  smallerMargin,
  title,
  notCentered,
  description,
  bodyStyle,
  leftAlign = false,
  maxWidth = '',
  marginBottom = '',
  maxDescriptionWidth,
}) => {
  const bodyStyleRendering = (val) => {
    let classNames = descriptionWrapper;

    if (val === 'secondBodyStyle') {
      classNames += ` ${secondBodyStyle}`;
    }

    return classNames;
  };
  return (
    <div className={`${container} ${leftAlign && leftAligned} ${notCentered && notMiddleAligned}`}>
      {smallTitle && <p className={smallTitleStyle}>{smallTitle}</p>}
      <h2
        style={{ maxWidth, marginBottom }}
        className={`${titleWrapper} ${smallTitle && lighterTitle}  ${smallerMargin && smallMargin}`}
      >
        {title}
      </h2>
      {description && (
        <p
          style={maxDescriptionWidth && { maxWidth: maxDescriptionWidth }}
          className={bodyStyleRendering(bodyStyle)}
        >
          {description}
        </p>
      )}
    </div>
  );
};

Title.propTypes = {
  smallTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  leftAlign: PropTypes.bool,
  smallerMargin: PropTypes.bool,
  notCentered: PropTypes.bool,
  bodyStyle: PropTypes.string,
  maxWidth: PropTypes.string,
  maxDescriptionWidth: PropTypes.string,
  marginBottom: PropTypes.string,
};

export default Title;
