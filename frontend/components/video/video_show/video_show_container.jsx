import { connect } from 'react-redux';
import { showVideo, showVideos, receiveVideo } from '../../../actions/video_actions';
import VideoShow from './video_show';


// VIDEO SHOW CONTAINER - SINGLE VIDEO

const msp = (state, ownProps) => {
    debugger
    return ({
        // video: state.videos[ownProps.match.params.id]
        video: state.entities.videos[ownProps.match.params.id]
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


// removed from json show:
// json.liked_by_current_user!!@video.likes.find_by(user_id: current_user.id)
