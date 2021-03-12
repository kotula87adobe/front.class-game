import React from "react";
import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2rem',
    },
    exercise: {
        fontSize: '3rem'
    },
    quest: {
        fontSize: '2rem',
        fontWeight: "bolder"
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