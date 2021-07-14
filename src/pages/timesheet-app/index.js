import React, { useState } from 'react';

import Seo from '@components/molecules/seo';
import Modal from '@components/molecules/modal';
import { useIntl } from 'gatsby-plugin-react-intl';
import Divider from '@components/atoms/divider';
import Header from '@components/molecules/header';
import Title from '@components/molecules/title';
import IndustryMainCard from '@components/organisms/industry-main-card';
import Footer from '@components/molecules/footer';
import Story from '@components/organisms/story';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import IconCardList from '@components/organisms/icon-card-list';
import Article from '@components/molecules/article';
import IconCard from '@components/molecules/icon-card';
import OldVsNew from '@components/organisms/old-vs-new';
import TickCardList from '@components/organisms/tick-card-list';
import CommonQuestions from '@components/organisms/common-questions';
import LearnMoreCard from '@components/molecules/learn-more-card';
import Services from '@components/organisms/services';
import { StaticImage } from 'gatsby-plugin-image';

import authorImage from '@images/timesheets/Timesheet app review@2x.png';
import image1 from '@images/timesheets/Streamline your payroll with our simple employee timesheet app@2x.png';

import AutomaticReports from '@images/automatic-email-reports@2x.png';
import ExportTimesheet from '@images/export-timesheet-and-timesheet-data@2x.png';
import AccountingIntegrations from '@images/accounting-integrations@2x.png';

import icon32 from '@images/location@2x.png';
import icon33 from '@images/profile@2x.png';
import icon34 from '@images/work-hours-tracker@2x.png';
import icon35 from '@images/time-tracking-clock@1x.png';

import { container, imageWrapper } from '@styles/main.module.scss';

import { oldList, newList } from '@data/industries';
import { checkList, cardList, commonQuestionsList } from '@data/third-phase/employee-timesheet-app';
import { firstList } from '@data/third-phase/time-tracking-app';
import { rndContainer, learnMoreContainer } from './employee.module.scss';

