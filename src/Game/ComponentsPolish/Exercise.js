import React from "react";
import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '3rem',
    },
    exercise: {
        fontSize: '4rem'
    },
    quest: {
        fontSize: '3rem'
    },
}));

const Exercise = ({text,question,answers,correctAnswer}) => {

    const {root, exercise, quest} = useStyles()

    return (
        <div className={root}>
            <Typography className={exercise} component={"h2"} align={"left"}>
                {text}
            </Typography>
            <Typography className={quest} component={"h2"} align={"left"}>
                {question}
            </Typography>
        </div>
    )

}

export default Exercise;