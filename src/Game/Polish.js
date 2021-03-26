import React, {useContext, useEffect} from "react";
import {
    useParams
} from "react-router-dom";

import {Container, Grid, makeStyles} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";

import Context from "../Context";

import Exercise from "./ComponentsPolish/Exercise";
import Buttons from "./ComponentsPolish/Buttons";
import UserList from "./UserList";

const useStyle = makeStyles(theme=>({
    paper: {
        padding: theme.spacing(2)
    },
    empty: {

    },
    correct: {
        backgroundColor: '#0064002e',
        border: '3px solid green'
    },
    wrong: {
        backgroundColor: '#ff787878',
        border: '3px solid red'
    }
}))

const Polish = props =>{

    const classes = useStyle()
    const {paper} = useStyle()

    const {type,max} = useParams()

    const {data} = props
    const {methods} = props
    const {constants} = props


    useEffect(()=>{
        methods.handleGenerateExercises('polski',type, max)
    },[])

    useEffect(()=>{
        methods.setCorrectAnswer(data.exercise?.correctAnswer)
    },[data.exercise])

    return (
        <>
            <CssBaseline/>
            <Container component={'main'} fixed>

                {/*<UserList />*/}

                <Paper
                    className={paper + ' ' + classes[data.answerClass]}
                    variant={"elevation"}
                    elevation={3}
                >
                    <Grid container>
                        <Grid item xs={12}>
                            <Exercise
                                {...data.exercise}
                                answer={data.answer}
                            />
                        </Grid>
                        {data.exercise?.answers && <Grid item xs={12}>
                            <Buttons
                                answers={data.exercise.answers}
                                answer={data.answer}
                                setAnswer={methods.setAnswer}
                                setChecked={methods.setChecked}
                                handleActiveExercise={methods.handleActiveExercise}
                            />
                        </Grid>}
                    </Grid>
                </Paper>
            </Container>
        </>
    )

}

export default Polish;