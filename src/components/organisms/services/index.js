import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'gatsby-plugin-react-intl';
import ConstructionLogo from '@images/construction-industry-logo.svg';
import PaintingLogo from '@images/painting-industry-logo.svg';
import HealthcareLogo from '@images/healthcare-industry-logo.svg';
import PlumbingLogo from '@images/plumbing-industry-logo.svg';
import ElectrianLogo from '@images/electrician-industry-logo.svg';
import LandscapingLogo from '@images/landscaping-industry-logo.svg';
import RoofingLogo from '@images/roofing-industry-logo.svg';
import CleaningLogo from '@images/cleaning-industry-logo.svg';
import ThreeDots from '@images/three-dots.svg';

import ServiceCard from '@components/molecules/service-card';

import { container, serviceList } from './services.module.scss';

const Services = () => {
  const Intl = useIntl();

  const listOfServices = [
    {
      title: Intl.formatMessage({ id: 'pages.industries.constructionLabel' }),
      url: '/industries/construction',
      icon: <ConstructionLogo />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.industries.landscapingLabel' }),
      url: '/industries/landscaping',
      icon: <LandscapingLogo />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.industries.roofingLabel' }),
      url: '/industries/roofing',
      icon: <RoofingLogo />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.industries.paintingLabel' }),
      url: '/industries/painting-and-decorating',
      icon: <PaintingLogo />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.industries.cleaningLabel' }),
      url: '/industries/cleaning-and-maintenance',
      icon: <CleaningLogo />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.industries.healthcareLabel' }),
      url: '/industries/healthcare-and-medical',
      icon: <HealthcareLogo />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.industries.electricalLabel' }),
      url: '/industries/electrical',
      icon: <ElectrianLogo />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.industries.plumbingLabel' }),
      url: '/industries/plumbing-and-heating',
      icon: <PlumbingLogo />,
    },
    {
      title: Intl.formatMessage({ id: 'pages.industries.otherIndustriesLabel' }),
      url: '/industries/electrical',
      icon: <ThreeDots />,
    },
  ];
  return (
    <div className={container}>
      <div className={serviceList}>
        {listOfServices?.map((service, index) => (
          <ServiceCard key={index} title={service.title} url={service.url} icon={service.icon} />
        ))}
      </div>
    </div>
  );
};

Services.propTypes = {
  list: PropTypes.arrayOf({}),
};

export default Services;
