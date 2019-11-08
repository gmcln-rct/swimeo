import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchResults from './search_results';
import { receiveSearchVideos } from '../../../actions/search_actions';


// SEARCH RESULTS CONTAINER

const msp = (state) => {

    return ({
        videos: Object.values(state.entities.videos),
        search: Object.values(state.entities.search) || []

    });
};


const mdp = dispatch => ({
    receiveSearchVideos: () => dispatch(receiveSearchVideos())
});

export default connect(msp, mdp)(SearchResults);
