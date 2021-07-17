import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Divider from '@components/atoms/divider';
import Seo from '@components/molecules/seo';
import Modal from '@components/molecules/modal';
import { useIntl } from 'gatsby-plugin-react-intl';
import Title from '@components/molecules/title';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import Story from '@components/organisms/story';
import IndustryMainCard from '@components/organisms/industry-main-card';
import ReviewCards from '@components/organisms/review-cards';
import Steps from '@components/organisms/steps';
import AccordionArticle from '@components/organisms/accordion-article';
import OldVsNew from '@components/organisms/old-vs-new';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import ImagesBox from '@components/organisms/images-box';
import authorImage from '@images/landscaping/Built with landscaping companies in mind@2x.png';

import image3 from '@images/landscaping/Atto is completely mobile – just like your crew@2x.png';
import image4 from '@images/landscaping/Make sure your crew are about to get their hands dirty before they clock in@2x.png';
import image5 from '@images/landscaping/Prune your costs and keep jobs on budget with wage estimates@2x.png';
import {
  checkList1,
  accordionList1,
  accordionList2,
  accordionList3,
} from '@data/industries/landscaping.js';

import { oldList, newList, landscapeSteps } from '@data/industries';
import { container, industryPadding, noPadding, oldVsNewGradient } from '@styles/main.module.scss';
import {
  topImageMask,
  bottomImageMask,
  greenBackground,
} from '../construction/construction.module.scss';

const Landscaping = () => {
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
          title="Time Tracking for Landscaping Companies | Timesheet Software"
          description="Keep accurate time records while working outdoors. View every landscapers’ locations in real-time. Save endless hours on admin and payroll. Sign up today!"
        />
        <Header />
        <IndustryMainCard
          smallTitle="ATTO FOR LANDSCAPING"
          title="Time Tracking for Landscaping Companies"
          list={checkList1}
          image="landscaping-banner"
        />
        <Divider className="style4" />
        <ReviewCards />
        <Divider className="style13" />
      </div>
      <div className={greenBackground}>
        <div className={topImageMask}>
          <StaticImage src="../../../images/upper_shape.svg" placeholder="blurred" />
        </div>
        <div className={bottomImageMask}>
          <StaticImage src="../../../images/lower_shape.svg" placeholder="blurred" />
        </div>
        <div className={`${container} ${noPadding}`}>
          <Title
            title="The grass is always greener with Atto"
            description="Ditch paper timesheets and switch to Atto – an easier and more accurate time-tracking solution for landscaping companies"
            maxWidth={1040}
            maxDescriptionWidth={900}
          />
          <Divider className="style3" />
          <StaticImage
            src="../../../images/landscaping/Ditch paper timesheets and switch to Atto@2x.png"
            width={1140}
            quality={96}
            placeholder="blurred"
          />
          <Divider className="style3" />
          <ImagesBox
            imageType="landscape-boxes"
            title="Trusted by thousands of landscaping businesses across 50+ countries"
          />
        </div>
      </div>
      <div className={`${container} ${noPadding}`}>
        <Divider />
        <AccordionArticle
          image={image3}
          title="Keep track of everything happening outdoors"
          list={accordionList1}
          imageHeight={498}
          imagePadding="6.1rem 2.5rem 6.1rem 1rem"
        />
        <Divider />
        <AccordionArticle
          image={image4}
          title="Increase the safety and accountability of your landscaping crew with real-time GPS location tracking"
          list={accordionList2}
          isSwapped
          imageWidth={360}
          imageHeight={498}
          imagePadding="2.1rem 2.8rem 10.1rem"
          boxHeight="62rem"
        />
        <Divider />
        <AccordionArticle
          image={image5}
          title="All the reports you need to keep landscaping jobs on schedule and on budget"
          list={accordionList3}
          imageWidth={400}
          imagePadding="5.3rem 0"
          boxHeight="62rem"
        />
      </div>
      <Divider className="style3" />
      <div className={oldVsNewGradient}>
        <div className={`${container} ${noPadding}`}>
          <Divider />
          <OldVsNew oldList={oldList} newList={newList} />
          <Divider />
        </div>
      </div>
      <div className={`${container} ${noPadding}`}>
        <Title title="Built with landscaping companies in mind" maxWidth={600} />
        <Divider className="style2" />
        <Story
          img="landscaping"
          paragraph={`"It makes keeping up with my team's hours seamless! It is saving us a ton of time with timesheets and everyone’s getting paid accurately for the hours they’ve worked.
          "`}
          author="Julia Conner – Pennprojects, LLC"
        />
        <Divider />
        <Title
          title="Get everything set up in 3 simple steps"
          description="Atto is designed to be the easiest time-tracking app to use.
         There’s absolutely no technical knowledge required."
          maxWidth={932}
          maxDescriptionWidth={750}
        />
        <Divider className="style1" />
        <Steps list={landscapeSteps} toggleModal={() => openModal()} />
        <Divider className="style4" />
        <StaticImage
          quality={98}
          width={1140}
          height={241}
          style={{ marginBottom: '0.2rem' }}
          placeholder="blurred"
          alt="Help your business to blossom with accurate time tracking from Atto"
          src="../../../images/landscaping/Help your business to blossom with accurate time tracking from Atto@2x.png"
        />
        <SubscribeBanner
          title="Help your business blossom with accurate time tracking from Atto"
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

export default Landscaping;
