import React, { useState } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import Divider from '@components/atoms/divider';
import Seo from '@components/molecules/seo';
import Modal from '@components/molecules/modal';
import { useIntl } from 'gatsby-plugin-react-intl';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import VideoCheckList from '@components/organisms/video-checklist';
import MainTitleCard from '@components/molecules/main-title-card';
import FeatureCard from '@components/molecules/feature-card';
import LearnMoreCard from '@components/molecules/learn-more-card';
import IconCard from '@components/molecules/icon-card';
import Title from '@components/molecules/title';
import CheckList from '@components/molecules/check-list';
// import ImageSlider from '@components/molecules/image-slider';
import IconCardList from '@components/organisms/icon-card-list';
import FeaturesList from '@components/organisms/features-list';
import GrowthNumbers from '@components/organisms/growth-numbers';
import Services from '@components/organisms/services';
import Story from '@components/organisms/story';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import { container, imageWrapper } from '@styles/main.module.scss';

// import { FooterLinks } from '@locale/en.js';
import authorImage from '@images/en/time-tracking/Time tracking app review@2x.png';

import WebTracking from '@images/web-time-tracking.svg';
import MobileTracking from '@images/mobile_time_tracking.svg';
import KioskTracking from '@images/kiosk-time-tracking.svg';

import Timer from '@images/timer.svg';
import Flag from '@images/flag.svg';
import Ringbell from '@images/ringbell.svg';
import MLogo from '@images/m-logo.svg';
import Brightness from '@images/brightness.svg';
import Coffe from '@images/coffe.svg';
import Bookmark from '@images/bookmark.svg';
import Clock from '@images/clock.svg';
import Browser from '@images/browser.svg';
import Darkmode from '@images/darkMode.svg';
import Notes from '@images/notes.svg';
import Overtime from '@images/overtime.svg';

import icon from '@images/easy-to-use.png';
import icon2 from '@images/accurate.png';
import icon3 from '@images/trustworthy.png';

import icon32 from '@images/location@1x.png';
import icon33 from '@images/profile@1x.png';
import icon34 from '@images/timesheets@1x.png';
//
// Clock-in and out@2x.png

import roundedFeatureOneEn from '@images/en/time-tracking/Employees forget to track their time_@2x.png';
import roundedFeatureOneDe from '@images/de/time-tracking/DE_Employees forget to track their time_@2x.png';
import roundedFeatureOneEs from '@images/es/time-tracking/ES_Employees forget to track their time_@2x.png';
import roundedFeatureOneFr from '@images/fr/time-tracking/FR_Employees forget to track their time_@2x.png';

import roundedFeatureTwoEn from '@images/en/time-tracking/What if phone ran out of battery_@2x.png';
import roundedFeatureTwoDe from '@images/de/time-tracking/DE_What if phone ran out of battery_@2x.png';
import roundedFeatureTwoEs from '@images/es/time-tracking/ES_What if phone ran out of battery_@2x.png';
import roundedFeatureTwoFr from '@images/fr/time-tracking/FR_What if phone ran out of battery_@2x.png';

import roundedFeatureThreeEn from '@images/en/time-tracking/Not sure if employees are where they’re supposed to_@2x.png';
import roundedFeatureThreeDe from '@images/de/time-tracking/DE_Not sure if employees are where they’re supposed to_@2x.png';
import roundedFeatureThreeEs from '@images/es/time-tracking/ES_Not sure if employees are where they’re supposed to_@2x.png';
import roundedFeatureThreeFr from '@images/fr/time-tracking/FR_Not sure if employees are where they’re supposed to_@2x.png';

import featureImgLocaleOneEn from '@images/clock-in-out.png';
import featureImgLocaleOneDe from '@images/de/time-tracking/DE_Clock-in and out@2x.png';
import featureImgLocaleOneEs from '@images/es/time-tracking/ES_Clock-in and out@2x.png';
import featureImgLocaleOneFr from '@images/fr/time-tracking/FR_Clock-in and out@2x.png';

