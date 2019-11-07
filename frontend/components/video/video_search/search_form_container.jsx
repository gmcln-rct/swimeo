import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchForm from './search_form';
import { searchVideos } from '../../../actions/search_actions';



// SEARCH FORM CONTAINER

// const msp = ({ search }) => ({
//     search: search
// });

const mdp = dispatch => {
    debugger
    return {
        searchVideos: query => dispatch(searchVideos(query))
    };
};

export default withRouter(connect(null,mdp)(SearchForm));
