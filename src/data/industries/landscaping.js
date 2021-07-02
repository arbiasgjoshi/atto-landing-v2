import React from 'react';

import Icon from '@components/atoms/icon';
import { HeartIcon, AutomatedTimesheets } from '@components/atoms/svg-icons';

import imgOne from '@images/landscaping/Atto is completely mobile – just like your crew@2x.png';
import imageTwo from '@images/landscaping/Make sure your crew are about to get their hands dirty before they clock in@2x.png';
import imageThree from '@images/landscaping/Prune your costs and keep jobs on budget with wage estimates@2x.png';

import TrackPTO from '@images/accordion-images/Track paid time off and see who’s ready to work@2x.png';
import TrustCrewLeaders from '@images/accordion-images/Trust crew leaders to track landscapers’ time@2x.png';
import TrackCrewLocations from '@images/accordion-images/Get a daily summary of each worker’s movements@2x.png';
import GetDailySummary from '@images/accordion-images/See where all your workers are in real-time@2x.png';
import GardenersSurgeons from '@images/accordion-images/Keep tabs on how much work each team has done@2x.png';
import SpendTimeOutdoors from '@images/accordion-images/Spend less time on admin with automated timesheets@2x.png';
import PlantSeeds from '@images/accordion-images/Precise job bids with accurate time tracking@2x.png';

export const checkList1 = [
  { title: 'Keep accurate time records while working outdoors.' },
  { title: 'View every landscapers’ locations in real-time.' },
  { title: 'Estimate your labor costs for future jobs.' },
  { title: 'Increase the safety, transparency, and visibility of your crew.' },
];

export const accordionList1 = [
  {
    icon: <HeartIcon />,
    title: 'Atto is completely mobile – just like your crew',
    description:
      'Unlike paper timesheets that can get lost or damaged outdoors, Atto tracks time from the safety of your pocket. At the start of each workday, your crew tap the clock in button to begin logging their hours. During the day they can write notes, track breaks, and switch between jobs they’re working on. And when they enter or leave a job site, or at their normal start and end time, we’ll send them a reminder to clock-in and out.',
    image: {
      src: imgOne,
      imageWidth: '365',
      imageHeight: '432',
    },
  },
  {
    icon: <Icon iconClass="time-off" fSize="3" />,
    title: 'Track time off and see who’s ready to work',
    description:
      'Track more than just time spent landscaping. Your crew can add any type of time off, paid or unpaid and including sick leave and vacations. This means crew leaders can easily see who’s available to be called to the field, without the endless phone calls',
    image: {
      src: TrackPTO,
      imageWidth: '406',
      imageHeight: '548',
    },
  },
  {
    icon: <Icon iconClass="avatar" fSize="2" />,
    title: 'Trust crew leaders to track landscapers’ time',
    description:
      'Get to work quicker by giving your crew leader the authority to track your crew’s time. Now when your landscapers are at a job site and ready to start gardening, your crew leader can clock in and out on their behalf. ',
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
    title: 'Make sure your crew are about to get their hands dirty before they clock in',
    description:
      'If you rely on manual time tracking or paper timesheets, it’s hard to verify that workers are turning up on-time. With Atto, you can set the locations of your job sites and restrict workers from clocking in unless they’re within the site perimeter.',

    image: {
      imageWidth: '360',
      imageHeight: '498',
      src: imageTwo,
    },
  },
  {
    icon: <Icon iconClass="location-tracking" fSize="1.9" />,
    title: 'Track the locations of your entire crew in real-time',
    description:
      'The nature of landscaping means that your crew may be dotted all over the map, and changing jobs throughout the day. Luckily, Atto lets you track the live locations of your entire workforce. Get notifications that inform you of their latest work activity. See who’s nearest to a job site and quickly deploy them to the job. And lastly, relay real-time updates to your clients.',
    image: {
      src: TrackCrewLocations,
      imageWidth: '399',
      imageHeight: '520',
    },
  },
  {
    icon: <Icon iconClass="movement-tracking" fSize="2.5" />,
    title: 'Get a daily summary of each landscaper’s movements',
    description:
      'Check how productive your workers are, and see how much time is spent landscaping compared to driving between jobs. With Atto, you can view a map of each worker’s daily movements, providing a clear timeline of what they were up to while working.',
    image: {
      src: GetDailySummary,
      imageWidth: '418',
      imageHeight: '498',
    },
  },
];

export const accordionList3 = [
  {
    icon: <Icon iconClass="wage-estimates-bold" fSize="2.4" />,
    title: 'Prune your costs and keep jobs on budget with wage estimates',
    description:
      'Landscaping can be very seasonal and weather dependent, so it’s important to keep tight control of your costs. With Atto, you can add individual pay rates to automatically estimate each laborer’s wages based on the hours they track. What’s more, you can add more than one pay rate per laborer, so that your estimates will still be accurate.',
    image: {
      src: imageThree,
      imageWidth: '400',
      imageHeight: '465',
    },
  },
  {
    icon: <Icon iconClass="job-costing" fSize="2.2" weight="bold" />,
    title: 'From gardeners to tree surgeons, keep tabs on how much work each team has done',
    description:
      'Want to check if a job is running profitably? Need to see how much your gardeners are costing you compared to your tree surgeons? In a few taps, Atto produces timesheet summaries to show all the work done on a specific job, or by a specific team.',
    image: {
      src: GardenersSurgeons,
      imageWidth: '378',
      imageHeight: '492',
    },
  },
  {
    icon: <AutomatedTimesheets />,
    title: 'Spend more of your time outdoors, and less of it on admin',
    description:
      'With Atto, you no longer need to rely on “guesstimated” timesheets so payroll becomes far more accurate. And to reduce admin time, Atto automatically emails you a timesheet report to coincide with your payroll period. ',
    image: {
      src: SpendTimeOutdoors,
      imageWidth: '402',
      imageHeight: '589',
    },
  },
  {
    icon: <Icon iconClass="jobs" fSize="2.1" />,
    title: 'Plant the seeds of your future success with precise job bids',
    description:
      'Being able to accurately forecast your labor costs can impact whether your job quotes are profitable. Atto allows you to see the exact time your crew took to complete previous jobs so you can provide more accurate cost estimates in the future.',
    image: {
      src: PlantSeeds,
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

export const reviews = [
  {
    title: '"A must-have app for your company”',
    rating: '5 / 5',
    author: 'Julia Conner',
    job: '',
  },
  {
    title: '“Would highly recommend for keeping track of your staff’s time”',
    rating: '5 / 5',
    author: 'Frank Mason',
    job: '',
  },
  {
    title: '"So perfectly simplistic"',
    rating: '5 / 5',
    author: 'Rich Mathews',
    job: '',
  },
];
