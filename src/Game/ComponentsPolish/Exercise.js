import React from "react";
import {makeStyles, Typography} from "@material-ui/core";
import PropTypes from "prop-types";

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
        <div className={root} data-testid="form">
            <Typography className={exercise} component={"h2"} align={"left"}>
                {text}
            </Typography>
            <Typography className={quest} component={"h2"} align={"left"}>
                {question}
            </Typography>
        </div>
    )

}

//TODO napisać jakies testy
// * w zależnosci od propsow czy wyswietla sie to co ma

Exercise.propTypes = {
    answer: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
}

export default Exercise;