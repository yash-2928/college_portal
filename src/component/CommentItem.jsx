import React from 'react';
import moment from 'moment'


export default function CommentItem(props) {
    //let date = props.commentDate.getDate() + "-"+ parseInt(props.commentDate.getMonth()+1) +"-"+props.commentDate.getFullYear();
    const dateString = props.commentDate;
    const date = moment(dateString)

    return <div>
        <h5>{props.user.firstname + " " + props.user.lastname}</h5>
        <h6>{date.format("DD/MM/YYYY")}</h6>
        <p>{props.commentContent}</p>
    </div>
}
