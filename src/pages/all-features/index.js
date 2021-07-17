import React, { useState } from 'react';

import HeaderComponent from '@components/molecules/header';
import Seo from '@components/molecules/seo';
import Modal from '@components/molecules/modal';
import { useIntl } from 'gatsby-plugin-react-intl';
import Title from '@components/molecules/title';
import Divider from '@components/atoms/divider';
import FeatureCard from '@components/molecules/feature-card';

import MainTitleCard from '@components/molecules/main-title-card';

import FooterComponent from '@components/molecules/footer';
import SubscribeBanner from '@components/molecules/subscribe-banner';

import Timer from '@images/timer.svg';
import Flag from '@images/flag.svg';
import Ringbell from '@images/ringbell.svg';
import MLogo from '@images/m-logo.svg';
import Brightness from '@images/brightness.svg';
import Notes from '@images/notes.svg';
import Overtime from '@images/overtime.svg';
import Coffe from '@images/coffe.svg';
import Bookmark from '@images/bookmark.svg';
import Clock from '@images/clock.svg';
import Browser from '@images/browser.svg';
import Darkmode from '@images/darkMode.svg';

import LocationClock from '@images/clock-location.svg';
import House from '@images/house.svg';
import Settings from '@images/settings.svg';
import LocationAt from '@images/location-at.svg';
import Security from '@images/security.svg';
import Battery from '@images/battery.svg';

import Team from '@images/team.svg';
import Department from '@images/departments.svg';
import Filter from '@images/filter-and-search.svg';
import Messaging from '@images/messaging.svg';
import Timeline from '@images/timeline.svg';

import AllTimesheets from '@images/All_featres_TimesheetsAndroid.svg';
import AllFeatureEmail from '@images/All_featres_emailAndroid.svg';
import AvoidGuess from '@images/avoid_guesstimation.svg';
import Wages from '@images/wages.svg';
import Share from '@images/share.svg';
import AllFeatresRounding from '@images/featres_rounding.svg';
import ChangeHistory from '@images/change_history.svg';
import ArchivedMembers from '@images/Archived_membersSVG.svg';
import WageEstimate from '@images/Wage_estimatesSVG.svg';

import { container } from '@styles/main.module.scss';

import {
  cardListWrapper,
  timeTrackingStyle,
  locationTrackingStyle,
  teamActivityStyle,
  timesheetStyle,
  cardWrapper,
  emptyCard,
  behindMask,
} from './all-features.module.scss';

