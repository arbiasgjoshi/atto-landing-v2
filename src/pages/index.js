import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';
import { useIntl } from 'gatsby-plugin-react-intl';

import Icon from '@components/atoms/icon';
import Divider from '@components/atoms/divider';
import EmailForm from '@components/atoms/email-form';
import Number from '@components/atoms/number-card';
import HeaderComponent from '@components/molecules/header';
import Seo from '@components/molecules/seo';
import Modal from '@components/molecules/modal';
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

import authorImage from '@images/hear-what-businesses-have-to-say@2x.png';

import { container, formRotated } from '@styles/main.module.scss';
import '@styles/includes/slick-carousel.scss';
// import { FooterLinks } from '@locale/en.js';
import {
  btnWrapper,
  pulledLeft,
  pulledRight,
  carouselWrapper,
} from '@components/molecules/carousel/carousel.module.scss';
import { sliderWrapper, numbers, desktopImage, mobileImage } from './homepage.module.scss';

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
  const Intl = useIntl();
  const [showDialog, setShowDialog] = useState(false);
  const [values, setValues] = useState({});
  const openModal = () => setShowDialog(true);
  const closeModal = () => setShowDialog(false);

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

  const titleList = [
    { title: Intl.formatMessage({ id: 'pages.homepage.timesheetCheckItemZero' }), id: '1asdd1a' },
    { title: Intl.formatMessage({ id: 'pages.homepage.timesheetCheckItemOne' }), id: '1asdd1b' },
    { title: Intl.formatMessage({ id: 'pages.homepage.timesheetCheckItemTwo' }), id: '1asdd1c' },
    { title: Intl.formatMessage({ id: 'pages.homepage.timesheetCheckItemThree' }), id: '1asdd1d' },
  ];

  const checkList = [
    { title: Intl.formatMessage({ id: 'pages.homepage.subscribeCheckItemZero' }), id: '1asdd1a' },
    { title: Intl.formatMessage({ id: 'pages.homepage.subscribeCheckItemOne' }), id: '1asdd1a' },
    { title: Intl.formatMessage({ id: 'pages.homepage.subscribeCheckItemTwo' }), id: '1asdd1a' },
    { title: Intl.formatMessage({ id: 'pages.homepage.subscribeCheckItemThree' }), id: '1asdd1a' },
    { title: Intl.formatMessage({ id: 'pages.homepage.subscribeCheckItemFour' }), id: '1asdd1a' },
  ];

  const imageOneLocale = (loc) => {
    if (loc === 'en') {
      return (
        <StaticImage
          src="../images/en/time-tracking-simplified@2x.png"
          alt={Intl.formatMessage({ id: 'pages.homepage.title' })}
          width={1140}
          quality={95}
          placeholder="none"
          className={desktopImage}
        />
      );
    }
    if (loc === 'de') {
      return (
        <StaticImage
          src="../images/de/de-time-tracking-simplified@2x.png"
          alt={Intl.formatMessage({ id: 'pages.homepage.title' })}
          width={1140}
          quality={95}
          placeholder="none"
          className={desktopImage}
        />
      );
    }
    if (loc === 'fr') {
      return (
        <StaticImage
          src="../images/fr/fr-time-tracking-simplified@2x.png"
          alt={Intl.formatMessage({ id: 'pages.homepage.title' })}
          width={1140}
          quality={95}
          placeholder="none"
          className={desktopImage}
        />
      );
    }
    if (loc === 'es') {
      return (
        <StaticImage
          src="../images/es/es-time-tracking-simplified@2x.png"
          alt={Intl.formatMessage({ id: 'pages.homepage.title' })}
          width={1140}
          quality={95}
          placeholder="none"
          className={desktopImage}
        />
      );
    }
  };

  const mobileLocale = (loc) => {
    if (loc === 'de') {
      return (
        <StaticImage
          src="../images/DE_Mobile Time tracking, simplified@2x.png"
          alt={Intl.formatMessage({ id: 'pages.homepage.title' })}
          width={434}
          quality={95}
          placeholder="none"
          className={mobileImage}
        />
      );
    }
    if (loc === 'fr') {
      return (
        <StaticImage
          src="../images/FR_Mobile Time tracking, simplified@2x.png"
          alt={Intl.formatMessage({ id: 'pages.homepage.title' })}
          width={434}
          quality={95}
          placeholder="none"
          className={mobileImage}
        />
      );
    }
    if (loc === 'es') {
      return (
        <StaticImage
          src="../images/ES_Mobile Time tracking, simplified@2x.png"
          alt={Intl.formatMessage({ id: 'pages.homepage.title' })}
          width={434}
          quality={95}
          placeholder="none"
          className={mobileImage}
        />
      );
    }
    return (
      <StaticImage
        src="../images/Mobile Time tracking, simplified@2x.png"
        alt={Intl.formatMessage({ id: 'pages.homepage.title' })}
        width={434}
        quality={95}
        placeholder="none"
        className={mobileImage}
      />
    );
  };

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
      <Seo
        title={Intl.formatMessage({ id: 'pages.homepage.metaTitle' })}
        description={Intl.formatMessage({ id: 'pages.homepage.metaDescription' })}
      />
      <HeaderComponent />
      <Modal
        close={closeModal}
        showDialog={showDialog}
        hasValues={values}
        setFormValues={(formValues) => formSuccessState(formValues)}
      />
      <MainTitle
        title={Intl.formatMessage({ id: 'pages.homepage.title' })}
        subtitle={Intl.formatMessage({ id: 'pages.homepage.description' })}
      />
      <div className={formRotated}>
        <EmailForm
          changeModal={(val) => console.log(val)}
          placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
          checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
          checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
          checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
          style="homepage"
        />
        <Divider className="style1" />
        {imageOneLocale(Intl.locale)}
        {mobileLocale(Intl.locale)}
      </div>
      <Divider className="style4" />
      <div className={sliderWrapper}>
        <Slider {...settings} className={carouselWrapper} width={960}>
          <CommentCard
            title={Intl.formatMessage({ id: 'pages.homepage.reviews.firstTitle' })}
            description={Intl.formatMessage({ id: 'pages.homepage.reviews.firstDesc' })}
            date="23 Jul"
            author="Julia Conner"
            sliderItem
          />
          <CommentCard
            title={Intl.formatMessage({ id: 'pages.homepage.reviews.secondTitle' })}
            description={Intl.formatMessage({ id: 'pages.homepage.reviews.secondDesc' })}
            date="20 Jul"
            author="Rich Mathews"
            sliderItem
          />
          <CommentCard
            title={Intl.formatMessage({ id: 'pages.homepage.reviews.thirdTitle' })}
            description={Intl.formatMessage({ id: 'pages.homepage.reviews.thirdDesc' })}
            date="18 Jun"
            author="Robert Bennett"
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
        title={Intl.formatMessage({ id: 'pages.homepage.secondSectionTitle' })}
        description={Intl.formatMessage({ id: 'pages.homepage.secondSectionDesc' })}
        marginBottom="2rem"
      />
      <Divider className="style3" />
      <VideoCheckList
        list={titleList}
        videoUrl="https://vimeo.com/704266"
        placeholder="home"
        cardStyle="centerAligned"
      />
      <Divider />
      <Title
        title={Intl.formatMessage({ id: 'pages.homepage.thirdSectionTitle' })}
        description={Intl.formatMessage({ id: 'pages.homepage.thirdSectionDesc' })}
        maxDescriptionWidth={700}
      />
      <Divider className="style2" />
      <Services />
      <Divider className="style8" />
      <div className={numbers}>
        <Number
          title="1.2M +"
          description={Intl.formatMessage({ id: 'pages.miscellaneous.timesheetsGenerated' })}
        />
        <Number
          title="100k +"
          description={Intl.formatMessage({ id: 'pages.miscellaneous.jobsCompleted' })}
        />
        <Number
          title="10k +"
          description={Intl.formatMessage({ id: 'pages.miscellaneous.companiesTrustUs' })}
        />
        <Number
          title="750M +"
          description={Intl.formatMessage({ id: 'pages.miscellaneous.hoursTracked' })}
        />
      </div>
      <Divider />
      <Title title={Intl.formatMessage({ id: 'pages.homepage.fourthSectionTitle' })} />
      <Divider className="style9" />
      <CarouselComponent large>
        <Story
          className="homepage"
          img={authorImage}
          paragraph={Intl.formatMessage({ id: 'pages.homepage.reviews.bottomReview' })}
          author="Julia Conner – Pennprojects, LLC"
        />
        {/* <Story
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
        /> */}
      </CarouselComponent>
      <Divider />
      <FreeTrial
        title={Intl.formatMessage({ id: 'pages.homepage.subscribeTitle' })}
        description={Intl.formatMessage({ id: 'pages.homepage.subscribeDesc' })}
        list={checkList}
      />
      <FooterComponent />
    </div>
  );
};

export default Home;
