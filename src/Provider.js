import React, {Component, useEffect, useState} from 'react'


import Context from "./Context";
import axios from "axios";
import _ from 'lodash';



import {mathMultiplicationGenerateExercises} from "./Game/Exercises/mathMultiplication";
import {polishReadingExercises} from "./Game/Exercises/polishReading";

const MyProvider = (props) => {

        const [exercisesList, setExercisesList] = useState([])
        const [exercise, setExercise] = useState({})

        const [answer, setAnswer] = useState('')
        const [checked, setChecked] = useState(false)

        const handleGenerateExercises = (subject,type,max,i=null,j=null)=>{
           switch (subject) {
               case 'matematyka':
                   switch (type) {
                       case 'mnozenie':
                           setExercisesList(mathMultiplicationGenerateExercises(max,i,j))
                           break;
                   }
                   break;
               case 'polski':
                   switch (type) {
                       case 'czytanie':
                           setExercisesList(polishReadingExercises(max))
                           break;
                   }
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