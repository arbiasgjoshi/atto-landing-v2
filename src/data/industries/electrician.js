import React from 'react';

import Icon from '@components/atoms/icon';
import { RespondToAbsenteeism, AutomatedTimesheets } from '@components/atoms/svg-icons';

import icon1 from '@images/clock-in-out.png';
import icon2 from '@images/write-notes.png';
import icon3 from '@images/track-breaks.png';
import icon4 from '@images/manage-overtime.png';
import icon5 from '@images/switch-between-jobs.png';
import icon6 from '@images/add-time-off.png';

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
    description: `Add notes directly to time tracking records. For example, electricians can write a description of the job or information to help them complete electrical inspection reports/safety certificates.`,
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
    description: `Use job codes to categorize time being tracked. For example, electricians can categorize the type of job (house rewiring, socket installation, etc) or type of client (domestic, industrial, commercial).`,
    alt: 'Switch between jobs',
    icon: icon5,
    imageWidth: 350,
    imageHeight: 244,
  },
];

export const checkList1 = [
  { title: 'Track your electricians’ time and locations.' },
  { title: 'Write job notes to complete inspection paperwork faster.' },
  { title: 'Estimate your wage bill ahead of payday.' },
  { title: 'Win valuable contracts with more accurate job quotes.' },
];

export const accordionList1 = [
  {
    icon: <RespondToAbsenteeism />,
    title: 'Dispatch electricians to emergency call-outs faster',
    description:
      'Customer experiencing a power outage? Unsafe wiring about to give someone spiky hair? When you receive emergency call-outs, you need to be able to respond as quickly as possible. Atto allows you to instantly see which electricians are nearby and available to work – without needing to call around.',
  },
  {
    icon: <Icon iconClass="named-locations" fSize="2.2" />,
    title: 'Stop electricians from clocking in until they arrive on-site',
    description:
      'When your electricians serve multiple customers every day, it’s important that they turn up on time. Not only does it create a good impression, but it ensures that only hours worked are actually billed. That’s why Atto allows you to set the locations of your customers’ premises and restrict your electricians from clocking in until they’re on-site.',
  },
  {
    icon: <Icon iconClass="location-tracking" fSize="2.2" />,
    title: 'Track the locations of your electricians and progress of jobs in real-time',
    description:
      'When your electricians are called to different jobs in different locations throughout the day, it can be hard to keep track of what’s going on. With Atto, you can track the live locations of your entire workforce. Check how long each electrician has been serving each customer. And, get notifications to inform you of their latest work activity. ',
  },
  {
    icon: <Icon iconClass="movement-tracking" fSize="2.5" />,
    title: 'View a map-based timeline of each electricians’ daily movements',
    description:
      'Check how productive your electricians are. Atto generates a map of each electrician’s daily movements, providing a clear timeline of what they were up to while working. Use it to see how long was spent at each call-out, along with the routing they took while on the clock.',
  },
];

export const accordionList2 = [
  {
    icon: <Icon iconClass="wage-estimates-bold" fSize="2.4" />,
    title: 'Avoid a nasty shock by forecasting wages ahead of payday',
    description:
      'When you rely on manual timesheets, you can be in for a nasty shock if your payroll costs more than you budgeted. With Atto, you can add your electricians’ pay rates and automatically estimate their pay based on the hours they track. This means at any time you can login and get a real-time estimate of your current wage bill.',
  },
  {
    icon: <Icon iconClass="jobs" fSize="2.1" />,
    title: 'Check if electrical jobs are running to budget with timesheet summaries',
    description:
      'Need to check if a job is running to budget? Want to see how much one team of electricians costs compared to another? In a few taps, Atto can produce timesheet summaries to show all the work done on a specific job, or by a specific team.',
  },
  {
    icon: <Icon iconClass="sand-clock" fSize="2.1" />,
    title: 'Pull the plug on “guesstimated” time and start invoicing for every minute worked',
    description:
      'When you charge your customers for hourly labor costs, relying on “guesstimated” job time can be costly. Not only can you under/overcharge them, but if an invoice is challenged, it’s hard to verify who’s in the right. With Atto, time records are precise and verified with location data so you can confidently bill customers for every minute spent on the job.',
  },
  {
    icon: <AutomatedTimesheets />,
    title: 'Cut the admin time taken to run your payroll',
    description:
      'To reduce the time your office staff spends administering payroll, Atto emails you a timesheet report to coincide with your payroll period. Now all they need to do is input the data into your payroll system – saving hours from the process.',
  },
  {
    icon: <Icon iconClass="job-costing" fSize="2.2" weight="bold" />,
    title: 'Win valuable contracts with precise cost estimates ',
    description:
      'Some of the most reliable income streams for any electrical business are from commercial contracts and regular safety inspections. But in order to provide quotes that are profitable and beat the competition, you need to accurately forecast your labor costs. Atto helps you check the time your electricians took to complete similar jobs so you can produce more precise quotes and win more business in future',
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
