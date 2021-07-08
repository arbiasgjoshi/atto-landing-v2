import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'gatsby-plugin-react-intl';

import Button from '@components/atoms/button';

import {
  container,
  headerContainer,
  mainTitle,
  smallParagraph,
  paragraphStyle,
  imageWrapper,
  imageParagraphStyle,
} from './main-title-card.module.scss';

const MainTitleCard = ({
  title,
  subtitle,
  paragraph,
  toggleModal,
  hasParagraph = false,
  showButton = false,
  maxParagraphWidth = null,
  maxWidth = null,
  image = null,
}) => {
  const Intl = useIntl();
  return (
    <div style={maxWidth && { maxWidth }} className={container}>
      <div className={headerContainer}>
        {hasParagraph && <h6 className={smallParagraph}>{paragraph}</h6>}
        {image ? (
          <div className={imageWrapper}>
            <img src={image} alt="Main title" />
          </div>
        ) : (
          <h1 className={mainTitle}>{title}</h1>
        )}
        <p
          className={`${paragraphStyle} ${image && imageParagraphStyle}`}
          style={maxParagraphWidth && { maxWidth: maxParagraphWidth }}
        >
          {subtitle}
        </p>
      </div>
      {showButton && (
        <Button
          btnText={Intl.formatMessage({ id: 'pages.miscellaneous.startFreeTrial' })}
          btnStyle="black"
          onBtnClick={() => toggleModal()}
        />
      )}
    </div>
  );
};

MainTitleCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  paragraph: PropTypes.string,
  hasParagraph: PropTypes.bool,
  showButton: PropTypes.bool,
  maxParagraphWidth: PropTypes.number,
  maxWidth: PropTypes.number,
  image: PropTypes.shape({}),
};

export default MainTitleCard;
