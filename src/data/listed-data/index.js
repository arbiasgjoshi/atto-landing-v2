import React from 'react';

import ConstructionLogo from '@images/construction-industry-logo.svg';
import PaintingLogo from '@images/painting-industry-logo.svg';
import HealthcareLogo from '@images/healthcare-industry-logo.svg';
import PlumbingLogo from '@images/plumbing-industry-logo.svg';
import ElectrianLogo from '@images/electrician-industry-logo.svg';
import LandscapingLogo from '@images/landscaping-industry-logo.svg';
import RoofingLogo from '@images/roofing-industry-logo.svg';
import CleaningLogo from '@images/cleaning-industry-logo.svg';
import ThreeDots from '@images/three-dots.svg';

import Timer from '@images/timer.svg';
import Flag from '@images/flag.svg';
import Ringbell from '@images/ringbell.svg';
import MLogo from '@images/m-logo.svg';
import Brightness from '@images/brightness.svg';
import Coffe from '@images/coffe.svg';
import Bookmark from '@images/bookmark.svg';
import Battery from '@images/battery.svg';
import Clock from '@images/clock.svg';
import Browser from '@images/browser.svg';
import Darkmode from '@images/darkMode.svg';
import Notes from '@images/notes.svg';
import Overtime from '@images/overtime.svg';

import Team from '@images/team.svg';
import Timeline from '@images/timeline.svg';
import Departments from '@images/departments.svg';
import FilterAndSearch from '@images/filter-and-search.svg';
import Notifications from '@images/notifications.svg';
import Messaging from '@images/messaging.svg';

import icon from '@images/easy-to-use.png';
import icon2 from '@images/accurate.png';
import icon3 from '@images/trustworthy.png';

import icon4 from '@images/clock-in-out.png';
import icon5 from '@images/write-notes.png';
import icon6 from '@images/track-breaks.png';
import icon7 from '@images/manage-overtime.png';
import icon8 from '@images/switch-between-jobs.png';
import icon9 from '@images/add-time-off.png';

// const Intl = useIntl();

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

export const checkList = [
  { title: 'Avoid guesswork with accurate time-tracking' },
  { title: 'Increase employee accountability and safety' },
  { title: 'Stay in the loop without constant check-ins' },
  { title: 'Enjoy hassle-free automated employee timesheets' },
  { title: 'Streamline the entire payroll process' },
];

export const titleList = [
  { title: 'No longer chasing timesheets.', id: '1asdd1a' },
  { title: 'Cutting payroll costs with accurate time entries.', id: '1asdd1b' },
  { title: 'Staying in the loop without constan check-ins', id: '1asdd1c' },
  { title: 'Saving hours of admin with instanly-generated timesheets.', id: '1asdd1d' },
];

export const titleList2 = [
  { title: `View any employee’s status and location in a few taps` },
  { title: 'Increase team visibility, transparency, and accountability' },
  { title: `See clear daily timelines of every employee’s activity` },
  { title: 'Make team management easier and less time-consuming' },
];

export const checkList1 = [
  { title: `View any employee's status and location in a few taps` },
  { title: 'Increase team visibility, transparency, and accountability' },
  { title: `See clear daily timelines of every employee's activity` },
  { title: 'Make team management easier and less time-consuming' },
];

export const checkLists2 = [
  { title: `Gain a better understanding of your employees’ workdays` },
  { title: 'Trace the routes taken and stops made while on the clock' },
  { title: `Check how efficient employees are at completing jobs` },
  { title: `Identify different activities easily with color-coded routes` },
];

export const checkLists3 = [
  { title: `Ensure only hours worked are accounted for` },
  { title: 'Encourage your team to never turn up late for a job' },
  { title: `Prevent employees from “buddy punching”` },
  { title: `Save payroll costs and reduce time wastage` },
];

export const checkList4 = [
  {
    title: `Decide who’s locations are tracked, and who’s aren’t`,
    description: `Location tracking is completely optional. Don’t need it? Disable it! Atto gives you the power to decide which specific employees or teams require it.`,
  },
  {
    title: `Choose which type of location tracking to enable`,
    description:
      'You get to choose whether you require real-time location tracking, or alternatively, just the locations of where employees clock in and out.',
  },
  {
    title: `When work ends, so does location tracking`,
    description:
      'Atto never tracks more than is absolutely necessary. Whenever employees clock out, location tracking is turned off completely.',
  },
];

