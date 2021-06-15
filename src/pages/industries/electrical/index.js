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

import authorImage from '@images/electrician-author@2x.png';
import image3 from '@images/electrician-accordion1.png';
import image4 from '@images/electrician-accordion2.png';
import image5 from '@images/electrician-accordion3.png';
import image6 from '@images/electrician-accordion4.png';

import boxImage1 from '@images/electrician-box-one@2x.png';
import boxImage2 from '@images/electrician-box-two@2x.png';
import boxImage3 from '@images/electrician-box-three@2x.png';
import boxImage4 from '@images/electrician-box-four@2x.png';

// import image1 from '@images/no-image.png';
import image2 from '@images/time-tracking-electricians@2x.png';

import { FooterLinks } from '@locale/en.js';
import {
  firstList,
  checkList1,
  accordionList1,
  accordionList2,
} from '@data/industries/electrician.js';
import { oldList, newList, steps } from '@data/industries';
import {
  container,
  industryPadding,
  noPadding,
  background,
  oldVsNewGradient,
} from '@styles/main.module.scss';

// import localeData from '@locale/en';

const Electrician = () => (
  <>
    <div className={`${container} ${industryPadding}`}>
      <SEO title="Electrician Industries" />
      <Header />
      <IndustryMainCard
        smallTitle="ATTO FOR ELECTRICIANS"
        title="Time Tracking for Electricians"
        list={checkList1}
        image={image2}
      />
      <Divider className="style4" />
      <Story
        img={authorImage}
        paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."
      `}
        author="Robert Bennett - DPA Electrician Services, Inc."
      />
      <Divider />
      <Title
        title="Track all of your electricians throughout their workday"
        maxWidth={920}
        maxDescriptionWidth={800}
        description="With real-time activity tracking, you can check if your electricians are working, on a break, or enjoying some time off."
      />
      <Divider className="centenary" />
      <IconCardList cardList={firstList} hasBigImages style="smallerMargin" />
      <Divider />
      <Article
        title="Buzz your electricians with helpful reminders so they don’t forget to clock in!"
        description="Handling electricity requires full focus and concentration, so it’s easy to lose track of time. That’s why whenever your electricians enter or leave a job site, and at their normal start and end time, we’ll remind them to clock in and out. 
        And if they do happen to forget, they can add a manual time entry for you to review later."
        image={image3}
        maxWidth={500}
        imagePadding="6rem 0"
        imageWidth={550}
        // imageHeight={354}
      />
      <Divider className="style3" />
      <Article
        title="Give on-site supervisors the power to track your electricians’ time"
        description="Wiring an entire building? Dealing with a commercial job that requires multiple electricians on-site? Instead of having each of them track their time individually, your on-site supervisor can clock-in and out on all of your electricians’ behalf."
        image={image4}
        isSwapped
        maxWidth={500}
        imagePadding="4rem 0"
        imageWidth={550}
        // imageHeight={354}
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
        title="Keep track of all your electricians in the field with Atto"
        placeholder="Type your email"
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
      />
      <Footer FooterLinks={FooterLinks} />
    </div>
  </>
);

export default Electrician;
