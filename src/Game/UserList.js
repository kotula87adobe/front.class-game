import React from "react";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import PersonIcon from '@material-ui/icons/Person';
import FaceIcon from '@material-ui/icons/Face';
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles(theme=>({
    root: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem',

    },
    card: {
        textAlign: 'center'
    },
    avatar: {
        fontSize: '5rem'
    }
}))

const users = [
    {
        number: 1,
        initials: 'A.K.',
        points: 1
    },
    {
        number: 2,
        initials: 'L.G.',
        points: 3
    },
    {
        number: 3,
        initials: 'A.T.',
        points: 5
    }
]


const UserList = () => {

    const {root, card, avatar} = useStyles()


    const userCards = users.map(({number,initials,points})=>(
        <Card variant="outlined" className={card}>
            <CardContent>
                <FaceIcon className={avatar} />
                <Typography>
                    {number}
                </Typography>
                <Typography>
                    {initials}
                </Typography>
                <Rating name="read-only" value={points} readOnly />
            </CardContent>
        </Card>
    ))

    return(
        <div className={root}>

            {userCards}

        </div>
    )

}

export default UserList;