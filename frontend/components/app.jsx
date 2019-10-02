import React from 'react';
import {Route} from 'react-router-dom';

// React
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container.jsx';
import SignupFormContainer from './session_form/signup_form_container.jsx';
import { AuthRoute, ProtectedRoute } from '../util/route_util';




const App = () => (
  <div>
    <header>
      <span id='header-logo'>swimeo</span>
      <GreetingContainer />
    </header>

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;