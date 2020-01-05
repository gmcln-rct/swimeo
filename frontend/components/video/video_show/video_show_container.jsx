import { connect } from 'react-redux';
import { showVideo, showVideos, receiveVideo } from '../../../actions/video_actions';
import VideoShow from './video_show';


// VIDEO SHOW CONTAINER - SINGLE VIDEO

const msp = (state, ownProps) => {
    
    return ({
        video: state.entities.videos[ownProps.match.params.id]
    });
};

const mdp = (dispatch, ownProps) => {
    
    return ({
        receiveVideo: (id) => dispatch(receiveVideo(id)),
        showVideo: (id) => dispatch(showVideo(id)),
    });
};

export default connect(msp, mdp)(VideoShow);


