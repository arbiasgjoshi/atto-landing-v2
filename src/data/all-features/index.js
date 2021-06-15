import React from 'react';

import Timer from '@images/timer.svg';
import Flag from '@images/flag.svg';
import Ringbell from '@images/ringbell.svg';
import MLogo from '@images/m-logo.svg';
import Brightness from '@images/brightness.svg';
import Notes from '@images/notes.svg';
import Overtime from '@images/overtime.svg';
import Coffe from '@images/coffe.svg';
import Bookmark from '@images/bookmark.svg';
import Clock from '@images/clock.svg';
import Browser from '@images/browser.svg';
import Darkmode from '@images/darkMode.svg';

import LocationClock from '@images/clock-location.svg';
import House from '@images/house.svg';
import Settings from '@images/settings.svg';
import LocationAt from '@images/location-at.svg';
import Security from '@images/security.svg';
import Battery from '@images/battery.svg';

import Team from '@images/team.svg';
import Department from '@images/departments.svg';
import Filter from '@images/filter-and-search.svg';
import Messaging from '@images/messaging.svg';
import Timeline from '@images/timeline.svg';

import AllTimesheets from '@images/All_featres_TimesheetsAndroid.svg';
import AllFeatureEmail from '@images/All_featres_emailAndroid.svg';
import AvoidGuess from '@images/avoid_guesstimation.svg';
import Wages from '@images/wages.svg';
import Share from '@images/share.svg';
import AllFeatresRounding from '@images/featres_rounding.svg';
import ChangeHistory from '@images/change_history.svg';
import ArchivedMembers from '@images/Archived_membersSVG.svg';
import WageEstimate from '@images/Wage_estimatesSVG.svg';

export const timeTrackingCards = [
  {
    title: 'Managed Clock-in / Out',
    description:
      'Empower managers to clock in and out on behalf of their team, instead of tracking time individually.',
    logo: <Timer />,
    alt: '',
  },
  {
    title: 'Geofencing',
    description: 'Restrict employees from clocking in until they’ve arrived at a job site.',
    logo: <Flag />,
    alt: '',
  },
  {
    title: 'Smart Reminders',
    description:
      'Remind employees to clock in and out at their start and end time or when they’re at a job site.',
    logo: <Ringbell />,
    alt: '',
  },
  {
    title: 'Manual Time Entries',
    description:
      'Allow admins, managers, or employees the option to add manual time entries to their timesheets.',
    logo: <MLogo />,
    alt: '',
  },
  {
    title: 'Time Off',
    description:
      'Add and categorize time off entries, specifying whether time off is paid or unpaid.',
    logo: <Brightness />,
    alt: '',
  },
  {
    title: 'Notes',
    description:
      'Add notes to provide context to time entries, such as a work diary or job information.',
    logo: <Notes />,
    alt: '',
  },
  {
    title: 'Overtime Rules',
    description:
      'Set regular employee working hours per day/week and assign any extra hours to count as overtime.',
    logo: <Overtime />,
    alt: '',
  },
  {
    title: 'Break Preferences',
    description:
      'Decide if breaks are paid or unpaid, the amount of time to be deducted, and categorize them.',
    logo: <Coffe />,
    alt: '',
  },
  {
    title: 'Job Codes',
    description:
      'Categorize time tracked towards specific purposes such as per client, project, or type of work.',
    logo: <Bookmark />,
    alt: '',
  },

  {
    title: 'Rounded Clock-in / Out Times',
    description:
      'Set clock in and out times to be automatically rounded to an increment of your choice.',
    logo: <Clock />,
  },
  {
    title: 'Fixed Time Zones',
    description:
      'Automatically adjust your team’s hours to a set time zone, regardless of their device’s time zone.',
    logo: <Browser />,
  },
  {
    title: 'Split Night-Shift Time Entries',
    description:
      'Split time entries at midnight, with hours tracked after midnight counting for the following day.',
    logo: <Darkmode />,
  },
];

