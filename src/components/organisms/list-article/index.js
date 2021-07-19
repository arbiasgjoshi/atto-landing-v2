import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import CheckList from '@components/molecules/check-list';
import Title from '@components/molecules/title';

import {
  container,
  swap,
  textWrapper,
  descr2,
  secondBlock,
  imageWrapper,
  img,
} from './list-article.module.scss';

const ListArticle = ({
  title,
  description,
  description2,
  list,
  image,
  isSwapped,
  imagePadding = '',
  imageHeight,
  imageWidth,
  textMargin,
}) => {
  const [image2, setImage2] = useState(null); // TODO If we have svg and .img files coming in props. For now!
  useEffect(() => {
    if (typeof image === 'string') {
      setImage2(
        <img width={imageWidth} alt={title} height={imageHeight} className={img} src={image} />
      );
    } else {
      setImage2(image);
    }
  }, []);

  return (
    <div className={`${container} ${isSwapped && swap}`}>
      <div style={{ margin: textMargin }} className={textWrapper}>
        <Title title={title} description={description} leftAlign />
        {description2 && <p className={descr2}>{description2}</p>}
        <CheckList list={list} insideTitle cardStyle="small" />
      </div>
      <div style={{ padding: imagePadding }} className={secondBlock}>
        <div className={imageWrapper}>{image2}</div>
      </div>
    </div>
  );
};

ListArticle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  description2: PropTypes.string,
  list: PropTypes.arrayOf({}),
  image: PropTypes.string,
  isSwapped: PropTypes.bool,
  imagePadding: PropTypes.string,
  imageHeight: PropTypes.number,
  imageWidth: PropTypes.number,
  textMargin: PropTypes.string,
};

export default ListArticle;
