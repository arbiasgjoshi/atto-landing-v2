import React from 'react';
import WebTracking from '@images/web-time-tracking.svg';
import MobileTracking from '@images/mobile_time_tracking.svg';
import KioskTracking from '@images/kiosk-time-tracking.svg';

import ConstructionLogo from '@images/construction-industry-logo.svg';
import PaintingLogo from '@images/painting-industry-logo.svg';
import HealthcareLogo from '@images/healthcare-industry-logo.svg';
import PlumbingLogo from '@images/plumbing-industry-logo.svg';
import ElectrianLogo from '@images/electrician-industry-logo.svg';
import LandscapingLogo from '@images/landscaping-industry-logo.svg';
import RoofingLogo from '@images/roofing-industry-logo.svg';
import CleaningLogo from '@images/cleaning-industry-logo.svg';
import ThreeDots from '@images/three-dots.svg';

import icon1 from '@images/clock-in-out.png';
import icon2 from '@images/write-notes.png';
import icon3 from '@images/track-breaks.png';
import icon4 from '@images/manage-overtime.png';
import icon5 from '@images/switch-between-jobs.png';
import icon6 from '@images/add-time-off.png';

import {
  FirstQuestion,
  SecondQuestion,
  ThirdQuestion,
  FourthQuestion,
} from '@data/common-questions/time-tracking';

export const featureCardsList = [
  {
    title: 'Via our Mobile App',
    description: 'Track time on the go with the Atto mobile app available on iOS and Android.',
    logo: <MobileTracking />,
  },
  {
    title: 'On the Web',
    description: 'When at the office, track your time using Atto’s web-based time clock.',
    logo: <WebTracking />,
  },
  {
    title: 'Via the Time Clock Kiosk',
    comingSoon: true,
    description:
      'Set up a time clock kiosk to enable your team to track time from a single device.',
    logo: <KioskTracking />,
  },
];

export const commonQuestionsList = [
  {
    title: 'What happens if a worker loses their connection while time tracking?',
    description: <FirstQuestion />,
  },
  {
    title: 'What if a worker forgets to track time?',
    description: <SecondQuestion />,
  },
  {
    title: 'Is GPS time tracking required?',
    description: <ThirdQuestion />,
  },
  {
    title: 'What happens if I have office-based workers, and mobile workers?',
    description: <FourthQuestion />,
  },
];

export const firstList = [
  {
    title: 'Clock in and out',
    description: `Tap the giant pulsating clock in/out button to start tracking time.`,
    alt: 'Easy to use',
    icon: icon1,
    imageWidth: 350,
    imageHeight: 244,
  },
  {
    title: 'Write notes',
    description: `Add notes to your time tracking records, such as a work diary.`,
    alt: 'write notes',
    icon: icon2,
    imageWidth: 350,
    imageHeight: 244,
  },
  {
    title: 'Track breaks',
    description: `Track breaks and categorize them as either paid or unpaid.`,
    alt: 'track breaks',
    icon: icon3,
    imageWidth: 350,
    imageHeight: 244,
  },
  {
    title: 'Manage overtime',
    description: `Decide if overtime should be tracked, and if so, whether it’s calculated weekly, daily or daily double.`,
    alt: 'Manage overtime',
    icon: icon4,
    imageWidth: 350,
    imageHeight: 244,
  },
  {
    title: 'Switch between jobs',
    description: `Use job codes to categorize time tracked towards specific purposes – for example for each client or type of job.`,
    alt: 'Switch between jobs',
    icon: icon5,
    imageWidth: 350,
    imageHeight: 244,
  },
  {
    title: 'Add time off',
    description: `Add time off such as vacations and sick leave to help managers understand who’s available to work.`,
    alt: 'Time off',
    icon: icon6,
    imageWidth: 350,
    imageHeight: 244,
  },
];

export const serviceList = [
  { title: 'Construction', url: '/industries/construction', icon: <ConstructionLogo /> },
  { title: 'Landscaping & Gardening', url: '/industries/landscaping', icon: <LandscapingLogo /> },
  { title: 'Roofing', url: '/industries/roofing', icon: <RoofingLogo /> },
  {
    title: 'Painting & Decorating',
    url: '/industries/painting-and-decorating',
    icon: <PaintingLogo />,
  },
  {
    title: 'Cleaning & Maintenance',
    url: '/industries/cleaning-and-maintenance',
    icon: <CleaningLogo />,
  },
  {
    title: 'Healthcare & Medical',
    url: '/industries/healthcare-and-medical',
    icon: <HealthcareLogo />,
  },
  { title: 'Electrical', url: '/industries/electrical', icon: <ElectrianLogo /> },
  { title: 'Plumbing & Heating', url: '/industries/plumbing-and-heating', icon: <PlumbingLogo /> },
  { title: 'Other industries', url: '/industries/electrical', icon: <ThreeDots /> },
];
