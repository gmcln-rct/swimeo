import { connect } from 'react-redux';
import { showVideo, showVideos, receiveVideo } from '../../../actions/video_actions';
import VideoShow from './video_show';

const msp = (state, ownProps) => {
    debugger
    return ({
        // videos: Object.values(state.videos),
        video: state.videos[ownProps.match.params.id]
        
    });
};

const mdp = (dispatch, ownProps) => {
    return ({
        // showVideos: () => dispatch(showVideos()),
        receiveVideo: (id) => dispatch(receiveVideo(id)),
        showVideo: (id) => dispatch(showVideo(id)),
    });
};

export default connect(msp, mdp)(VideoShow);