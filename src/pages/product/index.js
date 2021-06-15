import React from 'react';

import HeaderComponent from '@components/molecules/header';
import MainTitleCard from '@components/molecules/main-title-card';
import SEO from '@components/molecules/seo';
import Divider from '@components/atoms/divider';
import EmailForm from '@components/atoms/email-form';
import { FooterLinks } from '@locale/en.js';
import Story from '@components/organisms/story';
import IconCardList from '@components/organisms/icon-card-list';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import ProductCard from '@components/organisms/product-card';
import GrowthNumbers from '@components/organisms/growth-numbers';
import FooterComponent from '@components/molecules/footer';

import { container, imageFormWrapper } from '@styles/main.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import ProductOverviewBanner from '@images/product-overview-banner-image.svg';

import authorImage from '@images/authorImage.png';

import icon from '@images/easy-to-use.png';
import icon2 from '@images/All_in_one@2x.png';
import icon3 from '@images/Time_saving@2x.png';

import image1 from '@images/time-tracking-fingertips@2x.png';
import image2 from '@images/know-where-is-team.png';
import image3 from '@images/stay-in-loop.png';
import image4 from '@images/relax-with-timesheets@2x.png';
import { productContainer } from './product.module.scss';

const Product = () => {
  const firstList = [
    {
      title: 'Simple',
      description: `Intuitive, easy-to-use software with no technical knowledge required.`,
      alt: 'Simple',
      icon,
      imageWidth: 59,
      imageHeight: 97,
      imagePadding: '.8rem 3.1rem 1.5rem 3rem',
    },
    {
      title: 'All-in-one',
      description: `Combining everything you need to manage your team’s time in one place.`,
      alt: 'All-in-one',
      icon: icon2,
      imageWidth: 80,
      imageHeight: 75,
      imagePadding: '2.3rem 2rem 2.2rem 2rem',
    },
    {
      title: 'Time-Saving',
      description: `Using automation to save time and let your team focus on productive work.`,
      alt: 'Time Saving',
      icon: icon3,
      imageWidth: 85,
      imageHeight: 96,
      imagePadding: '1.2rem 1.72rem 1.269rem 1.8rem',
    },
  ];

  const productList1 = [
    {
      title: 'Eliminate timesheet estimates',
      description: `Automated time-tracking means accurate entries and reduced payroll costs.`,
    },
    {
      title: `Track time from any device, anytime, anywhere`,
      description: `Keep track of time in the office, in teams, at a job site, or on the move.`,
    },
  ];

  const productList2 = [
    {
      title: 'Avoid constant calls and check-ins',
      description: `Instantly see where your team is and track the progress they’re making.`,
    },
    {
      title: `Increase team safety and accountability`,
      description: `Verify your team is exactly where they should be all the time.`,
    },
  ];

  const productList3 = [
    {
      title: 'Never be in the dark about team progress',
      description: `Be informed of your team’s work activity with instant notifications.`,
    },
    {
      title: `Get greater insight into your employees’ workdays`,
      description: `Check up on employee productivity with clear timelines of their workdays.`,
    },
  ];

  const productList4 = [
    {
      title: 'Feel confident in your timesheet accuracy',
      description: `Gain trust with accurate timesheets that are verified using location data.`,
    },
    {
      title: `Streamline the payroll process`,
      description: `Save hours of admin with payroll integrations and automatically emailed reports.`,
    },
  ];

  return (
    <div className={`${container} ${productContainer}`}>
      <SEO title="Product Overview" />
      <HeaderComponent />
      <MainTitleCard
        maxParagraphWidth={760}
        title="Everything you need to keep track of your employees’ time"
        subtitle="Don't let timesheets be a distraction. Focus on what matters and let us handle them for you."
      />
      <div className={imageFormWrapper}>
        <EmailForm
          placeholder="Type your email"
          checkItemOne="No credit card required"
          checkItemTwo="14 day free trial"
          checkItemThree="Cancel anytime"
          style="productPage"
        />
        <Divider className="style0" />
        <ProductOverviewBanner />
      </div>
      <Divider className="style31" />
      <IconCardList cardList={firstList} style="smallTimesheetImages" />
      <Divider />
      <ProductCard
        productName="TIME TRACKING"
        title="Accurate time tracking at your fingertips"
        description="Know where your employees’ time is going. See every minute on the clock including work hours, breaks, and time off."
        list={productList1}
        image={image1}
        imagePadding="3.5rem 3.1rem"
        path="/product/time-tracking"
        imageWidth={437}
        imageHeight={580}
      />
      <Divider />
      <ProductCard
        productName="LOCATION TRACKING"
        title="Know where your team is in real-time"
        description="Get real-time updates on your entire team’s locations and daily movements. Stay in control of your employees in the field."
        list={productList2}
        image={image2}
        isSwapped
        path="/product/gps-location-tracking"
        imageWidth={500}
        imageHeight={650}
      />
      <Divider />
      <ProductCard
        productName="TEAM ACTIVITY"
        title="Stay in the loop as work happens"
        description="View the work status of your team in a few taps, making team management far simpler and easier."
        list={productList3}
        image={image3}
        imagePadding="3.5rem 1.87rem 3.5rem 1.8rem"
        path="/product/team-activity"
        imageWidth={463}
        imageHeight={580}
      />
      <Divider />
      <ProductCard
        productName="TIMESHEETS"
        title="Relax with timesheets on time, every time"
        description="Atto instantly generates timesheets for you so you never stress over misplaced, late, or inaccurate timesheets again."
        list={productList4}
        image={image4}
        isSwapped
        imagePadding="5.6rem 3.9rem 3.5rem 3.9rem"
        path="/product/timesheets"
        imageWidth={408}
        imageHeight={580}
      />
      <Divider />
      <GrowthNumbers />
      <Divider />
      <Story
        img={authorImage}
        paragraph={`"Does precisely and perfectly what it says. The great big pulsating green button is appealing, makes you want to start work right away! Loving it and the helpful staff."`}
        author="Robert Bennet - DPA Cleaning Services, Inc."
      />
      <Divider />
      <SubscribeBanner
        bannerImage
        title="Free up your time and focus on what really matters"
        placeholder="Type your email"
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
      />
      <FooterComponent FooterLinks={FooterLinks} />
    </div>
  );
};

export default Product;
