import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class VideoUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            creator_id: null,
            video_url: null,
            videoFile: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ videoFile: file, video_url: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);

        if (this.state.videoFile) {
            formData.append('video[video_url]', this.state.videoFile);
        }
        
        debugger
        $.ajax({
            url: '/api/videos',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        }).then(
            (response) => {
                debugger
                console.log(response);
                this.props.history.push('/watch')
            },
            (response) => {
                console.log(response.responseJSON)
            }
        );
    }

    render() {
        console.log(this.state);

        return (
            <div className='video-upload-page-container'>
                <section className='video-upload-section'>
                    <div className='video-upload-container'>
                        <form onSubmit={this.handleSubmit} className="video-upload-form">

                            <div className='upload-header-logo'>
                                <img src="https://swimeo-seeds.s3.amazonaws.com/video-upload.png" alt="Upload video"/>
                            </div>
                            <div className='upload-header'>Choose Video File to Upload</div>
                            <br/>
                            
                            <input
                                type="file"
                                className='upload-choose-file-button-faux'
                                onChange={this.handleFile} />

                            {/* FAUX UPLOAD
                            <button className='upload-choose-file-button-faux'>
                                <span> <FontAwesomeIcon icon="cloud-upload-alt" style={{ color: 'white' }} /></span>

                                <span> Or choose files</span>
                            </button> */}

                            <br/>
                            <label className='upload-input-label'>
                                Title                         
                                <input 
                                    type="text"
                                    className="video-title"
                                    value={this.state.title}
                                    onChange={this.handleInput('title')}
                                    className='upload-input-label'
                                    placeholder="Enter video title"
                                    title="Please enter a video title"/>

                            {/* <input 
                                type="text"
                                id="video-title"
                                value={this.state.title}
                                onChange={this.handleInput('title')} /> */}

                            </label>
                            <br/>
                            <label className='upload-input-label'>
                                Description
                                <textarea
                                        id="video-description"
                                        value={this.state.description}
                                        placeholder="Enter video description"
                                        title="Please enter a video description."
                                        onChange={this.handleInput('description')} 
                                        >
                                </textarea>
                            </label>


                            {/* <h3>Thumbnail preview </h3> */}
                            {/* {preview} */}
                            <button onClick={this.props.upload} className='upload-form-upload-button'>Upload Video</button>
                        </form>
                    </div>
                    <div className='video-upload-form-footer'>Learn more about swimming in the Swimeo Rules, Pool Guidelines, and Help Center.</div>
                </section>

                <section className="video-upload-sidebar">
                    <div className='video-upload-sidebar-container'>
                        <div className='video-upload-right-sidebar-headbar'></div>
                        <div className='video-upload-right-sidebar-headbar-overlay'></div>
                        <br/>
                        <div className='video-upload-right-sidebar-1'> 
                            <p>Weekly Limit</p>
                            <p>5MB of 100TB</p>
                        </div>
                        <br/>
                        <div className='video-upload-right-sidebar-1'>
                            <span>Total Limit</span>
                            <span>1.4GB of 100PB</span>
                        </div>
                        <br/>
                        <div className='video-upload-right-sidebar-1'>
                            <span>Upgrade for up to 1,000,000 PB</span>
                        </div>
                        <br/>
                        <div className='video-upload-right-sidebar-subheader'>
                            <span>Other ways to upload</span>
                        </div>
                        <br />


                        <div className='video-upload-right-sidebar-buttons'>

                            <button className='video-upload-fake-button'>
                                <span><FontAwesomeIcon icon={['fab', 'dropbox']} style={{ color: 'black' }} /> DropBait</span>
                            </button>
                            <button className='video-upload-fake-button'>
                                <span><FontAwesomeIcon icon={['fab', 'google-drive']} style={{ color: 'black' }} /> GoogleDried</span>
                            </button>
                            {/* <button className='video-upload-fake-button'>GoogleDrop</button> */}
                            <button className='video-upload-fake-button'>And More</button>

                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default VideoUpload;