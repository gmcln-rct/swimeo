import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// Containers
import GreetingContainer from './greeting/greeting_container';

import Modal from './modal/modal';
import Splash from './splash/splash_container';
import VideoShow from './video/video_show/video_show_container';
import VideoUpload from './video/video_upload/video_upload_container';
import VideoWatch from './video/video watch/video_watch_container';
import Plans from './plans/plans';
import SearchResults from './video/video_search/search_results_container';

import Footer from './footer/footer';

import ReactDOM from 'react-dom';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDropbox, faGoogleDrive, faLinkedin, faAngellist, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCloudUploadAlt, faHeart, faCode, faFish, faTimes, faArrowRight, faHome, faPhotoVideo, faSwimmer, faSearch} from '@fortawesome/free-solid-svg-icons';

library.add(faDropbox, faGoogleDrive, faGithub, faLinkedin, faAngellist, faCloudUploadAlt, faCode, faHeart, faFish, faTimes, faArrowRight, faHome, faPhotoVideo, faSwimmer, faSearch);

const App = () => (
  <div>
    <Modal />
    <header>
      <GreetingContainer />
    </header>
    <Route exact path='/' component={Splash} />
    <Route exact path='/watch' component={VideoWatch} />
    <Route path='/watch/:id' component={VideoShow} />
    <Route path='/upload' component={VideoUpload} />
    <Route exact path={`/search`} component={SearchResults} />
    <Route path='/plans' component={Plans} />

    <Footer />
  </div>
);

export default App;