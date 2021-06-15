import React from 'react';

import Divider from '@components/atoms/divider';
import Button from '@components/atoms/button';
import StepCard from '@components/molecules/step-card';

import { container, listContainer } from './steps.module.scss';

const Steps = ({ list }) => (
  <div className={container}>
    <div className={listContainer}>
      {list?.map(({ image, title, width, height, description, imagePadding }) => (
        <StepCard
          imagePadding={imagePadding}
          image={image}
          imageWidth={width}
          imageHeight={height}
          title={title}
          description={description}
        />
      ))}
    </div>
    <Divider className="style3" />
    <Button btnStyle="teal" btnText="Get started now" />
  </div>
);

export default Steps;
