import React, { useState } from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';

import Accordion from '@components/organisms/accordion';
import Tabs from './tabs';
import ProductCard from '../product-card';

import { container, content, inactive, collapseDiv } from './feature-tabs.module.scss';

const FeatureTabs = () => {
  const Intl = useIntl();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const imageLocaleOne = (loc) => {
    if (loc === 'es') {
      return 'img-one-locale-es';
    }
    if (loc === 'fr') {
      return 'img-one-locale-fr';
    }
    if (loc === 'de') {
      return 'img-one-locale-de';
    }
    return 'img-one-locale-en';
  };

  const imageLocaleTwo = (loc) => {
    if (loc === 'es') {
      return 'img-two-locale-es';
    }
    if (loc === 'fr') {
      return 'img-two-locale-fr';
    }
    if (loc === 'de') {
      return 'img-two-locale-de';
    }
    return 'img-two-locale-en';
  };

  const imageLocaleThree = (loc) => {
    if (loc === 'es') {
      return 'img-three-locale-es';
    }
    if (loc === 'fr') {
      return 'img-three-locale-fr';
    }
    if (loc === 'de') {
      return 'img-three-locale-de';
    }
    return 'img-three-locale-en';
  };

  const imageLocaleFour = (loc) => {
    if (loc === 'es') {
      return 'img-four-locale-es';
    }
    if (loc === 'fr') {
      return 'img-four-locale-fr';
    }
    if (loc === 'de') {
      return 'img-four-locale-de';
    }
    return 'img-four-locale-en';
  };

  const ProductFeatures = [
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.name' }),
      sectionTitle: Intl.formatMessage({ id: 'pages.homepage.timeTrackingTitle' }),
      description: Intl.formatMessage({ id: 'pages.homepage.timeTrackingDescription' }),
      featureImage: imageLocaleOne(Intl.locale),
      path: '/product/time-tracking',
      imagePadding: '3.5rem 3.1rem',
      imageWidth: 438,
      imageHeight: 580,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.bottomFeatureOneTitle' }),
      sectionTitle: Intl.formatMessage({ id: 'pages.homepage.gpsTitle' }),
      description: Intl.formatMessage({ id: 'pages.homepage.gpsDescription' }),
      featureImage: imageLocaleTwo(Intl.locale),
      path: '/product/location-tracking',
      imagePadding: 0,
      imageWidth: 500,
      imageHeight: 650,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTeamActivity.name' }),
      sectionTitle: Intl.formatMessage({ id: 'pages.homepage.teamActivityTitle' }),
      description: Intl.formatMessage({ id: 'pages.homepage.teamActivityDescription' }),
      featureImage: imageLocaleFour(Intl.locale),
      path: '/product/team-activity',
      imagePadding: '3.5rem 1.8rem',
      imageWidth: 463,
      imageHeight: 580,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimesheets.name' }),
      sectionTitle: Intl.formatMessage({ id: 'pages.homepage.timesheetsTitle' }),
      description: Intl.formatMessage({ id: 'pages.homepage.timesheetsDescription' }),
      featureImage: imageLocaleThree(Intl.locale),
      path: '/product/timesheets',
      imagePadding: 'Random',
      imageWidth: 402,
      imageHeight: 580,
    },
  ];

  const getClassName = (index) => (activeIndex === index ? content : inactive);

  return (
    <div className={container}>
      <Tabs
        handleClick={handleClick}
        activeIndex={activeIndex}
        list={[
          Intl.formatMessage({ id: 'header.menu.timeTrackingLabel' }),
          Intl.formatMessage({ id: 'header.menu.locationTrackingLabel' }),
          Intl.formatMessage({ id: 'header.menu.teamActivityTrackingLabel' }),
          Intl.formatMessage({ id: 'header.menu.timesheetsTrackingLabel' }),
        ]}
      />
      <>
        <div className={getClassName(0)}>
          <ProductCard
            title={Intl.formatMessage({ id: 'pages.homepage.timeTrackingTitle' })}
            description={Intl.formatMessage({ id: 'pages.homepage.timeTrackingDescription' })}
            image={imageLocaleOne(Intl.locale)}
            isSwapped
            style="homepage"
            path="/product/time-tracking"
            imagePadding="3.5rem 3.1rem"
            imageWidth={438}
            imageHeight={580}
          />
        </div>
        <div className={getClassName(1)}>
          <ProductCard
            title={Intl.formatMessage({ id: 'pages.homepage.gpsTitle' })}
            description={Intl.formatMessage({ id: 'pages.homepage.gpsDescription' })}
            image={imageLocaleTwo(Intl.locale)}
            isSwapped
            style="homepage"
            path="/product/location-tracking"
            imageWidth={500}
            imageHeight={650}
          />
        </div>
        <div className={getClassName(2)}>
          <ProductCard
            title={Intl.formatMessage({ id: 'pages.homepage.teamActivityTitle' })}
            description={Intl.formatMessage({ id: 'pages.homepage.teamActivityDescription' })}
            image={imageLocaleThree(Intl.locale)}
            isSwapped
            style="homepage"
            path="/product/team-activity"
            imagePadding="3.5rem 1.8rem"
            imageWidth={463}
            imageHeight={580}
          />
        </div>
        <div className={getClassName(3)}>
          <ProductCard
            title={Intl.formatMessage({ id: 'pages.homepage.timesheetsTitle' })}
            description={Intl.formatMessage({ id: 'pages.homepage.timesheetsDescription' })}
            image={imageLocaleFour(Intl.locale)}
            isSwapped
            style="homepage"
            path="/product/timesheets"
            imageWidth={402}
            imageHeight={579}
          />
        </div>
        <div className={collapseDiv}>
          <Accordion items={ProductFeatures} featureTabs arrowIcon />
        </div>
      </>
    </div>
  );
};

export default FeatureTabs;
