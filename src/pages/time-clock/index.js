import React, { useState } from 'react';

import Seo from '@components/molecules/seo';
import Modal from '@components/molecules/modal';
import { useIntl } from 'gatsby-plugin-react-intl';
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

import WebTracking from '@images/web-time-tracking.svg';
import MobileTracking from '@images/mobile_time_tracking.svg';
import KioskTracking from '@images/kiosk-time-tracking.svg';
import ImagesBox from '@components/organisms/images-box';
import CommonQuestions from '@components/organisms/common-questions';

import icon1 from '@images/location@1x.png';
import icon2 from '@images/time-tracking-clock@1x.png';
import icon3 from '@images/profile@1x.png';
import icon4 from '@images/timesheets@1x.png';

import { container, learnMoreContainer } from '@styles/main.module.scss';
import { workListContainer, featureCardWithBanner } from './time-clock.module.scss';

import { checkList, commonQuestionsList } from '../../data/third-phase/time-clock.js';

// import localeData from '@locale/en';

const TimeClock = () => {
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

  return (
    <div className={`${container}`}>
      <Modal
        close={closeModal}
        showDialog={showDialog}
        hasValues={values}
        onDelete={toggleDeleteInvite}
        setFormValues={(formValues) => formSuccessState(formValues)}
      />
      <Seo
        title="Employee Time Clock App | Simple Time Tracking"
        description="With Atto’s time clock, you can track time from any device, from anywhere - on the web, via our mobile app or via our time clock kiosk. Try Atto, free for 14 days."
      />
      <Header />
      <IndustryMainCard
        smallTitle="TIME CLOCK"
        title="A simple time clock app for accurate time tracking"
        image="timeclock-banner"
        imageHeight="614"
        imageWidth="438"
        description="With Atto’s time clock, you can track time from any device, from absolutely anywhere."
        styling="other"
      />
      <Divider className="style11" />
      <Story
        img="time-clock"
        paragraph={`“So perfectly simplistic. I work in construction so employees can all be in different places. 
        The ease of tracking hours and productivity via GPS is amazing.”`}
        author="Jack Thomas – Vision Building & Development"
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
            quality={97}
            src="../../images/time-clock/Time tracking on the web@2x.png"
            placeholder="blurred"
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
            quality={97}
            placeholder="blurred"
            src="../../images/time-clock/Time tracking via our mobile app@2x.png"
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
            quality={97}
            placeholder="blurred"
            src="../../images/time-clock/Time tracking on the time clock kiosk@2x.png"
          />

          <FeatureCard
            isWorkCard
            title="Via the Time Clock Kiosk"
            description="Set up a time clock kiosk to enable your team to track time from a single device."
            logo={<KioskTracking />}
            alt="Kiosk time tracking"
            imagePadding=".9rem 2.5rem .85rem .4rem"
            comingSoon
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
        image="add-notes"
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
        image="give-managers"
        isSwapped
      />
      <Divider />
      <Article
        title="Ensure employees are ready to work before they clock in"
        description="Increase employee accountability and transparency. Set the location of any job site and restrict workers from clocking in unless their GPS shows they’re within the job site’s perimeter."
        image="ensure-employees"
        maxWidth={500}
        imagePadding="1.1rem 0 1.1rem 1.8rem"
      />
      <Divider />
      <Article
        title="Get handy notifications of time clock activity"
        description="Real-time notifications help employees keep better track of their time. As soon as an employee enters or leaves a job site, or at their normal start and end time, we’ll send a reminder to clock-in and out. What’s more, with work activity alerts, you’ll be alerted when employees clock in and out every day."
        image="get-notification"
        maxWidth={500}
        imagePadding="2.2rem 8.5rem"
        isSwapped
      />
      <Divider />
      <Article
        title="Record time off for complete payroll data"
        description="In addition to work hours, employees can record paid or unpaid time off such as sickness and vacations. This means that you can rely on Atto to provide all the data you need to run your payroll error-free."
        image="record-pto"
        maxWidth={500}
        imagePadding="1.9rem 4.9rem"
      />
      <Divider />
      <Article
        title="See what your employees have been up to"
        description="See how productive your employees are. At any time, you can check each employee’s real-time location and status. Additionally, Atto generates a map-based timeline to summarize each worker’s daily movements."
        image="see-employees"
        imagePadding="0.1rem 2rem"
        isSwapped
      />
      <Divider />
      <ImagesBox
        title="Trusted by 10,000+ businesses across 50+ countries around the globe"
        imageType="timeclock-boxes"
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
          title={Intl.formatMessage({
            id: 'pages.productLocationTracking.bottomFeatureOneTitle',
          })}
          description="Know where your time is going. Just tap a button to clock in and start tracking your time."
          icon={icon2}
          path="/product/time-tracking"
          imageWidth={30}
          imageHeight={34}
          styling="smaller"
        />
        <LearnMoreCard
          title={Intl.formatMessage({
            id: 'pages.productTimeTracking.bottomFeatureOneTitle',
          })}
          description="Get real-time updates on your team’s location. Ensure everyone is safe and productive."
          icon={icon1}
          path="/product/location-tracking"
          imageWidth={27}
          imageHeight={32}
          styling="smaller"
        />
        <LearnMoreCard
          title={Intl.formatMessage({
            id: 'pages.productLocationTracking.bottomFeatureTwoTitle',
          })}
          description="Find out instantly who’s on the clock, on break, or enjoying some time off."
          icon={icon3}
          path="/product/team-activity"
          imageWidth={42}
          imageHeight={44}
          styling="smaller"
        />
        <LearnMoreCard
          title={Intl.formatMessage({
            id: 'pages.productLocationTracking.bottomFeatureThreeTitle',
          })}
          description="Get accurate timesheet reports, including regular time, overtime, and time off."
          icon={icon4}
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
        placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
        bannerImage
        checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
        checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
        checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
        formPadding="10.4rem 8rem"
        style="pricing"
      />
      <Footer />
    </div>
  );
};

export default TimeClock;
