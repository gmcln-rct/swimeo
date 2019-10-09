import { connect } from 'react-redux';
import VideoWatch from './video_watch';
import {receiveVideos} from '../../../actions/video_actions'

// VIDEO WATCH CONTAINER - MULTIPLE VIDEOS

const msp = (state) => {
    debugger
    return ({
        videos: Object.values(state.entities.videos),
    });
};

const mdp = dispatch => {
    return ({
        receiveVideos: () => dispatch(receiveVideos())
    });
};

export default connect(msp, mdp)(VideoWatch);