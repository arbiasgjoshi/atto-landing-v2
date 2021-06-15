import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Divider from '@components/atoms/divider';
import SEO from '@components/molecules/seo';
import Title from '@components/molecules/title';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import CheckList from '@components/molecules/check-list';
import MainTitleCard from '@components/molecules/main-title-card';
import LearnMoreCard from '@components/molecules/learn-more-card';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import Story from '@components/organisms/story';
import IconCardList from '@components/organisms/icon-card-list';
import Cover from '@components/organisms/growth-numbers/cover';
import FeaturesList from '@components/organisms/features-list';
import ListArticle from '@components/organisms/list-article';
import Services from '@components/organisms/services';
import VideoCheckList from '@components/organisms/video-checklist';

import image1 from '@images/verify-your-team.png';
import authorImage from '@images/authorImage.png';
import DailyMovements from '@images/daily-movements.svg'; // TODO change svg when png is provided

import icon18 from '@images/location@1x.png';
import icon19 from '@images/profile@1x.png';
import icon20 from '@images/timesheets@1x.png';

import { container } from '@styles/main.module.scss';

import { FooterLinks } from '@locale/en.js';
import {
  serviceList,
  featuresList,
  checkList1,
  checkLists2,
  checkLists3,
  checkList4,
  cardList,
} from '@data/listed-data';

import {
  privacyContainer,
  imageContainer,
  learnMoreContainer,
  mobileImage,
  desktopImage,
} from './gps-location-tracking.module.scss';

const LocationTracking = () => (
  <div className={container}>
    <SEO title="GPS Location Tracking" />
    <Header />
    <MainTitleCard
      title="Be in the right place, at the right time"
      subtitle="Increase the accountability and transparency of your team with real-time updates on their location."
      hasParagraph
      showButton
      paragraph="GPS LOCATION TRACKING"
    />
    <Divider className="style2" />
    <VideoCheckList list={checkList1} cardStyle="centerAligned" />
    <Divider />
    <Title maxWidth={920} title="Track the locations of your entire team in real-time" />
    <Divider className="style5" />
    <StaticImage
      src="../../../images/stay-in-loop.png"
      alt="Stay in loop image"
      height={505}
      quality={95}
      className={mobileImage}
    />
    <StaticImage
      src="../../../images/gps-location-tracking-two@2x.png"
      alt="location of team"
      width={1140}
      height={340}
      quality={95}
      placeholder="none"
      className={desktopImage}
    />
    <Divider className="style2" />
    <IconCardList noImage cardList={cardList} />
    <Divider />
    <ListArticle
      title="Keep track of your team's daily movements"
      description="Atto’s GPS location tracking generates simple map-based timelines of every employee’s daily movements. This helps you visualize their workdays in a clear, simple-to-understand fashion."
      list={checkLists2}
      image={<DailyMovements />}
    />
    <Divider />
    <ListArticle
      title="Verify your team is working at the right job site"
      description="Increase your team’s accountability by using geofencing to restrict them from clocking in until they’re at a job site."
      description2="Clock in/out locations are GPS stamped and job sites can be named so it’s easy to read reports and check activity."
      list={checkLists3}
      image={image1}
      isSwapped
      imageWidth={500}
      imageHeight={600}
    />
    <Divider />
    <Title
      title="Your privacy, our priority."
      description="You always stay in complete control of location tracking, providing peace of mind to your employees."
      maxDescriptionWidth={1040}
    />
    <Divider className="style3" />
    <div className={privacyContainer}>
      <CheckList list={checkList4} hasDescription />
      <div className={imageContainer}>
        <StaticImage
          src="../../../images/privacy-priority@2x.png"
          width={455}
          height={500}
          quality={90}
          placeholder="none"
          alt="Your privacy,our priority"
        />
      </div>
    </div>
    <Divider />
    <Title title="Our full suite of location tracking features at a glance" maxWidth={880} />
    <Divider className="style7" />
    <FeaturesList list={featuresList} />
    <Divider />
    <Cover isSwapped />
    <Divider className="style10" />
    <Title
      title="GPS location tracking for any industry"
      description="Atto helps all types of businesses across the world to manage their employees’ time."
      maxDescriptionWidth={700}
    />
    <Divider className="style2" />
    <Services list={serviceList} />
    <Divider />
    <Story
      img={authorImage}
      paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."`}
      author="Robert Bennett - DPA Cleaning Services, Inc."
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
        title="Time Tracking"
        description="See exactly where your employees’ time is going. Track work hours, breaks, overtime, time off, and more!."
        icon={icon18}
        path="/product/time-tracking"
        imageWidth={30}
        imageHeight={34}
      />
      <LearnMoreCard
        title="Team Activity"
        description="Stay in the loop with what’s happening – without having to pick up the phone."
        icon={icon19}
        path="/product/team-activity"
        imageWidth={42}
        imageHeight={44}
      />
      <LearnMoreCard
        title="Timesheets"
        description="Spend more time on the things that matter with ready-made, accurate, verified timesheets."
        icon={icon20}
        path="/product/timesheets"
        imageWidth={30}
        imageHeight={33}
      />
    </div>
    <Divider className="style3" />
    <SubscribeBanner
      title="Near or far, stay in control of your team, wherever they are."
      placeholder="Type your email"
      checkItemOne="No credit card required"
      checkItemTwo="14 day free trial"
      checkItemThree="Cancel anytime"
    />
    <Footer FooterLinks={FooterLinks} />
  </div>
);

export default LocationTracking;
