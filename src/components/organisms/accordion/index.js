/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import Icon from '@components/atoms/icon';
import { StaticImage } from 'gatsby-plugin-image';
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

  const imgStaticSwitch = (val) => {
    if (val === 'img-one-locale-en') {
      return (
        <StaticImage
          alt="Atto - time and location tracking app generating timesheets"
          src="../../../images/en/overview/Atto - time and location tracking app generating timesheets@2x.png"
          width="438"
          height="597"
          quality={95}
          placeholder="none"
        />
      );
    }
    if (val === 'img-one-locale-de') {
      return (
        <StaticImage
          alt="Atto - time and location tracking app generating timesheets"
          src="../../../images/de/overview/DE_Atto - time and location tracking app generating timesheet@2x.png"
          width="438"
          height="597"
          quality={95}
          placeholder="none"
        />
      );
    }
    if (val === 'img-one-locale-es') {
      return (
        <StaticImage
          alt="Atto - time and location tracking app generating timesheets"
          src="../../../images/es/overview/ES_Atto - time and location tracking app generating timesheets@2x.png"
          width="438"
          height="597"
          quality={95}
          placeholder="none"
        />
      );
    }
    if (val === 'img-one-locale-fr') {
      return (
        <StaticImage
          alt="Atto - time and location tracking app generating timesheets"
          src="../../../images/fr/overview/FR_Atto - time and location tracking app generating timesheets@2x.png"
          width="438"
          height="597"
          quality={95}
          placeholder="none"
        />
      );
    }

    if (val === 'img-two-locale-en') {
      return (
        <StaticImage
          src="../../../images/en/overview/Know where your team is in real-time@2x.png"
          alt="Know where your team is in real-time@2x.png"
          quality={95}
          width="531"
          height="650"
          placeholder="none"
        />
      );
    }
    if (val === 'img-two-locale-de') {
      return (
        <StaticImage
          src="../../../images/de/overview/DE_Know where your team is in real-time@2x.png"
          alt="DE_Know where your team is in real-time@2x.png"
          quality={95}
          width="531"
          height="650"
          placeholder="none"
        />
      );
    }
    if (val === 'img-two-locale-es') {
      return (
        <StaticImage
          src="../../../images/es/overview/ES_Know where your team is in real-time@2x.png"
          alt="ES_Know where your team is in real-time@2x.png"
          quality={95}
          width="531"
          height="650"
          placeholder="none"
        />
      );
    }
    if (val === 'img-two-locale-fr') {
      return (
        <StaticImage
          src="../../../images/fr/overview/FR_Know where your team is in real-time@2x.png"
          alt="FR_Know where your team is in real-time@2x.png"
          quality={95}
          width="531"
          height="650"
          placeholder="none"
        />
      );
    }

    if (val === 'img-three-locale-en') {
      return (
        <StaticImage
          src="../../../images/en/overview/Stay in the loop as work happens@2x.png"
          alt="Stay in the loop as work happens@2x.png"
          quality={95}
          width="471"
          height="597"
          placeholder="none"
        />
      );
    }
    if (val === 'img-three-locale-de') {
      return (
        <StaticImage
          src="../../../images/de/overview/DE_Stay in the loop as work happens@2x.png"
          alt="Stay in the loop as work happens@2x.png"
          quality={95}
          width="471"
          height="597"
          placeholder="none"
        />
      );
    }
    if (val === 'img-three-locale-es') {
      return (
        <StaticImage
          src="../../../images/es/overview/ES_Stay in the loop as work happens@2x.png"
          alt="Stay in the loop as work happens@2x.png"
          quality={95}
          width="471"
          height="597"
          placeholder="none"
        />
      );
    }
    if (val === 'img-three-locale-fr') {
      return (
        <StaticImage
          src="../../../images/fr/overview/FR_Stay in the loop as work happens@2x.png"
          alt="Stay in the loop as work happens@2x.png"
          quality={95}
          width="471"
          height="597"
          placeholder="none"
        />
      );
    }

    if (val === 'img-four-locale-en') {
      return (
        <StaticImage
          src="../../../images/en/overview/Relax with timesheets on time, every time@2x.png"
          alt="Relax with timesheets on time, every time"
          quality={95}
          width="408"
          height="597"
          placeholder="none"
        />
      );
    }
    if (val === 'img-four-locale-de') {
      return (
        <StaticImage
          src="../../../images/de/overview/DE_Relax with timesheets on time, every time@2x.png"
          alt="Relax with timesheets on time, every time"
          quality={95}
          width="408"
          height="597"
          placeholder="none"
        />
      );
    }
    if (val === 'img-four-locale-es') {
      return (
        <StaticImage
          src="../../../images/es/overview/ES_Relax with timesheets on time, every time@2x.png"
          alt="Relax with timesheets on time, every time"
          quality={95}
          width="408"
          height="597"
          placeholder="none"
        />
      );
    }
    if (val === 'img-four-locale-fr') {
      return (
        <StaticImage
          src="../../../images/fr/overview/FR_Relax with timesheets on time, every time@2x.png"
          alt="Relax with timesheets on time, every time"
          quality={95}
          width="408"
          height="597"
          placeholder="none"
        />
      );
    }
  };

  return (
    <>
      <motion.header initial={false} onClick={() => setExpanded(i === expanded ? null : i)}>
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
                    {/* <img src={featureImage} alt={title} /> */}
                    {imgStaticSwitch(featureImage)}
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
