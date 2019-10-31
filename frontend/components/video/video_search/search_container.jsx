import { connect } from 'react-redux';
import Search from './search';
import { searchQuery } from '../../actions/search_actions'

const mapStateToProps = ({ session, search }) => ({
    currentUser: session.currentUser,
    search: search
});

const mapDispatchToProps = dispatch => ({
    searchQuery: query => dispatch(searchQuery(query))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
