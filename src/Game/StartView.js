import React from "react";

import {
    Link
} from "react-router-dom";

import {Grid} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

import ReadingLinkCard from "./ComponentsStartView/ReadingLinkCard";
import MultiplicationLinkCard from "./ComponentsStartView/MultiplicationLinkCard";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const StartView = () =>{

    const {root} = useStyles();

    return (
        <Grid className={root} container alignItems={"center"} justify={"center"} spacing={1}>
            <MultiplicationLinkCard />
            <ReadingLinkCard />
            {/*<ReadingLinkCard path={''} />*/}
        </Grid>
    )

}

export default StartView;