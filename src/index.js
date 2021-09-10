import React from 'react';

import { Router, Redirect } from '@reach/router';
import HomePage from './pages/home';
import Blog from './components/templates/blog';
import BlogTemplate from './pages/blog-template';
console.log('_____________ WE ARE STARTING________');
const Index = () => (
  <Router basepath="/">
    <HomePage path="/" />
    <Blog path="/blog" />
    <BlogTemplate path="/blog/:id" />
    <Redirect
      from="https://attotime.com/download/android"
      to="https://play.google.com/store/apps/details?id=tech.zetta.atto"
    />

    <Redirect
      from="https://attotime.com/download/ios"
      to="https://itunes.apple.com/us/app/atto-employee-time-location/id1132847984?ls=1&mt=8"
    />
    <Redirect
      from="https://attotime.com/deep-links/open"
      to="https://attotracking.page.link/open-app"
    />
    <Redirect
      from="https://attotime.com/deep-links/timesheets"
      to="https://attotracking.page.link/timesheets"
    />
    <Redirect
      from="https://attotime.com/deep-links/invite"
      to="https://attotracking.page.link/invite"
    />
    <Redirect
      from="https://attotime.com/deep-links/settings"
      to="https://attotracking.page.link/settings"
    />
  </Router>
);
console.log('_____________ WE ARE STARTING2________');
export default Index;
