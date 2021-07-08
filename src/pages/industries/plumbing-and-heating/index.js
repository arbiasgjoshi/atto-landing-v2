import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Divider from '@components/atoms/divider';
import Modal from '@components/molecules/modal';
import Seo from '@components/molecules/seo';
import { useIntl } from 'gatsby-plugin-react-intl';
import Header from '@components/molecules/header';
import Title from '@components/molecules/title';
import Footer from '@components/molecules/footer';
import Article from '@components/molecules/article';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import Story from '@components/organisms/story';
import IconCardList from '@components/organisms/icon-card-list';
import IndustryMainCard from '@components/organisms/industry-main-card';
import AccordionArticle from '@components/organisms/accordion-article';
import OldVsNew from '@components/organisms/old-vs-new';
import Steps from '@components/organisms/steps';
import ImagesBox from '@components/organisms/images-box';
import authorImage from '@images/plumbing/Plumbers review@2x.png';

// import authorImage from '@images/plumbing-author@2x.png';
// import image3 from '@images/plumbing-accordion1.png';
// import image4 from '@images/plumbing-accordion2.png';
// import image5 from '@images/plumbing-accordion3.png';
// import image6 from '@images/plumbing-accordion4.png';
// import boxImage1 from '@images/plumbing-box-one@2x.png';
// import boxImage2 from '@images/plumbing-box-two@2x.png';
// import boxImage3 from '@images/plumbing-box-three@2x.png';
// import boxImage4 from '@images/plumbing-box-four@2x.png';

import image3 from '@images/plumbing/Get helpful reminders so your plumbers never forget to clock-in@2x.png';
import image4 from '@images/plumbing/Allow your on-site manager to track your plumbers’ time@2x.png';
import image5 from '@images/plumbing/Respond faster to emergency plumbing call-outs@2x.png';
import image6 from '@images/plumbing/Avoid surprises by forecasting your wage bill ahead of payday@2x.png';

import boxImage1 from '@images/plumbing/Plumbers daily timeline@2x.png';
import boxImage2 from '@images/plumbing/Plumbers location tracking@2x.png';
import boxImage3 from '@images/plumbing/Plumbers timesheets@2x.png';
import boxImage4 from '@images/plumbing/Plumbers time tracking@2x.png';

import {
  container,
  industryPadding,
  oldVsNewGradient,
  noPadding,
  background,
} from '@styles/main.module.scss';
import {
  firstList,
  checkList1,
  accordionList1,
  accordionList2,
} from '@data/industries/plumbing-and-heating.js';
import { oldList, newList, plumberSteps } from '@data/industries';
// import image2 from '@images/time-tracking-plumbing@2x.png';
import BannerImage from '@images/plumbing/Time Tracking for Plumbing and Heating Companies@2x.png';
// import { FooterLinks } from '@locale/en.js';

const PlumbingAndHeating = () => {
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
    <>
      <div className={`${container} ${industryPadding}`}>
        <Modal
          close={closeModal}
          showDialog={showDialog}
          hasValues={values}
          onDelete={toggleDeleteInvite}
          setFormValues={(formValues) => formSuccessState(formValues)}
        />
        <Seo
          title="Time Tracking for Plumbing and Heating Companies"
          description="Track all your plumbers' time and locations throughout their workday. Save endless hours on admin and payroll. And, respond faster to emergency call-outs."
        />
        <Header />
        <IndustryMainCard
          smallTitle="ATTO FOR PLUMBERS AND HEATING ENGINEERS"
          title="Time Tracking for Plumbing and Heating Companies"
          list={checkList1}
          image={BannerImage}
        />
        <Divider className="style4" />
        <Story
          img={authorImage}
          paragraph={`"This app has really helped our company. I love the location service that it provides while my employees are clocked in. This is absolutely necessary as our employees drive to multiple job site locations.”`}
          author="Lyns & J"
        />
        <Divider />
        <Title
          title="Track all of your plumbers throughout their workday"
          description="With real-time activity tracking, you can check if your plumbers are working, on a break, or enjoying some time off."
          bodyStyle="secondBodyStyle"
          maxWidth={920}
          maxDescriptionWidth={800}
        />
        <Divider className="centenary" />
        <IconCardList cardList={firstList} hasBigImages style="smallerMargin" />
        <Divider />
        <Article
          title="Get helpful reminders so your plumbers never forget to clock in!"
          description="When dealing with burst pipes and emergency call-outs, it’s easy to lose track of time. That’s why when your plumbers enter or leave a job site, and at their normal start and end time, we’ll remind them to clock in and out. And if they happen to forget, they can add a manual time entry for you to review later."
          image={image3}
          maxWidth={500}
          imagePadding="6rem 0"
          imageWidth={550}
          // imageHeight={354}
        />
        <Divider className="style3" />
        <Article
          title="Entrust your on-site manager to track your plumbers’ time"
          description="Dealing with commercial or industrial plumbing jobs that require multiple plumbers on-site? Instead of having each plumber track their time individually, your on-the-job manager can clock in and out on all of your plumbers’ behalf."
          image={image4}
          isSwapped
          maxWidth={500}
          imagePadding="6rem 17rem 6rem 0"
          imageWidth={378}
          // imageHeight={354}
        />
        <Divider className="style3" />
        <Title
          title="Keep track of your plumbers as they make their way to different call-outs throughout the day"
          maxWidth={920}
          notCentered
        />
        <Divider className="style3" />
        <AccordionArticle list={accordionList1} image={image5} />
        <Divider />
        <Title
          title="Everything you need to keep plumbing jobs on schedule and on budget"
          maxWidth={920}
          notCentered
        />
        <Divider className="style3" />
        <AccordionArticle list={accordionList2} isSwapped image={image6} />
        <Divider className="style11" />
        <Title
          title="Say goodbye to paper timesheets!"
          description="Switch to Atto, an easier and more accurate time-tracking solution for plumbing and heating companies."
          maxWidth={1040}
          maxDescriptionWidth={900}
        />
      </div>
      <div className={oldVsNewGradient}>
        <div className={`${container} ${noPadding}`}>
          <Divider />
          <OldVsNew oldList={oldList} newList={newList} />
          <Divider />
        </div>
      </div>
      <div className={background}>
        <div className={`${container} ${noPadding}`}>
          <StaticImage
            src="../../../images/plumbing/Say goodbye to paper timesheets@2x.png"
            quality={96}
            width={1209}
            placeholder="none"
          />
          <Divider className="style3" />
          <ImagesBox
            image1={boxImage1}
            image2={boxImage2}
            image3={boxImage3}
            image4={boxImage4}
            title="Trusted by thousands of plumbers & heaters across 50+ countries"
          />
        </div>
      </div>
      <div className={`${container} ${noPadding}`}>
        <Divider />
        <Title
          title="Get everything set up in 3 simple steps"
          description="Atto is designed to be the easiest time-tracking app to use.
         There’s absolutely no technical knowledge required."
          maxWidth={932}
          maxDescriptionWidth={750}
        />
        <Divider className="style1" />
        <Steps list={plumberSteps} />
        <Divider className="style4" />
        <SubscribeBanner
          title="All cisterns go! Get to work with accurate time tracking from Atto."
          placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
          checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
          checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
          checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
        />
        <Footer />
      </div>
    </>
  );
};

export default PlumbingAndHeating;
