import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Draws from './pages/Draws';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

const App = () => (
  <Router>
      <Switch>
          <Route exact path="/" component={Draws} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="*" component={NotFound} />
      </Switch>
  </Router>
);

export default App;
