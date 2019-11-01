import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router';
import _ from 'lodash';


class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { search: "" };
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            })
            this.props.searchQuery(e.target.value);
        };
    }

    form() {
        return (
            <form>
                <input type="text"
                    className="search-input"
                    placeholder="Search"
                    value={this.state.search}
                    onInput={this.update("search")}
                    autoFocus
                />
            </form>
        )
    }



    render() {
        return (
            <div>
                <a href="#">Search <i className="fa fa-search" aria-hidden="true"></i></a>

                {this.form()}
            </div>
        )
    }

}

export default SearchForm;