const EmployeeTimesheetApp = () => {
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
        title="Accurate Timesheet, Payroll & Job Code Reports"
        description="Relax with timesheets on time, every time! Atto instantly generates timesheets for you so you never stress over misplaced, late, or inaccurate timesheets again."
      />
      <Header />
      <IndustryMainCard
        smallTitle="EMPLOYEE TIMESHEET APP"
        title="Streamline your payroll with our simple employee timesheet app"
        description="Get accurate timesheet reports, including regular time, overtime, breaks, time off, and more."
        image="timesheet-app-banner"
        imageHeight="614"
        imageWidth="438"
        styling="other"
      />
      <Divider className="style11" />
      <TickCardList list={checkList} />
      <Divider />
      <Title
        title="Record your work hours, breaks, time off, overtime, and more!"
        description="Atto is an easy to use time-tracking solution that generates accurate, reasy-to-read timesheet reports."
        maxDescriptionWidth={800}
        maxWidth={920}
        bodyStyle="secondBodyStyle"
      />
      <Divider className="style91" />
      <IconCardList cardList={firstList} hasBigImages style="smallerMargin" />
      <Divider />
      <Story
        img={authorImage}
        paragraph={`Great time keeping app for business. Lets you clock on for different clients and jobs or enter manually. Simple to use & great timesheet reporting. Exactly what I was looking for.`}
        author="David Warwick"
      />
      <Divider />
      <Title
        title="Turn time tracking data into insightful timesheet reports"
        description="Your employees’ hours are instantly transformed into timesheet reports. View every hour worked from regular time to overtime. Create reports based on specific employees, teams, or job codes. And download and share them in a few clicks."
        maxDescriptionWidth={800}
        maxWidth={920}
        bodyStyle="secondBodyStyle"
      />
      <Divider className="style01" />
      <div className={imageWrapper}>
        <StaticImage
          width={1220}
          quality={95}
          src="../../images/timesheets/Ready-made professional timesheets@2x.png"
          placeholder="none"
          alt="Ready-made professional timesheets"
        />
      </div>
      <Divider className="style2" />
      <IconCardList cardList={cardList} style="timeCard" />
      <Divider />
      <Article
        title="Get wage estimates from your employees’ timesheets"
        description="Add your employees’ pay rates, and Atto will estimate your payroll costs based on the hours tracked. What’s more, you can add more than one pay rate per employee so that your estimates remain accurate even if their rate changes."
        image="timesheet-estimates"
        imagePadding="10.4rem 4rem 12.3rem 0.1rem"
      />
      <Divider className="style3" />
      <Article
        title="See timesheet summaries per employee, team, or job code"
        description="Get insights into how productive each part of your business is. In a few taps, Atto generates timesheet reports that show all the work done by each employee, team, or towards a specific job."
        image="timesheet-summaries"
        imagePadding="1.4rem 2.6rem 3.7rem 3.5rem"
        isSwapped
      />
      <Divider className="style3" />
      <Article
        title="View timesheets as a daily map-based timeline"
        description="If your employees work in the field, it can be useful to see how long they spend at each job, and the routes they take throughout their day. Atto uses GPS tracking in conjunction with your employees’ timesheets to provide you a visual timeline of their daily movements."
        image="timesheet-viewtimecard"
        imagePadding="6rem 1.8rem 6rem"
        imageHeight="383"
      />
      <Divider />
      <Title
        title="From timesheets to payroll in no time at all"
        description="Using Atto can dramatically speed up the payroll process – no matter the payroll system you’re using."
        maxDescriptionWidth={800}
      />
      <Divider className="style2" />
      <div className={rndContainer}>
        <IconCard
          bigImage
          isRound
          imageWidth={250}
          imageHeight={250}
          icon={AutomaticReports}
          alt="Employees forget"
          title="Automatic email reports"
          description="Atto automatically emails you your employees’ timesheets to coincide with your payroll period. Send it directly to your accountant or input the data into your payroll system."
        />
        <IconCard
          isRound
          bigImage
          icon={ExportTimesheet}
          imageWidth={250}
          imageHeight={250}
          alt="Out of battery"
          title="Export timesheets and timesheet data"
          description="Download and export any timesheets and data as a PDF/CSV file – perfect for sharing with your admin team or importing into payroll software."
        />
        <IconCard
          bigImage
          isRound
          imageWidth={250}
          imageHeight={250}
          icon={AccountingIntegrations}
          alt="Not sure if employees"
          title="Accounting integrations"
          description="Atto integrates with Xero and QuickBooks Online to automatically sync timesheet data to your favorite payroll software."
        />
      </div>
      <Divider className="style4" />
      <StaticImage
        src="../../images/timesheets/Time tracking for field workers@2x.png"
        width={1140}
        alt="Time tracking for field workers"
        quality={96}
        placeholder="none"
      />
      <Divider className="style11" />
      <Title
        title="A timesheet app for any industry"
        description="Atto helps all types of businesses across the world to manage their employees’ time."
        maxDescriptionWidth={700}
        maxWidth={1000}
      />
      <Divider className="style2" />
      <Services />
      <Divider />
      <Title
        title="Using paper timesheets? See the difference!"
        description="Atto’s employee timesheet app is an easier and more accurate time tracking solution for your business."
        maxDescriptionWidth={800}
      />
      <Divider className="style41" />
      <OldVsNew oldList={oldList} newList={newList} />
      <Divider />
      <CommonQuestions isSwapped list={commonQuestionsList} />
      <Divider />
      <StaticImage
        src="../../images/timesheets/Time tracking for any industry@2x.png"
        alt="Time tracking for any industry"
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
          title="Work Hours Tracker"
          description="Track your work hours, breaks, time off, overtime, and more!"
          icon={icon34}
          path="/work-hours-tracker"
          imageWidth={52}
          imageHeight={25}
          styling="smaller"
        />
      </div>
      <Divider className="style4" />
      <SubscribeBanner
        title="Try Atto, completely free for 14 days"
        subtitle="Do away with clunky spreadsheets and paper timesheets"
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

export default EmployeeTimesheetApp;
