import React, { useState } from 'react';

import Seo from '@components/molecules/seo';
import { useIntl } from 'gatsby-plugin-react-intl';
import { navigate } from '@reach/router';
import loadable from '@loadable/component';

import Divider from '@components/atoms/divider';
import Button from '@components/atoms/button';
import Header from '@components/molecules/header';
import Title from '@components/molecules/title';
import IndustryMainCard from '@components/organisms/industry-main-card';
import Story from '@components/organisms/story';
import LearnMoreCard from '@components/molecules/learn-more-card';
import TickCardList from '@components/organisms/tick-card-list';
import Article from '@components/molecules/article';
import AnyDevice from '@components/organisms/any-device';
import IconCardList from '@components/organisms/icon-card-list';
import CommonQuestions from '@components/organisms/common-questions';
import Services from '@components/organisms/services';
import { StaticImage } from 'gatsby-plugin-image';
import image2 from '@images/time-card-app/Time card options to suit the needs of any business@2x.png';

import icon32 from '@images/location@1x.png';
import icon33 from '@images/profile@1x.png';
import icon34 from '@images/timesheets@1x.png';
import icon35 from '@images/time-tracking-clock@1x.png';

import {
  container,
  imageFormWrapper,
  imageWrapper,
  learnMoreContainer,
} from '@styles/main.module.scss';

import { buttonContainer } from './time-card-app.module.scss';

import {
  checkList,
  commonQuestionsList,
  featureCardsList,
  cardList,
} from '../../data/third-phase/time-card-app';

const Modal = loadable(() => import('@components/molecules/modal'));
const Footer = loadable(() => import('@components/molecules/footer'));
const SubscribeBanner = loadable(() => import('@components/molecules/subscribe-banner'));

const TimeCardApp = () => {
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
    fetch('https://staging.attotime.com/delete-invite', requestOptions)
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
        title="Time Card App for Teams | Simplified Timesheets"
        description="Track your employees' hours with Atto's simple time card app. Clock in and out, track time on the job, and turn employee time card data into insightful reports."
      />
      <Header />
      <IndustryMainCard
        smallTitle="TIME CARD APP"
        title="Track your employees hours with our simple time card app"
        image="timecard-app-banner"
        styling="other"
        imageHeight="614"
        imageWidth="438"
        description="Clock in and out, track time on the job, and turn employee time card data into insightful reports."
      />
      <Divider className="style4" />
      <TickCardList list={checkList} />
      <Divider className="style4" />
      <Story
        img="time-card-app"
        paragraph={`"Using them for our non profit, to manage a few employees. I've tried about 50 others apps before (no kidding). This one finally did the trick."`}
        author="- Dance Of Life"
      />
      <Divider />
      <AnyDevice
        title="Time card options to suit the needs of any business"
        description="Whether your employees work in the office, or in the field, in teams, or alone, Atto has a solution."
        image={image2}
        list={featureCardsList}
        styling="moreCards"
      />
      <Divider />
      <div className={imageFormWrapper}>
        <Title
          title="Get insights into your employees work with automated time card reports"
          description="Your employees’ time card information is automatically turned into real-time reports. Use it to see how your team is spending their time on the clock and reduce the time to administer payroll."
          maxWidth={920}
          bodyStyle="secondBodyStyle"
          maxDescriptionWidth={800}
        />
        <Divider className="style00" />
        {/* <ProductOverviewBanner /> */}
      </div>
      <div className={imageWrapper}>
        <StaticImage
          quality={98}
          width={1220}
          src="../../images/time-card-app/Ready-made professional timesheets@2x.png"
          alt="Ready-made professional timesheets"
          placeholder="blurred"
        />
      </div>
      <Divider className="style2" />
      <IconCardList cardList={cardList} style="timeCard" />
      <Divider className="style4" />
      <div className={buttonContainer}>
        <Button btnText="Find out more" onBtnClick={() => navigate('/product/timesheets')} />
      </div>
      <Divider />
      <Article
        title="Get wage estimates from your employees’ time cards"
        description="Keep your company’s finances on track. After adding your employees’ pay rates, Atto automatically estimates your wage bill based on the hours on their time cards. What’s more, you can add more than one pay rate per employee so that your estimates remain accurate even if their rate changes."
        image="timecardapp-estimates"
        imagePadding="10.4rem 4rem 12.3rem 0.1rem"
      />
      <Divider />
      <Article
        title="See time card summaries per employee, team, or job code"
        description="Get insights into how productive each part of your business is. In a few taps, Atto produces time card summaries to show all the work done by each employee, team, or towards a specific category of job."
        image="timecardapp-summaries"
        isSwapped
        imagePadding="1.4rem 2.6rem 3.7rem 3.5rem"
      />
      <Divider />
      <Article
        title="View time card data as a daily map-based timeline"
        description="If your employees work in the field, it can be useful to see how long they spend at each job, and the routes they take throughout their day. Atto uses GPS tracking in conjunction with data from your employees’ time cards to produce visual timelines of their daily movements."
        image="timecardapp-viewtimecard"
        imagePadding="6rem 1.8rem 6rem"
        imageHeight="383"
      />
      <Divider />
      <StaticImage
        quality={98}
        src="../../images/time-card-app/Time tracking for any industry@2x.png"
        alt="Time tracking for any industry"
        width={1140}
        placeholder="blurred"
      />
      <Divider className="style11" />
      <Title
        title="A time card app suitable for any industry"
        description="Atto helps all types of businesses across the world to manage their employees’ time."
        maxDescriptionWidth={700}
        maxWidth={1000}
      />
      <Divider className="style2" />
      <Services />
      <Divider />
      <CommonQuestions isSwapped list={commonQuestionsList} />
      <Divider />
      <StaticImage
        quality={98}
        src="../../images/time-card-app/Time tracking for field workers@2x.png"
        placeholder="blurred"
        alt="Time tracking for field workers"
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
          description="Get accurate timesheet reports, including regular time, overtime, and paid time off."
          icon={icon34}
          path="/product/timesheets"
          imageWidth={30}
          imageHeight={33}
          styling="smaller"
        />
      </div>
      <Divider className="style4" />
      <SubscribeBanner
        title="#1 Time Card App. Free for 14 days"
        subtitle="Use Atto to track your employees hours with ease"
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

export default TimeCardApp;
