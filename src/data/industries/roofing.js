import React from 'react';

import Icon from '@components/atoms/icon';

import icon1 from '@images/clock-in-out.png';
import icon2 from '@images/write-notes.png';
import icon3 from '@images/track-breaks.png';
import icon4 from '@images/manage-overtime.png';
import icon5 from '@images/switch-between-jobs.png';
import icon6 from '@images/add-time-off.png';

import { RespondToAbsenteeism, AutomatedTimesheets } from '@components/atoms/svg-icons';

export const checkList1 = [
  { title: 'Keep accurate time records while working outdoors.' },
  { title: 'Track your roofers’ time and location in real-time.' },
  { title: 'Respond quickly to changes in the weather.' },
  { title: 'Improve the accuracy of quotes to win more jobs.' },
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
    description: `Add notes directly to time tracking records. For example, your roofers can record information to help them complete roofing surveys and inspection reports on the go.`,
    alt: 'write notes',
    icon: icon2,
    imageWidth: 350,
    imageHeight: 244,
  },
  {
    title: 'Add time off',
    description: `Add time off such as vacations and sick leave to help managers understand who’s available. Useful when dealing with weather-induced schedule changes.`,
    alt: 'Time off',
    icon: icon6,
    imageWidth: 350,
    imageHeight: 244,
  },
  {
    title: 'Switch between jobs',
    description: `Use job codes to categorize time being tracked. For example, categorize each type of job (e.g. roof tiling, guttering, leak repairs) or type of client (residential, commercial, industrial).`,
    alt: 'Switch between jobs',
    icon: icon5,
    imageWidth: 350,
    imageHeight: 244,
  },
];

export const accordionList1 = [
  {
    icon: <RespondToAbsenteeism />,
    title: 'Respond quickly to weather changes and employee absences',
    description:
      'The unpredictability of the weather and employee absences mean you may need to change your plans at short notice. Atto allows you to instantly see which of your roofing contractors are nearby and available to work – without having to call around.',
  },
  {
    icon: <Icon iconClass="named-locations" fSize="2.2" />,
    title: 'Stop roofers from clocking in until they’re ready to work',
    description:
      'When you’re reliant on paper timesheets, it’s hard to verify that your roofers are turning up to jobs on-time. With Atto, you can set the location of any job site and restrict them from clocking in until they’re physically present.',
  },
  {
    icon: <Icon iconClass="location-tracking" fSize="2.2" />,
    title: 'Track the locations of your roofers and the progress of roofing jobs in real-time',
    description:
      'Installing solar panels, repairing leaks, fitting new roofs – when your roofing contractors are dealing with multiple jobs, it can be hard to keep track of what’s going on! With Atto, you can track the live locations of your entire workforce. Check how long your roofers have been working on each job. And, get notifications to inform you of their latest work activity.',
  },
  {
    icon: <Icon iconClass="movement-tracking" fSize="2.5" />,
    title: 'View a map-based timeline of your roofers’ movements',
    description:
      'Check how productive your roofing contractors are. Atto generates a map of each roofers’ daily movements, providing a clear timeline of what they were up to while working. Use it to see how long was spent at each job, along with the routing they took while on the clock.',
  },
];

export const accordionList2 = [
  {
    icon: <Icon iconClass="wage-estimates-bold" fSize="2.4" />,
    title: 'Forecast your wage bill ahead of payday to avoid unwanted surprises',
    description:
      'Add your roofers’ pay rates and automatically estimate their wages based on the hours they track. Now, there’ll be no more payroll surprises at the end of the week!',
  },
  {
    icon: <Icon iconClass="jobs" fSize="2.1" />,
    title: 'From roof tilers to safety inspectors see how much work each team’s completed',
    description:
      'Want to check if a job is running to budget? Need to see how much your tilers are costing you compared to your safety inspectors? In a few taps, Atto generates timesheet summaries to show all the work done on a specific job, or by a specific team.',
  },
  {
    icon: <AutomatedTimesheets />,
    title: 'Reduce the admin time it takes to run your payroll',
    description:
      'To reduce admin time, Atto automatically emails you a timesheet report that coincides with your payroll period. Now all you need to do is input the data into your payroll system – saving hours from the process.',
  },
  {
    icon: <Icon iconClass="job-costing" fSize="2.2" weight="bold" />,
    title: 'Win more roofing contracts with competitive quotes',
    description:
      'Your ability to estimate your labor costs impacts whether your job quotes are profitable and competitive. With Atto, you can check the time your roofers took to complete similar jobs, and use it to produce more precise quotes in the future.',
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
