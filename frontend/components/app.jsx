import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// Containers
import GreetingContainer from './greeting/greeting_container';

import Modal from './modal/modal';
import Splash from './splash/splash_container'



const App = () => (
  <div>
    <Modal />
    <header>
      <span id='header-logo'>swimeo</span>
      <GreetingContainer />
    </header>
    <Splash />
    {/* <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} /> */}
  </div>
);

export default App;