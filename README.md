# README

![Swimeo Home Page](https://swimeo-seeds.s3.amazonaws.com/github-images/Swimeo-splash-page.gif "Swimeo Splash Page")

<h1>Welcome to Swimeo</h1>
Swimeo is a clone of the site Vimeo. It is a video destination site for people interested in watching and uploading quality aquatically-themed video content. 


Currently, the primary features include:

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


<h3>Video Show Page</h3>

The video viewing experience is, of course, a key part of the experience. Implementing the video player required the use of the HTML5 player, using the browser's native media controls.



![Video Page](https://swimeo-seeds.s3.amazonaws.com/github-images/Swimeo-video-page-small.gif "Video Show Page")



The video url was associated to the Video instance used has_one_attached in the Video model. 

```ruby
class Video < ApplicationRecord

  has_one_attached :video_url

  has_one_attached :image_url
  ```


Because of the Vimeo show page's UI's very specific look and feel, extra attention had to be placed on how the elements were placed in the page.

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


<h3>Video Likes</h3>

To integrate Likes into the video page, we integrated the Remove Like action into the Video Reducer, which helped to maintain a normalized Redux state.

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

Also, to maintain a normalized Redux state and centralize the flow of data from the database, Likes and Comments were included in the show.json.jbuilder for Video, instead of separate json.jbuilder files.

```javascript
json.video do 
    json.extract! @video, :id, :title, :description
    json.video_url url_for(@video.video_url)
    json.likes @video.likes.pluck(:id)
    json.comments @video.comments.pluck(:id)
end
```

<h2>Future Updates</h2>
These are among the features that we intended to update:

* Video search

* Improved presentation of the video player controls, through manipulation of Shadow DOM elements.

* Currently, the videos are formatted as .webm for Chrome browser support. We plan to refactor to add support for .mp4, using video transcoding.


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

