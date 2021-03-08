import { IconButton } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import React from 'react'

export default function User(props) {

    const handleDelete = (userId) => {
        const confirmed = window.confirm("Do you want to delete this user?")
        if (confirmed) {
            props.deleteUser(userId);
        }
    }

    return <tr>
        <td>{props.id}</td>
        <td>{props.firstname} {props.lastname}</td>
        <td>{props.enrollmentNo}</td>
        <td>{props.email}</td>
        <td><IconButton onClick={() => handleDelete(props.id)}><Delete /></IconButton></td>
    </tr>
}