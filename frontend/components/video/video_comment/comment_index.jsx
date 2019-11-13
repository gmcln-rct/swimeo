import React from 'react';
import CommentItem from './comment_item_container';
import CommentForm from './comment_form_container';

// COMMENT INDEX COMPONENT

class CommentIndexComponent extends React.Component {
    constructor(props) {
        super(props);

        // this.addComment = this.addComment.bind(this);
        // this.deleteComment = this.deleteComment.bind(this);

    }


    // HANDLE COMMENT UPDATE
    // updateComment(e) {
    //     const { currentUserId } = this.props;
    //     if (this.props.comments.includes(currentUserId)) {
    //         this.props.deleteComment(this.props.video.id);
    //     } else if (currentUserId) {
    //         this.props.addComment({ user_id: currentUserId, video_id: this.props.video.id });
    //     }
    // }


    render() {
        // this.props.comments;
        const numComments = this.props.comments.length;
        const commentHeader = numComments === 1 ? "Comment" : "Comments";
        debugger
        return (
            <div className="video-comments-container">
                <div className="commments-header">
                    {numComments} {commentHeader}
                </div>
                <ul className='comments-index'>
                    {this.props.comments.map((comment, idx) => (
                        <CommentItem
                            comment={comment}
                            deleteComment={this.props.deleteComment}
                            currentUser={this.props.currentUser} 
                            key={idx}
                        />
                    ))
                    }
                </ul>
                <CommentForm />
            </div>
        )

    }
};

export default CommentIndexComponent;

