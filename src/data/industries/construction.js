import React from 'react';

import Icon from '@components/atoms/icon';
import { HeartIcon, AutomatedTimesheets } from '@components/atoms/svg-icons';

import WorkersDailySummary from '@images/accordion-images/get-a-daily-summary-of-each-worker’s-movements@2x.png';
import TeamWorkAmmount from '@images/accordion-images/keep-tabs-on-how-much-work-each-team-has-done@2x.png';
import PreciseJobTimeTracking from '@images/accordion-images/precise-job-bids-with-accurate-time-tracking@2x.png';
import WorkerLocations from '@images/accordion-images/see-where-all-your-workers-are-in-real-time@2x.png';
import AdminAutomatedTimesheets from '@images/accordion-images/spend-less-time-on-admin-with-automated-timesheets@2x.png';
import TrackPTO from '@images/accordion-images/track-paid-time-off-and-see-who’s-ready to-work@2x.png';
import TrustCrewLeaders from '@images/accordion-images/trust-crew-leaders-to-track-landscapers-time@2x.png';

export const checkList1 = [
  { title: 'Track your entire crew’s time and location in real-time.' },
  { title: 'Keep jobs on schedule and on budget.' },
  { title: 'Save endless hours on admin and payroll.' },
  { title: 'Estimate job quotes more accurately.' },
];

export const accordionList1 = [
  {
    icon: <HeartIcon />,
    title: 'So simple that your workers will want to use it',
    description:
      'Atto is super simple to use. At the start of each workday, your crew clock in to begin logging their hours. During the day they can write notes, track breaks, and switch between jobs they’re working on. And when they enter or leave a job site, or at their normal start and end time, we’ll send them a reminder to clock in and out.',
    image: {
      src: WorkersDailySummary,
      imageWidth: '378',
      imageHeight: '587',
    },
  },
  {
    icon: <Icon iconClass="time-off" fSize="3" />,
    title: 'Track your crew’s time off and see who’s ready to work',
    description:
      'Track any type of time off, paid or unpaid. This means site managers and office staff can easily see who’s available to be assigned a job – without the endless phone calls to your workers.',
    image: {
      src: TrackPTO,
      imageWidth: '406',
      imageHeight: '548',
    },
  },
  {
    icon: <Icon iconClass="avatar" fSize="2" />,
    title: 'Trust site managers to track your crews’ time',
    description:
      'Get to work quicker by giving your site managers the authority to track your crew’s time. Now when your crew is at a job site and ready to go, your site managers can clock-in and out on all of their behalfs.',
    image: {
      src: TrustCrewLeaders,
      imageWidth: '406',
      imageHeight: '597',
    },
  },
];

export const accordionList2 = [
  {
    icon: <Icon iconClass="named-locations" fSize="2.2" />,
    title: 'Guarantee your crew is on-site before they clock in',
    description:
      'Ensure that only hours worked are accounted for. With Atto, you can set the locations of your job sites and restrict workers from clocking in unless they’re within the site perimeter.',
    image: {
      src: TeamWorkAmmount,
      imageWidth: '399',
      imageHeight: '520',
    },
  },
  {
    title: 'See where all your workers are in real-time',
    icon: <Icon iconClass="location-tracking" fSize="1.9" />,
    description:
      'Track the locations of all your workers, without any back and forth messaging between your office and your building sites. Get notifications to inform you of their latest work activity. See who’s nearest to a building site and deploy them to the job. Plus, quickly relay project updates to your clients in real-time.',
    image: {
      src: WorkerLocations,
      imageWidth: '418',
      imageHeight: '498',
    },
  },
  {
    title: 'Get a daily summary of each worker’s movements',
    icon: <Icon iconClass="movement-tracking" fSize="2.5" />,
    description:
      'Want to check how productive your workers are? Need to see how much time was spent at each job site compared to on the road? With Atto, you can view a map of each worker’s movements, providing a daily timeline of what they were up to while on the job.',
    image: {
      src: TeamWorkAmmount,
      imageWidth: '399',
      imageHeight: '520',
    },
  },
];

export const accordionList3 = [
  {
    title: 'Keep projects on budget with wage estimates',
    icon: <Icon iconClass="wage-estimates-bold" fSize="2.4" />,
    description:
      'Construction projects run on tight margins, so it’s important to keep control of your costs. With Atto, you can add individual pay rates to calculate each worker’s estimated wages based on the hours they track. What’s more, you can add more than one pay rate per worker, so that your estimates will still be accurate – even if their rate changes.',
  },
  {
    title: 'Check how much each team and job is costing you',
    icon: <Icon iconClass="job-costing" fSize="2.2" weight="bold" />,
    description:
      'Want to check if a job is running profitably? In a few taps, Atto produces timesheet summaries that can be filtered to show all the work done on a specific job, or by a specific team (e.g. only bricklayers). ',
  },
  {
    title: 'Save hours on payroll admin with automated timesheets',
    icon: <AutomatedTimesheets />,
    description:
      'To save hours of payroll admin, Atto automatically emails timesheet reports to coincide with your payroll period. Not only does this make your payroll more accurate and efficient, but you know you’re only paying for hours that were actually worked.',
    image: {
      src: AdminAutomatedTimesheets,
      imageWidth: '402',
      imageHeight: '589',
    },
  },
  {
    title: 'Tender more accurate and profitable bids for future work',
    icon: <Icon iconClass="jobs" fSize="2.1" />,
    description:
      'With all the time tracking data from previous jobs, you can ensure that any bids you submit for similar jobs in the future are both profitable and competitive.',
    image: {
      src: PreciseJobTimeTracking,
      imageWidth: '402',
      imageHeight: '412',
    },
  },
];