import featureImgLocaleTwoEn from '@images/write-notes.png';
import featureImgLocaleTwoDe from '@images/de/time-tracking/DE_Write notes@2x.png';
import featureImgLocaleTwoEs from '@images/es/time-tracking/ES_Write notes@2x.png';
import featureImgLocaleTwoFr from '@images/fr/time-tracking/FR_Write notes@2x.png';

import featureImgLocaleThreeEn from '@images/track-breaks.png';
import featureImgLocaleThreeDe from '@images/de/time-tracking/DE_Track breaks@2x.png';
import featureImgLocaleThreeEs from '@images/es/time-tracking/ES_Track breaks@2x.png';
import featureImgLocaleThreeFr from '@images/fr/time-tracking/FR_Track breaks@2x.png';

import featureImgLocaleFourEn from '@images/manage-overtime.png';
import featureImgLocaleFourDe from '@images/de/time-tracking/DE_Manage overtime@2x.png';
import featureImgLocaleFourEs from '@images/es/time-tracking/ES_Manage overtime@2x.png';
import featureImgLocaleFourFr from '@images/fr/time-tracking/FR_Manage overtime@2x.png';

import featureImgLocaleFiveEn from '@images/switch-between-jobs.png';
import featureImgLocaleFiveDe from '@images/de/time-tracking/DE_Switch between jobs@2x.png';
import featureImgLocaleFiveEs from '@images/es/time-tracking/ES_Switch between jobs@2x.png';
import featureImgLocaleFiveFr from '@images/fr/time-tracking/FR_Switch between jobs@2x.png';

import featureImgLocaleSixEn from '@images/add-time-off.png';
import featureImgLocaleSixDe from '@images/de/time-tracking/DE_Add time off@2x.png';
import featureImgLocaleSixEs from '@images/es/time-tracking/ES_Add time off@2x.png';
import featureImgLocaleSixFr from '@images/fr/time-tracking/FR_Add time off@2x.png';

import { teamActivityContainer, learnMoreContainer } from '../product.module.scss';

import {
  workListContainer,
  workListItem,
  timeTrackingContainer,
  commonProblemsContainer,
} from './time-tracking.module.scss';

