import React, { useEffect, useState } from 'react';

import { Router, Redirect } from '@reach/router';
import BlogTemplate from './blog/id';
import Blog from './blog';
import HomePage from './home';

const App = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  const Article = ({ id }) => <BlogTemplate id={id} />;
  return (
    <Router>
      <HomePage path="/" />
      <Blog path="/blog" />
      <Article path="/blog/:id" />

      <Redirect
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
      <Redirect from="/deep-links/settings" to="https://attotracking.page.link/settings" />
    </Router>
  );
};

export default App;
