import React from 'react';

import Icon from '@components/atoms/icon';
import { RespondToAbsenteeism, AutomatedTimesheets } from '@components/atoms/svg-icons';

import icon1 from '@images/clock-in-out.png';
import icon2 from '@images/write-notes.png';
import icon3 from '@images/track-breaks.png';
import icon4 from '@images/manage-overtime.png';
import icon5 from '@images/switch-between-jobs.png';
import icon6 from '@images/add-time-off.png';

export const checkList1 = [
  { title: 'Track your painters’ and decorators’ time and location.' },
  { title: 'See who’s available to work in real-time.' },
  { title: 'Bill customers for every minute spent on the job.' },
  { title: 'Accurately estimate your labor costs to win more jobs.' },
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
    description: `Add notes directly to time tracking records. For example, your crew can record their job progress, the shades of paint they need, or supplies to be ordered.`,
    alt: 'write notes',
    icon: icon2,
    imageWidth: 350,
    imageHeight: 244,
  },
  {
    title: 'Add time off',
    description: `Add time off such as vacations and sick leave to help managers understand who’s available. Useful for handling last-minute schedule changes, or dealing with unexpected absences.`,
    alt: 'Time off',
    icon: icon6,
    imageWidth: 350,
    imageHeight: 244,
  },
  {
    title: 'Switch between jobs',
    description: `Use job codes to categorize time being tracked. For example, categorize each type of job (e.g. interior decorating, exterior decorating) or type of client (residential, commercial).`,
    alt: 'Switch between jobs',
    icon: icon5,
    imageWidth: 350,
    imageHeight: 244,
  },
];

export const accordionList1 = [
  {
    icon: <RespondToAbsenteeism />,
    title: 'Respond to absenteeism and last-minute schedule changes',
    description:
      'When a van breaks down, or a painter calls-in sick, you need to be able to deploy other workers to finish the job. Instantly, Atto shows you which of your painters and decorators are nearby and available to work – without having to call around.',
  },
  {
    icon: <Icon iconClass="named-locations" fSize="2.2" />,
    title: 'Stop painters from clocking in until they’re ready to work',
    description:
      'If you’re reliant on paper timesheets, it’s hard to verify that your painters and decorators are turning up on-time. With Atto, you can set the location of any job site and restrict workers from clocking in until they’re physically present.',
  },
  {
    icon: <Icon iconClass="location-tracking" fSize="2" />,
    title: 'Track the locations of your workers and the progress of paint jobs in real-time',
    description:
      'When your painting crew is dealing with different jobs in different locations, it can be hard to keep track of what’s going on. With Atto, you can track the live locations of your entire workforce. Check how long your crew has been working on each job. And, get notifications to inform you of their latest work activity.',
  },
  {
    icon: <Icon iconClass="movement-tracking" fSize="2.5" />,
    title: 'View a map-based timeline of your painters’ and decorators’ daily movements ',
    description:
      'Check how productive your painters’ are. Atto generates a map of each painter’s and decorator’s daily movements, providing a timeline of what they were up to while working. Use it to check how long was spent at each job, along with the routing they took while on the clock',
  },
];

export const accordionList2 = [
  {
    icon: <Icon iconClass="wage-estimates-bold" fSize="2.4" />,
    title: 'Avoid surprises by forecasting wages ahead of payday',
    description:
      'Add your painters’ and decorators’ pay rates and automatically estimate their pay based on the hours they track. Now, there’ll be no more payroll surprises at the end of the week!',
  },
  {
    icon: <Icon iconClass="jobs" fSize="2.1" />,
    title: 'From painting to decorating, see how much work each team completed',
    description:
      'Want to check if a job is running to budget? Need to see how much your painters are costing you compared to your decorators? In a few taps, Atto generates timesheet summaries to show all the work done on a specific job, or by a specific team.',
  },
  {
    icon: <Icon iconClass="sand-clock" fSize="2.1" />,
    title: 'Eliminate “guesstimates” to bill your customers more accurately',
    description:
      'When you charge your customers for hourly labor costs, relying on “guesstimated” job time can be costly. Not only might you under/overcharge them, but if an invoice is challenged, it’s hard to verify who’s in the right. With Atto, time records are precise and verified with location data, so you can confidently bill customers for every minute spent on the job',
  },
  {
    icon: <AutomatedTimesheets />,
    title: 'Reduce the admin time taken to run your payroll',
    description:
      'To reduce admin time, Atto automatically emails you a timesheet report that coincides with your payroll period. Now all you need to do is input the data into your payroll system – saving hours from the process',
  },
  {
    icon: <Icon iconClass="job-costing" fSize="2.2" weight="bold" />,
    title: 'Win high-value jobs with more competitive quotes',
    description:
      'Your ability to estimate your labor costs impacts whether your job quotes are profitable and competitive. With Atto, you can check the time your painters’ and decorators’ took to complete similar jobs, and use it to create more precise quotes in the future',
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