export const locationTrackingCards = [
  {
    title: 'Real-time Location Updates',
    description: 'See the location of your entire team of employees as they work in real-time.',
    logo: <LocationClock />,
    alt: '',
  },
  {
    title: 'Clock-in/out Location History',
    description: 'View GPS time stamps of your employees’ clock in and clock out locations.',
    logo: <LocationClock />,
    alt: '',
  },
  {
    title: 'Named Job Sites',
    description: 'Provide names for specific locations you operate from to make reporting easier.',
    logo: <House />,
    alt: '',
  },
  {
    title: 'Customizable GPS Tracking',
    description:
      'Choose the specific employees and teams that require location tracking for their job.',
    logo: <Settings />,
    alt: '',
  },
  {
    title: 'Geofencing',
    description: 'Restrict employees from clocking in until they’ve arrived at a job site.',
    logo: <Flag />,
    alt: '',
  },
  {
    title: 'Location History Tracking',
    description: 'View your employees’ location history throughout their entire day.',
    logo: <LocationAt />,
    alt: '',
  },
  {
    title: 'Privacy Controls',
    description:
      'Stay in control of what gets tracked – real-time positions, clock in/out locations, or nothing at all.',
    logo: <Security />,
    alt: '',
  },
  {
    title: 'Built-in Battery Efficiency',
    description:
      'Never worry about your battery life being drained with battery-efficient GPS tracking technology.',
    logo: <Battery />,
    alt: '',
  },
];

export const teamActivityCards = [
  {
    title: 'Daily Timeline',
    description: 'See a clear, simple timeline view of every employee’s daily activity.',
    logo: <Timeline />,
    alt: '',
  },
  {
    title: 'Employee Status Overview',
    description:
      'Stay in control of your team’s daily activity with real-time updates on their status and location.',
    logo: <Team />,
    alt: '',
  },
  {
    title: 'Departments',
    description: 'Organize employees into departments based on their location, job site, or role.',
    logo: <Department />,
    alt: '',
  },
  {
    title: 'Filter and Search',
    description: 'Filter teams based on their status, department, or simply search for their name.',
    logo: <Filter />,
    alt: '',
  },
  {
    title: 'Smart Notifications',
    description:
      'Get notified whenever an employee clocks in or out, takes a break, or edits a time entry.',
    logo: <Ringbell />,
    alt: '',
  },
  {
    title: 'Messaging*',
    description: 'Allow employees to send messages and share photos 1-1 or in group chats.',
    logo: <Messaging />,
    alt: '',
  },
];

export const timesheetCards = [
  {
    title: 'Comprehensive Timesheets',
    description:
      'Get all the data you need including regular time, overtime, breaks, time off, and more.',
    logo: <AllTimesheets />,
    alt: '',
  },
  {
    title: 'Scheduled Email Reports',
    description:
      'Schedule an email with your employees’ timesheets to coincide with your payroll schedule.',
    logo: <AllFeatureEmail />,
    alt: '',
  },
  {
    title: 'Timesheets by Team and Jobs',
    description:
      'Generate timesheets based on work done by an employee, team, or toward a category of job.',
    logo: <AvoidGuess />,
    alt: '',
  },
  {
    title: 'Time Entry Change History',
    description: 'View any historic changes made to time entries by an employee or admin.',
    logo: <ChangeHistory />,
    alt: '',
  },
  {
    title: 'Timesheet Rounding',
    description: 'Set a rounding increment and clock in/out times are rounded automatically.',
    logo: <AllFeatresRounding />,
    alt: '',
  },
  {
    title: 'Wage Estimates and Pay Rates',
    description:
      'Assign pay rates to your employees and their estimated pay will be added to their timesheets.',
    logo: <Wages />,
    alt: '',
  },
  {
    title: 'Payroll Integrations',
    description: 'Streamline your payroll with our QuickBooks Online and Xero integrations.',
    logo: <WageEstimate />,
    alt: '',
  },
  {
    title: 'Download and Share',
    description: 'Download any timesheet report as a PDF or CSV file in one click.',
    logo: <Share />,
    alt: '',
  },
  {
    title: 'Archive Employees',
    description:
      'View timesheets for employees even after they’ve left the company – vital for compliance purposes.',
    logo: <ArchivedMembers />,
    alt: '',
  },
  {
    title: '',
    description: '',
    logo: '',
    alt: '',
    empty: true,
  },
];
