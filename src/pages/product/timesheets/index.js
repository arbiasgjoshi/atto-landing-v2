import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useIntl } from 'gatsby-plugin-react-intl';
import loadable from '@loadable/component';

import Seo from '@components/molecules/seo';
import Divider from '@components/atoms/divider';
import Title from '@components/molecules/title';
import Header from '@components/molecules/header';
import MainTitleCard from '@components/molecules/main-title-card';

import IconCard from '@components/molecules/icon-card';
import LearnMoreCard from '@components/molecules/learn-more-card';
import Story from '@components/organisms/story';
import FeaturesList from '@components/organisms/features-list';
import ListArticle from '@components/organisms/list-article';
import IconCardList from '@components/organisms/icon-card-list';
import GrowthNumbers from '@components/organisms/growth-numbers';
import Services from '@components/organisms/services';

import icon from '@images/accurate.png';
import icon2 from '@images/trustworthy.png';
import icon3 from '@images/instantly-available@2x.png';
import imgTwo from '@images/en/timesheets/Sync with Payroll and Accounting Software@2x.png';

import AllTimesheets from '@images/All_featres_TimesheetsAndroid.svg';
import AllFeatureEmail from '@images/All_featres_emailAndroid.svg';
import AvoidGuess from '@images/avoid_guesstimation.svg';
import Wages from '@images/wages.svg';
import Share from '@images/share.svg';
import AllFeatresRounding from '@images/featres_rounding.svg';
import ChangeHistory from '@images/change_history.svg';
import ArchivedMembers from '@images/Archived_membersSVG.svg';
import WageEstimate from '@images/Wage_estimatesSVG.svg';

import icon20 from '@images/time-tracking-clock@1x.png';
import icon21 from '@images/location@1x.png';
import icon22 from '@images/profile@1x.png';

import featureImgLocaleThreeDe from '@images/de/timesheets/DE_Timesheets on-time and in your Inbox@2x.png';
import featureImgLocaleThreeEs from '@images/es/timesheets/ES_Timesheets on-time and in your Inbox@2x.png';
import featureImgLocaleThreeFr from '@images/fr/timesheets/FR_Timesheets on-time and in your Inbox@2x.png';
import featureImgLocaleThreeEn from '@images/en/timesheets/Timesheets on-time and in your Inbox@2x.png';

import featureImgLocaleFourDe from '@images/de/timesheets/DE_Estimate your Employees??? Wages@2x.png';
import featureImgLocaleFourEs from '@images/es/timesheets/ES_Estimate your Employees??? Wages@2x.png';
import featureImgLocaleFourFr from '@images/fr/timesheets/FR_Estimate your Employees??? Wages@2x.png';
import featureImgLocaleFourEn from '@images/en/timesheets/Estimate your Employees??? Wages@2x.png';
import { apiUrl } from '@helpers';
import { container, imageWrapper } from '@styles/main.module.scss';
import {
  teamActivityContainer,
  roundImagesContainer,
  learnMoreContainer,
  readyMadeTitle,
} from '../product.module.scss';

const Modal = loadable(() => import('@components/molecules/modal'));
const Footer = loadable(() => import('@components/molecules/footer'));
const VideoCheckList = loadable(() => import('@components/organisms/video-checklist'));
const SubscribeBanner = loadable(() => import('@components/molecules/subscribe-banner'));

