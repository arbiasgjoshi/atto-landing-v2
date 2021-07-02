/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import Icon from '@components/atoms/icon';

import { Link } from 'gatsby-plugin-react-intl';
import { motion, AnimatePresence } from 'framer-motion';

import {
  triggerItemWrap,
  activeClass,
  accordionItem,
  iconItem,
  industryIcon,
  industryAccordion,
  svgWrap,
  adjustPadding,
  featureImgWrapper,
  contentWrapper,
  isMenu,
} from './accordion.module.scss';

const triggerItem = (val, opened, itemIcon, hasArrow, menuStyle, url) => (
  <div className={`${triggerItemWrap} ${menuStyle && isMenu} `}>
    {itemIcon && <div className={svgWrap}>{itemIcon}</div>}
    {!url ? (
      <>
        <motion.h5
          initial={false}
          className={opened ? activeClass : null}
          transition={{ duration: 0.1 }}
        >
          {val}
        </motion.h5>
        {opened ? (
          <div className={`${iconItem} ${hasArrow && industryIcon}`}>
            <Icon iconClass={hasArrow ? 'arrow-up' : 'minus'} />
          </div>
        ) : (
          <div className={`${iconItem} ${hasArrow && industryIcon}`}>
            <Icon iconClass={hasArrow ? 'arrow-down' : 'plus'} />
          </div>
        )}
      </>
    ) : (
      <Link to={url}>
        <h5>{val}</h5>
      </Link>
    )}
  </div>
);

const Accordion = ({
  i,
  icon,
  expanded,
  expandOnInit,
  setExpanded,
  content,
  featureImage,
  title,
  isMenu,
  url = false,
  faq,
  hasArrow,
  featureTabs,
}) => {
  // const [toggleOpen, setToggleOpen] = useState(expandOnInit);
  const isOpen = i === expanded;

  return (
    <>
      <motion.header initial={false} onClick={() => setExpanded(i)}>
        {triggerItem(title, isOpen, icon, hasArrow, isMenu, url)}
      </motion.header>
      {!url && (
        <AnimatePresence initial={false} exitBeforeEnter>
          {isOpen && (
            <motion.section
              key="content"
              style={{ overflow: 'hidden' }}
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.1, ease: 'easeInOut' }}
            >
              <motion.div
                initial="collapsed"
                animate="open"
                variants={{
                  open: { translateY: '0', opacity: 1 },
                  collapsed: { translateY: '2rem', opacity: 0 },
                }}
                transition={{ delay: 0.1 }}
                className={contentWrapper}
              >
                {!faq ? <p>{content}</p> : <>{content}</>}
                {featureTabs && featureImage && (
                  <div className={featureImgWrapper}>
                    <img src={featureImage} alt={title} />
                  </div>
                )}
              </motion.div>
            </motion.section>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

const FramerAccordion = ({
  items,
  industries = false,
  noIconPadding = false,
  featureTabs = false,
  mainMenuStyle = false,
  isExpanded = 0,
  arrowIcon,
  type,
  onSetAccordionImage,
}) => {
  const [expanded, setExpanded] = useState(isExpanded);

  const onAccordionChange = (val, accordionImage) => {
    setExpanded(val);
    if (accordionImage) {
      onSetAccordionImage(accordionImage);
    }
  };

  return (
    <div
      className={`${accordionItem} ${industries && industryAccordion} ${
        noIconPadding && adjustPadding
      }`}
    >
      {items.map((item, i) => (
        <Accordion
          i={i}
          key={i}
          expanded={expanded}
          expandOnInit={isExpanded}
          industries={industries}
          featureTabs={featureTabs}
          isMenu={mainMenuStyle}
          type={type}
          hasArrow={arrowIcon}
          setExpanded={(index) => onAccordionChange(index, item.image)}
          icon={item.icon}
          url={item.url}
          featureImage={item.featureImage}
          content={item.description}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default FramerAccordion;
