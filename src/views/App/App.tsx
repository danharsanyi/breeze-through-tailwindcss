// Dependencies
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';

import { Introduction, Title } from '../slides';

const SLIDES = [
  Title,
  Introduction
]

// Views
import { Home } from '../../views/index';

// Types
interface AppProps {};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const App = ( {}: AppProps ) => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/:index">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