export const featuresList = [
  {
    title: 'Real-time Location Updates',
    description: 'See the location of your entire team of employees as they work in real-time.',
    logo: <Timer />,
  },
  {
    title: 'Clock in/out Location History',
    description: 'View GPS time stamps of your employees’ clock in and clock out locations.',
    logo: <Flag />,
  },
  {
    title: 'Named Job Sites',
    description: 'Provide names for specific locations you operate from to make reporting easier.',
    logo: <Ringbell />,
  },
  {
    title: 'Location History Tracking',
    description: `View your employees’ location history throughout their entire day.`,
    logo: <MLogo />,
  },
  {
    title: 'Customizable GPS Tracking',
    description:
      'Choose the specific employees and teams that require location tracking for their job.',
    logo: <Brightness />,
  },
  {
    title: 'Geofencing',
    description: `Restrict employees from clocking in until they’ve arrived at a job site.`,
    logo: <Flag />,
  },
  {
    title: 'Built-in Battery Efficiency',
    description:
      'Never worry about your battery life being drained with battery-efficient GPS tracking technology.',
    logo: <Battery />,
  },
  {
    title: 'Compatible with most mobiles',
    description:
      'Use location tracking with most Apple and Android devices – no special equipment necessary.',
    logo: <Coffe />,
  },
  {
    title: 'Privacy Controls',
    description:
      'Stay in control of what gets tracked – real-time positions, clock in/out locations, or nothing at all.',
    logo: <Bookmark />,
  },
];

export const featureList2 = [
  {
    title: 'Employee Status Overview',
    description: `Stay in control of your team’s daily activity with real-time updates on their status and location.`,
    logo: <Team />,
    alt: 'Employee status logo',
  },
  {
    title: 'Daily Timeline',
    description: `See a clear, simple timeline view of every employee’s daily activity.`,
    logo: <Timeline />,
    alt: 'Geofencing Flag',
  },
  {
    title: 'Departments',
    description: `Organize employees into departments based on their location, job site, or role.`,
    logo: <Departments />,
    alt: 'Ringbell reminder logo',
  },
  {
    title: 'Filter and Search',
    description: `Filter teams based on their status, department, or simply search for their name.`,
    logo: <FilterAndSearch />,
    alt: '',
  },
  {
    title: 'Smart Notifications',
    description: `Get notified whenever an employee clocks in or out, takes a break, or edits a time entry.`,
    logo: <Notifications />,
    alt: '',
  },
  {
    title: 'Messaging*',
    description: `Allow employees to send messages and share photos 1-1 or in group chats.`,
    logo: <Messaging />,
    alt: '',
  },
];

export const cardList = [
  {
    title: 'Boost Productivity',
    description: `See who’s nearest to a job site, and quickly deploy them – boosting efficiency and reducing costs.`,
  },
  {
    title: 'Increase Visibility',
    description: `Always know where your team is, and what they’re working on without any back and forth phone calls.`,
  },
  {
    title: 'Improve Safety',
    description: `Get peace of mind and help improve your team’s safety as they work in the field and move from job site to job site.`,
  },
];

export const timeTrackingFeatureList = [
  {
    title: 'Managed Clock-in / Out',
    description:
      'Empower managers to clock in and out on behalf of their team, instead of tracking time individually.',
    logo: <Timer />,
    alt: 'Clock in logo',
  },
  {
    title: 'Geofencing',
    description: `Restrict employees from clocking in until they’ve arrived at a job site.`,
    logo: <Flag />,
    alt: 'Geofencing Flag',
  },
  {
    title: 'Smart Reminders',
    description: `Remind employees to clock in and out at their start and end time or when they’re at a job site.`,
    logo: <Ringbell />,
    alt: 'Ringbell reminder logo',
  },
  {
    title: 'Manual Time Entries',
    description: `Allow admins, managers, or employees the option to add manual time entries to their timesheets.`,
    logo: <MLogo />,
    alt: 'Manual time entries',
  },
  {
    title: 'Time Off',
    description: `Add and categorize time off entries, specifying whether time off is paid or unpaid.`,
    logo: <Brightness />,
    alt: 'time off',
  },
  {
    title: 'Notes',
    description: `Add notes to provide context to time entries, such as a work diary or job information.`,
    logo: <Notes />,
    alt: 'notes ',
  },
  {
    title: 'Overtime Rules',
    description: `Set regular employee working hours per day/week and assign any extra hours to count as overtime.`,
    logo: <Overtime />,
    alt: 'overtime',
  },
  {
    title: 'Break Preferences',
    description: `Decide if breaks are paid or unpaid, the amount of time to be deducted, and categorize them.      `,
    logo: <Coffe />,
    alt: 'break coffe',
  },
  {
    title: 'Job Codes',
    description: `Categorize time tracked towards specific purposes such as per client, project, or type of work.`,
    logo: <Bookmark />,
    alt: 'job codes',
  },
  {
    title: 'Rounded Clock-in / Out Times',
    description: `Set clock in and out times to be automatically rounded to an increment of your choice.`,
    logo: <Clock />,
    alt: 'rounded clock in',
  },
  {
    title: 'Fixed Time Zones',
    description: `Automatically adjust your team’s hours to a set time zone, regardless of their device’s time zone.`,
    logo: <Browser />,
    alt: 'fixed time zone',
  },
  {
    title: 'Split Night-Shift Time Entries',
    description: `Split time entries at midnight, with hours tracked after midnight counting for the following day.`,
    logo: <Darkmode />,
    alt: 'split night shift',
  },
];

