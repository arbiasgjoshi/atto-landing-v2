import React from 'react';

// import PropTypes from 'prop-types';
// import { graphql } from 'gatsby';

import { StaticImage } from 'gatsby-plugin-image';
import Divider from '@components/atoms/divider';
import SEO from '@components/molecules/seo';
import { useIntl } from 'gatsby-plugin-intl';
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
import { container } from '@styles/main.module.scss';

import { FooterLinks } from '@locale/en.js';
import authorImage from '@images/authorImage.png';
import noImage from '@images/no-image.png';

import WebTracking from '@images/web-time-tracking.svg';
import MobileTracking from '@images/mobile_time_tracking.svg';
import KioskTracking from '@images/kiosk-time-tracking.svg';

import icon22 from '@images/employees_forget.png';
import icon23 from '@images/out-of-battery.png';
import icon32 from '@images/location@1x.png';
import icon33 from '@images/profile@1x.png';
import icon34 from '@images/timesheets@1x.png';

import {
  serviceList,
  timeTrackingTitleList,
  timeTrackingFeatureList,
  timeTrackingFeatures,
  timeTrackingOtherFeatures,
  overviewAdminList,
} from '@data/listed-data';

import {
  timeTrackingContainer,
  learnMoreContainer,
  workListContainer,
  workListItem,
  commonProblemsContainer,
  mobileImage,
  desktopImage,
} from './time-tracking.module.scss';

// import localeData from '@locale/en';

