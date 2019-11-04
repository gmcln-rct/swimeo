import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';


class SearchResults extends React.Component {

    constructor(props) {
        super(props);

    }


    searchResults() {
        let search = this.props.search;
        if (_.isEmpty(search) || this.state.search == "") {
            return <h3>No videos found</h3>
        }
        return (
            <div className="search-results">
                {Object.keys(search).map(id => {
                    let video = search[id];

                    return (
                        <div key={id} className="search-video">
                            <Link to={`/videos/${video.id}`} onClick={this.closeModal}>
                                <div className="search-image" style={divStyle}></div>
                            </Link>
                            <h4>{video.title}</h4>
                        </div>
                    )
                })}
            </div>
        )
    }

    render() {
        const videos = this.props.videos;
        return (

            <section className='search-page-main'>
                <div className='search-page-main-header'>Videos</div>
                    <div className="search-results-grid">
                        {Object.keys(videos).map(id => {
                            let video = videos[id];

                            return (
                                <Link key={id} to={`/videos/${video.id}`} className="video-square">
                                    <div className="video-thumb" style={divStyle}></div>
                                    <div className="info-overlay">
                                        <p><i className="fa fa-heart" aria-hidden="true"></i>
                                            {video.likes}</p>
                                        <h5>{video.title}</h5>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>

)
            </section >

    }
}


export default SearchResults;