const TimeTracking = () => {
  const Intl = useIntl();

  const [showDialog, setShowDialog] = useState(false);
  const openModal = () => setShowDialog(true);
  const closeModal = () => setShowDialog(false);
  const [values, setValues] = useState(null);

  const toggleDeleteInvite = (data) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: data.email }),
    };
    fetch('/delete-invite', requestOptions)
      .then((response) => response.json())
      .then((res) => {
        setValues(res);
        openModal();
      });
  };

  const formSuccessState = (val) => {
    closeModal();
    if (val?.action !== 'delete') {
      setValues(val);
    } else {
      toggleDeleteInvite(val);
    }
  };

  const timeTrackingTitleList = [
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.checkListItemZero' }),
      id: '1asdd1a',
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.checkListItemOne' }),
      id: '1asdd1b',
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.checkListItemTwo' }),
      id: '1asdd1c',
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.checkListItemThree' }),
      id: '1asdd1d',
    },
  ];

  const timeTrackingFeatures = [
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.featureItemTitleOne' }),
      description: Intl.formatMessage({ id: 'pages.productTimeTracking.featureItemDescOne' }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.featureItemTitleOne' }),
      icon,
      imagePadding: '.8rem 3.1rem 1.5rem 3rem',
      imageWidth: 59,
      imageHeight: 97,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.featureItemTitleTwo' }),
      description: Intl.formatMessage({ id: 'pages.productTimeTracking.featureItemDescTwo' }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.featureItemTitleTwo' }),
      icon: icon2,
      imagePadding: '.8rem .6rem 1.9rem 2rem',
      imageWidth: 94,
      imageHeight: 93,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.featureItemTitleThree' }),
      description: Intl.formatMessage({ id: 'pages.productTimeTracking.featureItemDescThree' }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.featureItemTitleThree' }),
      icon: icon3,
      imagePadding: '1.2rem 1rem',
      imageWidth: 100,
      imageHeight: 96,
    },
  ];

  const timeTrackingBannerImg = (loc) => {
    if (loc === 'en') {
      //
      return (
        <StaticImage
          src="../../../images/en/time-tracking/Lower costs, higher productivity. Less admin, more business.@2x.png"
          alt="admin-panel-image"
          width={1250}
          quality={98}
          placeholder="blurred"
        />
      );
    }
    if (loc === 'es') {
      //
      return (
        <StaticImage
          src="../../../images/es/time-tracking/ES_Lower costs, higher productivity. Less admin, more business.@2x.png"
          alt="admin-panel-image"
          width={1250}
          quality={98}
          placeholder="blurred"
        />
      );
    }
    if (loc === 'de') {
      //
      return (
        <StaticImage
          src="../../../images/de/time-tracking/DE_Lower costs, higher productivity. Less admin, more business.@2x.png"
          alt="admin-panel-image"
          width={1250}
          quality={98}
          placeholder="blurred"
        />
      );
    }
    if (loc === 'fr') {
      //
      return (
        <StaticImage
          src="../../../images/fr/time-tracking/FR_Lower costs, higher productivity. Less admin, more business.@2x.png"
          alt="admin-panel-image"
          width={1250}
          quality={98}
          placeholder="blurred"
        />
      );
    }
  };

  const timeTrackingImgLocaleOne = (loc) => {
    if (loc === 'en') {
      return featureImgLocaleOneEn;
    }
    if (loc === 'es') {
      return featureImgLocaleOneEs;
    }
    if (loc === 'de') {
      return featureImgLocaleOneDe;
    }
    if (loc === 'fr') {
      return featureImgLocaleOneFr;
    }
  };
  const timeTrackingImgLocaleTwo = (loc) => {
    if (loc === 'en') {
      //
      return featureImgLocaleTwoEn;
    }
    if (loc === 'es') {
      //
      return featureImgLocaleTwoEs;
    }
    if (loc === 'de') {
      //
      return featureImgLocaleTwoDe;
    }
    if (loc === 'fr') {
      //
      return featureImgLocaleTwoFr;
    }
  };
  const timeTrackingImgLocaleThree = (loc) => {
    if (loc === 'en') {
      //
      return featureImgLocaleThreeEn;
    }
    if (loc === 'es') {
      //
      return featureImgLocaleThreeEs;
    }
    if (loc === 'de') {
      //
      return featureImgLocaleThreeDe;
    }
    if (loc === 'fr') {
      //
      return featureImgLocaleThreeFr;
    }
  };
  const timeTrackingImgLocaleFour = (loc) => {
    if (loc === 'en') {
      //
      return featureImgLocaleFourEn;
    }
    if (loc === 'es') {
      //
      return featureImgLocaleFourEs;
    }
    if (loc === 'de') {
      //
      return featureImgLocaleFourDe;
    }
    if (loc === 'fr') {
      //
      return featureImgLocaleFourFr;
    }
  };
  const timeTrackingImgLocaleFive = (loc) => {
    if (loc === 'en') {
      //
      return featureImgLocaleFiveEn;
    }
    if (loc === 'es') {
      //
      return featureImgLocaleFiveEs;
    }
    if (loc === 'de') {
      //
      return featureImgLocaleFiveDe;
    }
    if (loc === 'fr') {
      //
      return featureImgLocaleFiveFr;
    }
  };
  const timeTrackingImgLocaleSix = (loc) => {
    if (loc === 'en') {
      //
      return featureImgLocaleSixEn;
    }
    if (loc === 'es') {
      //
      return featureImgLocaleSixEs;
    }
    if (loc === 'de') {
      //
      return featureImgLocaleSixDe;
    }
    if (loc === 'fr') {
      //
      return featureImgLocaleSixFr;
    }
  };

  const timeTrackingRoundedOne = (loc) => {
    if (loc === 'en') {
      return roundedFeatureOneEn;
    }
    if (loc === 'es') {
      //
      return roundedFeatureOneEs;
    }
    if (loc === 'de') {
      //
      return roundedFeatureOneDe;
    }
    if (loc === 'fr') {
      //
      return roundedFeatureOneFr;
    }
  };

  const timeTrackingRoundedTwo = (loc) => {
    if (loc === 'en') {
      return roundedFeatureTwoEn;
    }
    if (loc === 'es') {
      //
      return roundedFeatureTwoEs;
    }
    if (loc === 'de') {
      //
      return roundedFeatureTwoDe;
    }
    if (loc === 'fr') {
      //
      return roundedFeatureTwoFr;
    }
  };

  const timeTrackingRoundedThree = (loc) => {
    if (loc === 'en') {
      return roundedFeatureThreeEn;
    }
    if (loc === 'es') {
      //
      return roundedFeatureThreeEs;
    }
    if (loc === 'de') {
      //
      return roundedFeatureThreeDe;
    }
    if (loc === 'fr') {
      //
      return roundedFeatureThreeFr;
    }
  };

  const timeTrackingOtherFeatures = [
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureTitleOne' }),
      description: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureDescOne' }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureTitleOne' }),
      icon: timeTrackingImgLocaleOne(Intl.locale),
      imageWidth: 350,
      imageHeight: 244,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureTitleTwo' }),
      description: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureDescTwo' }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureTitleTwo' }),
      icon: timeTrackingImgLocaleTwo(Intl.locale),
      imageWidth: 350,
      imageHeight: 244,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureTitleThree' }),
      description: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureDescThree' }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureTitleThree' }),
      icon: timeTrackingImgLocaleThree(Intl.locale),
      imageWidth: 350,
      imageHeight: 244,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureTitleFour' }),
      description: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureDescFour' }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureTitleFour' }),
      icon: timeTrackingImgLocaleFour(Intl.locale),
      imageWidth: 350,
      imageHeight: 244,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureTitleFive' }),
      description: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureDescFive' }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureTitleFive' }),
      icon: timeTrackingImgLocaleFive(Intl.locale),
      imageWidth: 350,
      imageHeight: 244,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureTitleSix' }),
      description: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureDescSix' }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.iconFeatureTitleSix' }),
      icon: timeTrackingImgLocaleSix(Intl.locale),
      imageWidth: 350,
      imageHeight: 244,
    },
  ];

  const overviewAdminList = [
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.checkListFeatureOneTitle' }),
      description: Intl.formatMessage({ id: 'pages.productTimeTracking.checkListFeatureOneDesc' }),
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.checkListFeatureTwoTitle' }),
      description: Intl.formatMessage({ id: 'pages.productTimeTracking.checkListFeatureTwoDesc' }),
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.checkListFeatureThreeTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.checkListFeatureThreeDesc',
      }),
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.checkListFeatureFourTitle' }),
      description: Intl.formatMessage({ id: 'pages.productTimeTracking.checkListFeatureFourDesc' }),
    },
  ];

  const timeTrackingFeatureList = [
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesOneTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesOneDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesOneTitle' }),
      logo: <Timer />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesTwoTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesTwoDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesTwoTitle' }),
      logo: <Flag />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesThreeTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesThreeDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesThreeTitle' }),
      logo: <Ringbell />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesFourTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesFourDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesFourTitle' }),
      logo: <MLogo />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesFiveTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesFiveDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesFiveTitle' }),
      logo: <Brightness />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesSixTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesSixDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesSixTitle' }),
      logo: <Notes />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesSevenTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesSevenDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesSevenTitle' }),
      logo: <Overtime />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesEightTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesEightDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesEightTitle' }),
      logo: <Coffe />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesNineTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesNineDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesNineTitle' }),
      logo: <Bookmark />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesTenTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesTenDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesTenTitle' }),
      logo: <Clock />,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesElevenTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesElevenDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesElevenTitle' }),
      logo: <Browser />,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesTwelveTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productTimeTracking.timeTrackingFeaturesTwelveDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimeTracking.timeTrackingFeaturesTwelveTitle' }),
      logo: <Darkmode />,
    },
  ];

  const featuredIageLocale = (loc) => {
    if (loc === 'en') {
      return (
        <StaticImage
          src="../images/en/time-tracking-simplified@2x.png"
          alt={Intl.formatMessage({ id: 'pages.homepage.title' })}
          width={1140}
          quality={98}
          placeholder="blurred"
        />
      );
    }
    if (loc === 'de') {
      return (
        <StaticImage
          src="../images/de/de-time-tracking-simplified@2x.png"
          alt={Intl.formatMessage({ id: 'pages.homepage.title' })}
          width={1140}
          quality={98}
          placeholder="blurred"
        />
      );
    }
    if (loc === 'fr') {
      return (
        <StaticImage
          src="../images/fr/fr-time-tracking-simplified@2x.png"
          alt={Intl.formatMessage({ id: 'pages.homepage.title' })}
          width={1140}
          quality={98}
          placeholder="blurred"
        />
      );
    }
    if (loc === 'es') {
      return (
        <StaticImage
          src="../images/es/es-time-tracking-simplified@2x.png"
          alt={Intl.formatMessage({ id: 'pages.homepage.title' })}
          width={1140}
          quality={98}
          placeholder="blurred"
        />
      );
    }
  };

  const featuredStoryImageOne = (loc) => {
    if (loc === 'en') {
      return (
        <StaticImage
          alt={Intl.formatMessage({ id: 'pages.productTimeTracking.imageIconFeatureTitleOne' })}
          height={378}
          width={380}
          quality={97}
          placeholder="blurred"
          src="../../../images/en/time-tracking/Work in the Office via the Web Dashboard@2x.png"
        />
      );
    }
    if (loc === 'es') {
      return (
        <StaticImage
          alt={Intl.formatMessage({ id: 'pages.productTimeTracking.imageIconFeatureTitleOne' })}
          height={378}
          width={380}
          quality={97}
          placeholder="blurred"
          src="../../../images/es/time-tracking/ES_Work in the Office via the Web Dashboard@2x.png"
        />
      );
    }
    if (loc === 'fr') {
      return (
        <StaticImage
          alt={Intl.formatMessage({ id: 'pages.productTimeTracking.imageIconFeatureTitleOne' })}
          height={378}
          width={380}
          quality={97}
          placeholder="blurred"
          src="../../../images/fr/time-tracking/FR_Work in the Office via the Web Dashboard@2x.png"
        />
      );
    }
    if (loc === 'de') {
      return (
        <StaticImage
          alt={Intl.formatMessage({ id: 'pages.productTimeTracking.imageIconFeatureTitleOne' })}
          height={378}
          width={380}
          quality={97}
          placeholder="blurred"
          src="../../../images/de/time-tracking/DE_Work in the Office via the Web Dashboard@2x.png"
        />
      );
    }
  };

  const featuredStoryImageTwo = (loc) => {
    if (loc === 'en') {
      return (
        <StaticImage
          alt={Intl.formatMessage({ id: 'pages.productTimeTracking.imageIconFeatureTitleOne' })}
          height={378}
          width={380}
          quality={97}
          placeholder="blurred"
          src="../../../images/en/time-tracking/Work on the Go via the Mobile App@2x.png"
        />
      );
    }
    if (loc === 'es') {
      return (
        <StaticImage
          alt={Intl.formatMessage({ id: 'pages.productTimeTracking.imageIconFeatureTitleOne' })}
          height={378}
          width={380}
          quality={97}
          placeholder="blurred"
          src="../../../images/es/time-tracking/ES_Work on the Go via the Mobile App@2x.png"
        />
      );
    }
    if (loc === 'fr') {
      return (
        <StaticImage
          alt={Intl.formatMessage({ id: 'pages.productTimeTracking.imageIconFeatureTitleOne' })}
          height={378}
          width={380}
          quality={97}
          placeholder="blurred"
          src="../../../images/fr/time-tracking/FR_Work on the Go via the Mobile App@2x.png"
        />
      );
    }
    if (loc === 'de') {
      return (
        <StaticImage
          alt={Intl.formatMessage({ id: 'pages.productTimeTracking.imageIconFeatureTitleOne' })}
          height={378}
          width={380}
          quality={97}
          placeholder="blurred"
          src="../../../images/de/time-tracking/DE_Work on the Go via the Mobile App@2x.png"
        />
      );
    }
  };

  const featuredStoryImageThree = (loc) => {
    if (loc === 'en') {
      return (
        <StaticImage
          alt={Intl.formatMessage({ id: 'pages.productTimeTracking.imageIconFeatureTitleOne' })}
          height={378}
          width={380}
          quality={97}
          placeholder="blurred"
          src="../../../images/en/time-tracking/Work at Job Sites via the Time Clock Kiosk@2x.png"
        />
      );
    }
    if (loc === 'es') {
      return (
        <StaticImage
          alt={Intl.formatMessage({ id: 'pages.productTimeTracking.imageIconFeatureTitleOne' })}
          height={378}
          width={380}
          quality={97}
          placeholder="blurred"
          src="../../../images/es/time-tracking/ES_Work at Job Sites via the Time Clock Kiosk@2x.png"
        />
      );
    }
    if (loc === 'fr') {
      return (
        <StaticImage
          alt={Intl.formatMessage({ id: 'pages.productTimeTracking.imageIconFeatureTitleOne' })}
          height={378}
          width={380}
          quality={97}
          placeholder="blurred"
          src="../../../images/fr/time-tracking/FR_Work at Job Sites via the Time Clock Kiosk@2x.png"
        />
      );
    }
    if (loc === 'de') {
      return (
        <StaticImage
          alt={Intl.formatMessage({ id: 'pages.productTimeTracking.imageIconFeatureTitleOne' })}
          height={378}
          width={380}
          quality={97}
          placeholder="blurred"
          src="../../../images/de/time-tracking/DE_Work at Job Sites via the Time Clock Kiosk@2x.png"
        />
      );
    }
  };

  return (
    <div className={`${container} ${timeTrackingContainer} ${teamActivityContainer}`}>
      <Modal
        close={closeModal}
        showDialog={showDialog}
        hasValues={values}
        onDelete={toggleDeleteInvite}
        setFormValues={(formValues) => formSuccessState(formValues)}
      />
      <Seo
        title={Intl.formatMessage({ id: 'pages.productTimeTracking.metaTitle' })}
        description={Intl.formatMessage({ id: 'pages.productTimeTracking.metaDescription' })}
      />
      <Header />
      <MainTitleCard
        hasParagraph
        showButton
        toggleModal={() => openModal()}
        paragraph={Intl.formatMessage({ id: 'pages.productTimeTracking.name' })}
        title={Intl.formatMessage({ id: 'pages.productTimeTracking.bannerTitle' })}
        subtitle={Intl.formatMessage({ id: 'pages.productTimeTracking.bannerDescription' })}
      />
      <Divider className="style2" />
      <VideoCheckList
        list={timeTrackingTitleList}
        placeholder="time-tracking"
        cardStyle="centerAligned"
        videoUrl="https://player.vimeo.com/video/563701840?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
      />
      <Divider />
      {featuredIageLocale(Intl.locale)}
      <Divider className="style3" />
      <IconCardList middleAligned cardList={timeTrackingFeatures} />
      <Divider />
      <Title
        title={Intl.formatMessage({ id: 'pages.productTimeTracking.secondSectionTitle' })}
        description={Intl.formatMessage({ id: 'pages.productTimeTracking.secondSectionDesc' })}
        maxDescriptionWidth={800}
      />
      <Divider className="style7" />
      <IconCardList cardList={timeTrackingOtherFeatures} hasBigImages style="smallerMargin" />
      <Divider />
      <Title
        maxWidth={950}
        maxDescriptionWidth={800}
        title={Intl.formatMessage({ id: 'pages.productTimeTracking.thirdSectionTitle' })}
        description={Intl.formatMessage({ id: 'pages.productTimeTracking.thirdSectionDesc' })}
      />
      <Divider className="style7" />
      <div className={workListContainer}>
        <div>
          {featuredStoryImageOne(Intl.locale)}
          <FeatureCard
            isWorkCard
            title={Intl.formatMessage({ id: 'pages.productTimeTracking.imageIconFeatureTitleOne' })}
            alt={Intl.formatMessage({ id: 'pages.productTimeTracking.imageIconFeatureTitleOne' })}
            description={Intl.formatMessage({
              id: 'pages.productTimeTracking.imageIconFeatureDescOne',
            })}
            logo={<WebTracking />}
            imagePadding=".8rem 2.9rem .797rem .1rem"
          />
        </div>
        <div className={workListItem}>
          {featuredStoryImageTwo(Intl.locale)}
          <FeatureCard
            isWorkCard
            title={Intl.formatMessage({ id: 'pages.productTimeTracking.imageIconFeatureTitleTwo' })}
            alt={Intl.formatMessage({ id: 'pages.productTimeTracking.imageIconFeatureTitleTwo' })}
            description={Intl.formatMessage({
              id: 'pages.productTimeTracking.imageIconFeatureDescTwo',
            })}
            logo={<MobileTracking />}
            imagePadding=".5rem 3.24rem .587rem 0"
          />
        </div>
        <div className={workListItem}>
          {featuredStoryImageThree(Intl.locale)}
          <FeatureCard
            isWorkCard
            title={Intl.formatMessage({
              id: 'pages.productTimeTracking.imageIconFeatureTitleThree',
            })}
            alt={Intl.formatMessage({ id: 'pages.productTimeTracking.imageIconFeatureTitleThree' })}
            description={Intl.formatMessage({
              id: 'pages.productTimeTracking.imageIconFeatureDescThree',
            })}
            logo={<KioskTracking />}
            imagePadding=".9rem 2.5rem .85rem .4rem"
            comingSoon
          />
        </div>
      </div>
      <Divider />
      <Title
        maxWidth={860}
        title={Intl.formatMessage({ id: 'pages.productTimeTracking.fourthSectionTitle' })}
      />
      <Divider className="style7" />
      <div className={imageWrapper} style={{ width: 'calc(100% + 100px)' }}>
        {timeTrackingBannerImg(Intl.locale)}
      </div>
      <Divider className="style3" />
      <CheckList list={overviewAdminList} hasDescription cardStyle="big" />
      <Divider />
      <Title
        maxWidth={880}
        title={Intl.formatMessage({ id: 'pages.productTimeTracking.fifthSectionTitle' })}
      />
      <Divider className="style3" />
      <FeaturesList list={timeTrackingFeatureList} />
      <Divider />
      <GrowthNumbers title={Intl.formatMessage({ id: 'pages.miscellaneous.trustedGlobally' })} />
      <Divider />
      <Title title={Intl.formatMessage({ id: 'pages.productTimeTracking.sixthSectionTitle' })} />
      <Divider className="style7" />
      <div className={commonProblemsContainer}>
        <IconCard
          bigImage
          isRound
          imageWidth={250}
          imageHeight={250}
          icon={timeTrackingRoundedOne(Intl.locale)}
          title={Intl.formatMessage({
            id: 'pages.productTimeTracking.commonProblemFeatureOneTitle',
          })}
          alt={Intl.formatMessage({ id: 'pages.productTimeTracking.commonProblemFeatureOneTitle' })}
          description={Intl.formatMessage({
            id: 'pages.productTimeTracking.commonProblemFeatureOneDesc',
          })}
        />
        <IconCard
          isRound
          bigImage
          icon={timeTrackingRoundedTwo(Intl.locale)}
          imageWidth={250}
          imageHeight={250}
          title={Intl.formatMessage({
            id: 'pages.productTimeTracking.commonProblemFeatureTwoTitle',
          })}
          alt={Intl.formatMessage({ id: 'pages.productTimeTracking.commonProblemFeatureTwoTitle' })}
          description={Intl.formatMessage({
            id: 'pages.productTimeTracking.commonProblemFeatureTwoDesc',
          })}
        />
        <IconCard
          bigImage
          isRound
          imageWidth={250}
          imageHeight={250}
          icon={timeTrackingRoundedThree(Intl.locale)}
          title={Intl.formatMessage({
            id: 'pages.productTimeTracking.commonProblemFeatureThreeTitle',
          })}
          alt={Intl.formatMessage({
            id: 'pages.productTimeTracking.commonProblemFeatureThreeTitle',
          })}
          description={Intl.formatMessage({
            id: 'pages.productTimeTracking.commonProblemFeatureThreeDesc',
          })}
        />
      </div>
      <Divider />
      <Title
        title={Intl.formatMessage({
          id: 'pages.productTimeTracking.seventhSectionTitle',
        })}
        description={Intl.formatMessage({
          id: 'pages.productTimeTracking.seventhSectionDesc',
        })}
        maxDescriptionWidth={700}
      />
      <Divider className="style2" />
      <Services />
      <Divider />
      <Story
        img={authorImage}
        paragraph={Intl.formatMessage({ id: 'pages.productTimeTracking.review' })}
        author="Julia Conner – Pennprojects, LLC"
      />
      <Divider />
      <Title
        smallerMargin
        title={Intl.formatMessage({
          id: 'pages.productTimeTracking.eighthSectionTitle',
        })}
        description={Intl.formatMessage({
          id: 'pages.productTimeTracking.eighthSectionDesc',
        })}
      />
      <Divider className="style6" />
      <div className={learnMoreContainer}>
        <LearnMoreCard
          title={Intl.formatMessage({
            id: 'pages.productTimeTracking.bottomFeatureOneTitle',
          })}
          description={Intl.formatMessage({
            id: 'pages.productTimeTracking.bottomFeatureOneDesc',
          })}
          icon={icon32}
          path="/product/location-tracking"
          imageWidth={27}
          imageHeight={32}
        />
        <LearnMoreCard
          title={Intl.formatMessage({
            id: 'pages.productTimeTracking.bottomFeatureTwoTitle',
          })}
          description={Intl.formatMessage({
            id: 'pages.productTimeTracking.bottomFeatureTwoDesc',
          })}
          icon={icon33}
          path="/product/team-activity"
          imageWidth={42}
          imageHeight={44}
        />
        <LearnMoreCard
          title={Intl.formatMessage({
            id: 'pages.productTimeTracking.bottomFeatureThreeTitle',
          })}
          description={Intl.formatMessage({
            id: 'pages.productTimeTracking.bottomFeatureThreeDesc',
          })}
          icon={icon34}
          path="/product/timesheets"
          imageWidth={30}
          imageHeight={33}
        />
      </div>
      <Divider className="style4" />
      <SubscribeBanner
        title={Intl.formatMessage({
          id: 'pages.productTimeTracking.subscribeBannerTitle',
        })}
        placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
        bannerImage
        checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
        checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
        checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
      />
      <Footer />
    </div>
  );
};

export default TimeTracking;
