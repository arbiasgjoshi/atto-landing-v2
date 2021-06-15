import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Divider from '@components/atoms/divider';
import SEO from '@components/molecules/seo';
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

import authorImage from '@images/landscaping-author@2x.png';
import image2 from '@images/time-tracking-landscaping@2x.png';
import image3 from '@images/landscaping-accordion1.png';
import image4 from '@images/landscaping-accordion2.png';
import image5 from '@images/landscaping-accordion3.png';

import boxImage1 from '@images/landscaping-box-one@2x.png';
import boxImage2 from '@images/landscaping-box-two@2x.png';
import boxImage3 from '@images/landscaping-box-three@2x.png';
import boxImage4 from '@images/landscaping-box-four@2x.png';

import { FooterLinks } from '@locale/en.js';
import {
  checkList1,
  accordionList1,
  accordionList2,
  accordionList3,
} from '@data/industries/landscaping.js';

import { oldList, newList, steps } from '@data/industries';
import { container, industryPadding, noPadding, oldVsNewGradient } from '@styles/main.module.scss';
import {
  topImageMask,
  bottomImageMask,
  greenBackground,
} from '../construction/construction.module.scss';

const Landscaping = () => (
  <>
    <div className={`${container} ${industryPadding}`}>
      <SEO title="Landscaping Industries" />
      <Header />
      <IndustryMainCard
        smallTitle="ATTO FOR LANDSCAPING"
        title="Time Tracking for Landscaping Companies"
        list={checkList1}
        image={image2}
      />
      <Divider className="style4" />
      <ReviewCards />
      <Divider className="style13" />
    </div>
    <div className={greenBackground}>
      <div className={topImageMask}>
        <StaticImage src="../../../images/upper_shape.svg" placeholder="none" />
      </div>
      <div className={bottomImageMask}>
        <StaticImage src="../../../images/lower_shape.svg" placeholder="none" />
      </div>
      <div className={`${container} ${noPadding}`}>
        <Title
          title="Say goodbye to paper timesheets"
          description="Ditch paper timesheets and switch to Atto – an easier and more accurate time-tracking solution for construction companies"
          maxWidth={1040}
          maxDescriptionWidth={900}
        />
        <Divider className="style3" />
        <StaticImage src="../../../images/paper_timesheets@2x.png" placeholder="none" />
        <Divider className="style3" />
        <ImagesBox image1={boxImage1} image2={boxImage2} image3={boxImage3} image4={boxImage4} />
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
        img={authorImage}
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
      <Steps list={steps} />
      <Divider className="style4" />
      <StaticImage
        quality={90}
        width={1140}
        height={241}
        style={{ marginBottom: '0.2rem' }}
        placeholder="none"
        src="../../../images/landscape-subscribe-banner.png"
      />
      <SubscribeBanner
        title="Help your business blossom with accurate time tracking from Atto"
        placeholder="Type your email"
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
      />
      <Footer FooterLinks={FooterLinks} />
    </div>
  </>
);

export default Landscaping;