const TimeTracking = () => {
  const Intl = useIntl();

  return (
    <div className={`${container} ${timeTrackingContainer}`}>
      <SEO title="Product - Time Tracking" />
      <Header />
      <MainTitleCard
        hasParagraph
        showButton
        paragraph="TIME TRACKING"
        title="Take the pain away from time tracking"
        subtitle="An easy-to-use, accurate, and trustworthy time-tracking solution."
      />
      <Divider className="style2" />
      <VideoCheckList
        list={timeTrackingTitleList}
        cardStyle="centerAligned"
        videoUrl="https://www.youtube.com/watch?v=DTvS9lvRxZ8"
      />
      <StaticImage
        src="../images/time-tracking-fingertips@2x.png"
        alt="Home banner image"
        height={505}
        quality={95}
        placeholder="none"
        className={mobileImage}
      />
      <Divider />
      <div>
        <StaticImage
          alt="Clock In"
          height={502}
          quality={95}
          placeholder="none"
          src="../../../images/banner-image-2@2x.png"
          className={desktopImage}
        />
      </div>
      <Divider className="style3" />
      <IconCardList cardList={timeTrackingFeatures} />
      <Divider />
      <Title
        title="Start tracking time in a tap"
        maxDescriptionWidth={800}
        description="Say goodbye to employee estimates. Use the time clock to precisely capture work activity."
      />
      <Divider className="style7" />
      <IconCardList cardList={timeTrackingOtherFeatures} hasBigImages style="smallerMargin" />
      <Divider />
      <Title
        maxWidth={950}
        maxDescriptionWidth={800}
        title="Accurately track time from any location and any device"
        description="Time tracking options to suit your business’ needs. In the office, in teams, at a job site, or on the move. Online or offline."
      />
      <Divider className="style7" />
      {/* <ImageSlider /> */}
      <div className={workListContainer}>
        <div>
          <StaticImage
            alt="Time tracking on the web"
            height={378}
            width={380}
            quality={95}
            placeholder="none"
            src="../../../images/time-tracking-on-web@2x.png"
          />
          <FeatureCard
            isWorkCard
            title="Work in the office via the Web Dashboard"
            description="When at the office, track your time using Atto’s web-based time clock."
            logo={<WebTracking />}
            alt="Web time tracking"
            imagePadding=".8rem 2.9rem .797rem .1rem"
          />
        </div>
        <div className={workListItem}>
          <StaticImage
            alt="Time tracking via our mobile app"
            height={378}
            width={380}
            quality={95}
            placeholder="none"
            src="../../../images/time-tracking-mobile-app@2x.png"
          />
          <FeatureCard
            isWorkCard
            title="Work on the go via the Mobile App"
            description="Track time on the go with the Atto mobile app available on iOS and Android."
            logo={<MobileTracking />}
            alt="Mobile time tracking"
            imagePadding=".5rem 3.24rem .587rem 0"
          />
        </div>
        <div className={workListItem}>
          <StaticImage
            alt="Time tracking on the time clock kiosk"
            height={378}
            width={380}
            quality={95}
            placeholder="none"
            src="../../../images/time-clock-kiosk@2x.png"
          />
          <FeatureCard
            isWorkCard
            title="Work at job sites via the Time Clock Kiosk"
            description="Set up a time clock kiosk to enable your team to track time from a single device."
            logo={<KioskTracking />}
            alt="Kiosk time tracking"
            imagePadding=".9rem 2.5rem .85rem .4rem"
          />
        </div>
      </div>
      <Divider />
      <Title maxWidth={860} title="Lower costs, higher productivity. Less admin, more business." />
      <Divider className="style7" />
      <StaticImage
        src="../../../images/admin-panel.png"
        alt="admin-panel-image"
        width={1140}
        height={616}
        quality={96}
        placeholder="none"
      />
      <Divider className="style3" />
      <CheckList list={overviewAdminList} hasDescription cardStyle="big" />
      <Divider />
      <Title maxWidth={880} title="Our full suite of time tracking features at a glance" />
      <Divider className="style3" />
      <FeaturesList list={timeTrackingFeatureList} />
      <Divider />
      <GrowthNumbers />
      <Divider />
      <Title title="Common problems, solved." />
      <Divider className="style7" />
      <div className={commonProblemsContainer}>
        <IconCard
          bigImage
          isRound
          imageWidth={250}
          imageHeight={250}
          icon={icon22}
          alt="Employees forget"
          title="Employees forget to track their time?"
          description="Not any more! With smart reminders, your employees are encouraged to clock in/out when they’re at a job site, and at their regular start and end time."
        />
        <IconCard
          isRound
          bigImage
          icon={icon23}
          imageWidth={250}
          imageHeight={250}
          alt="Out of battery"
          title="What if phone ran out of battery?"
          description="Not a problem! If an employee forgets their phone, or it runs out of battery, either they or a manager can add a manual time entry for your approval."
        />
        <IconCard
          bigImage
          isRound
          imageWidth={250}
          imageHeight={250}
          icon={noImage}
          alt="Not sure if employees"
          title="Not sure if employees are where they’re supposed to?"
          description="Always be in the know! With geofencing, you can restrict employees from clocking in until they’re at a job site – increasing accountability and preventing inaccurate time entries."
        />
      </div>
      <Divider />
      <Title
        title="Time tracking solutions for any industry"
        description="Atto helps all types of businesses across the world to manage their employees’ time."
        maxDescriptionWidth={700}
      />
      <Divider className="style2" />
      <Services list={serviceList} />
      <Divider />
      <Story
        img={authorImage}
        paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."`}
        author="Robert Bennet - DPA Cleaning Services, Inc."
      />
      <Divider />
      <Title
        title="It doesn't end here!"
        smallerMargin
        description="Learn more about what Atto can do for you"
      />
      <Divider className="style6" />
      <div className={learnMoreContainer}>
        <LearnMoreCard
          title="GPS Location Tracking"
          description="Increase the safety and accountability of your team with real-time updates on their location."
          icon={icon32}
          path="/product/gps-location-tracking"
          imageWidth={27}
          imageHeight={32}
        />
        <LearnMoreCard
          title="Team Activity"
          description="Stay in the loop with what's happening - without needing to pick up the phone"
          icon={icon33}
          path="/product/team-activity"
          imageWidth={42}
          imageHeight={44}
        />
        <LearnMoreCard
          title="Timesheets"
          description="Spend more time on the things that matter with ready-made, accurate, verified timesheets."
          icon={icon34}
          path="/product/timesheets"
          imageWidth={30}
          imageHeight={33}
        />
      </div>
      <Divider />
      <SubscribeBanner
        title="What are you waiting for? Time is ticking!"
        placeholder="Type your email"
        bannerImage
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
      />
      <Footer FooterLinks={FooterLinks} />
    </div>
  );
};

// TimeTracking.propTypes = {
//   data: PropTypes.shape(),
// };

export default TimeTracking;
