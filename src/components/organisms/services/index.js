import React from 'react';
import PropTypes from 'prop-types';

import ServiceCard from '@components/molecules/service-card';

import { container, serviceList } from './services.module.scss';

const Services = ({ list }) => (
  <div className={container}>
    <div className={serviceList}>
      {list?.map((service, index) => (
        <ServiceCard key={index} title={service.title} url={service.url} icon={service.icon} />
      ))}
    </div>
  </div>
);

Services.propTypes = {
  list: PropTypes.arrayOf({}),
};

export default Services;
