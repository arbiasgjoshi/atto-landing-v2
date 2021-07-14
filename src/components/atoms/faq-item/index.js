import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';

import { item, itemTitle, collapsed, plus } from './faq-item.module.scss';

const FaqItem = ({ title, paragraph, toggled: defaultToggle }) => {
  const [toggled, setToggled] = useState(defaultToggle);

  return (
    <div className={item}>
      <div className={itemTitle}>
        <h5>{title}</h5>
        <span onClick={() => setToggled(!toggled)} className={plus}>
          {toggled ? (
            <StaticImage src="../../../images/minus@2x.png" quality={98} placeholder="blurred" />
          ) : (
            <StaticImage
              src="../../../images/plus-black@2x.png"
              quality={98}
              placeholder="blurred"
            />
          )}
        </span>
      </div>
      <p className={`${!toggled && collapsed}`}>{paragraph}</p>
    </div>
  );
};

export default FaqItem;

FaqItem.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  toggled: PropTypes.bool,
};
