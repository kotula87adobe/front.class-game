import React, {useContext, useEffect} from "react";
import {
    useParams
} from "react-router-dom";

import {Container, Grid, makeStyles} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";

import Context from "../Context";

import Exercise from "./ComponentsMath/Exercise";
import Buttons from "./ComponentsMath/Buttons";
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

const Math = props =>{

    const classes = useStyle()
    const {paper} = useStyle()

    const {type,max, i,j} = useParams()
    console.log({j})

    const {data} = props
    const {methods} = props
    const {constants} = props

    const handlePostAnswer = () => {
        methods.postAnswer(`${data.exercise.first} ${data.exercise.sign} ${data.exercise.second} = `)
    }

    useEffect(()=>{
        methods.handleGenerateExercises('matematyka',type,max,i,j)
    },[])

    useEffect(()=>{
        methods.setCorrectAnswer(data.exercise?.result?.toString())
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
                        <Grid item xs={12}>
                            <Buttons
                                numbers={[0,1,2,3,4,5,6,7,8,9]}
                                answer={data.answer}
                                setAnswer={methods.setAnswer}
                                setChecked={methods.setChecked}
                                handlePostAnswer={handlePostAnswer}
                                handleActiveExercise={methods.handleActiveExercise}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    )

}



export default Math;