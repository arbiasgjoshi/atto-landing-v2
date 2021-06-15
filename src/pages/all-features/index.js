import React from 'react';
import PropTypes from 'prop-types';

import HeaderComponent from '@components/molecules/header';
import SEO from '@components/molecules/seo';
import Title from '@components/molecules/title';
import Divider from '@components/atoms/divider';
import FeatureCard from '@components/molecules/feature-card';

import MainTitleCard from '@components/molecules/main-title-card';

import Faq from '@components/organisms/faq';
import FooterComponent from '@components/molecules/footer';
import SubscribeBanner from '@components/molecules/subscribe-banner';
import { FooterLinks, faqList } from '@locale/en.js';

import { container } from '@styles/main.module.scss';
import {
  timeTrackingCards,
  locationTrackingCards,
  timesheetCards,
  teamActivityCards,
} from '../../data/all-features';
import {
  cardListWrapper,
  timeTrackingStyle,
  locationTrackingStyle,
  teamActivityStyle,
  timesheetStyle,
  cardWrapper,
  emptyCard,
  behindMask,
} from './all-features.module.scss';

const AllFeaturesPage = () => {
  const someVar = null;
  return (
    <>
      <span className={behindMask} />
      <div className={container}>
        <SEO title="All features" />
        <HeaderComponent headerStyle="pricingHeader" />
        <MainTitleCard
          title="All features, at a glance"
          maxParagraphWidth={620}
          subtitle="Combining everything you need to manage your team in one place."
        />
        <Divider className="style4" />
        <Divider className="style3" />
        <Title title="Time Tracking Features" />
        <Divider className="style5" />
        <div className={`${cardListWrapper} ${timeTrackingStyle}`}>
          {timeTrackingCards.map(({ title, description, logo }) => (
            <div className={cardWrapper}>
              <FeatureCard
                style="all-features"
                title={title}
                description={description}
                logo={logo}
              />
            </div>
          ))}
        </div>
        <Divider className="style4" />
        <Title title="Location Tracking Features" />
        <Divider className="style5" />
        <div className={`${cardListWrapper} ${locationTrackingStyle}`}>
          {locationTrackingCards.map(({ title, description, logo }) => (
            <div className={cardWrapper}>
              <FeatureCard
                style="all-features"
                title={title}
                description={description}
                logo={logo}
              />
            </div>
          ))}
        </div>
        <Divider className="style4" />
        <Title title="Team Activity Features" />
        <Divider className="style5" />
        <div className={`${cardListWrapper} ${teamActivityStyle}`}>
          {teamActivityCards.map(({ title, description, logo }) => (
            <div className={cardWrapper}>
              <FeatureCard
                style="all-features"
                title={title}
                description={description}
                logo={logo}
              />
            </div>
          ))}
        </div>
        <Divider className="style4" />
        <Title title="Timesheets Features" />
        <Divider className="style5" />
        <div className={`${cardListWrapper} ${timesheetStyle}`}>
          {timesheetCards.map(({ title, description, logo, empty }) => (
            <div className={`${cardWrapper} ${empty && emptyCard}`}>
              <FeatureCard
                style="all-features"
                title={title}
                description={description}
                logo={logo}
              />
            </div>
          ))}
        </div>
        <SubscribeBanner
          bannerImage
          title="There’s no time to waste!"
          subtitle="Try Atto, free for 14 days"
          placeholder="Type your email"
          checkItemOne="No credit card required"
          checkItemTwo="14 day free trial"
          checkItemThree="Cancel anytime"
          style="pricing"
        />
        <FooterComponent FooterLinks={FooterLinks} />
      </div>
    </>
  );
};

export default AllFeaturesPage;
