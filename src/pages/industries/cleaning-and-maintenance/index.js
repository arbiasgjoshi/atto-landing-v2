import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Divider from '@components/atoms/divider';
import SEO from '@components/molecules/seo';
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

import {
  container,
  industryPadding,
  noPadding,
  oldVsNewGradient,
  background,
} from '@styles/main.module.scss';
import {
  firstList,
  checkList1,
  accordionList1,
  accordionList2,
} from '@data/industries/cleaning.js';
import { oldList, newList, steps } from '@data/industries';

import image2 from '@images/time-tracking-cleaning@2x.png';
import authorImage from '@images/cleaning-author@2x.png';
import image3 from '@images/cleaning-accordion1.png';
import image4 from '@images/cleaning-accordion2.png';
import image5 from '@images/cleaning-accordion3.png';
import image6 from '@images/cleaning-accordion4.png';

import boxImage1 from '@images/cleaning-box-one@2x.png';
import boxImage2 from '@images/cleaning-box-two@2x.png';
import boxImage3 from '@images/cleaning-box-three@2x.png';
import boxImage4 from '@images/cleaning-box-four@2x.png';

import { FooterLinks } from '@locale/en.js';

// import localeData from '@locale/en';

const Cleaning = () => (
  <>
    <div className={`${container} ${industryPadding}`}>
      <SEO title="Cleaning Industries" />
      <Header />
      <IndustryMainCard
        smallTitle="ATTO FOR CLEANERS"
        title="Time Tracking for Cleaning Companies"
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
        title="Keep track of everything happening throughout your cleaners’ workday"
        maxWidth={920}
        maxDescriptionWidth={800}
        description="Atto’s time tracking app is incredibly easy to use and allows you to see what all your cleaners are up to in real-time."
      />
      <Divider className="centenary" />
      <IconCardList cardList={firstList} hasBigImages style="smallerMargin" />
      <Divider />
      <Article
        title="Get helpful reminders so your cleaners never forget to clock in!"
        description="Keep better track of your time with Atto’s helpful reminders. When your cleaners enter or leave a job site, and at their normal start and end time, we’ll notify them to clock in and out. And if they happen to forget, they can still add a manual time entry for you to review later."
        image={image3}
        maxWidth={500}
        imagePadding="6rem 0"
        imageWidth={550}
        // imageHeight={354}
      />
      <Divider className="style3" />
      <Article
        title="Entrust managers to track your cleaners’ time"
        description="Dealing with commercial or industrial cleaning jobs that require lots of cleaners? Instead of having each cleaner track their time individually, your on-the-job manager can clock in and out on your cleaner’s behalf."
        image={image4}
        isSwapped
        maxWidth={500}
        imagePadding="2rem 2rem 6rem 0"
        imageWidth={530}
      />
      <Divider className="style3" />
      <Title
        title="Keep track of your cleaners as they make their way to every client throughout the day"
        maxWidth={920}
        notCentered
      />
      <Divider className="style3" />
      <AccordionArticle list={accordionList1} image={image5} />
      <Divider />
      <Title
        title="Everything you need to keep cleaning jobs on schedule and on budget"
        maxWidth={920}
        notCentered
      />
      <Divider className="style3" />
      <AccordionArticle list={accordionList2} isSwapped image={image6} />
      <Divider className="style11" />
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
        title="Let’s make it a clean sweep! Keep your time tracking tidy with Atto"
        placeholder="Type your email"
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
      />
      <Footer FooterLinks={FooterLinks} />
    </div>
  </>
);

export default Cleaning;
