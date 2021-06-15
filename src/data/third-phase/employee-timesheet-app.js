import React from 'react';

import TimesheetsBill from '@images/accurate-timesheet-reports@2x.png';
import SummaryImage from '@images/summary-of-hours-on-the-clock@2x.png';
import TransparentManualAlerts from '@images/transparent-manual-entry-alerts@2x.png';

import {
  FirstQuestion,
  SecondQuestion,
  ThirdQuestion,
  FourthQuestion,
} from '@data/common-questions/timesheets';

export const checkList = [
  'Customizable Timesheet Reports',
  'Employee, Team, and Job-based Timesheet Summaries',
  'Built-in Wage Estimates',
  'Export to Payroll',
];

export const cardList = [
  {
    title: 'Maintain accurate timesheet records',
    description: `Even if employees leave, Atto keeps a record of their timesheets available to view, helping with your compliance and record-keeping needs.`,
    alt: 'Maintain accurate timesheet records',
    icon: TimesheetsBill,
    imageWidth: '85',
  },
  {
    title: 'View a summary of every hour on the clock',
    description: `Atto’s timesheet reports include every aspect of time on the job, including; regular time, overtime, time off, break time, and more.`,
    alt: 'Easy to use',
    icon: SummaryImage,
    imageWidth: '89',
  },
  {
    title: 'Get alerted to manual time entries',
    description: `If employees forget to track their time, they can add manual time entries, which are flagged for you to review and approve.`,
    alt: 'Get alerted to manual time entries',
    icon: TransparentManualAlerts,
    imageWidth: '98',
  },
];

export const commonQuestionsList = [
  {
    title: 'Why is Atto the best timesheet app?',
    description: <FirstQuestion />,
  },
  {
    title: 'Can I export timesheet data from Atto?',
    description: <SecondQuestion />,
  },
  {
    title: 'What are mobile timesheets?',
    description: <ThirdQuestion />,
  },
  {
    title: 'Is Atto a free timesheet app?',
    description: <FourthQuestion />,
  },
];
