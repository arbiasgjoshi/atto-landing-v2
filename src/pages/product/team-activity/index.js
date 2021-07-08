import React, { useState } from 'react';

import Divider from '@components/atoms/divider';
import Seo from '@components/molecules/seo';
import Modal from '@components/molecules/modal';
import { useIntl } from 'gatsby-plugin-react-intl';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import Title from '@components/molecules/title';
import MainTitleCard from '@components/molecules/main-title-card';
import LearnMoreCard from '@components/molecules/learn-more-card';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import Article from '@components/molecules/article';
import FeaturesList from '@components/organisms/features-list';
import Cover from '@components/organisms/growth-numbers/cover';
import Services from '@components/organisms/services';
import Story from '@components/organisms/story';
import VideoCheckList from '@components/organisms/video-checklist';

// import image1 from '@images/team-management-departments.png';
// import image2 from '@images/find-out.png';
// import image3 from '@images/eliminate-checks.png';
// import image4 from '@images/activity-updates@2x.png';
// import { FooterLinks } from '@locale/en.js';
import authorImage from '@images/en/team-activity/Time tracking app review@2x.png';
import Team from '@images/team.svg';
import Timeline from '@images/timeline.svg';
import Departments from '@images/departments.svg';
import FilterAndSearch from '@images/filter-and-search.svg';
import Notifications from '@images/notifications.svg';
import Messaging from '@images/messaging.svg';

import icon14 from '@images/time-tracking-clock@1x.png';
import icon15 from '@images/location@1x.png';
import icon16 from '@images/timesheets@1x.png';

import featureImgLocaleOneEn from '@images/en/team-activity/Never feel in the dark again with team activity updates@2x.png';
import featureImgLocaleOneDe from '@images/de/team-activity/DE_Never feel in the dark again with team activity updates@2x.png';
import featureImgLocaleOneEs from '@images/es/team-activity/ES_Never feel in the dark again with team activity updates@2x.png';
import featureImgLocaleOneFr from '@images/fr/team-activity/FR_Never feel in the dark again with team activity updates@2x.png';

import featureImgLocaleTwoEn from '@images/en/team-activity/Simplify team management with departments@2x.png';
import featureImgLocaleTwoDe from '@images/de/team-activity/DE_Simplify team management with departments@2x.png';
import featureImgLocaleTwoEs from '@images/es/team-activity/ES_Simplify team management with departments@2x.png';
import featureImgLocaleTwoFr from '@images/fr/team-activity/FR_Simplify team management with departments@2x.png';

import featureImgLocaleThreeEn from '@images/en/team-activity/Find out what any employee is up to in seconds@2x.png';
import featureImgLocaleThreeDe from '@images/de/team-activity/DE_Find out what any employee is up to in seconds@2x.png';
import featureImgLocaleThreeEs from '@images/es/team-activity/ES_Find out what any employee is up to in seconds@2x.png';
import featureImgLocaleThreeFr from '@images/fr/team-activity/FR_Find out what any employee is up to in seconds@2x.png';

import featureImgLocaleFourEn from '@images/en/team-activity/Eliminate back and forth phone calls and constant check-ins@2x.png';
import featureImgLocaleFourDe from '@images/de/team-activity/DE_Eliminate back and forth phone calls and constant check-ins@2x.png';
import featureImgLocaleFourEs from '@images/es/team-activity/ES_Eliminate back and forth phone calls and constant check-ins@2x.png';
import featureImgLocaleFourFr from '@images/fr/team-activity/FR_Eliminate back and forth phone calls and constant check-ins@2x.png';

import featureImgLocaleFiveEn from '@images/en/team-activity/See your team’s progress at the end of each day@2x.png';
import featureImgLocaleFiveDe from '@images/de/team-activity/DE_See your team’s progress at the end of each day@2x.png';
import featureImgLocaleFiveEs from '@images/es/team-activity/ES_See your team’s progress at the end of each day@2x.png';
import featureImgLocaleFiveFr from '@images/fr/team-activity/FR_See your team’s progress at the end of each day@2x.png';

import { container, articleList } from '@styles/main.module.scss';

import { teamActivityContainer, learnMoreContainer } from '../product.module.scss';

import { featuresStyle } from './team-activity.module.scss';

