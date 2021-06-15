import React from 'react';

import {
  FirstQuestion,
  SecondQuestion,
  ThirdQuestion,
  FourthQuestion,
} from '@data/common-questions/time-clock';

export const checkList = [
  'Mobile, Web, and Kiosk Time Clock',
  'Clock In/Out Reminders',
  'Managed Clock In/Out',
  'Work Activity Notifications',
  'GPS Stamped Clock In/Out',
  'Manual Time Entries',
];

export const commonQuestionsList = [
  {
    title: 'What is a Time Clock?',
    description: <FirstQuestion />,
  },
  {
    title: 'How do I track my work hours?',
    description: <SecondQuestion />,
  },
  {
    title: 'Can I use Atto’s Time Clock while offline?',
    description: <ThirdQuestion />,
  },
  {
    title: 'What are the benefits of using an app-based Time Clock for my business?',
    description: <FourthQuestion />,
  },
];
