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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.commentForm = this.commentForm.bind(this);
    }

 
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
            this.props.addComment(comment);
            this.setState({ body: "" });
        } 
    }

    // commentForm() {
    //     // debugger
    //     if (this.props.currentUserId) {
    //         return (
    //             <form onSubmit={this.handleSubmit}>
    //                 <input
    //                     type="textarea"
    //                     value={this.state.body}
    //                     onChange={this.update("body")}
    //                     placeholder="Comment"
    //                     title="Enter your comment here"
    //                     className="comment-forminput" />
    //                 <input type="submit" value={this.props.addComment} className="button-comment">Add Comment</input>
    //             </form>
    //         )
    //     } else {
    //         return (
    //             <div className="comment-form-not-loggedin">
    //                 <h3>You must be logged in to comment.</h3>
    //             </div>
    //         )
    //     }
    // }


    commentForm() {
        // debugger

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
            );
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
