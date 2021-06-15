import React from 'react';

import SEO from '@components/molecules/seo';
import Divider from '@components/atoms/divider';
import Header from '@components/molecules/header';
import Title from '@components/molecules/title';
import FeatureCard from '@components/molecules/feature-card';
import IndustryMainCard from '@components/organisms/industry-main-card';
import Footer from '@components/molecules/footer';
import Story from '@components/organisms/story';
import Article from '@components/molecules/article';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import TickCardList from '@components/organisms/tick-card-list';
import LearnMoreCard from '@components/molecules/learn-more-card';
import { StaticImage } from 'gatsby-plugin-image';

// import noImage from '@images/no-image.png';
import authorImage from '@images/construction-minds@2x.png';
import WebTracking from '@images/web-time-tracking.svg';
import MobileTracking from '@images/mobile_time_tracking.svg';
import KioskTracking from '@images/kiosk-time-tracking.svg';
import ImagesBox from '@components/organisms/images-box';
import CommonQuestions from '@components/organisms/common-questions';

import { container } from '@styles/main.module.scss';
import image1 from '@images/time-clock-mobile@2x.png';
import image2 from '@images/give-managers-power@2x.png';
import boxImage1 from '@images/construction-daily-timeline@2x.png';
import addNotesImage from '@images/add-notes-track breaks-assign job@2x.png';
import ensureEmployees from '@images/ensure-employees-are-ready@2x.png';
import getNotifications from '@images/get-handy-notifications-of-time-clock-activity@2x.png';
import recordPto from '@images/record-paid-time-off@2x.png';
import seeEmployees from '@images/see-employees@2x.png';
import boxImage2 from '@images/time-clock-boximage1.png';
import boxImage3 from '@images/time-clock-boximage2.png';
import boxImage4 from '@images/time-clock-boximage3.png';
import boxImage5 from '@images/time-clock-boximage4.png';

import { FooterLinks } from '@locale/en.js';
import icon32 from '@images/location@1x.png';
import icon33 from '@images/profile@1x.png';
import icon34 from '@images/timesheets@1x.png';

import {
  workListContainer,
  learnMoreContainer,
  featureCardWithBanner,
} from './time-clock.module.scss';

import { checkList, commonQuestionsList } from '../../data/third-phase/time-clock.js';

// import localeData from '@locale/en';

