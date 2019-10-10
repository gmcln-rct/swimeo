import React from 'react';
import CommentItem from './comment_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// COMMENT INDEX COMPONENT

class CommentIndexComponent extends React.Component {
    constructor(props) {
        super(props);

    }
    updateComment(e) {
        const { currentUserId } = this.props;
        if (this.props.comments.includes(currentUserId)) {
            this.props.removeComment(this.props.video.id);
        } else if (currentUserId) {
            this.props.addComment({ user_id: currentUserId, video_id: this.props.video.id });
        }
    }


    render() {
        this.props.comments
        const numComments = this.props.comments.length;
        const commentHeader = numComments === 1 ? "Comment" : "Comments";
        return (
            <div className="video-comments-container">
                <div className="commments-header">
                    {numComments} {commentHeader}
                </div>
                <ul className='comments-index'>
                    {this.props.comments.map((comment) => (
                        <CommentItem
                            comment={comment}
                            key={`comment.${comment.id}`}
                        />
                    ))
                    }
                </ul>
            </div>
        )

        // return (
        //     <div className="video-comments-container">
        //         <div className="commments-header">
        //             {numComments} {commentHeader}
        //         </div>
        //         <div className="comments-group">
        //             {this.renderComments()}
        //             {/* Add Comment Form Here */}
        //         </div>
        //         <div>
        //                 <br/>
        //         </div>
        //     </div>
        // )
    }

};


export default CommentIndexComponent;

