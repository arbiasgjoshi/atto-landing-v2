import React from 'react';

import { Router } from '@reach/router';
import HomePage from './home';
import BlogTemplate from './blog-template';

const Index = () => (
  <Router basepath="/">
    <HomePage path="/" />
    <BlogTemplate path="/blog-template?slug=:slugId" />
  </Router>
);

export default Index;
