import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// Containers
import GreetingContainer from './greeting/greeting_container';

import Modal from './modal/modal';
import Splash from './splash/splash_container';
import VideoShow from './video/video_show/video_show_container';
import VideoUpload from './video/video_upload/video_upload_container';
import Footer from './footer/footer'

import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDropbox, faGoogleDrive } from '@fortawesome/free-brands-svg-icons';
import { faCloudUploadAlt, faHeart, faFish, faTimes, faArrowRight } from '@fortawesome/free-solid-svg-icons';

library.add(faDropbox, faGoogleDrive, faCloudUploadAlt, faHeart, faFish, faTimes, faArrowRight );

const App = () => (
  <div>
    <Modal />
    <header>
      {/* <span id='header-logo'>swimeo</span> */}
      <GreetingContainer />
    </header>
    <Route exact path='/' component={Splash} />
    <Route path='/watch/:id' component={VideoShow} />
    <Route path='/upload' component={VideoUpload} />
    {/* <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} /> */}

    {/* <Route exact path="/" render={() => (
      this.props.currentUser ? (
        <Home />
      ) : (
          <Redirect to="/login" />
        )
    )} /> */}

    {/* <Footer /> */}
  </div>
);

export default App;