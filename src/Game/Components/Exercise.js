import React from "react";
import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '3rem',
    },
    exercise: {
        fontSize: '20rem'
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