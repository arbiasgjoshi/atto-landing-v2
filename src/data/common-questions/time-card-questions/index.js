import React from 'react';

export const FirstQuestion = () => (
  <p>Yes. Manual time card entries can be disabled, or enabled for specific user roles only.</p>
);
export const SecondQuestion = () => (
  <p>
    Yes. You can set up time card rounding to automatically round employees' clock in and out times
    to the nearest rounding increment of 5, 10, 15, 20 or 30 minutes.
  </p>
);
export const ThirdQuestion = () => (
  <p>
    If a team member fails to clock out at the end of their shift, their timer will keep running
    until they clock out or an Admin or Manager clocks them out. Employees can later edit inaccurate
    time cards, which are flagged for review.
  </p>
);
