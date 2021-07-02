import React from 'react';

import Icon from '@components/atoms/icon';
import { RespondToAbsenteeism, AutomatedTimesheets } from '@components/atoms/svg-icons';

import icon1 from '@images/clock-in-out.png';
import icon2 from '@images/write-notes.png';
import icon3 from '@images/track-breaks.png';
import icon4 from '@images/manage-overtime.png';
import icon5 from '@images/switch-between-jobs.png';
import icon6 from '@images/add-time-off.png';

import imageOne from '@images/healthcare/Adjust quickly to employee sickness and absence @2x.png';
import imageTwo from '@images/healthcare/Forecast your payroll costs ahead of payday to avoid unwanted surprises@2x.png';

import StopCleaners from '@images/accordion-images/Stop electricians from clocking in until they arrive on-site@2x.png';

import CheckHowMuch from '@images/accordion-images/Keep tabs on how much work each team has done@2x.png';
import WorkerLocations from '@images/accordion-images/See where all your workers are in real-time@2x.png';
import AdminAutomatedTimesheets from '@images/accordion-images/Spend less time on admin with automated timesheets@2x.png';
import GetDailySummary from '@images/accordion-images/Get a daily summary of each worker’s movements@2x.png';

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
    title: 'Write notes',
    description: `Add notes directly to time tracking records. For example, caregivers can record patient observations or tasks they’ve taken care of.`,
    alt: 'write notes',
    icon: icon2,
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
  {
    title: 'Switch between jobs',
    description: `Use job codes to categorize time being tracked. For example, caregivers can classify the type of care provided (daily-living, post-operative, dementia, respite, etc).`,
    alt: 'Switch between jobs',
    icon: icon5,
    imageWidth: 350,
    imageHeight: 244,
  },
];

export const checkList1 = [
  { title: 'Keep accurate time records while providing care.' },
  {
    title: `Track every caregivers’ time, wages, and real-time location.`,
  },
  { title: 'Record patient notes throughout the day.' },
  { title: 'Spend more time with patients, and less time on admin.' },
];

export const accordionList1 = [
  {
    icon: <RespondToAbsenteeism />,
    title: 'Adjust quickly to employee sickness and absence ',
    description:
      'When caregivers are on sick leave, you need to make sure someone else can provide patient care at short notice. Atto allows you to quickly see who’s nearby and available to work – without having to call around.',
    image: {
      src: imageOne,
      imageWidth: '400',
      imageHeight: '603',
    },
  },
  {
    icon: <Icon iconClass="named-locations" fSize="2.2" />,
    title: 'Prevent caregivers from clocking in until they’re ready to work',
    description:
      'When you’re reliant on paper timesheets, it’s hard to verify that your caregivers are turning up on-time. With Atto, you can set the location of any of your patient’s homes and restrict caregivers from clocking in until they’re physically present.',
    image: {
      src: StopCleaners,
      imageWidth: '406',
      imageHeight: '596',
    },
  },
  {
    icon: <Icon iconClass="location-tracking" fSize="2.2" />,
    title: 'Track the whereabouts of your caregivers during the day',
    description:
      'When your caregivers are providing care to multiple patients throughout the day, it can be hard to keep track of what’s going on! Luckily, Atto, lets you track the live locations of all your caregivers. Check how long they’ve been at each home. And, stay informed with reassuring notifications of their latest work activity.',
    image: {
      src: WorkerLocations,
      imageWidth: '418',
      imageHeight: '498',
    },
  },
  {
    icon: <Icon iconClass="movement-tracking" fSize="2.5" />,
    title: 'View map-based timelines of your caregivers’ movements ',
    description:
      'Check how productive your caregivers are. Atto generates a map of each caregivers’ daily movements, providing a clear timeline of what they were up to while working. Use it to see how long was spent with each patient, along with the routing they took while on the clock.',
    image: {
      src: GetDailySummary,
      imageWidth: '399',
      imageHeight: '520',
    },
  },
];

export const accordionList2 = [
  {
    icon: <Icon iconClass="wage-estimates-bold" fSize="2.4" />,
    title: 'Forecast your payroll costs ahead of payday to avoid unwanted surprises',
    description:
      'Add your caregivers’ pay rates and automatically estimate their wages based on the hours they track. Now, there’ll be no more payroll surprises at the end of the week!',
    image: {
      src: imageTwo,
      imageWidth: '400',
      imageHeight: '528',
    },
  },
  {
    icon: <Icon iconClass="jobs" fSize="2.1" />,
    title: 'Compare the costs and time of different teams and different jobs',
    description:
      'Need to check if a job is running to budget? Need to see how much time one team of caregivers are taking compared to another? In a few taps, Atto generates timesheet summaries to show all the work done on a specific job type, or by a specific team of caregivers.',
    image: {
      src: CheckHowMuch,
      imageWidth: '378',
      imageHeight: '492',
    },
  },
  {
    icon: <AutomatedTimesheets />,
    title: 'Spend less time on payroll, and more time with patients',
    description:
      'When it comes to payroll, Atto automatically emails you an easy-to-read timesheet report to coincide with payday. Now all you need to do is input the data into your payroll system – saving hours from the process.',
    image: {
      src: AdminAutomatedTimesheets,
      imageWidth: '402',
      imageHeight: '589',
    },
  },
];

export const oldList = [
  'Paper timesheets get lost or damaged outdoors.',
  'No easy way to verify time-tracking records.',
  'Time records often get rounded or “guesstimated” resulting in time wastage and additional payroll costs.',
  'Estimating the labor costs of each job is time-consuming.',
  'Finding out where your crew are and what they’re working on requires lots of back-and-forth phone calls.',
  'Lots of admin time is required to collect timesheets, verify records, and enter them into your payroll system.',
];

export const newList = [
  'Time-tracking data is recorded electronically, and timesheets are automatically created for you.',
  'Using GPS tracking, Atto can provide daily movement summaries of each worker.',
  'Atto tracks time to the nearest second and allows you to restrict your crew from clocking-in until they’re at the job site.',
  'You can input your crews’ individual pay rates and categorize their work using job codes, so you can see if projects are on budget.',
  'You can log in to Atto and see where all your crew are in real-time.',
  'Time tracking data is verified, and timesheets are generated automatically. All you have to do is input the data from Atto into your payroll system.',
];

export const steps = [
  {
    image: '',
    title: '1. Download Atto',
    description: 'Download Atto and create an account. Available on the web, iOS and Android.',
  },
  {
    image: '',
    title: '2. Invite team members',
    description:
      'Invite your field workers, site managers, and sub-contractors via email or invite link.',
  },
  {
    image: '',
    title: '3. Ready to go!',
    description: 'Once they download Atto, you’re ready to go!',
  },
];
