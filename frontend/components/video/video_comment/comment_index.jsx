import React from 'react';
import CommentItem from './comment_item_container';
import CommentForm from './comment_form_container';

// COMMENT INDEX COMPONENT

class CommentIndexComponent extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     comments: this.props.comments,
        // };

    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.match.params.id !== this.props.match.params.id) {

    //         this.props.showVideo(this.props.match.params.id);
    //     }
    // }

   

    // HANDLE COMMENT UPDATE
    updateComment(e) {
        const { currentUserId } = this.props;
        if (this.props.comments.includes(currentUserId)) {
            this.props.removeComment(this.props.video.id);
        } else if (currentUserId) {
            this.props.addComment({ user_id: currentUserId, video_id: this.props.video.id });
        }
    }


    render() {
        debugger
        // this.props.comments;
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
                <CommentForm />
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

