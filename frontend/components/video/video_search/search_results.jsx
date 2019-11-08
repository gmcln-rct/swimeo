import React from 'react';
import ReactDOM from 'react-dom';

import { Fragment } from 'react'
import { Link } from 'react-router-dom';


class SearchResults extends React.Component {

    constructor(props) {
        super(props);

        this.showResults = this.showResults.bind(this);
    }

    // componentDidMount() {
    //     // 
    //     this.props.receiveVideos();
    // }

    showResults() {
        
        let searchResults = this.props.search;
        let searchCount = searchResults.length;
        let searchResultsDisplay;
        debugger
        if (searchResults.length !== 0) {
            searchResultsDisplay = Object.keys(searchResults).map(id => {
                let vidResult = searchResults[id];
                let vidId = Object.keys(vidResult);
                let video = vidResult[vidId];

                return (
                    <div key={id} className='watch-page-main-grid-item'>
                        <Link to={`/watch/${video.id}`} ><img src={video.image_url} className="watch-page-thumb" alt={`${video.title}`} /></Link>
                        <h1>{video.title} </h1>
                    </div>
                )
                })
        } 
        
        let countLanguage = searchCount === 1 ? "result found" : "results found"
        return (
            <div className="watch-main-grid-container">
                <div className="search-grid-header">{searchCount} {countLanguage}</div>
                <br/>
                {searchResultsDisplay}
            </div>
        )
    }


    render() {

        return (

            <div className='watch-page-container'>
                <section className='watch-page-sidebar'>

                    <Link to="/upload" className='nav-upload-button'>
                        Upload
                    </Link>

                    <div className='watch-sidebar-hr'>
                        <hr />
                    </div>

                    <div className='watch-sidebar-list'>

                        <div className='watch-sidebar-list-item'>
                            <svg viewBox="0 0 20 20">
                                <path d="M17 20h-4c-.6 0-1-.4-1-1v-5H8v5c0 .6-.4 1-1 1H3c-1.1 0-2-.9-2-2V8c0-.3.1-.6.3-.8l8-7c.4-.3.9-.3 1.3 0l8 7c.3.2.4.5.4.8v10c0 1.1-.9 2-2 2zm-3-2h3V8.5l-7-6.1-7 6.1V18h3v-5c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v5z"></path>
                            </svg>
                            <div className='watch-sidebar-list-item-text'>
                                Home
                                </div>
                        </div>
                        <div className='watch-sidebar-list-item'>
                            <svg viewBox="0 0 20 20">
                                <path d="M14 2v12H2V2h12m0-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" fill="#1a2e3b"></path>

                                <path d="M5.6 5.51c0-.55.39-.77.86-.5l4.28 2.5a.54.54 0 0 1 0 1l-4.28 2.57c-.47.28-.86.07-.86-.49zM16 20a4 4 0 0 0 4-4V5a2 2 0 0 0-2-2v13a2 2 0 0 1-2 2H3a2 2 0 0 0 2 2z" fill="#192e3b" fillRule="evenodd"></path>
                            </svg>
                            <div className='watch-sidebar-list-item-text'>
                                Videos
                            </div>
                        </div>
                    </div>
                    <div className='watch-sidebar-footer'>
                        <h1>Swimeo Pro</h1>
                        <h3>Powerful privacy options and advanced stats.</h3>
                        <Link to="/plans">
                            <button className='splash-buttons-plan'>Upgrade</button>
                        </Link>
                    </div>
                </section>

                <section className='watch-page-main'>
                    <div className='watch-page-main-header'>Search Results</div>

                    <div className='watch-page-main-grid'>
                        <div className='watch-page-main-grid'>
                            <div className='watch-main-grid-container'>

                                    {this.showResults()}

                            </div>
                        </div>
                    </div>

                </section>

            </div>

        );
    };
};

export default SearchResults;
