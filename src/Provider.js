import React, {Component, useEffect, useState} from 'react'

import Context from "./Context";
import axios from "axios";
import _ from 'lodash';

import {multiplication} from "./Game/Exercises/multiplication";

const MyProvider = (props) => {

        const [exercise, setExercise] = useState({})

        const [answer, setAnswer] = useState('')
        const [checked, setChecked] = useState(false)

        const handleActiveExercise = () => {

            setAnswer('')
            setChecked(false)
            setExercise(_.sample(multiplication))
        }

        useEffect(()=>{
            handleActiveExercise()
        },[])

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
                    setAnswer,
                    setChecked,
                    handleActiveExercise
                },
                constants: {

                }
            }}>
                {props.children}
            </Context.Provider>
        )

}

export default MyProvider;