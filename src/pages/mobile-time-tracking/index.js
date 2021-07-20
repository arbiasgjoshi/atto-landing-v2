import React, { useState } from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';
import { StaticImage } from 'gatsby-plugin-image';
import loadable from '@loadable/component';

import Divider from '@components/atoms/divider';
import Seo from '@components/molecules/seo';
import Header from '@components/molecules/header';
import Title from '@components/molecules/title';

import Article from '@components/molecules/article';
import LearnMoreCard from '@components/molecules/learn-more-card';
import Story from '@components/organisms/story';
import IndustryMainCard from '@components/organisms/industry-main-card';
import IconCardList from '@components/organisms/icon-card-list';
import CommonQuestions from '@components/organisms/common-questions';
import AnyDevice from '@components/organisms/any-device';
import Services from '@components/organisms/services';
import anyDevice from '@images/time-tracking/Time tracking from any device – offline, online, or on the go@2x.png';

import icon32 from '@images/location@1x.png';
import icon33 from '@images/profile@1x.png';
import icon34 from '@images/timesheets@1x.png';
import icon35 from '@images/time-tracking-clock@1x.png';

import { container, learnMoreContainer } from '@styles/main.module.scss';
import {
  featureCardsList,
  commonQuestionsList,
  firstList,
} from '../../data/third-phase/time-tracking-app';

const Modal = loadable(() => import('@components/molecules/modal'));
const Footer = loadable(() => import('@components/molecules/footer'));
const SubscribeBanner = loadable(() => import('@components/molecules/subscribe-banner'));

const TimeTrackingApp = () => {
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
        title="Mobile Time Tracking App | iOS & Android"
        description="Atto is a highly accurate time tracking solution for any company. Clock in and out, keep notes, track breaks, assign job codes, add time off, and more!"
      />
      <Header />
      <IndustryMainCard
        smallTitle="TIME TRACKING APP"
        title="A highly accurate time tracking solution for any company"
        description="Clock in and out, keep notes, track breaks, assign job codes, add time off, and more!"
        image="mobile-time-tracking-banner"
        imageHeight="614"
        imageWidth="438"
        styling="other"
      />
      <Divider className="style11" />
      <Story
        img="mobile-time-tracking"
        paragraph={`"I appreciate the simplicity yet advance features. Knowing where my team members are and what they are working on allows us to communicate with our devices and takes the human (time) out of the loop."`}
        author="Andy"
      />
      <Divider />
      <Title
        title="Time tracking for every part of your workers’ day"
        description="Atto is an easy to use time-tracking solution. There’s absolutely no technical knowledge required."
        maxWidth={920}
        maxDescriptionWidth={800}
        bodyStyle="secondBodyStyle"
      />
      <Divider className="style2" />
      <IconCardList cardList={firstList} hasBigImages style="smallerMargin" />
      <Divider />
      <Title
        title="A time tracking app for any industry"
        description="Atto helps all types of businesses across the world to manage their employees’ time."
        maxDescriptionWidth={700}
        maxWidth={1000}
      />
      <Divider className="style2" />
      <Services />
      <Divider />
      <StaticImage
        quality={97}
        src="../../images/time-tracking/Time tracking for field workers@2x.png"
        alt="Time tracking for field workers"
        width={1140}
        placeholder="blurred"
      />
      <Divider />
      <AnyDevice
        title="Time tracking from any device – offline, online, or on the go"
        description="Whether you’re in the office or on the move, Atto has a time tracking solution for your needs."
        image={anyDevice}
        bigDescStyle
        list={featureCardsList}
      />
      <Divider />
      <Title title="Time tracking from any location, and for any type of worker" maxWidth={800} />
      <Divider className="style3" />
      <Article
        title="Time tracking for mobile workers"
        description="If your employees are on the go, Atto provides everything you need to ensure they’re accurately tracking time. Using GPS technology, you can restrict workers from clocking in until they’re where they should be."
        secondDescription="Track your employees’ location in real-time. And view map-based timelines of each worker’s daily movements, compiled using their time tracking data."
        image="mobile-workers"
        isSwapped
        imageHeight="380"
        imagePadding="6rem 1rem 6rem 3rem"
      />
      <Divider className="style3" />
      <Article
        title="Time tracking for teams of employees working together"
        description="If your employees work in teams, Atto makes time tracking quicker and easier. Instead of relying on workers to track time individually, you can allow managers to clock in and out for them."
        secondDescription="Alternatively, you can install a Time Clock Kiosk so that all employees can track time with their own PIN from a single device in a central location."
        image="employees-together"
        imagePadding="0 5rem 2rem 4rem"
      />
      <Divider className="style3" />
      <Article
        title="Time tracking for office workers"
        description="If your employees are office-based, they can track time using the web-based time clock on their desktop device. They get access to the same time tracking features as the app, including; clocking in and out, tracking breaks, categorizing jobs, writing notes, adding time off, and more."
        image="office-workers"
        isSwapped
        imagePadding="6rem 5.1rem 6rem 2rem"
      />
      <Divider className="style3" />
      <Article
        title="Never forget to start tracking time again!"
        description="As soon as an employee enters or leaves a job site, or at their normal start and end time, Atto sends a reminder to clock-in and out. While with work activity alerts, you’ll be alerted when employees start tracking time every day."
        image="never-forget"
        imagePadding="0.8rem 6.5rem"
      />
      <Divider />
      <StaticImage
        quality={97}
        src="../../images/time-tracking/Time tracking for any industry@2x.png"
        placeholder="blurred"
        width={1140}
        alt="Time tracking for any industry"
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
          title="Time Tracking"
          description="With Atto’s time clock, you can track time from any device, from absolutely anywhere."
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
          path="/product/location-tracking"
          imageWidth={27}
          imageHeight={32}
          styling="smaller"
        />

        <LearnMoreCard
          title="Team Activity"
          description="Find out instantly who’s on the clock, on break, or enjoying some time off."
          icon={icon33}
          path="/product/team-activity"
          imageWidth={42}
          imageHeight={44}
          styling="smaller"
        />
        <LearnMoreCard
          title="Timesheets"
          description="Turn your time tracking data into timesheets, with regular time, overtime, and time off."
          icon={icon34}
          path="/product/timesheets"
          imageWidth={30}
          imageHeight={33}
          styling="smaller"
        />
      </div>
      <Divider />
      <SubscribeBanner
        title="#1 Time Tracker. Free for 14 days"
        subtitle="Clock in & out, write notes, track breaks, assign job codes, and more!"
        placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
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

export default TimeTrackingApp;
