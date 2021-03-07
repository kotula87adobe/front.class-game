import React, {Component, useEffect, useState} from 'react'

import Context from "./Context";
import axios from "axios";
import _ from 'lodash';

const exercisesList = [
    {
        first: 3,
        sign: '·',
        second: 4,
        result: 12
    },
    {
        first: 2,
        sign: '·',
        second: 9,
        result: 18
    },
    {
        first: 3,
        sign: '·',
        second: 7,
        result: 21
    },
    {
        first: 5,
        sign: '·',
        second: 8,
        result: 40
    },
]

const MyProvider = (props) => {

        const [exercise, setExercise] = useState({})

        const [answer, setAnswer] = useState('')
        const [checked, setChecked] = useState(false)

        const handleActiveExercise = () => {

            setAnswer('')
            setChecked(false)
            setExercise(_.sample(exercisesList))
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