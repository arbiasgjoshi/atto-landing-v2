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
import Story from '@components/organisms/story';
import IndustryMainCard from '@components/organisms/industry-main-card';
import Steps from '@components/organisms/steps';
import AccordionArticle from '@components/organisms/accordion-article';
import OldVsNew from '@components/organisms/old-vs-new';
import ReviewCards from '@components/organisms/review-cards';
import ImagesBox from '@components/organisms/images-box';

import image3 from '@images/construction/So simple that your workers will want to use it@2x.png';
import image4 from '@images/construction/Guarantee your crew is on-site before they clock in@2x.png';
import image5 from '@images/construction/Keep projects on budget with wage estimates@2x.png';

import { container, industryPadding, noPadding, oldVsNewGradient } from '@styles/main.module.scss';
import {
  checkList1,
  accordionList1,
  accordionList2,
  accordionList3,
} from '@data/industries/construction.js';

import { steps, oldList, newList } from '@data/industries';
import { topImageMask, bottomImageMask, greenBackground } from './construction.module.scss';

const Construction = () => {
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
          title="Time Tracking for Construction Companies | Timesheet Software"
          description="Track your entire construction crew’s time and location. Save endless hours on admin and payroll. Keep jobs on schedule and on budget. Sign up today!"
        />
        <Header />
        <IndustryMainCard
          smallTitle="ATTO FOR CONSTRUCTION"
          title="Time Tracking for Construction Companies"
          list={checkList1}
          image="construction-banner"
        />
        <Divider className="style3" />
        <ReviewCards />
        <Divider className="style13" />
      </div>
      <div className={greenBackground}>
        <div className={topImageMask}>
          <StaticImage
            src="../../../images/upper_shape.svg"
            alt="Top Green Mask"
            placeholder="blurred"
          />
        </div>
        <div className={bottomImageMask}>
          <StaticImage
            src="../../../images/lower_shape.svg"
            alt="Bottom Green Mask"
            placeholder="blurred"
          />
        </div>
        <div className={`${container} ${noPadding}`}>
          <Title
            title="Say goodbye to paper timesheets"
            description="Ditch paper timesheets and switch to Atto – an easier and more accurate time-tracking solution for construction companies"
            maxWidth={1040}
            maxDescriptionWidth={900}
          />
          <Divider className="style3" />
          <StaticImage
            src="../../../images/construction/Say goodbye to paper timesheets@2x.png"
            placeholder="blurred"
            quality={96}
            alt="Say goodbye to paper timesheets"
          />
          <Divider className="style3" />
          <ImagesBox imageType="construction-boxes" />
        </div>
      </div>
      <div className={`${container} ${noPadding}`}>
        <Divider />
        <AccordionArticle
          title="Keep track of everything happening in the field"
          list={accordionList1}
          image={image3}
          imagePadding="6.1rem 0"
          imageHeight="498"
        />
        <Divider className="style4" />
        <AccordionArticle
          title="Increase the safety and accountability of your crew with real-time GPS location tracking"
          list={accordionList2}
          image={image4}
          isSwapped
          imageWidth="365"
          imagePadding="2.1rem 1.7rem 10.1rem"
        />
        <Divider className="style4" />
        <AccordionArticle
          title="All the reports you need to keep construction jobs on schedule and on budget"
          list={accordionList3}
          image={image5}
          imagePadding="5.3rem 0 3rem"
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
        <Title title="Built with construction companies in mind" maxWidth={600} />
        <Divider className="style2" />
        <Story
          img="construction"
          paragraph={`"So perfectly simplistic. I work in construction so employees can all be in different places. 
      The ease of tracking hours and productivity via GPS is amazing."`}
          author="Jack Thomas – Vision Building & Development"
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
        <Steps list={steps} toggleModal={() => openModal()} />
        <Divider className="style4" />
        <StaticImage
          quality={90}
          width={1140}
          height={241}
          alt="Ready to put Atto to work on your construction sites?"
          placeholder="blurred"
          style={{ marginBottom: '0.2rem' }}
          src="../../../images/construction/Ready to put Atto to work on your construction sites@2x.png"
        />
        <SubscribeBanner
          title="Ready to put Atto to work on your construction sites?"
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

export default Construction;
