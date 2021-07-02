import React from 'react';

import Icon from '@components/atoms/icon';

import { RespondToAbsenteeism, AutomatedTimesheets } from '@components/atoms/svg-icons';

import icon1 from '@images/clock-in-out.png';
import icon2 from '@images/write-notes.png';
import icon3 from '@images/track-breaks.png';
import icon4 from '@images/manage-overtime.png';
import icon5 from '@images/switch-between-jobs.png';
import icon6 from '@images/add-time-off.png';

import imageOne from '@images/plumbing/Respond faster to emergency plumbing call-outs@2x.png';
import imageTwo from '@images/plumbing/Avoid surprises by forecasting your wage bill ahead of payday@2x.png';

import CheckHowMuch from '@images/accordion-images/Keep tabs on how much work each team has done@2x.png';
import StopCleaners from '@images/accordion-images/Stop electricians from clocking in until they arrive on-site@2x.png';
import WorkerLocations from '@images/accordion-images/See where all your workers are in real-time@2x.png';
import PreciseJobTimeTracking from '@images/accordion-images/Precise job bids with accurate time tracking@2x.png';
import WinContracts from '@images/accordion-images/Win valuable contracts with precise cost estimates @2x.png';
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
    description: `Add notes directly to time tracking records. For example, plumbers can write down any parts that need to be ordered and replaced as they work.`,
    alt: 'write notes',
    icon: icon2,
    imageWidth: 350,
    imageHeight: 244,
  },
  {
    title: 'Add time off',
    description: `Add time off such as vacations, sickness, and personal leave to help managers understand who’s available. Useful when handling last-minute schedule changes and emergency call-outs.`,
    alt: 'Time off',
    icon: icon6,
    imageWidth: 350,
    imageHeight: 244,
  },
  {
    title: 'Switch between jobs',
    description: `Use job codes to categorize time being tracked. For example, plumbers can categorize each type of job (bathroom fitting, drain blockage, etc) or type of client (residential, industrial, commercial).`,
    alt: 'Switch between jobs',
    icon: icon5,
    imageWidth: 350,
    imageHeight: 244,
  },
];

export const checkList1 = [
  { title: 'Keep track of all your plumbers’ locations and time.' },
  { title: 'Respond faster to emergency call-outs.' },
  { title: 'Accurately estimate how long jobs should take.' },
  { title: 'Win lucrative contracts with precise job quotes.' },
];

export const accordionList1 = [
  {
    icon: <RespondToAbsenteeism />,
    title: 'Respond faster to emergency plumbing call-outs',
    description:
      'Burst pipes flooding a home? Attending a water leak that’s got out of hand? When you receive emergency call-outs, you need to be able to respond as quickly as possible. Instantly, Atto shows you which plumbers are nearby and available to work – without having to call around.',
    image: {
      src: imageOne,
      imageWidth: '369',
      imageHeight: '557',
    },
  },
  {
    icon: <Icon iconClass="named-locations" fSize="2.2" />,
    title: 'Stop plumbers from clocking in until they arrive at the job',
    description:
      'When your plumbers serve different customers every day, it’s important that they turn up on time. Not only does it create a good impression, but it ensures that only hours worked are actually billed. That’s why Atto allows you to set the locations of your customers’ premises and restrict your plumbers from clocking in until they’re physically present',
    image: {
      src: StopCleaners,
      imageWidth: '406',
      imageHeight: '596',
    },
  },
  {
    icon: <Icon iconClass="location-tracking" fSize="2.2" />,
    title: 'Track the locations of your plumbers and progress of jobs in real-time',
    description:
      'When your plumbers are being called to different jobs and locations throughout the day, it can be hard to keep track of what’s going on. With Atto, you can track the live locations of your entire workforce. Check how long each plumber has been with each customer. And, get notifications to inform you of their latest work activity.',
    image: {
      src: WorkerLocations,
      imageWidth: '418',
      imageHeight: '498',
    },
  },
  {
    icon: <Icon iconClass="movement-tracking" fSize="2.5" />,
    title: 'View a map-based timeline of each plumber’s movements',
    description:
      'Check how productive your plumbers are. Atto can show a map of each plumber’s daily movements, providing a clear timeline of what they were up to while working. Use it to see how long was spent at each call-out, along with the routing they took while on the clock.',
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
    title: 'Avoid surprises by forecasting your wage bill ahead of payday',
    description:
      'Accurately estimate and forecast your payroll. With Atto, you can add your plumbers’ pay rates and automatically estimate their pay based on the hours they track. Now, there’ll be no more payroll surprises at the end of the week.',
    image: {
      src: imageTwo,
      imageWidth: '420',
      imageHeight: '555',
    },
  },
  {
    icon: <Icon iconClass="jobs" fSize="2.1" />,
    title: 'From plumbers to heating engineers, see how much work each team completed',
    description:
      'Want to check if a job is running to budget? Need to see how much your heating engineers are costing you compared to your plumbers? In a few taps, Atto can produce timesheet summaries to show all the work done on a specific job, or by a specific team',
    image: {
      src: CheckHowMuch,
      imageWidth: '378',
      imageHeight: '492',
    },
  },
  {
    icon: <Icon iconClass="sand-clock" fSize="2.1" />,
    title: 'Eliminate “guesstimates” to bill your customers more accurately',
    description:
      'When you charge your customers for hourly labor costs, relying on “guesstimated” job time can be costly. Not only might you under/overcharge them, but if an invoice is challenged, it’s hard to verify who’s in the right. With Atto, time records are precise and verified with location data, so you can confidently bill customers for every minute spent on the job.',
    image: {
      src: PreciseJobTimeTracking,
      imageWidth: '402',
      imageHeight: '412',
    },
  },
  {
    icon: <AutomatedTimesheets />,
    title: 'Reduce the admin time taken to run your payroll',
    description:
      'To reduce admin time, Atto automatically emails you a timesheet report that coincides with your payroll period. Now all you need to do is input the data into your payroll system – saving hours from the process.',
    image: {
      src: AdminAutomatedTimesheets,
      imageWidth: '402',
      imageHeight: '589',
    },
  },
  {
    icon: <Icon iconClass="job-costing" fSize="2.2" weight="bold" />,
    title: 'Win more contracts with precise cost estimates',
    description:
      'One of the most reliable income streams for any plumbing business is from commercial contracts. But to submit bids that are profitable and beat the competition, you need to be able to accurately forecast your labor costs. Luckily, by using Atto you can check the time your plumbers took to complete similar jobs and use it to create more precise quotes in the future.',
    image: {
      src: WinContracts,
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
