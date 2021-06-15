import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Divider from '@components/atoms/divider';
import SEO from '@components/molecules/seo';
import Title from '@components/molecules/title';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import Story from '@components/organisms/story';
import Article from '@components/molecules/article';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import IconCardList from '@components/organisms/icon-card-list';
import IndustryMainCard from '@components/organisms/industry-main-card';
import AccordionArticle from '@components/organisms/accordion-article';
import OldVsNew from '@components/organisms/old-vs-new';
import Steps from '@components/organisms/steps';
import ImagesBox from '@components/organisms/images-box';

import image2 from '@images/time-tracking-roofing@2x.png';
import authorImage from '@images/roofing-author@2x.png';
import image3 from '@images/roofing-accordion1.png';
import image4 from '@images/roofing-accordion2.png';
import image5 from '@images/roofing-accordion3.png';
import image6 from '@images/roofing-accordion4.png';

import boxImage1 from '@images/roofing-box-one@2x.png';
import boxImage2 from '@images/roofing-box-two@2x.png';
import boxImage3 from '@images/roofing-box-three@2x.png';
import boxImage4 from '@images/roofing-box-four@2x.png';

import { oldList, newList, steps } from '@data/industries';
import { checkList1, firstList, accordionList1, accordionList2 } from '@data/industries/roofing.js';
import { FooterLinks } from '@locale/en.js';
import {
  container,
  industryPadding,
  noPadding,
  background,
  oldVsNewGradient,
} from '@styles/main.module.scss';

// import localeData from '@locale/en';

const Roofing = () => (
  <>
    <div className={`${container} ${industryPadding}`}>
      <SEO title="Roofing Industries" />
      <Header />
      <IndustryMainCard
        smallTitle="ATTO FOR ROOFING"
        title="Time Tracking for Roofing Companies"
        list={checkList1}
        image={image2}
      />
      <Divider className="style4" />
      <Story
        img={authorImage}
        paragraph="Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."
        author="Robert Bennett - DPA Cleaning Services, Inc."
      />
      <Divider />
      <Title
        title="Track all of your roofing contractors throughout their workday"
        maxWidth={920}
        maxDescriptionWidth={800}
        description="With real-time activity tracking, you can check if your roofers are working, on a break, or enjoying some time off."
      />
      <Divider className="style3" />
      <IconCardList cardList={firstList} hasBigImages style="smallerMargin" />
      <Divider />
      <Article
        title="Get helpful reminders so your roofers never forget to clock in!"
        description="When your roofers are in the middle of a job, it can be easy to lose track of time. That’s why whenever they enter or leave a job site, and at their normal start and end time, we’ll remind them to clock in and out. And if they happen to forget, they can add a manual time entry for you to review later."
        image={image3}
        maxWidth={500}
        imagePadding="6rem 0"
        imageWidth={550}
      />
      <Divider className="style3" />
      <Article
        title="Entrust your supervisor to track your roofing crew’s time"
        description="Tiling large buildings or doing commercial and industrial roofing jobs require lots of your roofers to work together. Instead of having each contractor track their time individually, your on-the-job supervisor can use Atto to clock-in and out on their behalf."
        image={image4}
        isSwapped
        maxWidth={500}
        imagePadding="3.8rem 2.8rem 6rem 0"
        imageWidth={550}
      />
      <Divider className="style4" />
      <Title
        title="Keep track of your roofing contractors as they work throughout the day"
        maxWidth={920}
        notCentered
      />
      <Divider className="style3" />
      <AccordionArticle list={accordionList1} image={image5} />
      <Divider />
      <Title
        title="Everything you need to keep roofing jobs on schedule and on budget"
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
        title="Time tracking for roofing companies? We’re on top of it!"
        placeholder="Type your email"
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
      />
      <Footer FooterLinks={FooterLinks} />
    </div>
  </>
);

export default Roofing;
