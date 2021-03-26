import React from "react";
import {makeStyles, Typography} from "@material-ui/core";

// import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1.5rem',
    },
    exercise: {
        fontSize: '10rem'
    }
}));

const Exercise = ({first,sign,second,result, answer}) => {

    const {root, exercise} = useStyles()

    return (
        <div className={root}>
            <Typography className={exercise} component={"h2"} align={"center"}>
                {first} {sign} {second} = {answer}
            </Typography>
        </div>
    )

}

export default Exercise;