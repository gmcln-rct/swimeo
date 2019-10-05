import React from 'react';

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
                console.log(response)},
            (response) => {
                console.log(response.responseJSON)
            }
        );
    }

    render() {
        console.log(this.state);

        return (
            <div className='video-upload-page-container'>
                <section className='video-upload-container'>
                    <form onSubmit={this.handleSubmit} className="video-upload-form">

                        <div className='upload-header-log'></div>
                        <div className='upload-header'>Choose Video File to Upload</div>
                        <input
                            type="file"
                            onChange={this.handleFile} />
                            <br/>
                        <label>
                            <div className='upload-input-label'>Title</div>
                            
                        <input 
                            type="text"
                            id="video-title"
                            value={this.state.title}
                            onChange={this.handleInput('title')} />
                        </label>

                        <label>
                            <div className='upload-input-label'>Description</div>

                            
                        <textarea
                                id="video-description"
                                value={this.state.description}
                                onChange={this.handleInput('description')} >
                        </textarea>
                        </label>


                        {/* <h3>Thumbnail preview </h3> */}
                        {/* {preview} */}
                        <button onClick={this.props.upload}>Upload Video</button>
                    </form>
                </section>
                <section className="video-upload-left-sidebar">
                    <div className='video-upload-left-sidebar-1'> 
                        <span>Weekly</span>
                        <span>100TB</span>
                    </div>
                    <div className='video-upload-left-sidebar-1'>
                        <span>Weekly</span>
                        <span>100TB</span>
                    </div>

                </section>
            </div>
        );
    }
}

export default VideoUpload;