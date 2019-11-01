import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchForm from './search_form';
import { searchQuery } from '../../actions/search_actions';


// SEARCH FORM CONTAINER

const msp = ({ search }) => ({
    search: search
});

const mdp = dispatch => ({
    searchQuery: query => dispatch(searchQuery(query))
});

export default withRouter(msp,mdp)(SearchForm);
