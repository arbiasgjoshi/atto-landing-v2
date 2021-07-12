import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Accordion from '@components/organisms/accordion';
import { motion } from 'framer-motion';

import {
  container,
  swap,
  firstBox,
  titleContainer,
  secondBox,
  imageWrapper,
  listStyle,
} from './accordion-article.module.scss';

const AccordionArticle = ({
  title,
  list,
  image,
  isSwapped,
  imagePadding,
  imageWidth,
  imageHeight,
  boxHeight,
}) => {
  // const [clicked, setClicked] = useState(0);
  const [articleImage, setArticleImage] = useState(image);
  const [changedImage, setChanged] = useState(false);
  const [imgWidth, setImgWidth] = useState(imageWidth);
  const [imgHeight, setImgHeight] = useState(imageHeight);

  const toggleImage = (imgToggle) => {
    if (!imgToggle) {
      setArticleImage(image);
      setImgWidth(imageWidth);
      setImgHeight(imageHeight);
    } else {
      setArticleImage(imgToggle.src);
      setImgWidth(imgToggle.imageWidth);
      setImgHeight(imgToggle.imageHeight);
    }
  };

  return (
    <div className={`${container} ${isSwapped && swap}`}>
      <div className={firstBox}>
        {title && (
          <div className={titleContainer}>
            <h2>{title}</h2>
          </div>
        )}
        <div className={listStyle}>
          <Accordion
            items={list}
            industries
            arrowIcon
            onSetAccordionImage={(val) => val && toggleImage(val)}
          />
        </div>
      </div>
      <div className={secondBox}>
        <motion.div
          style={{ padding: imagePadding, height: boxHeight }}
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1 },
            collapsed: { opacity: 0 },
          }}
          transition={{ duration: '0.15' }}
          className={imageWrapper}
        >
          <img src={articleImage} alt={title} width={imgWidth} height={imgHeight} />
        </motion.div>
      </div>
    </div>
  );
};

AccordionArticle.propTypes = {
  title: PropTypes.string,
  list: PropTypes.shape(),
  isSwapped: PropTypes.bool,
  imageHeight: PropTypes.string,
  imageWidth: PropTypes.string,
  boxHeight: PropTypes.string,
  imagePadding: PropTypes.string,
  image: PropTypes.string,
};

export default AccordionArticle;
