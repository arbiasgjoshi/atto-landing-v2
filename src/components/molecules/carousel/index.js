import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';

import ArrowRight from '@images/arrow-right.svg';
import ArrowLeft from '@images/arrow-left.svg';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.scss';
import { btnWrapper, leftAligned, rightAligned, largeStyle } from './carousel.module.scss';

const CarouselComponent = ({ children, large }) => (
  <Carousel
    selectedItem={1}
    showThumbs={false}
    showStatus={false}
    renderArrowPrev={(onClickHandler, hasPrev) =>
      hasPrev && (
        <button
          className={`${btnWrapper} ${leftAligned} ${large && largeStyle}`}
          type="button"
          onClick={onClickHandler}
        >
          <ArrowLeft />
        </button>
      )
    }
    renderArrowNext={(onClickHandler, hasNext) =>
      hasNext && (
        <button
          className={`${btnWrapper} ${rightAligned} ${large && largeStyle} `}
          type="button"
          onClick={onClickHandler}
        >
          <ArrowRight />
        </button>
      )
    }
  >
    {children}
  </Carousel>
);

CarouselComponent.propTypes = {
  children: PropTypes.node,
  itemsToScroll: PropTypes.number,
  itemsToShow: PropTypes.number,
  large: PropTypes.bool,
};

export default CarouselComponent;
