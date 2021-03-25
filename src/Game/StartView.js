import React, {useContext} from "react";

import {
    Link, useParams
} from "react-router-dom";

import {Grid} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

import ReadingLinkCard from "./ComponentsStartView/ReadingLinkCard";
import MultiplicationLinkCard from "./ComponentsStartView/MultiplicationLinkCard";
import Context from "../Context";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const StartView = () =>{

    const {root} = useStyles();

    const ContextData = useContext(Context)

    // *** ROUTER PARAMS
    const {user} = useParams();
    // ***

    console.log('111111111111111111111111111111111111111')

    return (
        <Grid className={root} container alignItems={"center"} justify={"center"} spacing={1}>
            <MultiplicationLinkCard userId={ContextData.data.userId} />
            <ReadingLinkCard userId={ContextData.data.userId} />
            {/*<ReadingLinkCard path={''} />*/}
        </Grid>
    )

}

export default StartView;