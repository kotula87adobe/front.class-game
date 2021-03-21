import React, {Component, useEffect, useState} from 'react'

import ReactDOM from "react-dom";
import {
    useParams
} from "react-router-dom";

import Context from "./Context";
import axios from "axios";
import _ from 'lodash';

import {mathMultiplicationGenerateExercises} from "./Game/Exercises/mathMultiplication";
import {polishReadingExercises} from "./Game/Exercises/polishReading";

const MyProvider = (props) => {


        // *** STATE

        // TODO dane zwiazane z rozwiazanie zadania opakowac w jeden state ???
        // ***** Exercise
        const [exercisesList, setExercisesList] = useState([])
        const [exercise, setExercise] = useState({})

        const [answer, setAnswer] = useState('')
        const [correctAnswer, setCorrectAnswer] = useState('')

        const [checked, setChecked] = useState(false)

        // ***** Auth
        const [userId, setUserId] = useState('')
        const [visit, setVisit] = useState('')


        // ***** Router params

        const [routerParams, setRouterParams] = useState({
            userId: '',
            category: '', //TODO np polski, matematyka
            subcategory: '' //TODO np mnozenie, czytanie
        })

        // *************************************************************

        // *** GETTERS

        const isAnswerCorrect = () => {
            return answer !== '' && answer === correctAnswer
        }

        const answerClass = () => {
            if(checked === false){
                return 'empty'
            }
            else if(isAnswerCorrect()){
                return 'correct'
            }
            else{
                return 'wrong'
            }
        }

        // *************************************************************

        // *** METHODS

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

        const postVisit = async () => {
            const {data} = await axios.post('http://localhost:5000/dashboard/visit', {userId})
            setVisit(data.id)
        }

        //TODO dodac dla j.polskiego !!!!!!!!!!!!!
        const postAnswer = async (text) => {
            const {data} = await axios.post('http://localhost:5000/dashboard/answer',{
                category: routerParams.category,
                subcategory: routerParams.subcategory,
                text: text,
                answer: answer,
                isCorrect: isAnswerCorrect(),
                visitId: visit
            })
            console.log(data)
        }

        // *** HOOKS
        // * useEffect
        useEffect(()=>{
            (async ()=>{
                if(userId){
                    await postVisit()
                }
            })()
        },[userId])

        useEffect(()=>{
            if(!userId){
                setUserId(routerParams.userId)
            }
        },[routerParams])

        useEffect(()=>{
            handleActiveExercise()
        },[exercisesList])

        useEffect(()=>{
            setChecked(false)
        },[answer])

        useEffect(()=>{
            if(isAnswerCorrect()) {
                setTimeout(handleActiveExercise,1000)
            }
        },[checked])

    return(
            <Context.Provider value={{
                data: {
                    userId,
                    exercise,
                    correctAnswer,
                    answer,
                    checked,
                    isAnswerCorrect: isAnswerCorrect(),
                    answerClass: answerClass()
                },
                methods: {
                    setUserId,
                    handleGenerateExercises,
                    setCorrectAnswer,
                    setAnswer,
                    setChecked,
                    handleActiveExercise,
                    setRouterParams,
                    postAnswer
                },
                constants: {

                }
            }}>
                {props.children}
            </Context.Provider>
        )

}

export default MyProvider;