import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import BackspaceIcon from '@material-ui/icons/Backspace';
import CachedIcon from '@material-ui/icons/Cached';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    button: {
        fontSize: '2.5rem',
        minWidth: '2rem',
        padding: '1rem',
        '& span': {
            lineHeight: 1
        }
    },
    icon: {
        fontSize: '5rem'
    },
    refresh: {
        position: "absolute",
        right: '10%',
        bottom: '10%',
        zIndex: 10,
        '& svg': {
            fontSize: '8rem',
        },
    }
}));

const Buttons = ({numbers,answer, setAnswer, setChecked, handleActiveExercise, handlePostAnswer})=>{

    const {root, button, icon, refresh} = useStyles()

    const handleAnswerButtonsClick = (val) =>{

        if(answer.toString().length >= 3) return

        setAnswer(answer + val)
    }

    const handleCheckButton = () =>{
            setChecked(true)
            handlePostAnswer()
    }
    const handleClearButton = () =>{
        setChecked(false)
        setAnswer('')
    }

    const buttons = numbers.map((val,i)=><Button className={button} key={i} onClick={()=>{handleAnswerButtonsClick(val)}}>{val}</Button>)

    return (
        <div className={root}>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                {buttons}
            </ButtonGroup>
            <ButtonGroup  variant="text">
                <Button onClick={handleCheckButton}>
                    <CheckCircleIcon style={{color: 'darkgreen'}} className={icon} />
                </Button>
                <Button onClick={handleClearButton}>
                    <BackspaceIcon style={{color: 'red'}} className={icon} />
                </Button>
            </ButtonGroup>

            <Button className={refresh} onClick={handleActiveExercise}>
                <CachedIcon color={"primary"}/>
            </Button>

        </div>
    )

}

export default Buttons;