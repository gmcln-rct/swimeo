import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// COMMENT ITEM

class CommentItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const comment = this.props.comment;
        const username = this.props.comment.first_last_name;
        
        return (
            <li className='comment-container-item'>
                <div className="video-comment">
                    <div className="comment-username">{username}</div>

                    <div className="comment-body">
                        {this.props.comment.body}
                    </div>
                </div>
            </li>
        )
        };
}


export default CommentItem;