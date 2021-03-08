import React, {Component, useEffect, useState} from 'react'


import Context from "./Context";
import axios from "axios";
import _ from 'lodash';



import {generateExercises} from "./Game/Exercises/multiplication";

const MyProvider = (props) => {



        const [exercisesList, setExercisesList] = useState([])
        const [exercise, setExercise] = useState({})

        const [answer, setAnswer] = useState('')
        const [checked, setChecked] = useState(false)

        const handleGenerateExercises = (type,max,i,j)=>{

            switch (type) {
                case 'mnozenie':
                    setExercisesList(generateExercises(max,i,j))
                    break;
            }
        }

        const handleActiveExercise = () => {
            setAnswer('')
            setChecked(false)
            setExercise(_.sample(exercisesList))
        }

        useEffect(()=>{
            handleActiveExercise()
        },[exercisesList])

        useEffect(()=>{
            setChecked(false)
        },[answer])

        return(
            <Context.Provider value={{
                data: {
                    exercise,
                    answer,
                    checked
                },
                methods: {
                    handleGenerateExercises,
                    setAnswer,
                    setChecked,
                    handleActiveExercise,

                },
                constants: {

                }
            }}>
                {props.children}
            </Context.Provider>
        )

}

export default MyProvider;