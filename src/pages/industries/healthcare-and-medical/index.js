import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Divider from '@components/atoms/divider';
import Seo from '@components/molecules/seo';
import Modal from '@components/molecules/modal';
import { useIntl } from 'gatsby-plugin-react-intl';
import Header from '@components/molecules/header';
import Title from '@components/molecules/title';
import Footer from '@components/molecules/footer';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import Article from '@components/molecules/article';
import Story from '@components/organisms/story';
import IconCardList from '@components/organisms/icon-card-list';
import IndustryMainCard from '@components/organisms/industry-main-card';
import AccordionArticle from '@components/organisms/accordion-article';
import OldVsNew from '@components/organisms/old-vs-new';
import Steps from '@components/organisms/steps';
import ImagesBox from '@components/organisms/images-box';

import image5 from '@images/healthcare/Adjust quickly to employee sickness and absence @2x.png';
import image6 from '@images/healthcare/Forecast your payroll costs ahead of payday to avoid unwanted surprises@2x.png';

import {
  firstList,
  checkList1,
  accordionList1,
  accordionList2,
} from '@data/industries/home-and-healthcare.js';
import { oldList, newList, healthSteps } from '@data/industries';
// import { FooterLinks } from '@locale/en.js';
import {
  container,
  industryPadding,
  noPadding,
  background,
  oldVsNewGradient,
} from '@styles/main.module.scss';

// import localeData from '@locale/en';

const HomeHealthcare = () => {
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
          title="Time Tracking Software for Home Healthcare Providers"
          description="Keep accurate time records while providing care. Track every caregivers’ time, wages, and location. Record patient notes throughout the day. Sign up today!"
        />
        <Header />
        <IndustryMainCard
          smallTitle="ATTO FOR HOME HEALTHCARE"
          title="Time Tracking Software for Home Healthcare Providers"
          list={checkList1}
          image="healthcare-banner"
        />
        <Divider className="style4" />
        <Story
          img="healthcare"
          paragraph={`"Using them for our non profit, to manage a few employees. I've tried about 50 others apps before (no kidding). This one finally did the trick."`}
          author="- Dance of Life"
        />
        <Divider />
        <Title
          title="Keep track of your caregivers throughout their day"
          description="With real-time activity tracking, you can check if your caregivers are working, on a break, or enjoying some time off."
          maxWidth={920}
          maxDescriptionWidth={800}
          bodyStyle="secondBodyStyle"
        />
        <Divider className="style3" />
        <IconCardList cardList={firstList} hasBigImages style="smallerMargin" />
        <Divider className="style10" />
        <Article
          title="Get helpful reminders so your caregivers never forget to clock in!"
          description="When caregivers are nursing patients, it can be easy to lose track of time. That’s why whenever they enter or leave a patient’s home, and at their normal start and end time, we’ll remind them to clock in and out. And if they still happen to forget, they can add a manual time entry for you to review later."
          image="healthcare-one"
          maxWidth={500}
          imagePadding="7.3rem 0"
          imageWidth={550}
          imageHeight={380}
        />
        <Divider className="style3" />
        <Article
          title="Entrust your senior caregivers to track everyone’s time"
          description="Some patients with complex needs, or larger caring jobs may require multiple caregivers to work together in the same home. Instead of having each caregiver track their time individually, your senior caregiver can use Atto to clock in and out on all of their behalfs."
          image="healthcare-two"
          isSwapped
          maxWidth={500}
          imagePadding="6rem 7rem 4.5rem 0"
          imageWidth={476}
          imageHeight={395}
        />
        <Divider className="style3" />
        <Title
          title="Keep track of your caregivers as they provide care throughout the day"
          maxWidth={920}
          notCentered
        />
        <Divider className="style3" />
        <AccordionArticle list={accordionList1} image={image5} />
        <Divider className="style4" />
        <Title
          title="Everything you need to minimize admin and keep track of your budget"
          maxWidth={920}
          notCentered
        />
        <Divider className="style3" />
        <AccordionArticle list={accordionList2} isSwapped image={image6} />
        <Divider className="style12" />
        <Title
          title="Say goodbye to paper timesheets!"
          description="Switching to Atto means more time caring, and less time dealing with the nightmare of paper timesheets."
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
            src="../../../images/healthcare/Say goodbye to paper timesheets@2x.png"
            alt="Say goodbye to paper timesheets"
            quality={96}
            placeholder="blurred"
          />
          <Divider className="style3" />
          <ImagesBox
            imageType="healthcare-boxes"
            title="Trusted by thousands of caregivers across 50+ countries"
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
        <Steps list={healthSteps} toggleModal={() => openModal()} />
        <Divider className="style4" />
        <SubscribeBanner
          title="You provide quality care. We'll provide quality time tracking software"
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

export default HomeHealthcare;
