import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FooterLinks } from '@locale/en.js';
import { container } from '@styles/main.module.scss';

import Divider from '@components/atoms/divider';
import SEO from '@components/molecules/seo';
import Title from '@components/molecules/title';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import IconCard from '@components/molecules/icon-card';
import MainTitleCard from '@components/molecules/main-title-card';
import LearnMoreCard from '@components/molecules/learn-more-card';
import Story from '@components/organisms/story';
import FeaturesList from '@components/organisms/features-list';
import ListArticle from '@components/organisms/list-article';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import IconCardList from '@components/organisms/icon-card-list';
import GrowthNumbers from '@components/organisms/growth-numbers';
import VideoCheckList from '@components/organisms/video-checklist';
import Services from '@components/organisms/services';

import authorImage from '@images/authorImage.png';
import noImage from '@images/no-image.png';
import roundImage2 from '@images/syncWithPayroll2x.png';
import roundImage3 from '@images/timesheets-inbox2x.png';

import icon from '@images/accurate.png';
import icon2 from '@images/trustworthy.png';
import icon3 from '@images/instantly-available@2x.png';

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

import Activity from '@images/activitySVG.svg'; // TODO change svg when png is provided

import ConstructionLogo from '@images/construction-industry-logo.svg';
import PaintingLogo from '@images/painting-industry-logo.svg';
import HealthcareLogo from '@images/healthcare-industry-logo.svg';
import PlumbingLogo from '@images/plumbing-industry-logo.svg';
import ElectrianLogo from '@images/electrician-industry-logo.svg';
import LandscapingLogo from '@images/landscaping-industry-logo.svg';
import RoofingLogo from '@images/roofing-industry-logo.svg';
import CleaningLogo from '@images/cleaning-industry-logo.svg';
import ThreeDots from '@images/three-dots.svg';
import photo1 from '../../../images/boost_productivity.png';
import {
  teamActivityContainer,
  roundImagesContainer,
  learnMoreContainer,
  readyMadeTitle,
} from './timesheets.module.scss';

