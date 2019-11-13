import React from 'react';
import CommentItem from './comment_item_container';
import CommentForm from './comment_form_container';

// COMMENT INDEX COMPONENT

class CommentIndexComponent extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        const numComments = this.props.comments.length;
        const commentHeader = numComments === 1 ? "Comment" : "Comments";
        
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

