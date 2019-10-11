# README

![Swimeo Home Page](https://swimeo-seeds.s3.amazonaws.com/github-images/Swimeo-splash-page.gif "Swimeo Splash Page")

<h1>Welcome to Swimeo</h1>
Swimeo is a clone of the site Vimeo, intended as a video destination site for users interested in watching and uploading quality aquatically-themed video content. 

The core features include:

* Users can sign in/login

* Users can browse and watch videos

* Logged in users can:

  - Like a video

  - Comment on a video

  - Upload a video
  


Swimeo live site: https://swimeo.herokuapp.com/#/

---

<h1>Features & Challenges </h1>

Vimeo is a site for video creatives, and places an emphasis on its intuitive, attractive ui. Similarly, Swimeo was developed with both function and design in mind.


Video Show Page

The video viewing experience is, of course, a key part of the experience. Implementing the video player required the use of the HTML5 player, using the browser's native media controls.



![Test Video Page](https://swimeo-seeds.s3.amazonaws.com/github-images/Swimeo-video-page-small.gif)

Because of the Vimeo show page's UI's very specific look and feel, extra attention h 

```javascript
              <div className='video-unit-wrapper'>
                    <div className='video-player-wrapper'>
                        <div className='video-container'>
                            <video
                                controls
                                autoPlay
                                src={this.props.video.video_url} 
                                type='video/webm' />
                        </div>
                            <br/>

                        <div className='video-footer'>
                            <div className='video-footer-container'>

                                <div className='video-info'>

                                    <div className='video-title'>{this.props.video.title}</div>
                                    <br />
                                    <div className='video-description'>
                                        {this.props.video.description}
                                    </div>
                                    <div>
                                        <VideoLikeComponent />
                                    </div>
                                    <br/>
                                    <div>
                                        <CommentIndexComponent />
                                    </div>
                                </div>
```


Video Likes

```javascript
const videosReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {

        case RECEIVE_VIDEOS:
            
            return merge({}, state, action.videos);
        case RECEIVE_VIDEO:
            const {video} = action.video
            return merge({}, state, { [video.id]: video });
        case REMOVE_VIDEO:
            let newState = merge({}, state);
            delete newState[action.id];
            return newState;
            
        case REMOVE_LIKE:
            return state;
        default:
            return state;
    }
};
```


---

<h2>Development Notes</h2>

Swimeo was developed using a Ruby on Rails framework, PostgresSQL database, and JSON JBuilder with React-Redux for the front-end.

<h3>Dependencies</h3>
The app has the following dependencies:

```ruby
    "@babel/core": "^7.6.2",
    "@babel/preset-env": "^7.6.2",
    "@babel/preset-react": "^7.0.0",
    "@fortawesome/fontawesome-svg-core": "^1.2.25",
    "@fortawesome/free-brands-svg-icons": "^5.11.2",
    "@fortawesome/free-solid-svg-icons": "^5.11.2",
    "@fortawesome/react-fontawesome": "^0.1.5",
    "babel-loader": "^8.0.6",
    "jshint": "^2.10.2",
    "react": "^16.10.1",
    "react-dom": "^16.10.1",
    "react-redux": "^7.1.1",
    "react-router-dom": "^5.1.2",
    "redux": "^4.0.4",
    "redux-logger": "^3.0.6",
    "redux-thunk": "^2.3.0",
    "webpack": "^4.41.0",
    "webpack-cli": "^3.3.9"
```

<h3>Versions</h3>
The site was built with Ruby version 2.5.3.

Node/NPM Versions:

```ruby
"engines": {
    "node": "10.13.0",
    "npm": "6.4.1"
  },
```

---


Brief explanation of what the app is and does
Link to live site
Discussion of technologies used
Delve deep into ~2 features that show off your technical abilities. Discuss both the challenges faced and your brilliant solutions.
Code snippets to highlight your best code (markdown code snippets, NOT screenshots)