const Timesheets = () => {
  const checkLists = [
    { title: 'View precise, instantly-generated, and verified timesheets' },
    { title: 'Save countless hours a week from your payroll process' },
    { title: 'Analyze every hour spent on the job' },
    { title: 'See how productive your employees are' },
  ];

  const checkLists2 = [
    { title: 'Compare how long tasks take different employees or teams' },
    { title: 'Spot employees that are struggling at work' },
    { title: 'Identify bottlenecks that are slowing progress' },
    { title: 'See if jobs are running on-time and on-budget' },
  ];

  const checkLists3 = [
    { title: 'Gain a better understanding of your employees’ workdays' },
    { title: 'See how long employees spend on breaks, jobs, and on the clock.' },
    { title: 'Review timesheets quicker for faster approval and payroll' },
  ];

  const firstList = [
    {
      title: 'Highly Accurate',
      description: `Eliminate employee guesswork, time wastage, and additional payroll costs. With accurate timesheets, you only pay for hours spent on the job.`,
      alt: 'Highly Accurate',
      icon,
      imageWidth: 94,
      imageHeight: 93,
      imagePadding: '.8rem .6rem 1.9rem 2rem',
    },
    {
      title: 'Verified and Trustworthy',
      description: `Gain trust and confidence in your time tracking data. Timesheets are verified using location data, increasing employee accountability and transparency.`,
      alt: 'Verified and trustworthy',
      icon: icon2,
      imageWidth: 100,
      imageHeight: 96,
      imagePadding: '1.2rem 1rem',
    },
    {
      title: 'Instantly Available',
      description: `No longer wait until the end of the week to see hours worked. Timesheets are instantly generated so you can view them anytime.`,
      alt: 'Instantly Available',
      icon: icon3,
      imageWidth: 120,
      imageHeight: 120,
      imagePadding: '.6rem 0 0 .6rem',
    },
  ];

  const featureList = [
    {
      title: 'Comprehensive Timesheet Reports',
      description: `Get all the data you need including regular time, overtime, breaks, time off, and more.`,
      logo: <AllTimesheets />,
      alt: 'Employee status logo',
    },
    {
      title: 'Scheduled Email Reports',
      description: `Schedule an email with your employees’ timesheets to coincide with your payroll schedule.`,
      logo: <AllFeatureEmail />,
      alt: 'Geofencing Flag',
    },
    {
      title: 'Timesheets by Employee, Team, Jobs',
      description: `Generate timesheets based on work done by an employee, team, or toward a category of job.`,
      logo: <AvoidGuess />,
      alt: 'Ringbell reminder logo',
    },
    {
      title: 'Wage Estimates And Pay Rates',
      description: `Assign pay rates to your employees and their estimated pay will be added to their timesheets.`,
      logo: <Wages />,
      alt: 'Wage estimates',
    },
    {
      title: 'Download and Share',
      description: `Download any timesheet report as a PDF or CSV file in one click.`,
      logo: <Share />,
      alt: '',
    },
    {
      title: 'Timesheet Rounding',
      description: `Set a rounding increment and clock in/out times are rounded automatically.`,
      logo: <AllFeatresRounding />,
      alt: '',
    },
    {
      title: 'Time Entry Change History',
      description: `View any historic changes made to time entries by an employee or admin.`,
      logo: <ChangeHistory />,
      alt: '',
    },
    {
      title: 'Archive Employees',
      description: `View timesheets for employees even after they’ve left the company – vital for compliance purposes.`,
      logo: <ArchivedMembers />,
      alt: '',
    },
    {
      title: 'Payroll Integrations',
      description: `Streamline your payroll with our QuickBooks Online and Xero integrations.`,
      logo: <WageEstimate />,
      alt: '',
    },
  ];

  const serviceList = [
    { title: 'Construction', url: '/industries/construction', icon: <ConstructionLogo /> },
    { title: 'Landscaping & Gardening', url: '/industries/landscaping', icon: <LandscapingLogo /> },
    { title: 'Roofing', url: '/industries/roofing', icon: <RoofingLogo /> },
    {
      title: 'Painting & Decorating',
      url: '/industries/painting-and-decorating',
      icon: <PaintingLogo />,
    },
    {
      title: 'Cleaning & Maintenance',
      url: '/industries/cleaning-and-maintenance',
      icon: <CleaningLogo />,
    },
    {
      title: 'Healthcare & Medical',
      url: '/industries/healthcare-and-medical',
      icon: <HealthcareLogo />,
    },
    { title: 'Electrical', url: '/industries/electrical', icon: <ElectrianLogo /> },
    {
      title: 'Plumbing & Heating',
      url: '/industries/plumbing-and-heating',
      icon: <PlumbingLogo />,
    },
    { title: 'Other industries', url: '/industries/electrical', icon: <ThreeDots /> },
  ];

  return (
    <div className={`${container} ${teamActivityContainer}`}>
      <SEO title="Timesheets" />
      <Header />
      <MainTitleCard
        maxParagraphWidth={760}
        hasParagraph
        showButton
        paragraph="TIMESHEETS"
        title="Timesheet reports without the hassle"
        subtitle="Spend more time on the things that matter with timesheets filled painlessly and on-time."
      />
      <Divider className="style2" />
      <VideoCheckList list={checkLists} cardStyle="centerAligned" />
      <Divider />
      <div className={readyMadeTitle}>
        <Title
          title="Ready-made professional timesheets"
          description="Your employees’ hours are instantly transformed into timesheet reports. View every hour worked from regular time to overtime. Create reports based on specific employees, teams, or job codes. And download and share them in a few clicks."
          maxDescriptionWidth={980}
        />
      </div>
      <Divider className="style3" />
      <div>
        <StaticImage
          alt="Clock In"
          quality={95}
          src="../../../images/ready-made.svg"
          placeholder="none"
        />
      </div>
      <Divider className="style3" />
      <IconCardList cardList={firstList} style="smallTimesheetImages" />
      <Divider />
      <ListArticle
        title="Boost productivity with timesheet insights"
        description="Work smarter, not longer. Use timesheet reports to filter all the work done by each employee, team, or towards a specific category of job."
        list={checkLists2}
        image={photo1}
        textMargin="10.3 0"
      />
      <Divider />
      <ListArticle
        title="Gain a clear understanding of your employees’ activity"
        description="Atto uses employee’ timesheet data to generate clear, simple timelines of everyone’s daily activity. Now it’s much easier to understand their working patterns, and far quicker to review timesheets."
        list={checkLists3}
        image={<Activity />}
        isSwapped
        textMargin="5.8rem 0"
      />
      <Divider />
      <Title maxWidth={880} title="Our full suite of timesheet features at a glance" />
      <Divider className="style3" />
      <FeaturesList list={featureList} />
      <Divider />
      <GrowthNumbers />
      <Divider />
      <Title
        title="Streamline the entrie payroll process"
        description="Go from timesheets to payroll in no time at all. With Atto, you’ll enjoy a streamlined payroll process that will save hours of admin every payday."
        maxDescriptionWidth={1000}
      />
      <Divider className="style2" />
      <div className={roundImagesContainer}>
        <IconCard
          isRound
          bigImage
          icon={noImage}
          alt="Estimate emp"
          title="Estimate your Employees' Wages"
          description="Avoid unexpected wage bills. Assign pay rates to your employees and their estimated pay will be added to their timesheets."
          style="timesheetMargin"
        />
        <IconCard
          isRound
          bigImage
          icon={roundImage2}
          alt="Sync"
          title="Sync with Payroll and Accounting Software"
          description="Integrate with Xero and QuickBooks Online to automatically sync timesheet data to your favorite payroll software."
          style="timesheetMargin"
        />
        <IconCard
          isRound
          bigImage
          icon={roundImage3}
          alt="Timesheets on-time"
          title="Timesheets on-time and in your Inbox"
          description={`Schedule your employees' timesheets to be automatically emailed to you in line with your payroll schedule.`}
          style="timesheetMargin"
        />
      </div>
      <Divider />
      <Title
        title="Timesheets for any industry"
        description="Atto helps all types of businesses across the world to manage their employees' time"
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
        title="It doesn’t end here!"
        marginBottom=".4rem"
        description="Learn more about what Atto can do for you"
      />
      <Divider className="style2" />
      <div className={learnMoreContainer}>
        <LearnMoreCard
          title="Time Tracking"
          description="See exactly where your employees’ time is going. Track work hours, breaks, overtime, time off, and more!"
          icon={icon20}
          path="/product/time-tracking"
        />

        <LearnMoreCard
          title="GPS Location Tracking"
          description="Increase the safety and accountability of your team with real-time updates on their location."
          icon={icon21}
          path="/product/gps-location-tracking"
        />

        <LearnMoreCard
          title="Team Activity"
          description="Stay in the loop with what’s happening – without having to pick up the phone."
          icon={icon22}
          path="/product/team-activity"
        />
      </div>
      <Divider className="style3" />
      <SubscribeBanner
        title="Sit back and relax with timesheets on-time, every time"
        placeholder="Type your email"
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
      />
      <Footer FooterLinks={FooterLinks} />
    </div>
  );
};

export default Timesheets;
