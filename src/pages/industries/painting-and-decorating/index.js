import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import loadable from '@loadable/component';

import Divider from '@components/atoms/divider';
import Seo from '@components/molecules/seo';
import { useIntl } from 'gatsby-plugin-react-intl';
import Title from '@components/molecules/title';
import Header from '@components/molecules/header';
import Article from '@components/molecules/article';
import Story from '@components/organisms/story';
import IconCardList from '@components/organisms/icon-card-list';
import IndustryMainCard from '@components/organisms/industry-main-card';
import AccordionArticle from '@components/organisms/accordion-article';
import OldVsNew from '@components/organisms/old-vs-new';
import Steps from '@components/organisms/steps';
import ImagesBox from '@components/organisms/images-box';

// Add Industry Images
import image5 from '@images/painting/Respond to absenteeism and last-minute schedule changes@2x.png';
import image6 from '@images/painting/Avoid surprises by forecasting wages ahead of payday@2x.png';

import {
  firstList,
  checkList1,
  accordionList1,
  accordionList2,
} from '@data/industries/painting.js';
import { oldList, newList, painterSteps } from '@data/industries';
import {
  container,
  industryPadding,
  noPadding,
  background,
  oldVsNewGradient,
} from '@styles/main.module.scss';

const Modal = loadable(() => import('@components/molecules/modal'));
const Footer = loadable(() => import('@components/molecules/footer'));
const SubscribeBanner = loadable(() => import('@components/molecules/subscribe-banner'));

const Painting = () => {
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
          title="Time Tracking for Painting and Decorating Companies"
          description="Track your painters’ and decorators’ time and location. Accurately estimate labor costs to win more jobs. See who’s available to work in real-time. Sign up today!"
        />
        <Header />
        <IndustryMainCard
          smallTitle="ATTO FOR PAINTERS AND DECORATORS"
          title="Time Tracking for Painting and Decorating Companies"
          list={checkList1}
          image="painting-banner"
        />
        <Divider className="style4" />
        <Story
          img="painting"
          paragraph={`"This app really does offer everything you need and more as far as time tracking goes. This is an app I highly recommend to all of my friends and family who are running a business."`}
          author="Anthony Harp"
        />
        <Divider />
        <Title
          title="Track all of your painters and decorators throughout their workday"
          description="With real-time activity tracking, you can check if your crew is working, on a break, or enjoying some time off."
          maxWidth={920}
          bodyStyle="secondBodyStyle"
          maxDescriptionWidth={800}
        />
        <Divider className="centenary" />
        <IconCardList cardList={firstList} hasBigImages style="smallerMargin" />
        <Divider />
        <Article
          title="Get helpful reminders so your painters never forget to clock in!"
          description="When your workers are in the middle of a paint job, it can be easy to lose track of time. That’s why whenever they enter or leave a job site, and at their normal start and end time, we’ll remind them to clock-in and out. And if they happen to forget, they can add a manual time entry for you to review later."
          maxWidth={500}
          imagePadding="5rem 0"
          image="painting-one"
        />
        <Divider className="style3" />
        <Article
          title="Allow your supervisor to track your painting crew’s time"
          description="Painting large properties or doing a commercial renovation requires your crew to work together. Instead of having each painter or decorator track their time individually, your on-the-job supervisor can use Atto to clock in and out on their behalf."
          isSwapped
          maxWidth={500}
          imagePadding="3rem 0 4rem"
          image="painting-two"
        />
        <Divider className="style4" />
        <Title
          title="Keep track of your painting and decorating crew as they work throughout the day"
          maxWidth={920}
          notCentered
        />
        <Divider className="style3" />
        <AccordionArticle list={accordionList1} image={image5} />
        <Divider className="style4" />
        <Title
          title="Everything you need to keep painting and decorating jobs on schedule and on budget"
          maxWidth={920}
          notCentered
        />
        <Divider className="style3" />
        <AccordionArticle list={accordionList2} image={image6} isSwapped />
        <Divider />
        <Title
          title="Say goodbye to paper timesheets!"
          description="Switch to Atto, an easier and more accurate time-tracking solution for painting and decorating companies."
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
            src="../../../images/painting/Say goodbye to paper timesheets@2x.png"
            quality={96}
            width={1209}
            placeholder="blurred"
          />
          <Divider className="style3" />
          <ImagesBox
            imageType="painting-boxes"
            title="Trusted by thousands of painting and decorating companies."
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
        <Steps list={painterSteps} toggleModal={() => openModal()} />
        <Divider className="style4" />
        <SubscribeBanner
          title="Using paper timesheets is like watching paint dry. Try Atto instead!"
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

export default Painting;
