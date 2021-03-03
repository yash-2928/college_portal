import React from 'react'

export default function CommentItem(props) {
    return <div>
        <h5>{props.user.firstname + " " + props.user.lastname}</h5>
        <h6>{props.commentDate}</h6>
        <p>{props.commentContent}</p>
    </div>
}