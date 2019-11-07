import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';


class SearchResults extends React.Component {

    constructor(props) {
        super(props);

        this.showResults = this.showResults.bind(this);
    }

    showResults() {
        
        let searchResults = this.props.search;
        let searchResultsDisplay;
        
        if (searchResults == []) {
             searchResultsDisplay = "No videos found";
        } else searchResultsDisplay = Object.keys(searchResults).map(id => {
                let vidResult = searchResults[id];
                let vidId = Object.keys(vidResult);
                let video = vidResult[vidId];
                debugger
                return (
                    <div key={id} className="search-video">
                        <div className='watch-page-main-grid-item'>
                            <Link to={`/watch/${video.id}`} ><img src={video.thumbnail} className="search-page-thumb" alt="Video" /></Link>
                            <h1>{video.title} </h1>
                        </div>
                    </div>
                )
            })
        
        return (
            <div className="search-results">
                {searchResultsDisplay}
            </div>
        )
    }

    render() {
        const videos = this.props.videos;
        return (

            <section className='search-page-main'>
                <div className='search-page-main-header'>Videos</div>
                    <div className="search-results-grid">
                        {this.showResults()};
                    </div>
            </section >
        )
    }
}

export default SearchResults;
