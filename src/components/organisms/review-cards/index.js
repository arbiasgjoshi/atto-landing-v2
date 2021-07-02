import React from 'react';

import ReviewCard from '@components/molecules/review-box';

import { reviewCards } from './review-cards.module.scss';

const ReviewCards = () => (
  <div className={reviewCards}>
    <ReviewCard
      title={`"A must-have app for your company"`}
      rating="5 / 5"
      author="Julia Conner"
      job=""
    />
    <ReviewCard
      title={`“Would highly recommend for keeping track of your staff’s time”`}
      author="Frank Mason"
      rating="5 / 5"
      job=""
    />
    <ReviewCard title={`"So perfectly simplistic"`} author="Rich Mathews" rating="5 / 5" job="" />
  </div>
);

export default ReviewCards;
