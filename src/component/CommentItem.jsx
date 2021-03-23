import React from 'react';
import moment from 'moment'


export default function CommentItem(props) {
    //let date = props.commentDate.getDate() + "-"+ parseInt(props.commentDate.getMonth()+1) +"-"+props.commentDate.getFullYear();
    const dateString = props.commentDate;
    const date = moment(dateString)

    return <div>
        <h6>{props.user.firstname + " " + props.user.lastname}<br /> 
            <span style={{fontSize: "14px"}} >{date.format("DD/MM/YYYY")}</span></h6>
        <p>{props.commentContent}</p>
    </div>
}