const Timesheets = () => {
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
    fetch(`${apiUrl}/delete-invite`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        closeModal();
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

  const checkLists = [
    { title: Intl.formatMessage({ id: 'pages.productTimesheets.checkListItemZero' }) },
    { title: Intl.formatMessage({ id: 'pages.productTimesheets.checkListItemOne' }) },
    { title: Intl.formatMessage({ id: 'pages.productTimesheets.checkListItemTwo' }) },
    { title: Intl.formatMessage({ id: 'pages.productTimesheets.checkListItemThree' }) },
  ];

  const checkLists2 = [
    { title: Intl.formatMessage({ id: 'pages.productTimesheets.firstFeatureCheckitemOne' }) },
    { title: Intl.formatMessage({ id: 'pages.productTimesheets.firstFeatureCheckitemTwo' }) },
    { title: Intl.formatMessage({ id: 'pages.productTimesheets.firstFeatureCheckitemThree' }) },
    { title: Intl.formatMessage({ id: 'pages.productTimesheets.firstFeatureCheckitemFour' }) },
  ];

  const checkLists3 = [
    { title: Intl.formatMessage({ id: 'pages.productTimesheets.secondFeatureCheckitemOne' }) },
    { title: Intl.formatMessage({ id: 'pages.productTimesheets.secondFeatureCheckitemTwo' }) },
    { title: Intl.formatMessage({ id: 'pages.productTimesheets.secondFeatureCheckitemThree' }) },
  ];

  const firstList = [
    {
      title: Intl.formatMessage({ id: 'pages.productTimesheets.secondSectionFeatureOneTitle' }),
      alt: Intl.formatMessage({ id: 'pages.productTimesheets.secondSectionFeatureOneTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.secondSectionFeatureOneDesc',
      }),
      icon,
      imageWidth: 94,
      imageHeight: 93,
      imagePadding: '.8rem .6rem 1.9rem 2rem',
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimesheets.secondSectionFeatureTwoTitle' }),
      alt: Intl.formatMessage({ id: 'pages.productTimesheets.secondSectionFeatureTwoTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.secondSectionFeatureTwoDesc',
      }),
      icon: icon2,
      imageWidth: 100,
      imageHeight: 96,
      imagePadding: '1.2rem 1rem',
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimesheets.secondSectionFeatureThreeTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.secondSectionFeatureThreeDesc',
      }),
      alt: Intl.formatMessage({ id: 'pages.productTimesheets.secondSectionFeatureThreeTitle' }),
      icon: icon3,
      imageWidth: 120,
      imageHeight: 120,
      imagePadding: '.6rem 0 0 .6rem',
    },
  ];

  const featureList = [
    {
      title: Intl.formatMessage({ id: 'pages.productTimesheets.thirdSectionFeatureOneTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureOneDesc',
      }),
      logo: <AllTimesheets />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimesheets.thirdSectionFeatureTwoTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureTwoDesc',
      }),
      logo: <AllFeatureEmail />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimesheets.thirdSectionFeatureThreeTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureThreeDesc',
      }),
      logo: <AvoidGuess />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimesheets.thirdSectionFeatureFourTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureFourDesc',
      }),
      logo: <Wages />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimesheets.thirdSectionFeatureFiveTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureFiveDesc',
      }),
      logo: <Share />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimesheets.thirdSectionFeatureSixTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureSixDesc',
      }),
      logo: <AllFeatresRounding />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimesheets.thirdSectionFeatureSevenTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureSevenDesc',
      }),
      logo: <ChangeHistory />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimesheets.thirdSectionFeatureEightTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureEightDesc',
      }),
      logo: <ArchivedMembers />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.productTimesheets.thirdSectionFeatureNineTitle' }),
      description: Intl.formatMessage({
        id: 'pages.productTimesheets.thirdSectionFeatureNineDesc',
      }),
      logo: <WageEstimate />,
    },
  ];

  const featureImgLocaleOne = (lang) => {
    if (lang === 'de') {
      return (
        <StaticImage
          src="../../../images/de/timesheets/DE_Boost productivity with timesheet insights@2x.png"
          alt="Boost productivity with timesheet insights"
          width={511}
          height={566}
          quality={95}
          placeholder="none"
        />
      );
    }
    if (lang === 'es') {
      return (
        <StaticImage
          src="../../../images/es/timesheets/ES_Boost productivity with timesheet insights@2x.png"
          alt="Everything you need to keep track of your employees??? time"
          width={511}
          height={566}
          quality={95}
          placeholder="none"
        />
      );
    }
    if (lang === 'fr') {
      return (
        <StaticImage
          src="../../../images/fr/timesheets/FR_Boost productivity with timesheet insights@2x.png"
          alt="Boost productivity with timesheet insights"
          width={511}
          height={566}
          quality={95}
          placeholder="none"
        />
      );
    }
    return (
      <StaticImage
        src="../../../images/en/timesheets/Boost productivity with timesheet insights@2x.png"
        alt="Boost productivity with timesheet insights"
        width={511}
        height={566}
        quality={95}
        placeholder="none"
      />
    );
  };

  const featureImgLocaleTwo = (lang) => {
    if (lang === 'de') {
      return (
        <StaticImage
          src="../../../images/de/timesheets/DE_Gain a clear understanding of your employees??? activity@2x.png"
          alt="Gain a clear understanding of your employees??? activity"
          width={506}
          height={686}
          quality={95}
          placeholder="none"
        />
      );
    }
    if (lang === 'es') {
      return (
        <StaticImage
          src="../../../images/es/timesheets/ES_Gain a clear understanding of your employees??? activity@2x.png"
          alt="Gain a clear understanding of your employees??? activity"
          width={506}
          height={686}
          quality={95}
          placeholder="none"
        />
      );
    }
    if (lang === 'fr') {
      return (
        <StaticImage
          src="../../../images/fr/timesheets/FR_Gain a clear understanding of your employees??? activity@2x.png"
          alt="Gain a clear understanding of your employees??? activity"
          width={506}
          height={686}
          quality={95}
          placeholder="none"
        />
      );
    }
    return (
      <StaticImage
        src="../../../images/en/timesheets/Gain a clear understanding of your employees??? activity@2x.png"
        alt="Gain a clear understanding of your employees??? activity"
        width={506}
        height={686}
        quality={95}
        placeholder="none"
      />
    );
  };

  const bannerImage = (loc) => {
    if (loc === 'en') {
      return (
        <StaticImage
          src="../../../images/en/overview/Everything you need to keep track of your employees??? time@2x.png"
          alt="Everything you need to keep track of your employees??? time"
          width={1220}
          quality={98}
          placeholder="none"
        />
      );
    }
    if (loc === 'de') {
      return (
        <StaticImage
          src="../../../images/de/overview/DE_Everything you need to keep track of your employees??? time@2x.png"
          alt="Everything you need to keep track of your employees??? time"
          width={1220}
          quality={98}
          placeholder="none"
        />
      );
    }
    if (loc === 'es') {
      return (
        <StaticImage
          src="../../../images/es/overview/ES_Everything you need to keep track of your employees??? time@2x.png"
          alt="Everything you need to keep track of your employees??? time"
          width={1220}
          quality={98}
          placeholder="none"
        />
      );
    }
    if (loc === 'fr') {
      return (
        <StaticImage
          src="../../../images/fr/timesheets/FR_Everything you need to keep track of your employees??? time@2x.png"
          alt="Everything you need to keep track of your employees??? time"
          width={1220}
          quality={98}
          placeholder="none"
        />
      );
    }

    return null;
  };

  const timeSheetFeatureImgThree = (loc) => {
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

  const timeSheetFeatureImgFour = (loc) => {
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

  useEffect(() => {
    if (values) {
      setTimeout(() => openModal(), 1000);
    }
  }, [values]);

  return (
    <div className={`${container} ${teamActivityContainer}`}>
      <Modal
        close={closeModal}
        showDialog={showDialog}
        hasValues={values}
        onDelete={toggleDeleteInvite}
        setFormValues={(formValues) => formSuccessState(formValues)}
      />
      <Seo
        title={Intl.formatMessage({ id: 'pages.productTimesheets.metaTitle' })}
        description={Intl.formatMessage({ id: 'pages.productTimesheets.metaDescription' })}
      />
      <Header />
      <MainTitleCard
        maxParagraphWidth={760}
        hasParagraph
        showButton
        toggleModal={() => openModal()}
        paragraph={Intl.formatMessage({ id: 'pages.productTimesheets.name' })}
        title={Intl.formatMessage({ id: 'pages.productTimesheets.bannerTitle' })}
        subtitle={Intl.formatMessage({ id: 'pages.productTimesheets.bannerDescription' })}
      />
      <Divider className="style2" />
      <VideoCheckList
        list={checkLists}
        videoUrl="https://player.vimeo.com/video/563717896?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        placeholder="timesheets"
        cardStyle="centerAligned"
      />
      <Divider />
      <div className={readyMadeTitle}>
        <Title
          title={Intl.formatMessage({ id: 'pages.productTimesheets.secondSectionTitle' })}
          description={Intl.formatMessage({ id: 'pages.productTimesheets.secondSectionDesc' })}
          maxDescriptionWidth={980}
        />
      </div>
      <Divider className="style01" />
      <div className={imageWrapper} style={{ width: 'calc(100% + 70px)' }}>
        {bannerImage(Intl.locale)}
      </div>
      <Divider className="style3" />
      <IconCardList cardList={firstList} style="smallTimesheetImages" />
      <Divider />
      <ListArticle
        title={Intl.formatMessage({ id: 'pages.productTimesheets.firstFeatureTitle' })}
        description={Intl.formatMessage({ id: 'pages.productTimesheets.firstFeatureDesc' })}
        list={checkLists2}
        image={featureImgLocaleOne(Intl.locale)}
        textMargin="10.3 0"
      />
      <Divider />
      <ListArticle
        title={Intl.formatMessage({ id: 'pages.productTimesheets.secondFeatureTitle' })}
        description={Intl.formatMessage({ id: 'pages.productTimesheets.secondFeatureDesc' })}
        list={checkLists3}
        image={featureImgLocaleTwo(Intl.locale)}
        isSwapped
        textMargin="5.8rem 0"
      />
      <Divider />
      <Title
        maxWidth={880}
        title={Intl.formatMessage({ id: 'pages.productTimesheets.thirdSectionTitle' })}
      />
      <Divider className="style3" />
      <FeaturesList list={featureList} />
      <Divider />
      <GrowthNumbers title={Intl.formatMessage({ id: 'pages.miscellaneous.trustedGlobally' })} />
      <Divider />
      <Title
        title={Intl.formatMessage({ id: 'pages.productTimesheets.fourthSectionTitle' })}
        description={Intl.formatMessage({ id: 'pages.productTimesheets.fourthSectionDesc' })}
        maxDescriptionWidth={1000}
      />
      <Divider className="style2" />
      <div className={roundImagesContainer}>
        <IconCard
          isRound
          bigImage
          icon={timeSheetFeatureImgFour(Intl.locale)}
          title={Intl.formatMessage({ id: 'pages.productTimesheets.fourthSectionFeatureOneTitle' })}
          alt={Intl.formatMessage({ id: 'pages.productTimesheets.fourthSectionFeatureOneTitle' })}
          description={Intl.formatMessage({
            id: 'pages.productTimesheets.fourthSectionFeatureOneDesc',
          })}
          style="timesheetMargin"
        />
        <IconCard
          isRound
          bigImage
          icon={imgTwo}
          title={Intl.formatMessage({ id: 'pages.productTimesheets.fourthSectionFeatureTwoTitle' })}
          alt={Intl.formatMessage({ id: 'pages.productTimesheets.fourthSectionFeatureTwoTitle' })}
          description={Intl.formatMessage({
            id: 'pages.productTimesheets.fourthSectionFeatureTwoDesc',
          })}
          style="timesheetMargin"
        />
        <IconCard
          isRound
          bigImage
          icon={timeSheetFeatureImgThree(Intl.locale)}
          title={Intl.formatMessage({
            id: 'pages.productTimesheets.fourthSectionFeatureThreeTitle',
          })}
          description={Intl.formatMessage({
            id: 'pages.productTimesheets.fourthSectionFeatureThreeDesc',
          })}
          alt={Intl.formatMessage({ id: 'pages.productTimesheets.fourthSectionFeatureThreeTitle' })}
          style="timesheetMargin"
        />
      </div>
      <Divider />
      <Title
        title={Intl.formatMessage({
          id: 'pages.productTimesheets.fifthSectionTitle',
        })}
        description={Intl.formatMessage({
          id: 'pages.homepage.thirdSectionDesc',
        })}
        maxDescriptionWidth={700}
      />
      <Divider className="style2" />
      <Services />
      <Divider />
      <Story
        img="timesheets"
        paragraph={Intl.formatMessage({ id: 'pages.productTimesheets.review' })}
        author="David Warwick"
      />
      <Divider />
      <Title
        title={Intl.formatMessage({
          id: 'pages.productTimeTracking.eighthSectionTitle',
        })}
        description={Intl.formatMessage({
          id: 'pages.productTimeTracking.eighthSectionDesc',
        })}
        marginBottom=".4rem"
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
          icon={icon20}
          imageWidth={30}
          imageHeight={33}
          path="/product/time-tracking"
        />

        <LearnMoreCard
          title={Intl.formatMessage({
            id: 'pages.productTimeTracking.bottomFeatureOneTitle',
          })}
          description={Intl.formatMessage({
            id: 'pages.productTimeTracking.bottomFeatureOneDesc',
          })}
          icon={icon21}
          imageWidth={27}
          imageHeight={32}
          path="/product/location-tracking"
        />

        <LearnMoreCard
          title={Intl.formatMessage({
            id: 'pages.productTimeTracking.bottomFeatureTwoTitle',
          })}
          description={Intl.formatMessage({
            id: 'pages.productTimeTracking.bottomFeatureTwoDesc',
          })}
          icon={icon22}
          imageWidth={42}
          imageHeight={44}
          path="/product/team-activity"
        />
      </div>
      <Divider className="style4" />
      <SubscribeBanner
        title={Intl.formatMessage({
          id: 'pages.productTimesheets.subscribeBanner',
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

export default Timesheets;
