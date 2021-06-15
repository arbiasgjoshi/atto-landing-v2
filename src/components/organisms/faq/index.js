import React from 'react';
import Collapsible from 'react-collapsible';
import PropTypes from 'prop-types';

import Title from '@components/molecules/title';
import Icon from '@components/atoms/icon';
import Divider from '@components/atoms/divider';
// import { Tabbordion, TabPanel, TabLabel, TabContent } from 'react-tabbordion';

// import '@components/organisms/accordion-article/accordionCollapsible.scss';
// import Collapsible from 'react-collapsible';
import 'rc-collapse/assets/index.css';

import { questionsContainer, listStyle, triggerItemWrap } from './faq.module.scss';

const Faq = ({ list }) => {
  const triggerItem = (val) => (
    <div className={triggerItemWrap}>
      <h5>{val}</h5>
      <Icon iconClass="arrow-down" />
    </div>
  );

  return (
    <div className={questionsContainer}>
      <Title title="Frequently asked questions" />
      <Divider className="style2" />
      <div className={listStyle}>
        {/* <Tabbordion>

        </Tabbordion> */}
        {list.map(({ title, paragraph }, index) => (
          <>
            <Collapsible trigger={triggerItem(title)} transitionTime={200}>
              <p>{paragraph}</p>
            </Collapsible>
          </>
        ))}
      </div>
      <Divider />
    </div>
  );
};

export default Faq;

Faq.propTypes = {
  list: PropTypes.arrayOf({}),
};
