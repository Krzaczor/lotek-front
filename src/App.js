import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';

import Navbar from './Components/navbar';
import PageIndex from './Pages/main';
import NotFound from './Pages/notFound';

const AppWrapper = styled.div`
  width: 100%;
`;

const Main = styled.div`
  padding: 0 20px;
`;

function App() {
  return (
    <AppWrapper>
      <Navbar />
      <Main>
        <Router>
          <Switch>
            <Route path="/" exact component={PageIndex} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </Main>
    </AppWrapper>
  );
}

export default App;