const TeamActivity = () => {
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

  const titleList2 = [
    { title: Intl.formatMessage({ id: 'pages.productTeamActivity.checkListItemZero' }) },
    { title: Intl.formatMessage({ id: 'pages.productTeamActivity.checkListItemOne' }) },
    { title: Intl.formatMessage({ id: 'pages.productTeamActivity.checkListItemTwo' }) },
    { title: Intl.formatMessage({ id: 'pages.productTeamActivity.checkListItemThree' }) },
  ];

  const featureList2 = [
    {
      title: Intl.formatMessage({ id: 'pages.productTeamActivity.thirdSectionFeatureOneTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTeamActivity.thirdSectionFeatureOneDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTeamActivity.thirdSectionFeatureOneTitle' }),
      logo: <Team />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTeamActivity.thirdSectionFeatureTwoTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTeamActivity.thirdSectionFeatureTwoDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTeamActivity.thirdSectionFeatureTwoTitle' }),
      logo: <Timeline />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTeamActivity.thirdSectionFeatureThreeTitle' }),
      alt: Intl.formatMessage({ id: 'pages.productTeamActivity.thirdSectionFeatureThreeTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTeamActivity.thirdSectionFeatureThreeDesc',
      }),
      logo: <Departments />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTeamActivity.thirdSectionFeatureFourTitle' }),
      alt: Intl.formatMessage({ id: 'pages.productTeamActivity.thirdSectionFeatureFourTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTeamActivity.thirdSectionFeatureFourDesc',
      }),
      logo: <FilterAndSearch />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTeamActivity.thirdSectionFeatureFiveTitle' }),
      alt: Intl.formatMessage({ id: 'pages.productTeamActivity.thirdSectionFeatureFiveTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTeamActivity.thirdSectionFeatureFiveDesc',
      }),
      logo: <Notifications />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTeamActivity.thirdSectionFeatureSixTitle' }),
      alt: Intl.formatMessage({ id: 'pages.productTeamActivity.thirdSectionFeatureSixTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTeamActivity.thirdSectionFeatureSixDesc',
      }),
      comingSoon: true,
      logo: <Messaging />,
    },
  ];

  const teamActivityImgOne = (loc) => {
    if (loc === 'en') {
      //
      return featureImgLocaleOneEn;
    }
    if (loc === 'es') {
      //
      return featureImgLocaleOneEs;
    }
    if (loc === 'de') {
      //
      return featureImgLocaleOneDe;
    }
    if (loc === 'fr') {
      //
      return featureImgLocaleOneFr;
    }
  };

  const teamActivityImgTwo = (loc) => {
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

  const teamActivityImgThree = (loc) => {
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

  const teamActivityImgFour = (loc) => {
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

  const teamActivityImgFive = (loc) => {
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

  return (
    <div className={`${teamActivityContainer} ${container}`}>
      <Modal close={closeModal} showDialog={showDialog} />
      <Seo
        title={Intl.formatMessage({ id: 'pages.productTeamActivity.metaTitle' })}
        description={Intl.formatMessage({ id: 'pages.productTeamActivity.metaDescription' })}
      />
      <Header />
      <MainTitleCard
        hasParagraph
        showButton
        toggleModal={() => openModal()}
        paragraph={Intl.formatMessage({ id: 'pages.productTeamActivity.name' })}
        title={Intl.formatMessage({ id: 'pages.productTeamActivity.bannerTitle' })}
      />
      <Divider className="style2" />
      <VideoCheckList list={titleList2} placeholder="team-activity" cardStyle="centerAligned" />
      <Divider />
      <Title
        maxWidth={900}
        title={Intl.formatMessage({ id: 'pages.productTeamActivity.secondSectionTitle' })}
      />
      <Divider className="style2" />
      <div className={articleList}>
        <Article
          title={Intl.formatMessage({ id: 'pages.productTeamActivity.firstFeatureTitle' })}
          description={Intl.formatMessage({ id: 'pages.productTeamActivity.firstFeatureDesc' })}
          image={teamActivityImgOne(Intl.locale)}
          maxWidth={500}
          imagePadding="7.3rem 4.5rem"
          imageWidth={400}
          imageHeight={354}
        />
        <Article
          title={Intl.formatMessage({ id: 'pages.productTeamActivity.secondFeatureTitle' })}
          description={Intl.formatMessage({ id: 'pages.productTeamActivity.secondFeatureDesc' })}
          image={teamActivityImgTwo(Intl.locale)}
          isSwapped
          maxWidth={500}
          imagePadding="4.4rem 5.9rem 4.3rem 5.3rem"
          imageWidth={398}
          imageHeight={413}
        />
        <Article
          title={Intl.formatMessage({ id: 'pages.productTeamActivity.thirdFeatureTitle' })}
          description={Intl.formatMessage({ id: 'pages.productTeamActivity.thirdFeatureDesc' })}
          image={teamActivityImgThree(Intl.locale)}
          maxWidth={500}
          imagePadding="3.3rem 4.2rem 2.4rem 10.7rem"
          imageWidth={371}
          imageHeight={443}
        />
        <Article
          title={Intl.formatMessage({ id: 'pages.productTeamActivity.fourthFeatureTitle' })}
          description={Intl.formatMessage({ id: 'pages.productTeamActivity.fourthFeatureDesc' })}
          image={teamActivityImgFour(Intl.locale)}
          isSwapped
          maxWidth={500}
          imagePadding="5.6rem 5.5rem"
          imageWidth={380}
          imageHeight={388}
        />
        <Article
          title={Intl.formatMessage({ id: 'pages.productTeamActivity.fifthFeatureTitle' })}
          description={Intl.formatMessage({ id: 'pages.productTeamActivity.fifthFeatureDesc' })}
          image={teamActivityImgFive(Intl.locale)}
          maxWidth={500}
          imagePadding="1.8rem 5.5rem"
          imageWidth={400}
          imageHeight={464}
        />
      </div>
      <Divider />
      <Title
        maxWidth={880}
        title={Intl.formatMessage({ id: 'pages.productTeamActivity.thirdSectionTitle' })}
      />
      <Divider className="style3" />
      <div className={featuresStyle}>
        <FeaturesList list={featureList2} />
      </div>
      <Divider />
      <Cover
        isSwapped
        titleValue={Intl.formatMessage({ id: 'pages.miscellaneous.trustedGlobally' })}
      />
      <Divider className="style10" />
      <Title
        title={Intl.formatMessage({ id: 'pages.productTimeTracking.seventhSectionTitle' })}
        description={Intl.formatMessage({ id: 'pages.productTimeTracking.seventhSectionDesc' })}
        maxDescriptionWidth={700}
      />
      <Divider className="style2" />
      <Services />
      <Divider />
      <Story
        img={authorImage}
        paragraph={Intl.formatMessage({ id: 'pages.productTeamActivity.review' })}
        author="Andy"
      />
      <Divider />
      <Title
        title={Intl.formatMessage({ id: 'pages.productTimeTracking.eighthSectionTitle' })}
        description={Intl.formatMessage({ id: 'pages.productTimeTracking.eighthSectionDesc' })}
        smallerMargin
      />
      <Divider className="style2" />
      <div className={learnMoreContainer}>
        <LearnMoreCard
          title={Intl.formatMessage({
            id: 'pages.productLocationTracking.bottomFeatureOneTitle',
          })}
          description={Intl.formatMessage({
            id: 'pages.productLocationTracking.bottomFeatureOneDesc',
          })}
          icon={icon14}
          path="/product/time-tracking"
          imageWidth={30}
          imageHeight={34}
        />
        <LearnMoreCard
          title={Intl.formatMessage({
            id: 'pages.productTimeTracking.bottomFeatureOneTitle',
          })}
          description={Intl.formatMessage({
            id: 'pages.productTimeTracking.bottomFeatureOneDesc',
          })}
          icon={icon15}
          path="/product/gps-location-tracking"
          imageWidth={27}
          imageHeight={32}
        />
        <LearnMoreCard
          title={Intl.formatMessage({
            id: 'pages.productLocationTracking.bottomFeatureThreeTitle',
          })}
          description={Intl.formatMessage({
            id: 'pages.productLocationTracking.bottomFeatureThreeDesc',
          })}
          icon={icon16}
          path="/product/timesheets"
          imageWidth={30}
          imageHeight={33}
        />
      </div>
      <Divider className="style4" />
      <SubscribeBanner
        title={Intl.formatMessage({
          id: 'pages.productTeamActivity.subscribeBanner',
        })}
        placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
        checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
        checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
        checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
      />
      <Footer />
    </div>
  );
};

export default TeamActivity;
