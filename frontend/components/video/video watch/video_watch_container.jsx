import { connect } from 'react-redux';
import VideoWatch from './video_watch';
import {receiveVideos, showVideos} from '../../../actions/video_actions';

// VIDEO WATCH CONTAINER - MULTIPLE VIDEOS

const msp = (state, ownProps) => {
    const videos = Object.values(state.entities.videos); 
    
    return ({
        videos: videos,
    });
};

const mdp = dispatch => {
    return ({
        receiveVideos: () => dispatch(receiveVideos()),
        showVideos: () => dispatch(showVideos())
    });
};

export default connect(msp, mdp)(VideoWatch);