import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Divider from '@components/atoms/divider';
import SEO from '@components/molecules/seo';
import Title from '@components/molecules/title';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import Article from '@components/molecules/article';
import Story from '@components/organisms/story';
import IconCardList from '@components/organisms/icon-card-list';
import IndustryMainCard from '@components/organisms/industry-main-card';
import AccordionArticle from '@components/organisms/accordion-article';
import OldVsNew from '@components/organisms/old-vs-new';
import Steps from '@components/organisms/steps';
import ImagesBox from '@components/organisms/images-box';

import SubscribeBanner from '@components/molecules/subscribe-banner';
import authorImage from '@images/painting-author@2x.png';
// import image1 from '@images/no-image.png';
import image2 from '@images/time-tracking-painting@2x.png';
import image3 from '@images/painting-accordion1.png';
import image4 from '@images/painting-accordion2.png';
import image5 from '@images/painting-accordion3.png';
import image6 from '@images/painting-accordion4.png';

import boxImage1 from '@images/painting-box-one@2x.png';
import boxImage2 from '@images/painting-box-two@2x.png';
import boxImage3 from '@images/painting-box-three@2x.png';
import boxImage4 from '@images/painting-box-four@2x.png';

import {
  firstList,
  checkList1,
  accordionList1,
  accordionList2,
} from '@data/industries/painting.js';
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

const Painting = () => (
  <>
    <div className={`${container} ${industryPadding}`}>
      <SEO title="Painting Industries" />
      <Header />
      <IndustryMainCard
        smallTitle="ATTO FOR PAINTERS AND DECORATORS"
        title="Time Tracking for Painting and Decorating Companies"
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
        title="Track all of your painters and decorators throughout their workday"
        description="With real-time activity tracking, you can check if your crew is working, on a break, or enjoying some time off."
        maxWidth={920}
        maxDescriptionWidth={800}
      />
      <Divider className="centenary" />
      <IconCardList cardList={firstList} hasBigImages style="smallerMargin" />
      <Divider />
      <Article
        title="Allow your supervisor to track your painting crew’s time"
        description="Painting large properties or doing a commercial renovation requires your crew to work together. Instead of having each painter or decorator track their time individually, your on-the-job supervisor can use Atto to clock in and out on their behalf."
        maxWidth={500}
        imagePadding="5rem 0"
        imageWidth={550}
        imageHeight={380}
        image={image3}
      />
      <Divider className="style3" />
      <Article
        title="Entrust your supervisor to track your painting crew’s time"
        description="Tiling large buildings or doing commercial and industrial painting jobs require lots of your roofers to work together. Instead of having each contractor track their time individually, your on-the-job supervisor can use Atto to clock-in and out on their behalf."
        isSwapped
        maxWidth={500}
        imagePadding="3rem 0 4rem"
        imageWidth={550}
        image={image4}
      />
      <Divider className="style4" />
      <AccordionArticle
        title="Keep track of your painting and decorating crew as they work throughout the day"
        list={accordionList1}
        image={image5}
      />
      <Divider className="style4" />
      <AccordionArticle
        title="Everything you need to keep painting and decorating jobs on schedule and on budget"
        list={accordionList2}
        image={image6}
        isSwapped
      />
      <Divider />
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
      <Steps list={steps} />
      <Divider className="style4" />
      <SubscribeBanner
        title="Using paper timesheets is like watching paint dry. Try Atto instead!"
        placeholder="Type your email"
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
      />
      <Footer FooterLinks={FooterLinks} />
    </div>
  </>
);

export default Painting;
