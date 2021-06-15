import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';

import Icon from '@components/atoms/icon';
import Divider from '@components/atoms/divider';
import EmailForm from '@components/atoms/email-form';
import Number from '@components/atoms/number-card';
import HeaderComponent from '@components/molecules/header';
import SEO from '@components/molecules/seo';
import FooterComponent from '@components/molecules/footer';
import Title from '@components/molecules/title';
import MainTitle from '@components/molecules/main-title-card';
import CommentCard from '@components/molecules/comment-card';
import CarouselComponent from '@components/molecules/carousel';
import FeatureTabs from '@components/organisms/feature-tabs';
import FreeTrial from '@components/organisms/free-trial';
import Story from '@components/organisms/story';
import Services from '@components/organisms/services';
import VideoCheckList from '@components/organisms/video-checklist';

import { serviceList, checkList, titleList } from '@data/listed-data';
import authorImage from '@images/no-image.png';

import { container } from '@styles/main.module.scss';
import '@styles/includes/slick-carousel.scss';
import { FooterLinks } from '@locale/en.js';
import {
  btnWrapper,
  pulledLeft,
  pulledRight,
  carouselWrapper,
} from '@components/molecules/carousel/carousel.module.scss';
import {
  // slider,
  sliderWrapper,
  numbers,
  mobileImage,
  mobileImageWrapper,
  desktopImage,
} from './homepage.module.scss';

const SampleNextArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  return (
    <button className={`${btnWrapper} ${pulledRight}`} onClick={onClick} type="button">
      <Icon iconClass="arrow-right" fSize={1.2} />
    </button>
  );
};

const SamplePrevArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  return (
    <button className={`${btnWrapper} ${pulledLeft}`} onClick={onClick} type="button">
      <Icon iconClass="arrow-left" fSize={1.2} />
    </button>
  );
};

const Home = () => {
  const [settings, setSettings] = useState({
    dots: false,
    infinite: false,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    vertical: false,
    slidesToScroll: 1,
    centerPadding: '20px',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  });

  useEffect(() => {
    if (window.innerWidth < 768) {
      setSettings({
        ...settings,
        slidesToShow: 1,
      });
    } else if (window.innerWidth > 768 && window.innerWidth < 1024) {
      setSettings({
        ...settings,
        slidesToShow: 2,
        centerMode: false,
        centerPadding: '0',
      });
    } else {
      setSettings({
        ...settings,
        slidesToShow: 3,
        centerMode: false,
        centerPadding: '0',
      });
    }
  }, []);

  return (
    <div className={container}>
      <SEO title="ATTO: Timesheets for Employees | Time & GPS Location Tracking" />
      <HeaderComponent />
      <MainTitle
        title="Time tracking, simplified."
        subtitle="Atto is a simple all-in-one time-tracking and timesheet solution. Spend less time managing your business and more time getting work done."
      />
      <div className={mobileImageWrapper}>
        <StaticImage
          src="../images/homepage-banner-mobile@2x.png"
          alt="Home banner image"
          height={396}
          quality={95}
          placeholder="none"
          className={mobileImage}
        />
      </div>
      <EmailForm
        placeholder="Type your email"
        checkItemOne="No credit card required"
        checkItemTwo="14 day free trial"
        checkItemThree="Cancel anytime"
        style="homepage"
      />
      <Divider className="style1" />
      <StaticImage
        src="../images/banner-image-2@2x.png"
        alt="Home banner image"
        width={1140}
        height={505}
        quality={95}
        placeholder="none"
        className={desktopImage}
      />
      <Divider className="style4" />
      <div className={sliderWrapper}>
        <Slider {...settings} className={carouselWrapper} width={960}>
          <CommentCard
            title="Amazing for my business!"
            description="Super convenient and easy to use, so happy i’ve found Atto! Highly recommend."
            date="23 Jul"
            author="Nita Ora"
            sliderItem
          />
          <CommentCard
            title="A must have software"
            description="I just love the ongoning improvements."
            date="20 Jul"
            author="James Stone"
            sliderItem
          />
          <CommentCard
            title="Everything you need"
            description="Service is fabolous and it’s easy to use. My employees love it."
            date="18 Jun"
            author="Rich Mathews"
            sliderItem
          />
          <CommentCard
            title="A must have software"
            description="I just love the ongoning improvements."
            date="20 Jul"
            author="James Stone"
            sliderItem
          />
          <CommentCard
            title="Everything you need"
            description="Service is fabolous and it’s easy to use. My employees love it."
            date="18 Jun"
            author="Rich Mathews"
            sliderItem
          />
        </Slider>
      </div>
      <Divider className="style4" />
      <FeatureTabs />
      <Divider />
      <Title
        maxWidth={840}
        maxDescriptionWidth={766}
        title="Thousands of businesses have saved time using Atto"
        description="And it’s not just time saved, but money and stress too."
        marginBottom="2rem"
      />
      <Divider className="style3" />
      <VideoCheckList list={titleList} cardStyle="centerAligned" />
      <Divider />
      <Title
        title="See how Atto works with your industry"
        description="Atto helps all types of businesses across the world manage their employees’ time."
        maxDescriptionWidth={700}
      />
      <Divider className="style2" />
      <Services list={serviceList} />
      <Divider className="style8" />
      <div className={numbers}>
        <Number title="500,000+" description="Timesheets Produced" />
        <Number title="150,000+" description="App Downloads" />
        <Number title="10,000+" description="Companies use Atto" />
        <Number title="250 million+" description="Minutes Tracked" />
      </div>
      <Divider />
      <Title title="Hear what business owners say about Atto" />
      <Divider className="style9" />
      <CarouselComponent large>
        <Story
          className="homepage"
          img={authorImage}
          paragraph="“Atto has saved us $1,000’s on payroll and taken away the stress of running a business.”"
          author="Robert Bennet - DPA Cleaning Services, Inc."
        />
        <Story
          className="homepage"
          img={authorImage}
          paragraph="“Atto has saved us $1,000’s on payroll and taken away the stress of running a business.”"
          author="Robert Bennet - DPA Cleaning Services, Inc."
        />
        <Story
          className="homepage"
          img={authorImage}
          paragraph="“Atto has saved us $1,000’s on payroll and taken away the stress of running a business.”"
          author="Robert Bennet - DPA Cleaning Services, Inc."
        />
      </CarouselComponent>
      <Divider />
      <FreeTrial
        title="No time to waste!"
        description="Stay in control of your employees’ time."
        list={checkList}
      />
      <FooterComponent FooterLinks={FooterLinks} />
    </div>
  );
};

export default Home;
