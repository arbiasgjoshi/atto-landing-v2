import React from 'react';

import SEO from '@components/molecules/seo';
import Divider from '@components/atoms/divider';
import Button from '@components/atoms/button';
import Header from '@components/molecules/header';
import Title from '@components/molecules/title';
import IndustryMainCard from '@components/organisms/industry-main-card';
import LearnMoreCard from '@components/molecules/learn-more-card';
import Footer from '@components/molecules/footer';
import Story from '@components/organisms/story';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import IconCardList from '@components/organisms/icon-card-list';
import TickCardList from '@components/organisms/tick-card-list';
import AnyDevice from '@components/organisms/any-device';
import VerticalCheckList from '@components/organisms/vertical-check-list';
import { StaticImage } from 'gatsby-plugin-image';

import image1 from '@images/time-clock-mobile@2x.png';
import TrackMore from '@images/track-more-than-just-work-hours@2x.png';
import authorImage from '@images/construction-minds@2x.png';
import image2 from '@images/time-tracking-any-device.png';
import ProductOverviewBanner from '@images/product-overview-banner-image.svg';
import CommonQuestions from '@components/organisms/common-questions';
import Services from '@components/organisms/services';

import icon32 from '@images/location@1x.png';
import icon33 from '@images/profile@1x.png';
import icon34 from '@images/timesheets@1x.png';
import icon35 from '@images/time-tracking-clock@1x.png';

import { container, imageFormWrapper } from '@styles/main.module.scss';

import { FooterLinks } from '@locale/en.js';
import { firstList, serviceList } from '@data/third-phase/time-tracking-app.js';

import {
  checkList,
  commonQuestionsList,
  featureCardsList,
  cardList,
  verticalList,
} from '@data/third-phase/work-hours.js';
import { buttonContainer, learnMoreContainer } from './work-hours-tracker.module.scss';

// import localeData from '@locale/en';

const WorkHoursTracker = () => (
  <div className={`${container}`}>
    <SEO title="Work Hours Tracker" />
    <Header />
    <IndustryMainCard
      smallTitle="WORK HOURS TRACKER"
      title="Keep track of your employees with our work hours tracker"
      description="With time tracking, location tracking, wage estimates, and instantly available timesheet reports."
      image={image1}
      imageHeight="614"
      imageWidth="438"
      styling="other"
    />
    <Divider className="style3" />
    <TickCardList list={checkList} />
    <Divider />
    <Title
      title="Track your work hours, breaks, time off, overtime, and more!"
      description="Whether your employees are working or enjoying some well-earned rest, you’ll always be aware of their work status."
      maxWidth={920}
      maxDescriptionWidth={800}
      bodyStyle="secondBodyStyle"
    />
    <Divider className="style3" />
    <IconCardList cardList={firstList} hasBigImages style="smallerMargin" />
    <Divider />
    <Story
      img={authorImage}
      paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."`}
      author="Robert Bennett - DPA Cleaning Services, Inc."
    />
    <Divider />
    <AnyDevice
      title="A work hours tracker for every device, and every purpose"
      description="Whether you use our app on the go, our web-based portal in the office, or our time clock kiosk when working in a central location – Atto has a work hours tracker for you."
      image={image2}
      list={featureCardsList}
      styling="moreCards"
    />
    <Divider />
    <Title
      title="Track more than just work hours"
      description="The Atto work hours tracker can keep track of your employees’ jobs, locations, and even their wages."
      maxDescriptionWidth={850}
      bodyStyle="secondBodyStyle"
    />
    <Divider className="style2" />
    <VerticalCheckList
      list={verticalList}
      image={TrackMore}
      imageAlt="Track more than just work hours"
      imagePadding="3.1rem 0"
      imageHeight="594"
      imageWidth="550"
    />
    <Divider />
    <div className={imageFormWrapper}>
      <Title
        title="Turn data from the work hours tracker into insightful reports"
        description="Data from the work hours tracker is used to produce timesheet reports. Use them to see how productive your workers are, reduce the time to administer your payroll, and share them with clients you bill hourly."
        maxWidth={920}
        maxDescriptionWidth={800}
        bodyStyle="secondBodyStyle"
      />
      <Divider className="style2" />
      <ProductOverviewBanner />
      <Divider className="style2" />
    </div>
    <IconCardList cardList={cardList} style="twoCards" />
    <Divider className="style3" />
    <div className={buttonContainer}>
      <Button btnText="Find out more" />
    </div>
    <Divider className="style4" />
    <Title
      title="A time tracking app for any industry"
      description="Atto helps all types of businesses across the world to manage their employees’ time."
      maxDescriptionWidth={700}
      maxWidth={1000}
    />
    <Divider className="style2" />
    <Services list={serviceList} />
    <Divider className="style3" />
    <StaticImage
      src="../../images/time-tracking-for-any-industry@2x.png"
      quality={96}
      placeholder="none"
    />
    <Divider />
    <CommonQuestions isSwapped list={commonQuestionsList} />
    <Divider />
    <StaticImage
      src="../../images/time-tracking-for-field-workers-three@2x.png"
      quality={96}
      placeholder="none"
    />
    <Divider />
    <Title
      title="It doesn't end here!"
      smallerMargin
      description="Learn more about what Atto can do for you"
    />
    <div className={learnMoreContainer}>
      <LearnMoreCard
        title="Time Tracking"
        description="Know where your time is going. Just tap a button to clock in and start tracking your time."
        icon={icon35}
        path="/product/time-tracking"
        imageWidth={30}
        imageHeight={33}
        styling="smaller"
      />
      <LearnMoreCard
        title="GPS Location Tracking"
        description="Get real-time updates on your team’s location. Ensure everyone is safe and productive."
        icon={icon32}
        path="/product/gps-location-tracking"
        imageWidth={27}
        imageHeight={32}
        styling="smaller"
      />
      <LearnMoreCard
        title="Team Activity"
        description="Find out instantly who’s on the clock, on a break, or enjoying some time off."
        icon={icon33}
        path="/product/team-activity"
        imageWidth={42}
        imageHeight={44}
        styling="smaller"
      />
      <LearnMoreCard
        title="Timesheets"
        description="Get accurate timesheet reports, including regular time, overtime, and time off."
        icon={icon34}
        path="/product/timesheets"
        imageWidth={30}
        imageHeight={33}
        styling="smaller"
      />
    </div>
    <Divider className="style4" />
    <SubscribeBanner
      title="#1 Work Hours Tracker. Free for 14 days"
      subtitle="Keep track of your employees’ time, real-time location, and estimated wages"
      placeholder="Type your email"
      checkItemOne="No credit card required"
      checkItemTwo="14 day free trial"
      checkItemThree="Cancel anytime"
      formPadding="10.4rem 8rem"
      style="pricing"
    />
    <Footer FooterLinks={FooterLinks} />
  </div>
);

export default WorkHoursTracker;