export const timeTrackingFeatures = [
  {
    title: 'Easy to use',
    description: `Start tracking in a tap. Employees love using Atto because it’s simple, intuitive, and requires no technical knowledge to use.`,
    alt: 'Easy to use',
    icon,
    imagePadding: '.8rem 3.1rem 1.5rem 3rem',
    imageWidth: 59,
    imageHeight: 97,
  },
  {
    title: 'Accurate',
    description: `No more end-of-week timesheet guesswork. Time gets tracked in real-time as employees work – with entries precise to the nearest second.`,
    alt: 'Accurate',
    icon: icon2,
    imagePadding: '.8rem .6rem 1.9rem 2rem',
    imageWidth: 94,
    imageHeight: 93,
  },
  {
    title: 'Trustworthy',
    description: `Gain confidence in your time tracking data. Timesheets are verified using location data, so you can trust the validity of every time entry.`,
    alt: 'Trustworthy',
    icon: icon3,
    imagePadding: '1.2rem 1rem',
    imageWidth: 100,
    imageHeight: 96,
  },
];

export const timeTrackingOtherFeatures = [
  {
    title: 'Clock in and out',
    description: `Tap the giant pulsating clock in/out button to start tracking time.`,
    alt: 'Easy to use',
    icon: icon4,
    imageWidth: 350,
    imageHeight: 244,
  },
  {
    title: 'Write notes',
    description: `Add notes to your time tracking records, such as a work diary.`,
    alt: 'write notes',
    icon: icon5,
    imageWidth: 350,
    imageHeight: 244,
  },
  {
    title: 'Track breaks',
    description: `Track breaks and categorize them as either paid or unpaid.`,
    alt: 'track breaks',
    icon: icon6,
    imageWidth: 350,
    imageHeight: 244,
  },
  {
    title: 'Manage overtime',
    description: `Decide if overtime should be tracked, and if so, whether it’s calculated weekly, daily or daily double.`,
    alt: 'Manage overtime',
    icon: icon7,
    imageWidth: 350,
    imageHeight: 244,
  },
  {
    title: 'Switch between jobs',
    description: `Use job codes to categorize time tracked towards specific purposes – for example for each client or type of job.`,
    alt: 'Switch between jobs',
    icon: icon8,
    imageWidth: 350,
    imageHeight: 244,
  },
  {
    title: 'Add time off',
    description: `Add time off such as vacations and sick leave to help managers understand who’s available to work.`,
    alt: 'Time off',
    icon: icon9,
    imageWidth: 350,
    imageHeight: 244,
  },
];

export const timeTrackingTitleList = [
  { title: 'Keep track of time wherever your employees are', id: '1asdd1a' },
  { title: 'Reduce payroll costs and increase productivity', id: '1asdd1b' },
  { title: 'Track hours, breaks, time-off, and more', id: '1asdd1c' },
  { title: 'Increase the accuracy of job estimates', id: '1asdd1d' },
];

export const overviewAdminList = [
  {
    title: 'Save time and focus on productive work',
    description:
      'Atto takes care of time-draining tasks like chasing down timesheets. Now your employees can spend less time on admin, and more time on real work.',
  },
  {
    title: 'Win more bussiness with precise job estimates',
    description:
      'Using time tracking data from previous jobs, you can ensure that any bids you submit for similar jobs in the future are both profitable and competitive.',
  },
  {
    title: 'Reduce payroll costs',
    description:
      'With precise time tracking that captures activity to the nearest second, you only pay for hours actually spent on the job.',
  },
  {
    title: 'Increase employee productivity',
    description:
      'When you track hours and the clock is ticking, your employees naturally become more productive and aware of their time.',
  },
];