const AllFeaturesPage = () => {
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
      .then((res) => res.json())
      .then((data) => {
        closeModal();
        setDeleted(true);
        setValues(data);
        setTimeout(() => openModal(), 2000);
      });
  };

  const formSuccessState = (val) => {
    if (val?.action !== 'delete') {
      closeModal();
      setValues(val);
    } else {
      toggleDeleteInvite(val);
    }
  };

  const timeTrackingCards = [
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

  const locationTrackingCards = [
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureOneTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureOneDesc',
      }),
      logo: <LocationClock />,
      alt: '',
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureTwoTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureTwoDesc',
      }),
      logo: <LocationClock />,
      alt: '',
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureThreeTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureThreeDesc',
      }),
      logo: <House />,
      alt: '',
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureFiveTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureFiveDesc',
      }),
      logo: <Settings />,
      alt: '',
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureSixTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureSixDesc',
      }),
      logo: <Flag />,
      alt: '',
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureFourTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureFourDesc',
      }),
      logo: <LocationAt />,
      alt: '',
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureNineTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureNineDesc',
      }),
      logo: <Security />,
      alt: '',
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureSevenTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productLocationTracking.fourthSectionFeatureSevenDesc',
      }),
      logo: <Battery />,
      alt: '',
    },
  ];

  const teamActivityCards = [
    {
      title: Intl.formatMessage({
        id: 'pages.productTeamActivity.thirdSectionFeatureTwoTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productTeamActivity.thirdSectionFeatureTwoDesc',
      }),
      logo: <Timeline />,
      alt: '',
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productTeamActivity.thirdSectionFeatureOneTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productTeamActivity.thirdSectionFeatureOneDesc',
      }),
      logo: <Team />,
      alt: '',
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productTeamActivity.thirdSectionFeatureThreeTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productTeamActivity.thirdSectionFeatureThreeDesc',
      }),
      logo: <Department />,
      alt: '',
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productTeamActivity.thirdSectionFeatureFourTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productTeamActivity.thirdSectionFeatureFourDesc',
      }),
      logo: <Filter />,
      alt: '',
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productTeamActivity.thirdSectionFeatureFiveTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productTeamActivity.thirdSectionFeatureFiveDesc',
      }),
      logo: <Ringbell />,
      alt: '',
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productTeamActivity.thirdSectionFeatureSixTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productTeamActivity.thirdSectionFeatureSixDesc',
      }),
      logo: <Messaging />,
      alt: '',
    },
  ];

  const timesheetCards = [
    {
      title: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureOneTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureOneDesc',
      }),
      logo: <AllTimesheets />,
      alt: '',
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureTwoTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureTwoDesc',
      }),
      logo: <AllFeatureEmail />,
      alt: '',
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureThreeTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureThreeDesc',
      }),
      logo: <AvoidGuess />,
      alt: '',
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureSevenTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureSevenDesc',
      }),
      logo: <ChangeHistory />,
      alt: '',
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureSixTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureSixDesc',
      }),
      logo: <AllFeatresRounding />,
      alt: '',
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureFourTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureFourDesc',
      }),
      logo: <Wages />,
      alt: '',
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureNineTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureNineDesc',
      }),
      logo: <WageEstimate />,
      alt: '',
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureFiveTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureFiveDesc',
      }),
      logo: <Share />,
      alt: '',
    },
    {
      title: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureEightTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureEightDesc',
      }),
      logo: <ArchivedMembers />,
      alt: '',
    },
    {
      title: '',
      description: '',
      logo: '',
      alt: '',
      empty: true,
    },
  ];

  return (
    <>
      <Modal
        close={closeModal}
        showDialog={showDialog}
        hasValues={values}
        onDelete={toggleDeleteInvite}
        setFormValues={(formValues) => formSuccessState(formValues)}
      />
      <span className={behindMask} />
      <div className={container}>
        <Seo
          title={Intl.formatMessage({ id: 'pages.allFeatures.metaTitle' })}
          description={Intl.formatMessage({ id: 'pages.allFeatures.metaDescription' })}
        />
        <HeaderComponent headerStyle="pricingHeader" />
        <MainTitleCard
          title={Intl.formatMessage({
            id: 'pages.allFeatures.bannerTitle',
          })}
          subtitle={Intl.formatMessage({
            id: 'pages.allFeatures.bannerDesc',
          })}
          maxParagraphWidth={620}
        />
        <Divider className="" />
        <Title
          title={Intl.formatMessage({ id: 'pages.allFeatures.timetrackingTitle' })}
          smallerMargin
        />
        <Divider className="style51" />
        <div className={`${cardListWrapper} ${timeTrackingStyle}`}>
          {timeTrackingCards.map(({ title, description, logo }) => (
            <div className={cardWrapper}>
              <FeatureCard
                style="all-features"
                title={title}
                description={description}
                logo={logo}
              />
            </div>
          ))}
        </div>
        <Divider className="style4" />
        <Title title={Intl.formatMessage({ id: 'pages.allFeatures.locationTrackingTitle' })} />
        <Divider className="style51" />
        <div className={`${cardListWrapper} ${locationTrackingStyle}`}>
          {locationTrackingCards.map(({ title, description, logo }) => (
            <div className={cardWrapper}>
              <FeatureCard
                style="all-features"
                title={title}
                description={description}
                logo={logo}
              />
            </div>
          ))}
        </div>
        <Divider className="style4" />
        <Title title={Intl.formatMessage({ id: 'pages.allFeatures.teamActivityTitle' })} />
        <Divider className="style51" />
        <div className={`${cardListWrapper} ${teamActivityStyle}`}>
          {teamActivityCards.map(({ title, description, logo }) => (
            <div className={cardWrapper}>
              <FeatureCard
                style="all-features"
                title={title}
                description={description}
                logo={logo}
              />
            </div>
          ))}
        </div>
        <Divider className="style4" />
        <Title title={Intl.formatMessage({ id: 'pages.allFeatures.timesheetTitle' })} />
        <Divider className="style51" />
        <div className={`${cardListWrapper} ${timesheetStyle}`}>
          {timesheetCards.map(({ title, description, logo, empty }) => (
            <div className={`${cardWrapper} ${empty && emptyCard}`}>
              <FeatureCard
                style="all-features"
                title={title}
                description={description}
                logo={logo}
              />
            </div>
          ))}
        </div>
        <SubscribeBanner
          bannerImage
          title={Intl.formatMessage({ id: 'pages.pricing.subscribeBanner' })}
          subtitle={Intl.formatMessage({ id: 'pages.pricing.subscribeBannerDesc' })}
          placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
          checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
          checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
          checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
          style="pricing"
        />
        <FooterComponent />
      </div>
    </>
  );
};

export default AllFeaturesPage;
