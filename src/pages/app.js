import React from 'react';

import { Router, Redirect } from '@reach/router';
import Expense from '@components/templates/blog-template';
import Blog from '@components/templates/blog';
import HomePage from './home';

const App = () => (
  <Router>
    <HomePage path="/" />
    <Blog path="/blog" />
    <Expense path="/blog/:id" />
    {/* <Redirect
      from="/download/android"
      to="https://play.google.com/store/apps/details?id=tech.zetta.atto"
    />
    <Redirect
      from="/download/ios"
      to="https://itunes.apple.com/us/app/atto-employee-time-location/id1132847984?ls=1&mt=8"
    />
    <Redirect from="/deep-links/open" to="https://attotracking.page.link/open-app" />
    <Redirect from="/deep-links/timesheets" to="https://attotracking.page.link/timesheets" />
    <Redirect from="/deep-links/invite" to="https://attotracking.page.link/invite" />
    <Redirect from="/deep-links/settings" to="https://attotracking.page.link/settings" /> */}
  </Router>
);

export default App;
