import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class VideoCommentComponent extends React.Component {
    constructor(props) {
        super(props);

        this.updateComment = this.updateComment.bind(this);
    }


  
    updateComment(e) {
        const { currentUserId } = this.props;
        if (this.props.comments.includes(currentUserId)) {
            this.props.removeComment(this.props.video.id);
        } else if (currentUserId) {
            this.props.addComment({ user_id: currentUserId, video_id: this.props.video.id });
        }
    }

    renderComments() {
        const comments = this.props.video.comments;
        if (comments && comments.length > 0) {
            return (
                comments.map(comment => (
                    <div key={comment.id} className="comment">
                        <h5>
                            <span className="author">
                                {comment.username}
                            </span> - <Ago date={comment.date} />
                        </h5>
                        {this.deleteButton(comment)}
                        <p>{comment.body}</p>
                    </div>
                ))
            )
        }
    }


    render() {

        const commentButtonClass = this.props.isCommentd ? 'button-commented' : 'button-not-commented';


        return (
            <div className={commentButtonClass}
                onClick={this.updateComment} >
                <FontAwesomeIcon icon="heart" /> {this.props.comments.length}
            </div>
        );
    }

};


export default VideoCommentComponent;

