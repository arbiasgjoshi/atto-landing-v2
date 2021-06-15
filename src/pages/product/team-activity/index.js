import React from 'react';

import Divider from '@components/atoms/divider';
import SEO from '@components/molecules/seo';
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

import { FooterLinks } from '@locale/en.js';
import authorImage from '@images/authorImage.png';
import image1 from '@images/team-management-departments.png';
import image2 from '@images/find-out.png';
import image3 from '@images/eliminate-checks.png';
import image4 from '@images/activity-updates@2x.png';

import icon14 from '@images/time-tracking-clock@1x.png';
import icon15 from '@images/location@1x.png';
import icon16 from '@images/timesheets@1x.png';

import { container } from '@styles/main.module.scss';

import { serviceList, titleList2, featureList2 } from '@data/listed-data';

import {
  teamActivityContainer,
  learnMoreContainer,
  featuresStyle,
} from './team-activity.module.scss';

const TeamActivity = () => (
  <div className={`${teamActivityContainer} ${container}`}>
    <SEO title="Team Activity" />
    <Header />
    <MainTitleCard
      hasParagraph
      showButton
      paragraph="TEAM ACTIVITY"
      title="Stay in the loop with everything happening in real-time"
    />
    <Divider className="style2" />
    <VideoCheckList list={titleList2} cardStyle="centerAligned" />
    <Divider />
    <Title maxWidth={900} title="See where your team is, and what they're working on" />
    <Divider className="style2" />
    <Article
      title="Never feel in the dark again with team activity updates"
      description="Find out what’s going on in a few taps. Get real-time updates on your team’s status and location. See who’s on the clock, on break, or enjoying some time off."
      image={image4}
      maxWidth={500}
      imagePadding="7.3rem 4.5rem"
      imageWidth={400}
      imageHeight={354}
    />
    <Article
      title="Simplify team management with departments"
      description="Organize employees into departments to make them easier to manage. Group them based on their location, job site, or role to see all their statuses at once. Easily keep track of everyone regardless of your company size."
      image={image1}
      isSwapped
      maxWidth={500}
      imagePadding="4.4rem 5.9rem 4.3rem 5.3rem"
      imageWidth={398}
      imageHeight={413}
    />
    <Article
      title="Find out what any employee is up to in seconds"
      description="Stay in control of what’s happening. Filter your team based on their current status, the department they’re in, or by searching for their name. Make day-to-day decisions faster with all the information you need at your fingertips."
      image={image2}
      maxWidth={500}
      imagePadding="3.3rem 4.2rem 2.4rem 10.7rem"
      imageWidth={371}
      imageHeight={443}
    />
    <Article
      title="Eliminate back and forth phone calls and constant check-ins"
      description="Increase team visibility and make team management a breeze. Get notified as soon as an employee clocks in or out, takes a break, or edits a time entry."
      image={image3}
      isSwapped
      maxWidth={500}
      imagePadding="5.6rem 5.5rem"
      imageWidth={380}
      imageHeight={388}
    />
    <Article
      title="See your team’s progress at the end of each day"
      description="Check on your team’s progress and productivity with clear timelines of everyone’s daily activity. See how long they spend on breaks, jobs, and on the clock. Gain greater insight into their workdays, and use it to speed-up timesheet approvals."
      image={image1}
      maxWidth={500}
      imagePadding="1.8rem 5.5rem"
      imageWidth={400}
      imageHeight={464}
    />
    <Divider />
    <Title maxWidth={880} title="Our full suite of team activity features at a glance" />
    <Divider className="style3" />
    <div className={featuresStyle}>
      <FeaturesList list={featureList2} />
    </div>
    <Divider />
    <Cover isSwapped />
    <Divider className="style10" />
    <Title
      title="A work hours tracker for any industry"
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
    <Divider className="style2" />
    <div className={learnMoreContainer}>
      <LearnMoreCard
        title="Time Tracking"
        icon={icon14}
        description="See exactly where your employees’ time is going. Track work hours, breaks, overtime, time off, and more!"
        path="/product/time-tracking"
        imageWidth={30}
        imageHeight={34}
      />
      <LearnMoreCard
        title="GPS Location Tracking"
        description="Increase the safety and accountability of your team with real-time updates on their location."
        icon={icon15}
        path="/product/gps-location-tracking"
        imageWidth={27}
        imageHeight={32}
      />
      <LearnMoreCard
        title="Timesheets"
        description="Spend more time on the things that matter with ready-made, accurate, verified timesheets."
        icon={icon16}
        path="/product/timesheets"
        imageWidth={30}
        imageHeight={33}
      />
    </div>
    <Divider />
    <SubscribeBanner
      title="Stay in control of what's happening with team activity updates"
      placeholder="Type your email"
      checkItemOne="No credit card required"
      checkItemTwo="14 day free trial"
      checkItemThree="Cancel anytime"
    />
    <Footer FooterLinks={FooterLinks} />
  </div>
);

export default TeamActivity;