const TimeClock = () => (
  <div className={`${container}`}>
    <SEO title="Time Clock" />
    <Header />
    <IndustryMainCard
      smallTitle="TIME CLOCK"
      title="A simple time clock app for accurate time tracking"
      image={image1}
      imageHeight="614"
      imageWidth="438"
      description="With Atto’s time clock, you can track time from any device, from absolutely anywhere."
      styling="other"
    />
    <Divider className="style11" />
    <Story
      img={authorImage}
      paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."`}
      author="Robert Bennett - DPA Cleaning Services, Inc."
    />
    <Divider className="style4" />
    <TickCardList list={checkList} />
    <Divider className="style4" />
    <Title maxWidth={700} title="Track time from any location, and any device" />
    <Divider className="style010" />
    <div className={workListContainer}>
      <div className={featureCardWithBanner}>
        <StaticImage
          alt="Time tracking on the web"
          height={378}
          width={380}
          quality={95}
          src="../../images/time-tracking-on-web@2x.png"
          placeholder="none"
        />
        <FeatureCard
          isWorkCard
          title="On the Web"
          description="When at the office, track your time using Atto’s web-based time clock."
          logo={<WebTracking />}
          alt="Web time tracking"
          imagePadding=".8rem 2.9rem .797rem .1rem"
        />
      </div>
      <div className={featureCardWithBanner}>
        <StaticImage
          alt="Time tracking via our mobile app"
          height={378}
          width={380}
          quality={95}
          placeholder="none"
          src="../../images/time-tracking-mobile-app@2x.png"
        />

        <FeatureCard
          isWorkCard
          title="Via our Mobile App"
          description="Track time on the go with the Atto mobile app available on iOS and Android."
          logo={<MobileTracking />}
          alt="Mobile time tracking"
          imagePadding=".5rem 3.24rem .587rem 0"
        />
      </div>
      <div className={featureCardWithBanner}>
        <StaticImage
          alt="Time tracking on the time clock kiosk"
          height={378}
          width={380}
          quality={95}
          placeholder="none"
          src="../../images/time-clock-kiosk@2x.png"
        />

        <FeatureCard
          isWorkCard
          title="Via the Time Clock Kiosk"
          description="Set up a time clock kiosk to enable your team to track time from a single device."
          logo={<KioskTracking />}
          alt="Kiosk time tracking"
          imagePadding=".9rem 2.5rem .85rem .4rem"
        />
      </div>
    </div>
    <Divider className="style4" />
    <Title
      title="An easy way for small businesses to keep track of their employees’s time."
      maxWidth={900}
    />
    <Divider className="style3" />
    <Article
      title="Add notes, track breaks, assign jobs, and more!"
      description="Get more data on what your employees are up to with Atto’s time clock. Employees can add notes and keep a work diary. Track their breaks and categorize them as paid or unpaid. And, use job codes to categorize time tracked towards specific purposes."
      image={addNotesImage}
      maxWidth={500}
      imageWidth="550"
      imageHeight="455"
      imagePadding="0.8rem 0 1.7rem"
    />
    <Divider />
    <Article
      title="Give managers the power to track employee time"
      description="Give managers the power to enforce accurate time-keeping. Using Atto, managers can clock in and out on behalf of employees – perfect for teams that start and finish at similar times. Plus, if a worker forgets their phone or it runs out of battery, managers can add manual time entries that are flagged for review."
      maxWidth={500}
      image={image2}
      isSwapped
    />
    <Divider />
    <Article
      title="Ensure employees are ready to work before they clock in"
      description="Increase employee accountability and transparency. Set the location of any job site and restrict workers from clocking in unless their GPS shows they’re within the job site’s perimeter."
      image={ensureEmployees}
      maxWidth={500}
      imageWidth="532"
      imageHeight="478"
      imagePadding="1.1rem 0 1.1rem 1.8rem"
    />
    <Divider />
    <Article
      title="Get handy notifications of time clock activity"
      description="Real-time notifications help employees keep better track of their time. As soon as an employee enters or leaves a job site, or at their normal start and end time, we’ll send a reminder to clock-in and out. What’s more, with work activity alerts, you’ll be alerted when employees clock in and out every day."
      image={getNotifications}
      maxWidth={500}
      imageWidth="380"
      imageHeight="456"
      imagePadding="2.2rem 8.5rem"
      isSwapped
    />
    <Divider />
    <Article
      title="Record time off for complete payroll data"
      description="In addition to work hours, employees can record paid or unpaid time off such as sickness and vacations. This means that you can rely on Atto to provide all the data you need to run your payroll error-free."
      image={recordPto}
      maxWidth={500}
      imageWidth="452"
      imageHeight="462"
      imagePadding="1.9rem 4.9rem"
    />
    <Divider />
    <Article
      title="See what your employees have been up to"
      description="See how productive your employees are. At any time, you can check each employee’s real-time location and status. Additionally, Atto generates a map-based timeline to summarize each worker’s daily movements."
      image={seeEmployees}
      imageWidth="510"
      imageHeight="498"
      imagePadding="0.1rem 2rem"
      isSwapped
    />
    <Divider />
    <ImagesBox
      title="Trusted by 10,000+ businesses across 50+ countries around the globe"
      image1={boxImage1}
      image2={boxImage2}
      image3={boxImage3}
      image4={boxImage4}
      image5={boxImage5}
      styling="nonIndustry"
    />
    <Divider />
    <CommonQuestions list={commonQuestionsList} />
    <Divider />
    <Title
      title="It doesn't end here!"
      smallerMargin
      description="Learn more about what Atto can do for you"
    />
    <div className={learnMoreContainer}>
      <LearnMoreCard
        title="GPS Location Tracking"
        description="Increase the safety and accountability of your team with real-time updates on their location."
        icon={icon32}
        path="/product/gps-location-tracking"
        imageWidth={27}
        imageHeight={32}
        styling="smaller"
      />
      <LearnMoreCard
        title="Team Activity"
        description="Stay in the loop with what's happening - without needing to pick up the phone"
        icon={icon33}
        path="/product/team-activity"
        imageWidth={42}
        imageHeight={44}
        styling="smaller"
      />
      <LearnMoreCard
        title="Timesheets"
        description="Spend more time on the things that matter with ready-made, accurate, verified timesheets."
        icon={icon34}
        path="/product/timesheets"
        imageWidth={30}
        imageHeight={33}
        styling="smaller"
      />
      <LearnMoreCard
        title="Timesheets"
        description="Spend more time on the things that matter with ready-made, accurate, verified timesheets."
        icon={icon34}
        path="/product/timesheets"
        imageWidth={30}
        imageHeight={33}
        styling="smaller"
      />
    </div>
    <Divider />
    <SubscribeBanner
      title="Track time from anywhere"
      subtitle="Ensure accurate time tracking wherever your employees are"
      placeholder="Type your email"
      bannerImage
      checkItemOne="No credit card required"
      checkItemTwo="14 day free trial"
      checkItemThree="Cancel anytime"
      formPadding="10.4rem 8rem"
      style="pricing"
    />
    <Footer FooterLinks={FooterLinks} />
  </div>
);

export default TimeClock;
