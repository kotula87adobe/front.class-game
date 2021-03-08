import React, {useContext, useEffect} from "react";
import {
    useParams
} from "react-router-dom";

import {Container, Grid, makeStyles} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";

import Context from "../Context";

import Exercise from "./Components/Exercise";
import Buttons from "./Components/Buttons";
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

const Game = () =>{

    const classes = useStyle()
    const {paper} = useStyle()

    const ContextData = useContext(Context)

    const {type,max, i,j} = useParams()
    console.log({j})

    const {data} = ContextData
    const {methods} = ContextData


    const answerClass = () =>{

        if(data.answer === '' || data.checked===false){
            return 'empty'
        }
        else if(data.answer === data.exercise.result.toString()){
            return 'correct'
        }
        else{
            return 'wrong'
        }

    }

    useEffect(()=>{
        methods.handleGenerateExercises(type,max,i,j)
    },[])

    return (
        <>
            <CssBaseline/>
            <Container component={'main'} fixed>

                <UserList />

                <Paper
                    className={paper + ' ' + classes[answerClass()]}
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
                                handleActiveExercise={methods.handleActiveExercise}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    )

}

export default Game;