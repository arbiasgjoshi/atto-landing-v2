import React from 'react';

import Divider from '@components/atoms/divider';
import Button from '@components/atoms/button';
import StepCard from '@components/molecules/step-card';

import { container, listContainer } from './steps.module.scss';

const Steps = ({ list, toggleModal }) => (
  <div className={container}>
    <div className={listContainer}>
      {list?.map(({ image, title, width, height, description, imagePadding }, idx) => (
        <StepCard
          imagePadding={imagePadding}
          image={image}
          imageWidth={width}
          imageHeight={height}
          title={title}
          key={idx}
          description={description}
        />
      ))}
    </div>
    <Divider className="style3" />
    <Button btnStyle="teal" btnText="Get started now" onBtnClick={() => toggleModal()} />
  </div>
);

export default Steps;
