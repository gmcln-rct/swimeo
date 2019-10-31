import React from 'react';

// VIDEO COMMENT FORM

class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: "",
            video_id: this.props.video.id,
            user_id: this.props.currentUserId
        };
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.commentForm = this.commentForm.bind(this);
    }

    // componentDidUpdate(prevProps, prevState) {
    //     debugger
    //     if (prevState.comment.body !== this.state.comment.body)

    // }


    update(field) {
        return (e) => {
            this.setState({[field]: e.currentTarget.value});
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        let comment = { user_id: '', video_id: '', body: ''};
        if (this.props.currentUserId) {
            comment.user_id = this.props.currentUserId;
            comment.video_id = this.props.video.id;
            comment.body = this.state.body;
            this.props.addComment(comment)
            .then(this.setState({ body: "" }));
        } 
    }

    commentForm() {
        // debugger
        if (this.props.currentUserId) {
            return (
                <form onSubmit={this.handleSubmit}>
                    <input type="textarea"
                        value={this.state.body}
                        onChange={this.update('body')}
                        className="comment-input"
                        placeholder="Add comment"
                        title="Please enter a password"
                    />
                    <br />

                    <button onClick={this.props.addComment()} className="button-comment" >Add Comment</button>
                </form>
            )
        } else {
            return (
                <div className="comment-input-not-loggedin">
                    You must be logged in to comment.
                </div>
            )
        }
    }

    render() {
        return (
            <div className="comment-form-container">
                <h3>Add a new comment</h3>
                    {this.commentForm()}
            </div>
        )
    };
}

export default CommentForm;
