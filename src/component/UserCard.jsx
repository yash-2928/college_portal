import { Avatar, makeStyles, Paper, Typography } from '@material-ui/core'
import UserLogo from "../images/flowers.jpeg"
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "20px",
        position: "relative"
    },
    settings: {
        position: "absolute",
        top: "12px",
        right: "12px"
    },
    avatarDiv: {
        display: 'flex',
        '& > *': {
            margin: "20px auto",
        },
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10)
    }
}))

export default function UserCard(props) {
    const classes = useStyles()

    return <Paper elevation={3} className={classes.root}>
        <span className={classes.settings}>Options</span>
        <div className={classes.avatarDiv}>
            <Avatar alt="profile image" src={props.fileUrl || UserLogo} className={classes.large} />
        </div>
        <div>
            <Typography align="center" variant={"h5"} gutterBottom>
                {props.firstname} {props.lastname}
            </Typography>
        </div>
    </Paper>
}