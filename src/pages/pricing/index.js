import React, { useState } from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';
import { Link } from 'gatsby-plugin-react-intl';
import loadable from '@loadable/component';

import HeaderComponent from '@components/molecules/header';
import Seo from '@components/molecules/seo';

import Button from '@components/atoms/button';
import Divider from '@components/atoms/divider';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import PackageCard from '@components/molecules/package-card';
import Title from '@components/molecules/title';
import Story from '@components/organisms/story';
import FeaturesList from '@components/organisms/features-list';
import PriceDragger from '@components/molecules/price-dragger';
import { navigate } from 'gatsby-plugin-intl';

import { container } from '@styles/main.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

import TimesheetIcon from '@images/timesheets.svg';
import LocationIcon from '@images/location.svg';
import WageEstimateIcon from '@images/wage_estimates.svg';
import JobCostIcon from '@images/job_costing.svg';
import TimeTrackingIcon from '@images/timeTrackingAndroid.svg';
import MobileTimeTracking from '@images/mobile_time_tracking.svg';
import TenderIcon from '@images/tender.svg';
import SupportIcon from '@images/help_support.svg';
import ProfileIcon from '@images/profile.svg';

import Faq from '@components/organisms/faq';
import {
  packageWrapper,
  priceHeader,
  buttonContainer,
  rightSide,
  featuresBanner,
  discount,
  behindMask,
} from './pricing.module.scss';

const Modal = loadable(() => import('@components/molecules/modal'));
const FooterComponent = loadable(() => import('@components/molecules/footer'));

