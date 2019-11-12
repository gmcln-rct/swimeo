import React from 'react';


// COMMENT ITEM

class CommentItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }


    handleDelete() {
        this.props.deleteComment(this.props.comment.id);
    }


    render() {
        const comment = this.props.comment;
        const username = this.props.comment.first_last_name;
        let deleteButton;
        debugger
        if (this.props.currentUserId) {
            if (this.props.currentUserId === this.props.comment.user_id) {
                deleteButton = <button className='comment-delete-button' 
                onClick={this.handleDelete}>
                Delete
                </button>
            }
        }
        
        return (
            <li className='comment-container-item'>
                <div className="video-comment">
                    <div className="comment-item-header">
                        <div className="comment-username">{username}</div>
                        {deleteButton}
                    </div>
                    <div className="comment-body">
                        {this.props.comment.body}
                    </div>
                </div>
            </li>
        )
        };
}


export default CommentItem;