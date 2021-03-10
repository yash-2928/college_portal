import React from 'react'

export default function CommentItem(props) {
    let date = props.commentDate.getDate() + "-"+ parseInt(props.commentDate.getMonth()+1) +"-"+props.commentDate.getFullYear();

    return <div>
        <h5>{props.user.firstname + " " + props.user.lastname}</h5>
        <h6>{date}</h6>
        <p>{props.commentContent}</p>
    </div>
}
