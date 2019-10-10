import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class VideoCommentComponent extends React.Component {
    constructor(props) {
        super(props);

        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.updateComment = this.updateComment.bind(this);
    }


    // update(field) {
    //     return e => this.setState({
    //         [field]: e.currentTarget.value
    //     });
    // }

    updateComment(e) {
        const { currentUserId } = this.props;
        if (this.props.comments.includes(currentUserId)) {
            this.props.removeComment(this.props.video.id);
        } else if (currentUserId) {
            this.props.addComment({ user_id: currentUserId, video_id: this.props.video.id });
        }
    }

    renderComments() {
        const comments = this.props.comments; 
        if (this.props.comments.length) {
            
            return (
                comments.map( (comment, idx) => (
                    <div key={idx} className="video-comment">
                      {/* Need Username */}
                        <div className="comment-body">
                            {comment.body}
                        </div> 
                    </div>
                ))
            )
        }
    }

    render() {
        const numComments = this.props.comments.length;
        const commentHeader = numComments === 1 ? "Comment" : "Comments"
        return (
            <div className="video-comments-container">
                <div className="commments-header">
                    {numComments} {commentHeader}
                </div>
                <div className="comments-group">
                    {this.renderComments()}
                    {/* Add Comment Form Here */}
                </div>
                <div>
                        <br/>
                </div>
            </div>
        )
    }

};


export default VideoCommentComponent;