const Pricing = () => {
  const Intl = useIntl();
  const [active, setActive] = useState('annually');

  const [showDialog, setShowDialog] = useState(false);
  const openModal = () => setShowDialog(true);
  const closeModal = () => setShowDialog(false);
  const [values, setValues] = useState(null);

  const toggleDeleteInvite = (data) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: data.email }),
    };
    fetch('https://staging.attotime.com/delete-invite', requestOptions)
      .then((res) => res.json())
      .then((data) => {
        closeModal();
        setValues(data);
        setTimeout(() => openModal(), 2000);
      });
  };

  const formSuccessState = (val) => {
    if (val?.action !== 'delete') {
      closeModal();
      setValues(val);
    } else {
      toggleDeleteInvite(val);
    }
  };

  const checkList = [
    {
      title: Intl.formatMessage({
        id: 'header.menu.timeTrackingLabel',
      }),
      noStyle: false,
    },
    {
      title: Intl.formatMessage({
        id: 'header.menu.locationTrackingLabel',
      }),
      noStyle: false,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.pricingFeatureThreeTitle',
      }),
      noStyle: false,
    },
    {
      title: Intl.formatMessage({
        id: 'header.menu.timesheetsTrackingLabel',
      }),
      noStyle: false,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.mobileTimeClockFeatureTitle',
      }),
      noStyle: false,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.jobsBreaksNotes',
      }),
      noStyle: false,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.timeOffTrackingFeatureTitle',
      }),
      noStyle: false,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.wageEstimatesFeatureTitle',
      }),
      noStyle: false,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.payrolIntegrationsFeatureTitle',
      }),
      noStyle: false,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.unlimitedSupportFeatureTitle',
      }),
      noStyle: false,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.30moreFeatureTitle',
      }),
      noStyle: true,
    },
  ];

  const checkList2 = [
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.prioritySupportFeatureTitle',
      }),
      noStyle: false,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.conciergeOnboardingFeatureTitle',
      }),
      noStyle: false,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.customImplementationsFeatureTitle',
      }),
      noStyle: false,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.customRolesFeatureTitle',
      }),
      noStyle: false,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.customIntegrationsFeatureTitle',
      }),
      noStyle: false,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.apiAccessFeatureTitle',
      }),
      noStyle: false,
    },
  ];

  const featureList = [
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.pricingFeatureOneTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.pricing.pricingFeatureOneDesc',
      }),
      logo: <TimeTrackingIcon />,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.pricingFeatureTwoTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.pricing.pricingFeatureTwoDesc',
      }),
      logo: <LocationIcon />,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.pricingFeatureThreeTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.pricing.pricingFeatureThreeDesc',
      }),
      logo: <ProfileIcon />,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.pricingFeatureFourTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.pricing.pricingFeatureFourDesc',
      }),
      logo: <TimesheetIcon />,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.pricingFeatureFiveTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.pricing.pricingFeatureFiveDesc',
      }),
      logo: <WageEstimateIcon />,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.pricingFeatureSixTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.pricing.pricingFeatureSixDesc',
      }),
      logo: <JobCostIcon />,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.pricingFeatureSevenTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.pricing.pricingFeatureSevenDesc',
      }),
      logo: <MobileTimeTracking />,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.pricingFeatureEightTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.pricing.pricingFeatureEightDesc',
      }),
      logo: <TenderIcon />,
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.pricingFeatureNineTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.pricing.pricingFeatureNineDesc',
      }),
      logo: <SupportIcon />,
    },
  ];

  const faqList = [
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.faqOneTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.pricing.faqOneDesc',
      }),
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.faqTwoTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.pricing.faqTwoDesc',
      }),
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.faqThreeTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.pricing.faqThreeDesc',
      }),
    },
    {
      title: Intl.formatMessage({
        id: 'pages.pricing.faqFourTitle',
      }),
      description: Intl.formatMessage({
        id: 'pages.pricing.faqFourDesc',
      }),
    },
  ];

  return (
    <div className={container}>
      <Modal
        close={closeModal}
        showDialog={showDialog}
        hasValues={values}
        onDelete={toggleDeleteInvite}
        setFormValues={(formValues) => formSuccessState(formValues)}
      />
      <Seo
        noTemplate
        title={Intl.formatMessage({ id: 'pages.pricing.metaTitle' })}
        description={Intl.formatMessage({ id: 'pages.pricing.metaDescription' })}
      />
      <HeaderComponent headerStyle="pricingHeader" />
      <span className={behindMask} />
      <div className={priceHeader}>
        <h1>
          {Intl.formatMessage({
            id: 'pages.pricing.bannerTitle',
          })}
        </h1>
        <div className={rightSide}>
          <div className={buttonContainer}>
            <Button
              btnText={Intl.formatMessage({ id: 'pages.miscellaneous.monthly' })}
              btnStyle="round"
              pricing
              activeClass={active === 'monthly'}
              onBtnClick={() => setActive('monthly')}
            />
            <Button
              btnText={Intl.formatMessage({ id: 'pages.miscellaneous.annually' })}
              btnStyle="round"
              pricing
              activeClass={active === 'annually'}
              onBtnClick={() => setActive('annually')}
            />
          </div>
          {active === 'annually' ? (
            <p className={discount}>{Intl.formatMessage({ id: 'pages.miscellaneous.Save29' })}</p>
          ) : (
            <p className={discount}>&nbsp; </p>
          )}
        </div>
      </div>
      <div className={packageWrapper}>
        <PackageCard
          title={Intl.formatMessage({ id: 'pages.miscellaneous.premium' })}
          price={active === 'annually' ? 5 : 7}
          list={checkList}
          listTitle={Intl.formatMessage({
            id: 'pages.pricing.includesLabel',
          })}
          goToSection={() => openModal()}
          contentText={Intl.formatMessage({ id: 'pages.miscellaneous.userPerMonth' })}
          usersText={`1-99 ${Intl.formatMessage({ id: 'pages.miscellaneous.users' })}`}
          hasGreyBg={false}
          btnText={Intl.formatMessage({ id: 'pages.miscellaneous.start14Days' })}
        />
        <PackageCard
          title={Intl.formatMessage({ id: 'pages.miscellaneous.enterprise' })}
          listTitle={Intl.formatMessage({ id: 'pages.miscellaneous.everythingInPremium' })}
          list={checkList2}
          hasGreyBg
          goToSection={() => navigate('/contact')}
          contentText={Intl.formatMessage({
            id: 'pages.pricing.contactTeam',
          })}
          usersText={`100+ ${Intl.formatMessage({ id: 'pages.miscellaneous.users' })}`}
          btnText={Intl.formatMessage({ id: 'pages.miscellaneous.contactSales' })}
        />
      </div>
      <Divider className="medium" />
      <Title
        title={Intl.formatMessage({
          id: 'pages.pricing.secondSectionTitle',
        })}
        description={Intl.formatMessage({
          id: 'pages.pricing.secondSectionDesc',
        })}
      />
      <Divider className="style5" />
      <div className={featuresBanner}>
        <StaticImage
          src="../../images/view-all-features@2x.png"
          width={1140}
          quality={98}
          height={170}
          placeholder="blurred"
        />
        <Link to="/all-features">
          <Button
            btnText={Intl.formatMessage({
              id: 'pages.pricing.viewAllFeaturesLabel',
            })}
            btnStyle="big"
          />
        </Link>
      </div>
      <Divider className="medium" />
      <Title
        title={Intl.formatMessage({
          id: 'pages.pricing.thirdSectionTitle',
        })}
        description={Intl.formatMessage({
          id: 'pages.pricing.thirdSectionDesc',
        })}
        maxWidth={900}
        maxDescriptionwidth={900}
      />
      <PriceDragger />
      <Divider />
      <Story
        img="pricing"
        paragraph={Intl.formatMessage({
          id: 'pages.pricing.review',
        })}
        author="Jack Thomas – Vision Building & Development"
      />
      <Divider />
      <Title
        title={Intl.formatMessage({
          id: 'pages.pricing.fourthSectionTitle',
        })}
        maxWidth={900}
      />
      <Divider className="style3" />
      <FeaturesList isLeftAligned list={featureList} style="pricing" />
      <Divider />
      <StaticImage
        src="../../images/pricing-time-tracking-for-field-workers.png"
        width={1140}
        quality={98}
        placeholder="blurred"
        height={460}
      />
      <Divider />
      <Faq list={faqList} />
      <SubscribeBanner
        bannerImage
        title={Intl.formatMessage({ id: 'pages.pricing.subscribeBanner' })}
        subtitle={Intl.formatMessage({ id: 'pages.pricing.subscribeBannerDesc' })}
        placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
        checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
        checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
        checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
        style="pricing"
      />
      <FooterComponent />
    </div>
  );
};

export default Pricing;
