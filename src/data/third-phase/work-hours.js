import React from 'react';
import WebTracking from '@images/web-time-tracking.svg';
import MobileTracking from '@images/mobile_time_tracking.svg';
import KioskTracking from '@images/kiosk-time-tracking.svg';
import CrewTracking from '@images/crew-tracking.svg';

import TimesheetsBill from '@images/accurate-timesheet-reports@2x.png';
import ScheduledImage from '@images/scheduled-timesheet-report-email@2x.png';

import {
  FirstQuestion,
  SecondQuestion,
  ThirdQuestion,
  FourthQuestion,
} from '@data/common-questions/work-hours-trackers';

export const checkList = [
  'Mobile, Web, Crew, and Kiosk Work Hours Trackers',
  'Real-time GPS Location Tracking',
  'Wage Estimates',
  'Automated Timesheet Reports',
];

export const commonQuestionsList = [
  {
    title: 'Who is the Atto work hours tracker built for?',
    description: <FirstQuestion />,
  },
  {
    title: 'How do I use the work hours tracker?',
    description: <SecondQuestion />,
  },
  {
    title: 'Can I use the work hours tracker while offline?',
    description: <ThirdQuestion />,
  },
  {
    title: 'What if my employees forget to clock in/out of the work hours tracker?',
    description: <FourthQuestion />,
  },
];

export const featureCardsList = [
  {
    title: 'Time Card App on Mobile',
    description: 'Track time on the go with the Atto mobile app available on iOS and Android.',
    logo: <MobileTracking />,
  },
  {
    title: 'On the Web',
    description: 'When at the office, track your time using Atto’s web-based time clock.',
    logo: <WebTracking />,
  },
  {
    title: 'With Crew Functionality',
    description: 'Entrust managers to clock in and out on all of the team’s behalf.',
    logo: <CrewTracking />,
  },
  {
    title: 'Via the Time Clock Kiosk',
    comingSoon: true,
    description:
      'Set up a time clock kiosk to enable your team to track time from a single device.',
    logo: <KioskTracking />,
  },
];

export const cardList = [
  {
    title: `Use your timesheets to bill hourly clients`,
    description: `Billing customers on an hourly basis? Download and share professional-looking PDF timesheets with them.`,
    alt: 'Use your timesheets to bill hourly clients',
    icon: TimesheetsBill,
    breakTitle: true,
    imageWidth: '85',
  },
  {
    title: 'Timesheets automatically emailed to speed up your payroll process',
    description: `Atto simplifies the payroll process by automatically emailing your employees’ timesheet report to coincide with your payroll period.`,
    alt: 'Timesheets automatically emailed to speed up your payroll process',
    icon: ScheduledImage,
    imageWidth: '115',
  },
];

export const verticalList = [
  {
    title: 'Job Codes',
    description:
      'Employees use job codes to track time towards specific purposes, such as for each client or type of job – making it much easier to see how productive they are.',
  },
  {
    title: 'Locations',
    description:
      'Track the real-time location of your employees, prevent them from clocking in unless they’re at a job site, and verify that the hours they’re logging are actually being worked.',
  },
  {
    title: 'Wages',
    description:
      'Input your employees’ pay rates into Atto, and get real-time estimates of your upcoming payroll based on the hours being tracked.',
  },
];
