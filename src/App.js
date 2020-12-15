import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Spinner from './components/Spinner';

const Draws = lazy(() => import('./pages/Draws'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => (
  <Router>
    <Suspense fallback={<Spinner suspense />}>
      <Switch>
          <Route exact path="/" component={Draws} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
