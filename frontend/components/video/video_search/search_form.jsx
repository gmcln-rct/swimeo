import React from 'react';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { query: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        
    }

    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({ query: '' });
        
        if (this.state.query && this.state.query.length > 0) {
            this.props.searchVideos(this.state.query).then(() => {
            debugger
            this.props.history.push('/search');
        })
        }
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }
    
    render() {
        return (
            <form className='search-bar' onSubmit={this.handleSubmit}>
                <div className='search-bar-inner'>
                    <input className='search-input' 
                        type="text" 
                        onChange={this.update('query')} 
                        value={this.state.query}
                        placeholder='Search videos, fish and more' />
                    <button className='search-button' type="submit">
                        <FontAwesomeIcon icon="search" />
                    </button>
                </div>
            </form>
        )
    }
}

export default SearchForm;
