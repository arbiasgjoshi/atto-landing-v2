import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Divider from '@components/atoms/divider';
import SEO from '@components/molecules/seo';
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

import authorImage from '@images/authorImage.png';
import image2 from '@images/time-tracking-healthcare@2x.png';
import image3 from '@images/healthcare-accordion1.png';
import image4 from '@images/healthcare-accordion2.png';
import image5 from '@images/healthcare-accordion3.png';
import image6 from '@images/healthcare-accordion4.png';

import boxImage1 from '@images/healthcare-box-one@2x.png';
import boxImage2 from '@images/healthcare-box-two@2x.png';
import boxImage3 from '@images/healthcare-box-three@2x.png';
import boxImage4 from '@images/healthcare-box-four@2x.png';

import {
  firstList,
  checkList1,
  accordionList1,
  accordionList2,
} from '@data/industries/home-and-healthcare.js';
import { oldList, newList, steps } from '@data/industries';
import { FooterLinks } from '@locale/en.js';
import {
  container,
  industryPadding,
  noPadding,
  background,
  oldVsNewGradient,
} from '@styles/main.module.scss';

// import localeData from '@locale/en';

const HomeHealthcare = () => (
  <>
    <div className={`${container} ${industryPadding}`}>
      <SEO title="Home and Healthcare Industries" />
      <Header />
      <IndustryMainCard
        smallTitle="ATTO FOR HOME HEALTHCARE"
        title="Time Tracking Software for Home Healthcare Providers"
        list={checkList1}
        image={image2}
      />
      <Divider className="style4" />
      <Story
        img={authorImage}
        paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."
      `}
        author="Robert Bennett - DPA Cleaning Services, Inc."
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
        image={image3}
        maxWidth={500}
        imagePadding="7.3rem 0"
        imageWidth={550}
        imageHeight={380}
      />
      <Divider className="style3" />
      <Article
        title="Entrust your senior caregivers to track everyone’s time"
        description="Some patients with complex needs, or larger caring jobs may require multiple caregivers to work together in the same home. Instead of having each caregiver track their time individually, your senior caregiver can use Atto to clock in and out on all of their behalfs."
        image={image4}
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
        description="Ditch paper timesheets and switch to Atto – an easier and more accurate time-tracking solution for roofing companies"
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
        <StaticImage src="../../../images/paper_timesheets@2x.png" placeholder="none" />
        <Divider className="style3" />
        <ImagesBox image1={boxImage1} image2={boxImage2} image3={boxImage3} image4={boxImage4} />
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
      <Steps list={steps} />
      <Divider className="style4" />
      <SubscribeBanner
        title="You provide quality care. We'll provide quality time tracking software"
        placeholder="Type your email"
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
      />
      <Footer FooterLinks={FooterLinks} />
    </div>
  </>
);

export default HomeHealthcare;
