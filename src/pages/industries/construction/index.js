import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Divider from '@components/atoms/divider';
import SEO from '@components/molecules/seo';
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

import authorImage from '@images/construction-minds@2x.png';
import image2 from '@images/time-tracking-construction@2x.png';
import image3 from '@images/still_want_to_use_it@2x.png';
import image4 from '@images/guarante-on-site@2x.png';
import image5 from '@images/wage-estimates@2x.png';

import boxImage1 from '@images/construction-daily-timeline@2x.png';
import boxImage2 from '@images/construction-location@2x.png';
import boxImage3 from '@images/construction-timesheets@2x.png';
import boxImage4 from '@images/construction-time-tracking@2x.png';

import { container, industryPadding, noPadding, oldVsNewGradient } from '@styles/main.module.scss';
import {
  checkList1,
  accordionList1,
  accordionList2,
  accordionList3,
} from '@data/industries/construction.js';

import { steps, oldList, newList } from '@data/industries';

import { FooterLinks } from '@locale/en.js';
import { topImageMask, bottomImageMask, greenBackground } from './construction.module.scss';

const Construction = () => (
  <>
    <div className={`${container} ${industryPadding}`}>
      <SEO title="Construction Industries" />
      <Header />
      <IndustryMainCard
        smallTitle="ATTO FOR CONSTRUCTION"
        title="Time Tracking for Construction Companies"
        list={checkList1}
        image={image2}
      />
      <Divider className="style3" />
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
        placeholder="none"
        style={{ marginBottom: '0.2rem' }}
        src="../../../images/subscribe-banner-image.png"
      />
      <SubscribeBanner
        title="Ready to put Atto to work on your construction sites?"
        placeholder="Type your email"
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
      />
      <Footer FooterLinks={FooterLinks} />
    </div>
  </>
);

export default Construction;
