import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Divider from '@components/atoms/divider';
import Seo from '@components/molecules/seo';
import Modal from '@components/molecules/modal';
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

import authorImage from '@images/electric/Electricians review@2x.png';

import image5 from '@images/electric/Despatch electricians to emergency call-outs faster@2x.png';
import image6 from '@images/electric/Avoid a nasty shock by forecasting wages ahead of payday@2x.png';

import {
  firstList,
  checkList1,
  accordionList1,
  accordionList2,
} from '@data/industries/electrician.js';
import { oldList, newList, electricianSteps } from '@data/industries';
import {
  container,
  industryPadding,
  noPadding,
  background,
  oldVsNewGradient,
} from '@styles/main.module.scss';

const Electrician = () => {
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
          title="Time Tracking for Electricians | Timesheet Software"
          description="Track your electricians’ time and locations. Estimate your wage bill ahead of payday. Write job notes to complete inspection paperwork faster. Sign up today!"
        />
        <Header />
        <IndustryMainCard
          smallTitle="ATTO FOR ELECTRICIANS"
          title="Time Tracking for Electricians"
          list={checkList1}
          image="electrical-banner"
        />
        <Divider className="style4" />
        <Story
          img={authorImage}
          paragraph={`"I appreciate the simplicity yet advance features. Knowing where my team members are and what they are working on allows us to communicate with our devices and takes the human (time) out of the loop."`}
          author="Andy"
        />
        <Divider />
        <Title
          title="Track all of your electricians throughout their workday"
          maxWidth={920}
          maxDescriptionWidth={800}
          description="With real-time activity tracking, you can check if your electricians are working, on a break, or enjoying some time off."
          bodyStyle="secondBodyStyle"
        />
        <Divider className="centenary" />
        <IconCardList cardList={firstList} hasBigImages style="smallerMargin" />
        <Divider />
        <Article
          title="Buzz your electricians with helpful reminders so they don’t forget to clock in!"
          description="Handling electricity requires full focus and concentration, so it’s easy to lose track of time. That’s why whenever your electricians enter or leave a job site, and at their normal start and end time, we’ll remind them to clock in and out. 
        And if they do happen to forget, they can add a manual time entry for you to review later."
          image="electrical-one"
          maxWidth={500}
          imagePadding="6rem 0"
        />
        <Divider className="style3" />
        <Article
          title="Give on-site supervisors the power to track your electricians’ time"
          description="Wiring an entire building? Dealing with a commercial job that requires multiple electricians on-site? Instead of having each of them track their time individually, your on-site supervisor can clock-in and out on all of your electricians’ behalf."
          image="electrical-two"
          isSwapped
          maxWidth={500}
          imagePadding="4rem 0"
        />
        <Divider className="style3" />
        <Title
          title="Keep track of your electricians as they make their way to different call-outs throughout the day"
          maxWidth={920}
          notCentered
        />
        <Divider className="style3" />
        <AccordionArticle
          list={accordionList1}
          image={image5}
          imageWidth="352"
          imagePadding="0 0 6.3rem 6rem"
        />
        <Divider />
        <Title
          title="Everything you need to keep electrical jobs on schedule and on budget"
          maxWidth={920}
          notCentered
        />
        <Divider className="style3" />
        <AccordionArticle list={accordionList2} isSwapped image={image6} />
        <Divider className="style11" />
        <Title
          title="Say goodbye to paper timesheets!"
          description="Switch to Atto, an easier and more accurate time-tracking solution for electricians."
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
            src="../../../images/electric/Say goodbye to paper timesheets@2x.png"
            alt="Say goodbye to paper timesheets"
            quality={97}
            formats={['auto', 'webp', 'avif']}
            placeholder="blurred"
          />
          <Divider className="style3" />
          <ImagesBox
            imageType="electrical-boxes"
            title="Trusted by thousands of electrical businesses across 50+ countries"
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
        <Steps list={electricianSteps} toggleModal={() => openModal()} />
        <Divider className="style4" />
        <SubscribeBanner
          title="Keep track of all your electricians in the field with Atto"
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

export default Electrician;
