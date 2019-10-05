import { connect } from 'react-redux';

import VideoUpload from './video_upload';
import { receiveVideo } from '../../../actions/video_actions';

const msp = (state, ownProps) => {
    video: this.state[ownProps.match.params.video.id]
}

const mdp = (dispatch, ownProps) => {
    return {
        upload: video => dispatch(receiveVideo(video)),
    }
}

export default connect(null, mdp)(VideoUpload);