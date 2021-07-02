import React from 'react';

import Icon from '@components/atoms/icon';

import { RespondToAbsenteeism, AutomatedTimesheets } from '@components/atoms/svg-icons';

import icon1 from '@images/clock-in-out.png';
import icon2 from '@images/write-notes.png';
import icon3 from '@images/track-breaks.png';
import icon4 from '@images/manage-overtime.png';
import icon5 from '@images/switch-between-jobs.png';
import icon6 from '@images/add-time-off.png';

import imageOne from '@images/cleaning/See who’s nearby and available to respond to urgent cleaning jobs@2x.png';
import imageTwo from '@images/cleaning/Keep a handle on your biggest cost – your cleaners’ wages@2x.png';

import StopCleaners from '@images/accordion-images/Stop electricians from clocking in until they arrive on-site@2x.png';

import CheckHowMuch from '@images/accordion-images/Keep tabs on how much work each team has done@2x.png';
import PreciseJobTimeTracking from '@images/accordion-images/Precise job bids with accurate time tracking@2x.png';
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
    description: `Add notes directly to time tracking records. For example, cleaners can remind themselves of cleaning supplies that need to be restocked, or write an inspection checklist.`,
    alt: 'write notes',
    icon: icon2,
    imageWidth: 350,
    imageHeight: 244,
  },
  {
    title: 'Add time off',
    description: `Add any time off such as vacations and sick leave to help managers understand who’s available. Useful for handling last-minute schedule changes and urgent cleaning jobs.`,
    alt: 'Time off',
    icon: icon6,
    imageWidth: 350,
    imageHeight: 244,
  },
  {
    title: 'Switch between jobs',
    description: `Use job codes to categorize time being tracked. For example, cleaners can categorize each type of job (floor cleaning, window cleaning, etc) or type of client (residential, industrial, commercial).`,
    alt: 'Switch between jobs',
    icon: icon5,
    imageWidth: 350,
    imageHeight: 244,
  },
];

export const checkList1 = [
  { title: 'Track your cleaners’ time and location in real-time.' },
  { title: 'Increase the safety and accountability of your cleaners.' },
  { title: 'Quickly deploy cleaners to urgent jobs.' },
  { title: 'Estimate your labor costs to win more cleaning contracts.' },
];

export const accordionList1 = [
  {
    icon: <RespondToAbsenteeism />,
    title: 'See who’s nearby and available to respond to urgent cleaning jobs',
    description:
      'Unexpected spillage reported? An incident that needs cleaning fast? When clients call with urgent work, you need to be able to respond quickly. Atto helps you instantly see which cleaners are nearby and available to work – without needing to call around.',
    image: {
      src: imageOne,
      imageWidth: '369',
      imageHeight: '557',
    },
  },
  {
    icon: <Icon iconClass="named-locations" fSize="2.2" />,
    title: 'Avoid time waste by stopping cleaners from clocking in until they arrive on-site',
    description:
      'When your cleaners serve multiple clients every day, it’s important that they turn up on time. Not only does it create a good impression, but it ensures that only hours worked are actually billed. That’s why Atto allows you to set the locations of your client’s sites and restrict cleaners from clocking in until they’re there.',
    image: {
      src: StopCleaners,
      imageWidth: '406',
      imageHeight: '596',
    },
  },
  {
    icon: <Icon iconClass="location-tracking" fSize="2.2" />,
    title: 'Update clients in real-time on the progress of cleaning jobs',
    description:
      'It’s likely your cleaners are dotted all over the map, and changing jobs throughout the day. With Atto, you can track the live locations of your entire workforce. See how long cleaners have been working at each job site. Get notifications to inform you of their latest work activity. And lastly, relay updates to your clients in real-time.',
    image: {
      src: WorkerLocations,
      imageWidth: '418',
      imageHeight: '498',
    },
  },
  {
    icon: <Icon iconClass="movement-tracking" fSize="2.5" />,
    title: 'Get daily summaries of each cleaner’s movements',
    description:
      'Check how productive your cleaners are. Atto generates a map of each cleaner’s daily movements, providing a clear timeline of what they were up to while working. Use it to see how long was spent at each job, along with the routing they took while on the clock.',
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
    title: 'Keep a handle on your biggest cost – your cleaners’ wages',
    description:
      'The biggest cost for any cleaning job is usually the wages of your cleaners – so it’s important for you to accurately estimate your payroll. With Atto, you can add your cleaners’ pay rates and automatically estimate their pay based on the hours they track. Now, there’ll be no more payroll surprises at the end of the week.',
    image: {
      src: imageTwo,
      imageWidth: '430',
      imageHeight: '637',
    },
  },
  {
    icon: <Icon iconClass="jobs" fSize="2.1" />,
    title:
      'From window cleaners to domestic cleaners, keep tabs on how much work each team has done',
    description:
      'Want to check if a job is running to budget? Need to see how much your window cleaners are costing you compared to your domestic cleaners? In a few taps, Atto generates timesheet summaries to show all the work done on a specific job, or by a specific team.',
    image: {
      src: CheckHowMuch,
      imageWidth: '378',
      imageHeight: '492',
    },
  },
  {
    icon: <AutomatedTimesheets />,
    title: 'Eliminate “guesstimates” with quicker and more accurate payroll',
    description:
      'Using Atto, you no longer rely on “guesstimated” timesheets so payroll becomes far more accurate. Furthermore, to reduce admin time, Atto automatically emails you a timesheet report that coincides with your payroll period. Now all you need to do is input the data into your payroll system – saving hours from the process',
    image: {
      src: AdminAutomatedTimesheets,
      imageWidth: '402',
      imageHeight: '589',
    },
  },
  {
    icon: <Icon iconClass="job-costing" fSize="2.2" weight="bold" />,
    title: 'Win more cleaning contracts with better cost estimates',
    description:
      'Winning cleaning contracts requires being able to accurately forecast your labor costs. Bid too low, and contracts aren’t profitable. Bid too high, and you lose out to rival firms. With Atto, you can check the time your cleaners took to complete similar jobs and use it to create more precise quotes in the future',
    image: {
      src: PreciseJobTimeTracking,
      imageWidth: '402',
      imageHeight: '412',
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
