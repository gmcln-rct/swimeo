import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { receiveSearchVideos } from '../../actions/search_actions';


// SEARCH RESULTS CONTAINER

const msp = (state) => {
    return ({
        videos: Object.values(state.entities.videos),
    });
};


const mdp = dispatch => ({
    receiveSearchVideos: () => dispatch(receiveSearchVideos())
});

export default withRouter(msp, mdp)(SearchResults);
