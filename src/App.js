import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';

import Navbar from './Components/navbar';
import DaysWeek from './Components/daysWeek';
import PageIndex from './Pages/main';

const AppWrapper = styled.div`
  width: 100%;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Navbar />
        <DaysWeek />
        <Switch>
          <Route path="/" exact component={PageIndex} />
          <Route path="*" >404 page</Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
