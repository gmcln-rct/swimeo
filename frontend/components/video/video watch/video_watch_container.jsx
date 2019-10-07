import { connect } from 'react-redux';
import VideoWatch from './video_watch';
import {receiveVideos} from '../../../actions/video_actions'

const msp = (state) => {

    return ({
        videos: Object.values(state.videos),
    });
};

const mdp = dispatch => {
    return ({
        receiveVideos: () => dispatch(receiveVideos())
    });
};

export default connect(msp, mdp)(VideoWatch);