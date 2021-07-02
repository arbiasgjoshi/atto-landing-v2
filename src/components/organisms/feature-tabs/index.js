import React, { useState } from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';

import ProductCard from '../product-card';
import Tabs from './tabs';

// import image1 from '../../../images/time-tracking-fingertips@2x.png';
// import image2 from '../../../images/know-where-is-team.png';
// import image3 from '../../../images/spend-less-time-on-admin-with-automated-timesheets@2x.png';
// import image4 from '../../../images/stay-in-loop.png';

import imgLocaleOneEn from '@images/en/overview/Atto - time and location tracking app generating timesheets@2x.png';
import imgLocaleOneDe from '@images/de/overview/DE_Atto - time and location tracking app generating timesheet@2x.png';
import imgLocaleOneEs from '@images/es/overview/ES_Atto - time and location tracking app generating timesheets@2x.png';
import imgLocaleOneFr from '@images/fr/overview/FR_Atto - time and location tracking app generating timesheets@2x.png';

import imgLocaleTwoEn from '@images/en/overview/Know where your team is in real-time@2x.png';
import imgLocaleTwoDe from '@images/de/overview/DE_Know where your team is in real-time@2x.png';
import imgLocaleTwoEs from '@images/es/overview/ES_Know where your team is in real-time@2x.png';
import imgLocaleTwoFr from '@images/fr/overview/FR_Know where your team is in real-time@2x.png';

import imgLocaleThreeEn from '@images/en/overview/Stay in the loop as work happens@2x.png';
import imgLocaleThreeDe from '@images/de/overview/DE_Stay in the loop as work happens@2x.png';
import imgLocaleThreeEs from '@images/es/overview/ES_Stay in the loop as work happens@2x.png';
import imgLocaleThreeFr from '@images/fr/overview/FR_Stay in the loop as work happens@2x.png';

import imgLocaleFourEn from '@images/en/overview/Relax with timesheets on time, every time@2x.png';
import imgLocaleFourDe from '@images/de/overview/DE_Relax with timesheets on time, every time@2x.png';
import imgLocaleFourEs from '@images/es/overview/ES_Relax with timesheets on time, every time@2x.png';
import imgLocaleFourFr from '@images/fr/overview/FR_Relax with timesheets on time, every time@2x.png';

import Accordion from '@components/organisms/accordion';

import { container, content, inactive, collapseDiv } from './feature-tabs.module.scss';

const FeatureTabs = () => {
  const Intl = useIntl();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const imageLocaleOne = (loc) => {
    if (loc === 'en') {
      //
      return imgLocaleOneEn;
    }
    if (loc === 'es') {
      //
      return imgLocaleOneEs;
    }
    if (loc === 'fr') {
      //
      return imgLocaleOneFr;
    }
    if (loc === 'de') {
      //
      return imgLocaleOneDe;
    }
  };

  const imageLocaleTwo = (loc) => {
    if (loc === 'en') {
      //
      return imgLocaleTwoEn;
    }
    if (loc === 'es') {
      //
      return imgLocaleTwoEs;
    }
    if (loc === 'fr') {
      //
      return imgLocaleTwoFr;
    }
    if (loc === 'de') {
      //
      return imgLocaleTwoDe;
    }
  };

  const imageLocaleThree = (loc) => {
    if (loc === 'en') {
      //
      return imgLocaleThreeEn;
    }
    if (loc === 'es') {
      //
      return imgLocaleThreeEs;
    }
    if (loc === 'fr') {
      //
      return imgLocaleThreeFr;
    }
    if (loc === 'de') {
      //
      return imgLocaleThreeDe;
    }
  };

  const imageLocaleFour = (loc) => {
    if (loc === 'en') {
      //
      return imgLocaleFourEn;
    }
    if (loc === 'es') {
      //
      return imgLocaleFourEs;
    }
    if (loc === 'fr') {
      //
      return imgLocaleFourFr;
    }
    if (loc === 'de') {
      //
      return imgLocaleFourDe;
    }
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
      path: '/product/gps-location-tracking',
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

  const getClassName = (index) => {
    return activeIndex === index ? content : inactive;
  };

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
          {console.log(Intl.formatMessage({ id: 'pages.homepage.timeTrackingTitle' }))}
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
            path="/product/gps-location-tracking"
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
